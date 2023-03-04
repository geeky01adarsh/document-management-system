import { Router } from "express";
import { getStudentDetails, isAuthenticatedStaff } from "../controllers/middlewareControllers.js";
import { acceptUser, getAllRequests, getThisReq, rejectReq, studentReq } from "../controllers/requestController.js";
import { getAllStudents, staffLogin, staffSignout, staffSignUp } from "../controllers/staffFunctionsController.js";
const staffRouter = Router();

staffRouter.get('/allStudents',
//  isAuthenticatedStaff,
  getAllStudents)
staffRouter.post('/signup', staffSignUp)
staffRouter.post('/signin', staffLogin)
staffRouter.get('/signout', staffSignout)
staffRouter.get('/student/:student_id', 
// isAuthenticatedStaff, 
getStudentDetails)
staffRouter.get('/requests',
    // isAuthenticatedStaff,
    getAllRequests
)
staffRouter.get(
  "/request/:req_id",
  isAuthenticatedStaff,
  getThisReq
);
staffRouter.get('/approve/:req_id',
    isAuthenticatedStaff,
    acceptUser)
staffRouter.get("/reject/:req_id",
    isAuthenticatedStaff,
    rejectReq);
    
export default staffRouter;