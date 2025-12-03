export class Exercise {
    id: number;
    lessonId: number;
    difficultyId: number;
    randomValuesConditions: string | null;
    exerciseQuestion: string;
    exerciseProperties: string | null;
    exerciseAnswer: string | null;

    constructor(id: number, lessonId: number, difficultyId: number, randomValuesConditions: string | null, exerciseQuestion: string, exerciseProperties : string | null, exerciseAnswer: string | null) {
        this.id = id;
        this.lessonId = lessonId;
        this.difficultyId = difficultyId;
        this.randomValuesConditions = randomValuesConditions;
        this.exerciseQuestion = exerciseQuestion;
        this.exerciseProperties = exerciseProperties;
        this.exerciseAnswer = exerciseAnswer;
        if (this.randomValuesConditions != null) {
            this.prepareRandomValuesExercise();
        }
    }

    prepareRandomValuesExercise(): void {

        if (!this.randomValuesConditions) {
            return;
        }

        const variables = this.parseRandomValuesConditions();
        const randomValues = this.generateRandomValues(variables);
        this.exerciseQuestion = this.substituteVariables(this.exerciseQuestion, randomValues);
        this.exerciseAnswer = this.evaluateExpression(this.exerciseQuestion);
    }


    private parseRandomValuesConditions(): Map<string, { min: number; max: number; type: string }> {
        if (!this.randomValuesConditions) {
            throw new Error('No random values conditions provided');
        }

    const variables = new Map();
    
    const parts = this.randomValuesConditions.split(' ');
    
    let currentVariables: string[] = [];
    let min = 0, max = 0, type = 'ℤ';
    
    for (const part of parts) {
        if (!part.includes('ℤ') && !part.includes('ℝ')) {
            const [vars, range] = part.split('∈');
            currentVariables = vars.split(',').map(v => v.trim());
            
            const rangeMatch = range.match(/<(\d+);(\d+)>/);
            if (rangeMatch) {
                min = parseInt(rangeMatch[1]);
                max = parseInt(rangeMatch[2]);
            }
        } else if (part.includes('ℤ')) {
            type = 'ℤ';
            currentVariables.forEach(v => {
                variables.set(v, { min, max, type });
            });
        } else if (part.includes('ℝ')) {
            type = 'ℝ';
            currentVariables.forEach(v => {
                variables.set(v, { min, max, type });
            });
        }
    }
    
    return variables;
}

    private generateRandomValues(variables: Map<string, { min: number; max: number; type: string }>): Map<string, number> {
        const randomValues = new Map();
        
        variables.forEach((range, varName) => {
            if (range.type === 'ℤ') {
                randomValues.set(varName, Math.floor(Math.random() * (range.max - range.min + 1)) + range.min);
            } else if (range.type === 'ℝ') {
                randomValues.set(varName, Math.random() * (range.max - range.min) + range.min);
            }
        });
        
        return randomValues;
    }

    private substituteVariables(expression: string, randomValues: Map<string, number>): string {
        let result = expression;
        randomValues.forEach((value, varName) => {
            result = result.replace(new RegExp(varName, 'g'), value.toString());
        });
        return result;
    }

    private evaluateExpression(expression: string): string {
        try {
            const result = Function('"use strict"; return (' + expression + ')')();
            return result.toString();
        } catch (err) {
            throw new Error(`Error evaluating expression: ${expression}`);
        }
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getLessonId(): number {
        return this.lessonId;
    }

    setLessonId(lessonId: number): void {
        this.lessonId = lessonId;
    }

    getDifficultyId(): number {
        return this.difficultyId;
    }

    setDifficultyId(difficultyId: number): void {
        this.difficultyId = difficultyId;
    }

    getRandomValuesConditions(): string | null {
        return this.randomValuesConditions;
    }

    setRandomValuesConditions(randomValuesConditions: string | null): void {
        this.randomValuesConditions = randomValuesConditions;
    }

    getExerciseQuestion(): string {
        return this.exerciseQuestion;
    }

    setExerciseQuestion(exerciseQuestion: string): void {
        this.exerciseQuestion = exerciseQuestion;
    }

    getExerciseProperties(): string | null {
        return this.exerciseProperties;
    }

    setExerciseProperties(exerciseProperties: string | null): void {
        this.exerciseProperties = exerciseProperties;
    }

    getExerciseAnswer(): string | null {
        return this.exerciseAnswer;
    }

    setExerciseAnswer(exerciseAnswer: string | null): void {
        this.exerciseAnswer = exerciseAnswer;
    }
}