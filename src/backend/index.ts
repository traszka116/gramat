import { Database } from './models/Database.ts';

import { ExerciseRepository } from './models/ExerciseRepository.ts';
import { ExerciseController } from './controllers/ExerciseController.ts';
import { exerciseRoutes } from './routes/ExerciseRoutes.ts';

import { LessonRepository } from './models/LessonRepository.ts';
import { LessonController } from './controllers/LessonController.ts';
import { lessonRoutes } from './routes/LessonRoutes.ts';

import { AchievementRepository } from './models/AchievementRepository.ts';
import { AchievementController } from './controllers/AchievementController.ts';
import { achievementRoutes } from './routes/AchievementRoutes.ts';

import { AchievementUnlockRepository } from './models/AchievementUnlockRepository.ts';
import { AchievementUnlockController } from './controllers/AchievementUnlockController.ts';
import { achievementUnlockRoutes } from './routes/AchievementUnlockRoutes.ts';

import { ChapterRepository } from './models/ChapterRepository.ts';
import { ChapterController } from './controllers/ChapterController.ts';
import { chapterRoutes } from './routes/ChapterRoutes.ts';

import { DifficultyRepository } from './models/DifficultyRepository.ts';
import { DifficultyController } from './controllers/DifficultyController.ts';
import { difficultyRoutes } from './routes/DifficultyRoutes.ts';

import { FeedbackRepository } from './models/FeedbackRepository.ts';
import { FeedbackController } from './controllers/FeedbackController.ts';
import { feedbackRoutes } from './routes/FeedbackRoutes.ts';

import { MathBranchRepository } from './models/MathBranchRepository.ts';
import { MathBranchController } from './controllers/MathBranchController.ts';
import { mathBranchRoutes } from './routes/MathBranchRoutes.ts';

import { UserRepository } from './models/UserRepository.ts';
import { UserController } from './controllers/UserController.ts';
import { userRoutes } from './routes/UserRoutes.ts';

import { UserReportRepository } from './models/UserReportRepository.ts';
import { UserReportController } from './controllers/UserReportController.ts';
import { userReportRoutes } from './routes/UserReportRoutes.ts';

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

    const achievementRepository = new AchievementRepository(db);
    const achievementController = new AchievementController(achievementRepository);
    app.use("/achievement", achievementRoutes(achievementController));

    const achievementUnlockRepository = new AchievementUnlockRepository(db);
    const achievementUnlockController = new AchievementUnlockController(achievementUnlockRepository);
    app.use("/achievementUnlock", achievementUnlockRoutes(achievementUnlockController));
    
    const chapterRepository = new ChapterRepository(db);
    const chapterController = new ChapterController(chapterRepository);
    app.use("/chapter", chapterRoutes(chapterController));

    const difficultyRepository = new DifficultyRepository(db);
    const difficultyController = new DifficultyController(difficultyRepository);
    app.use("/difficulty", difficultyRoutes(difficultyController));

    const feedbackRepository = new FeedbackRepository(db);
    const feedbackController = new FeedbackController(feedbackRepository);
    app.use("/feedback", feedbackRoutes(feedbackController));

    const mathBranchRepository = new MathBranchRepository(db);
    const mathBranchController = new MathBranchController(mathBranchRepository);
    app.use("/mathBranch", mathBranchRoutes(mathBranchController));

    const userRepository = new UserRepository(db);
    const userController = new UserController(userRepository);
    app.use("/user", userRoutes(userController));

    const userReportRepository = new UserReportRepository(db);
    const userReportController = new UserReportController(userReportRepository);
    app.use("/userReport", userReportRoutes(userReportController));
}

app.listen(3000, () => {
    console.log('Gramat is running on port 3000');
    init();
});

