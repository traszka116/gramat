import { Database } from "./Database.ts";
import { User } from './User.ts';

export class UserRepository {

    db : Database;

    constructor(db: Database) {
        this.db = db;
    }

    async getUserById(userId : number) : Promise<User> {

        try {
            const rows: any[] = await new Promise<any[]>((resolve, reject) => {
                if (this.db.dbObj === null) {
                    throw new Error('Database not connected');
                }
                this.db.dbObj.all('SELECT * FROM users WHERE user_id = ?', [userId], (err, rows) => {
                    if (err) { reject(err); }
                    else { resolve(rows); }
                });
            });

            if (!rows || rows.length === 0) {
                throw new Error(`User ${userId} not found`);
            }

            const r = rows[0];
            const user = new User(
                r.user_id,
                r.user_name,
                r.user_email,
                r.user_password,
                r.user_permissions,
                r.user_points
            );
            return user;
        } catch (err: any) {
            throw new Error(`Error fetching user: ${err}`);
        }
    }
}