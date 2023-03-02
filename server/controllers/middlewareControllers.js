import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
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
      
      req.student = StudentDetails;
      next();
  } catch (error) {
    console.error("Error occurred in verifying authorization", error);
    return res.status(500).json({ err: "Can't verify the user" });
  }
};

export const isAuthenticatedStaff = async (req, res) => {};
