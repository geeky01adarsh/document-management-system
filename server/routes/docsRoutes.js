import { Router } from "express";
import { sendFileFrontend, studentDocsUpload } from "../controllers/docsController.js";
import { isAuthenticatedStaff, isAuthenticatedStudent } from "../controllers/middlewareControllers.js";
import {upload} from "../utils/temp_docs.js";

const docsRouter = Router();

docsRouter.post(
  "/student/upload/:student_id",
  // isAuthenticatedStudent,
  studentDocsUpload
);

docsRouter.post(
  "/staff/:student_id", 
  isAuthenticatedStaff,
  studentDocsUpload
)

docsRouter.post(
  "/:object_id",
  sendFileFrontend
 )

export default docsRouter;
