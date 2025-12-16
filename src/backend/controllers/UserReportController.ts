import { UserReportRepository } from '../models/UserReportRepository.ts';

export class UserReportController {
    
    userReportRepository : UserReportRepository;
    constructor(userReportRepository: UserReportRepository) {
        this.userReportRepository = userReportRepository;
    }

    getUserReportById = async (req : any, res : any) => {
        try {
            const userReportId = req.params.id;
            this.userReportRepository.getUserReport(userReportId).then((userReport) => {
                const result = {
                    id: userReport.getId(),
                    userId: userReport.getUserId(),
                    date: userReport.getDate(),
                    userStrengths: userReport.getUserStrengths(),
                    userWeaknesses: userReport.getUserWeaknesses(),
                    userSuggestedExercises: userReport.getUserSuggestedExercises()
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
