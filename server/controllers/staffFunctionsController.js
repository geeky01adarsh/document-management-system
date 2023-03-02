import Staff from "../models/staffModel.js";
import Student from "../models/studentModel.js";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validators.js";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();
// secret keys
const SECRET_KEY = process.env.SECRET_KEY;
const DOMAIN_ADDRESS = process.env.DOMAIN_ADDRESS;

export const staffSignUp = async (req, res) => {
  try {
    const { name, email, password, secretkey, institute } = req.body;
    let { department } = req.body;
    if (!validateEmail(email))
      return res
        .status(203)
              .json({ message: "Please provide a proper email address" });
      console.log(secretkey, SECRET_KEY)
    if (secretkey !== SECRET_KEY) {
      return res
        .status(403)
        .json({ message: "Forbidden!!! You are not a valid user!!! err:SECRET_KEY" });
    }

    if (!email.includes("@")) {
      return res.status(403).json({ message: "Not a valid email address" });
    }
    const domain_name = email.split("@")[1].toLowerCase();
    if (domain_name !== DOMAIN_ADDRESS) {
      return res
        .status(403)
        .json({ message: "Forbidden!!! You are not a valid user err:EMAIL_ID" });
    }

    if (!validateName(name)) {
      return res.status(403).json({ message: "Not a valid name" });
    }
    if (!validatePassword(password)) {
      return res.status(403).json({ message: "Not a valid password" });
    }
    if (institute !== "IIST" && institute !== "IIP" && institute !== "IIMR")
      return res.status(403).json({ message: "Not a valid Institute" });

    const hashedPass = await bcrypt.hash(password, 10);

    if (!department) department = "";
    const newStaff = new Staff({
      name,
      email,
      password: hashedPass,
      institute,
      department,
    });
    try {
      await newStaff.save();
      return res.status(201).json({ message: "new staff creation successful" });
    } catch (err) {
      console.error("Error in creating new staff:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  } catch (err) {
    console.error("Error occurred in creating a staff data:", err);
    return res
      .status(500)
      .json({ message: "Something went wrong while creating the user staff" });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    let students = await Student.find();
    return res.status(200).json(students);
  } catch (err) {
    console.error("Can't get all student's data:", err);
  }
};
