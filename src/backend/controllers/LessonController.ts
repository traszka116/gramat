import { LessonRepository } from '../models/LessonRepository.ts';

export class LessonController {
    
    lessonRepository : LessonRepository;

    constructor(lessonRepository: LessonRepository) {
        this.lessonRepository = lessonRepository;
    }

    getLessonById = async (req : any, res : any) => {
        try {
            const lessonId = req.params.id;
            this.lessonRepository.getLesson(lessonId).then((lesson) => {
            const result = {
                id: lesson.id,
                name: lesson.name,
                chapterId: lesson.chapterId,
                exercises: lesson.exercises.map(lesson => ({
                    id: lesson.id,
                    lessonId: lesson.lessonId,
                    difficultyId: lesson.difficultyId,
                    questionTypeId: lesson.questionTypeId,
                    answerTypeId: lesson.answerTypeId,
                    exerciseQuestion: lesson.exerciseQuestion,
                    exerciseAttachments: lesson.exerciseAttachments,
                    exerciseAnswer: lesson.exerciseAnswer
                }))
            };
            res.json(result);
            }).catch((err) => {
                res.status(500).json({ error: err.message });
            });

        } catch (err : any) {
            res.status(500).json({ error: err.message });
        }
    }

    getLessonRandom = async (req : any, res : any) => {
        try {
            this.lessonRepository.getRandomLesson().then((lesson) => {
            const result = {
                id: lesson.id,
                name: lesson.name,
                chapterId: lesson.chapterId,
                exercises: lesson.exercises.map(lesson => ({
                    id: lesson.id,
                    lessonId: lesson.lessonId,
                    difficultyId: lesson.difficultyId,
                    questionTypeId: lesson.questionTypeId,
                    answerTypeId: lesson.answerTypeId,
                    exerciseQuestion: lesson.exerciseQuestion,
                    exerciseAttachments: lesson.exerciseAttachments,
                    exerciseAnswer: lesson.exerciseAnswer
                }))
            };
            res.json(result);
            }).catch((err) => {
                res.status(500).json({ error: err.message });
            });

        } catch (err : any) {
            res.status(500).json({ error: err.message });
        }
    }

    getLessonList = async (req : any, res : any) => {
        try {
            this.lessonRepository.getLessonList().then((lessons) => {
            const result = lessons.map(lesson => ({
                    id: lesson.id,
                    name: lesson.name,
                    chapterId: lesson.chapterId,
            }));
            res.json(result);
            }).catch((err) => {
                res.status(500).json({ error: err.message });
            });

        } catch (err : any) {
            res.status(500).json({ error: err.message });
        }
    }
}
