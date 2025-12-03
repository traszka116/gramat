import {Database} from "./Database.ts";
import { Exercise } from './Exercise.ts';
import { Lesson } from './Lesson.ts';


export class LessonRepository {

    db : Database;

    constructor(db: Database) {
        this.db = db;
    }

    async getLesson(lessonId : number) : Promise<Lesson> {
        try {
            const lessonRows = await new Promise<any[]>((resolve, reject) => {
                if (this.db.dbObj === null) {
                    throw new Error('Database not connected');
                }
                this.db.dbObj.all(`SELECT * FROM lessons WHERE lesson_id = ?`, [lessonId], (err, rows) => {
                    if (err) { reject(err) }
                    else { resolve(rows) };
                });
            });

            const lesson = new Lesson(lessonRows[0].lesson_id, lessonRows[0].lesson_name, lessonRows[0].chapter_id, []);

            const exerciseRows = await new Promise<any[]>((resolve, reject) => {
                if (this.db.dbObj === null) {
                    throw new Error('Database not connected');
                }
                this.db.dbObj.all(`SELECT * FROM exercises WHERE lesson_id = ?`, [lessonId], (err, rows) => {
                    if (err) { reject(err) }
                    else { resolve(rows) };
                });
            });

            const exercises: Array<Exercise> = [];
            exerciseRows.forEach((row) => {
                const exercise = new Exercise(row._exercise_id, row.lesson_id, row.difficulty_id, row.random_values_conditions, row.exercise_question, row.exercise_properties, row.exercise_answer);
                exercises.push(exercise);
            });
            lesson.exercises = exercises;
            return lesson;
        } catch (err) {
            throw new Error(`Error fetching lesson: ${err}`);
        }
    }


    async getRandomLesson() : Promise<Lesson> {
        try {
            const lessonRows = await new Promise<any[]>((resolve, reject) => {
                if (this.db.dbObj === null) {
                    throw new Error('Database not connected');
                }
                this.db.dbObj.all(`SELECT * FROM lessons ORDER BY RANDOM() LIMIT 1`, [], (err, rows) => {
                    if (err) { reject(err) }
                    else { resolve(rows) };
                });
            });

            const lesson = new Lesson(lessonRows[0].lesson_id, lessonRows[0].lesson_name, lessonRows[0].chapter_id, []);

            const exerciseRows = await new Promise<any[]>((resolve, reject) => {
                if (this.db.dbObj === null) {
                    throw new Error('Database not connected');
                }
                this.db.dbObj.all(`SELECT * FROM exercises WHERE lesson_id = ?`, [lesson.getId()], (err, rows) => {
                    if (err) { reject(err) }
                    else { resolve(rows) };
                });
            });

            const exercises: Array<Exercise> = [];
            exerciseRows.forEach((row) => {
                const exercise = new Exercise(row._exercise_id, row.lesson_id, row.difficulty_id, row.random_values_conditions, row.exercise_question, row.exercise_properties, row.exercise_answer);
                exercises.push(exercise);
            });
            lesson.exercises = exercises;
            return lesson;
        } catch (err) {
            throw new Error(`Error fetching lesson: ${err}`);
        }
    }

    async getLessonList() : Promise<Array<Lesson>> {
        try {
            const lessonList = await new Promise<any[]>((resolve, reject) => {
                if (this.db.dbObj === null) {
                    throw new Error('Database not connected');
                }
                this.db.dbObj.all(`SELECT * FROM lessons`, [], (err, rows) => {
                    if (err) { reject(err) }
                    else { resolve(rows) };
                });
            });

            const lessons: Array<Lesson> = [];
            lessonList.forEach((row) => {
                const lesson = new Lesson(row.lesson_id, row.lesson_name, row.chapter_id, []);
                lessons.push(lesson);
            });

            return lessons;
        } catch (err) {
            throw new Error(`Error fetching lesson: ${err}`);
        }
    }
}