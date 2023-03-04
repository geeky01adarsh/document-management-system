import jwt from "jsonwebtoken";
import Staff from "../models/staffModel.js";
import Student from "../models/studentModel.js";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validators.js";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt";

// config imports
dotenv.config();
// secret keys
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const SECRET_KEY = process.env.SECRET_KEY;
const DOMAIN_ADDRESS = process.env.DOMAIN_ADDRESS;

export const staffSignUp = async (req, res) => {
  try {
    const { name, email, password, secretkey, institute, mobNo } = req.body;
    let { department } = req.body;
    if (!validateEmail(email))
      return res
        .status(203)
        .json({ err: "Please provide a proper email address" });
    console.log(secretkey, SECRET_KEY);
    if (secretkey !== SECRET_KEY) {
      return res
        .status(403)
        .json({
          err: "Forbidden!!! You are not a valid user!!! err:SECRET_KEY",
        });
    }

    if (!email.includes("@")) {
      return res.status(403).json({ message: "Not a valid email address" });
    }
    const domain_name = email.split("@")[1].toLowerCase();
    if (domain_name !== DOMAIN_ADDRESS) {
      return res
        .status(403)
        .json({ err: "Forbidden!!! You are not a valid user err:EMAIL_ID" });
    }

    if (!validateName(name)) {
      return res.status(403).json({ err: "Not a valid name" });
    }
    if (!validatePassword(password)) {
      return res.status(403).json({ err: "Not a valid password" });
    }
    if (institute !== "IIST" && institute !== "IIP" && institute !== "IIMR")
      return res.status(403).json({ err: "Not a valid Institute" });

    const hashedPass = await bcrypt.hash(password, 10);

    if (!department) department = "";
    const newStaff = new Staff({
      name,
      email,
      password: hashedPass,
      institute,
      department,
      mobNo
    });
    try {
      await newStaff.save();
      return res.status(201).json({ message: "new staff creation successful" });
    } catch (err) {
      console.error("Error in creating new staff:", err);
      return res.status(500).json({ err: "Internal server error" });
    }
  } catch (err) {
    console.error("Error occurred in creating a staff data:", err);
    return res
      .status(500)
      .json({ err: "Something went wrong while creating the user staff" });
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

export const staffLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!validateEmail(email))
      return res.status(203).json({ err: "Wrong email id provided" });
    let existingUser = await Staff.findOne({ email });

    if (!existingUser)
      return res
        .status(203)
        .json({ err: "User doesn't exists! Please create a account!!!" });
    if (!validatePassword(password))
      return res
        .status(203)
        .json({ err: "Please provide password in exprected format" });

    const passMatch = await bcrypt.compare(password, existingUser.password);

    if (!passMatch) {
      return res.status(400).json({ err: "Please cross check the version" });
    }

    const token = jwt.sign({ user: { id: existingUser._id } }, JWT_SECRET_KEY, {
      expiresIn: "45s",
    });
    res.cookie("staff", token, {
      expire: new Date(Date.now() + 1000 * 45),
    });

    return res
      .status(200)
      .json({ message: "Succefully logged in", user: existingUser, token });
  } catch (err) {
    console.error("We ran into an error at staff login", err);
    return res.status(500).json({ err: "Internal server error" });
  }
};

export const staffSignout = async (req, res) => {
  try {
    res.clearCookie("staff");
    return res.status(200).json({ message: "Cookies cleared" });
  } catch (error) {
    console.error("Error while signing out:", error);
    res.status(500).json({ err: "Unable to clear cookies" });
  }
};
