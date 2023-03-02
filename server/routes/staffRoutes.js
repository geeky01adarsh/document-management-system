import { Router } from "express";
import { isAuthenticatedStaff } from "../controllers/middlewareControllers.js";
import { getAllStudents, staffLogin, staffSignout, staffSignUp } from "../controllers/staffFunctionsController.js";
const staffRouter = Router();

staffRouter.get('/allStudents', isAuthenticatedStaff, getAllStudents)
staffRouter.post('/signup', staffSignUp)
staffRouter.post('/signin', staffLogin)
staffRouter.get('/signout', staffSignout)
    
export default staffRouter;