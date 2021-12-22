import express from 'express';
import TourController from '../controllers/tourController';
import Validator from "../middlewares/validator";
import verifyToken from '../middlewares/verifyTokens';
import verifyAccess from '../middlewares/verifyAccess';

const tourRouter =express.Router();
tourRouter.post(
    "/save",
    Validator.newAccountTourRules(),
    Validator.validateInput,
    verifyToken,
    verifyAccess("admin"),
    TourController.createTour
);
tourRouter.post('/save',TourController.createTour);
tourRouter.get('/view',TourController.getAllTour);
tourRouter.get('/:id',TourController.getOneTour);
tourRouter.get('/:id',TourController.deleteOneTour);
export default tourRouter;