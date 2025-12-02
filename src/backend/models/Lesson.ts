import { Exercise } from './Exercise.ts';

export class Lesson {
    id: number;
    name: string;
    chapterId: number;
    exercises: Array<Exercise>;

    constructor(id: number, name: string, chapterId: number, exercises: Array<Exercise>) {
        this.id = id;
        this.name = name;
        this.chapterId = chapterId;
        this.exercises = exercises;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getChapterId(): number {
        return this.chapterId;
    }
    
    setChapterId(chapterId: number): void {
        this.chapterId = chapterId;
    }

    getExercises(): Array<Exercise> {
        return this.exercises;
    }

    setExercises(exercises: Array<Exercise>): void {
        this.exercises = exercises;
    }

}