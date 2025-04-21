import express from "express";
import {
  getAllFiles,
  createFiles,
  getFileById,
  deleteFileById,
  getFilesbyContentType
} from "../controllers/files.controller.js";
const fileRouter = express.Router();

fileRouter.get("/", getAllFiles);
fileRouter.post("/", createFiles);
fileRouter.get("/:id", getFileById);
fileRouter.delete("/:id", deleteFileById);
fileRouter.get("/:content_type", getFilesbyContentType);
