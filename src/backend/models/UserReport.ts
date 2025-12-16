export class UserReport {
    id: number;
    userId: number;
    date: string;
    userStrengths: string;
    userWeaknesses: string;
    userSuggestedExercises: string;

    constructor(id: number, userId: number, date: string, userStrengths: string, userWeaknesses: string, userSuggestedExercises: string) {
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.userStrengths = userStrengths;
        this.userWeaknesses = userWeaknesses;
        this.userSuggestedExercises = userSuggestedExercises;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getUserId(): number {
        return this.userId;
    }

    setUserId(userId: number): void {
        this.userId = userId;
    }

    getDate(): string {
        return this.date;
    }

    setDate(date: string): void {
        this.date = date;
    }

    getUserStrengths(): string {
        return this.userStrengths;
    }

    setUserStrengths(userStrengths: string): void {
        this.userStrengths = userStrengths;
    }

    getUserWeaknesses(): string {
        return this.userWeaknesses;
    }

    setUserWeaknesses(userWeaknesses: string): void {
        this.userWeaknesses = userWeaknesses;
    }

    getUserSuggestedExercises(): string {
        return this.userSuggestedExercises;
    }

    setUserSuggestedExercises(userSuggestedExercises: string): void {
        this.userSuggestedExercises = userSuggestedExercises;
    }

}