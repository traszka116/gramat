import express from 'express';
import { LessonController } from '../controllers/LessonController.ts';

export const lessonRoutes = (lessonController: LessonController): express.Router => {
  const router: express.Router = express.Router();

  router.get('/list', lessonController.getLessonList);
  
  router.get('/random', lessonController.getLessonRandom);

  router.get('/:id', lessonController.getLessonById);

  return router;
};