import { Database } from './models/Database.ts';
import { ExerciseRepository } from './models/ExerciseRepository.ts';
import { ExerciseController } from './controllers/ExerciseController.ts';
import { exerciseRoutes } from './routes/ExerciseRoutes.ts';
import { LessonRepository } from './models/LessonRepository.ts';
import { LessonController } from './controllers/LessonController.ts';
import { lessonRoutes } from './routes/LessonRoutes.ts';
import { fileURLToPath } from 'url';

import path from 'path';

import express from 'express';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../frontend')));

const dbPath = './gramatDatabase.db';

async function init() {
    const db = new Database(dbPath);
    await db.connect();

    const exerciseRepository = new ExerciseRepository(db);
    const exerciseController = new ExerciseController(exerciseRepository);
    app.use("/exercise", exerciseRoutes(exerciseController));

    const lessonRepository = new LessonRepository(db);
    const lessonController = new LessonController(lessonRepository);
    app.use("/lesson", lessonRoutes(lessonController));
}

app.listen(3000, () => {
    console.log('Gramat is running on port 3000');
    init();
});

