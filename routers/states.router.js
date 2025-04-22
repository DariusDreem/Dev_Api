import express from 'express';
import { getAllStates } from '../controllers/states.controller.js';
const statesRouter = express.Router();

statesRouter.get('/', getAllStates)

export default statesRouter