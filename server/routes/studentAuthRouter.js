import { Router } from "express";
import { StudentLogin, studentSignout, StudentSignUp } from "../controllers/studentAuthController.js";

const studentAuthRouter = Router();

studentAuthRouter.post("/signup", StudentSignUp);
studentAuthRouter.post("/signin", StudentLogin);
studentAuthRouter.get('/signout', studentSignout);

export default studentAuthRouter