import { Router } from "express";
import { getStudentDetails, isAuthenticatedStaff } from "../controllers/middlewareControllers.js";
import { getAllStudents, staffLogin, staffSignout, staffSignUp } from "../controllers/staffFunctionsController.js";
const staffRouter = Router();

staffRouter.get('/allStudents', isAuthenticatedStaff, getAllStudents)
staffRouter.post('/signup', staffSignUp)
staffRouter.post('/signin', staffLogin)
staffRouter.get('/signout', staffSignout)
staffRouter.get('/student/:student_id', isAuthenticatedStaff, getStudentDetails)
    
export default staffRouter;