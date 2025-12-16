import express from 'express';
import { UserReportController } from '../controllers/UserReportController.ts';

export const userReportRoutes = (userReportController: UserReportController): express.Router => {
  const router: express.Router = express.Router();

  router.get('/:id', userReportController.getUserReportById);

  return router;
};