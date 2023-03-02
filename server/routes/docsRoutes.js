import { Router } from "express";
import { studentDocsUpload } from "../controllers/docsController.js";
import { isAuthenticatedStudent } from "../controllers/middlewareControllers.js";
import { upload } from "./temp_docs.js";
const docsRouter = Router();

docsRouter.post(
  "/student/upload",
  isAuthenticatedStudent,
  upload.single("file"),
  studentDocsUpload
);

export default docsRouter;
