import express from 'express';
import { getAllTags, createTag, getTagById, deleteTagById, deleteTagByName, getTagByName } from '../controllers/tags.controller.js';
const tagRouter = express.Router();

tagRouter.get('/', getAllTags);
tagRouter.post('/', createTag);
tagRouter.get('/:id', getTagById);
tagRouter.get('/name/:name', getTagByName);
tagRouter.delete('/:id', deleteTagById);
tagRouter.delete('/name/:name', deleteTagByName);

export default tagRouter;