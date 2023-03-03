import { Router } from "express";
import { studentDocsUpload } from "../controllers/docsController.js";
import { isAuthenticatedStaff, isAuthenticatedStudent } from "../controllers/middlewareControllers.js";
import {upload} from "../utils/temp_docs.js";

const docsRouter = Router();

docsRouter.post(
  "/student/upload",
  isAuthenticatedStudent,
  studentDocsUpload
);

docsRouter.post(
  "/staff/:student_id", 
  isAuthenticatedStaff,
  studentDocsUpload
)


export default docsRouter;
