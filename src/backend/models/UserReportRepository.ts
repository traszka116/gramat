import { Database } from "./Database.ts";
import { UserReport } from './UserReport.ts';

export class UserReportRepository {

    db : Database;

    constructor(db: Database) {
        this.db = db;
    }

    async getUserReport(userReportId : number) : Promise<UserReport> {

        try {
            const rows: any[] = await new Promise<any[]>((resolve, reject) => {
                if (this.db.dbObj === null) {
                    throw new Error('Database not connected');
                }
                this.db.dbObj.all('SELECT * FROM user_reports WHERE user_report_id = ?', [userReportId], (err, rows) => {
                    if (err) { reject(err); }
                    else { resolve(rows); }
                });
            });

            if (!rows || rows.length === 0) {
                throw new Error(`UserReport ${userReportId} not found`);
            }

            const r = rows[0];
            const userReport = new UserReport(
                r.user_report_id,
                r.user_id,
                r.date,
                r.user_strengths,
                r.user_weaknesses,
                r.user_suggested_exercises
            );
            return userReport;
        } catch (err: any) {
            throw new Error(`Error fetching user report: ${err}`);
        }
    }
}