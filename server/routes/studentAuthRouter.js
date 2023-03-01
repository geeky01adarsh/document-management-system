import { Router } from "express";
import { StudentLogin, StudentSignUp } from "../controllers/studentAuthController.js";

const studentAuthRouter = Router();

studentAuthRouter.post("/signup", StudentSignUp);
studentAuthRouter.post("/login", StudentLogin);

export default studentAuthRouter