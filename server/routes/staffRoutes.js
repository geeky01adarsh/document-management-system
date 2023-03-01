import { Router } from "express";
import { getAllStudents } from "../controllers/staffFunctionsController.js";
const staffRouter = Router();

staffRouter.get('/allStudents', getAllStudents)

export default staffRouter;