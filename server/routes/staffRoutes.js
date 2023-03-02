import { Router } from "express";
import { getAllStudents, staffSignUp } from "../controllers/staffFunctionsController.js";
const staffRouter = Router();

staffRouter.get('/allStudents', getAllStudents)
staffRouter.post('/signup', staffSignUp)

export default staffRouter;