import { UserRepository } from '../models/UserRepository.ts';

export class UserController {
    
    userRepository : UserRepository;
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    getUserById = async (req : any, res : any) => {
        try {
            const userId = req.params.id;
            this.userRepository.getUserById(userId).then((user) => {
                const result = {
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    // password: user.getPassword(), // XD
                    permissions: user.getPermissions(),
                    points: user.getPoints()
                };
                res.json(result);
            }).catch((err) => {
                res.status(500).json({ error: err.message });
            });

        } catch (err : any) {
            res.status(500).json({ error: err.message });
        }
    }

}
