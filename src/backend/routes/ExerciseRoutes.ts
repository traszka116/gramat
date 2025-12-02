import express from 'express';
import { ExerciseController } from '../controllers/ExerciseController.ts';

export const exerciseRoutes = (exerciseController: ExerciseController): express.Router => {
  const router: express.Router = express.Router();

  router.get('/random', exerciseController.getExerciseRandom);

  router.get('/:id', exerciseController.getExerciseById);

  return router;
};