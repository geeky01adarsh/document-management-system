import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import Staff from "../models/staffModel.js";
import Student from "../models/studentModel.js";

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const isAuthenticatedStudent = async (req, res, next) => {
  try {
    const { student } = req.cookies;

    if (!student) res.status(403).json({ err: "No auth token found" });
    const token = student;

    // verify the user
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const studentId = decoded.user.id;

    let StudentDetails;

    try {
      StudentDetails = await Student.findById(studentId);
    } catch (error) {
      console.error("Student not found through autheticatedRoute", error);
    }

    if (!StudentDetails) {
      return res.status(404).json({ err: "No such student found" });
    }

    req.student_id = StudentDetails._id;
    next();
  } catch (error) {
    console.error("Error occurred in verifying authorization", error);
    return res.status(500).json({ err: "Can't verify the user" });
  }
};

export const isAuthenticatedStaff = async (req, res, next) => {
  try {
    const { staff } = req.cookies;

    if (!staff) res.status(403).json({ err: "No auth token found" });
    const token = staff;

    // verify the user
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const staffId = decoded.user.id;

    let staffDetails;

    try {
      staffDetails = await Staff.findById(staffId);
    } catch (error) {
      console.error("Staff not found through autheticatedRoute", error);
    }

    if (!staffDetails) {
      return res.status(404).json({ err: "No such staff found" });
    }
    req.student_id = req.params.student_id;
    req.staff = staffDetails;
    next();
  } catch (error) {
    console.error("Error occurred in verifying authorization", error);
    return res.status(500).json({ err: "Can't verify the staff" });
  }
};



export const getStudentDetails = async (req, res) => 
{
  try {
    const student_id = req.params.student_id;
    if (!student_id) return res.status(404).json({ err: "No student id was found" });
    let StudentDetails;
    try {
      StudentDetails = await Student.findById(student_id);
    } catch (error) {
      console.error("Error while fetching student details", error);
      return res.status(500).json({err:"Internal server error"})
    }

    if (!StudentDetails) {
      return res.status(404).json({ err: "No such student found" });
    }

    // const destructuredStudent_details = { StudentDetails.name, StudentDetails.password, }


    return res.status(200).json({ message: "Here are the student details", StudentDetails });

  } catch (error) {
    console.log("Error while getting student details", error)
    return res.status(500).json({err: "Can't find any such user"})
  }
}