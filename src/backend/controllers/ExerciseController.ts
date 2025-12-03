import { ExerciseRepository } from '../models/ExerciseRepository.ts';

export class ExerciseController {
    
    exerciseRepository : ExerciseRepository;

    constructor(exerciseRepository: ExerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    getExerciseById = async (req : any, res : any) => {
        try {
            const exerciseId = req.params.id;
            this.exerciseRepository.getExercise(exerciseId).then((exercise) => {
                const result = {
                    id: exercise.id,
                    lessonId: exercise.lessonId,
                    difficultyId: exercise.difficultyId,
                    exerciseQuestion: exercise.exerciseQuestion,
                    exerciseProperties: exercise.exerciseProperties,
                    exerciseAnswer: exercise.exerciseAnswer
                };
                res.json(result);
            }).catch((err) => {
                res.status(500).json({ error: err.message });
            });

        } catch (err : any) {
            res.status(500).json({ error: err.message });
        }
    }

    getExerciseRandom = async (req : any, res : any) => {
        try {
            this.exerciseRepository.getRandomExercise().then((exercise) => {
                const result = {
                    id: exercise.id,
                    lessonId: exercise.lessonId,
                    difficultyId: exercise.difficultyId,
                    exerciseQuestion: exercise.exerciseQuestion,
                    exerciseProperties: exercise.exerciseProperties,
                    exerciseAnswer: exercise.exerciseAnswer
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
