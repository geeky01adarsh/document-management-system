import { Router } from "express";
import {
  getStudentDetails,
  isAuthenticatedStaff,
  isAuthenticatedStudent,
} from "../controllers/middlewareControllers.js";
import { studentReq } from "../controllers/requestController.js";
import {
  StudentLogin,
  studentSignout,
  StudentSignUp,
} from "../controllers/studentAuthController.js";

const studentAuthRouter = Router();

studentAuthRouter.post("/signup", StudentSignUp);
studentAuthRouter.post("/signin", StudentLogin);
studentAuthRouter.get("/signout", studentSignout);
studentAuthRouter.get(
  "/:student_id",
  isAuthenticatedStudent,
  getStudentDetails
);
studentAuthRouter.post(
  "/update/:student_id",
  isAuthenticatedStudent,
  studentReq
);

export default studentAuthRouter;
