import express from "express";
import {
  getAllFiles,
  createFile,
  getFileById,
  deleteFileById,
  getFilesbyContentType
} from "../controllers/files.controller.js";
const filesRouter = express.Router();

filesRouter.get("/", getAllFiles);
filesRouter.post("/", createFile);
filesRouter.get("/:id", getFileById);
filesRouter.delete("/:id", deleteFileById);
filesRouter.get("/:content_type", getFilesbyContentType);

export default filesRouter;