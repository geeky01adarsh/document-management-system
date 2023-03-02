import Student from "../models/studentModel.js";
import {
  validateEmail,
  validateInstitute,
  validateName,
  validatePassword,
} from "../utils/validators.js";
import bcrypt from "bcrypt";
import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const StudentSignUp = async (req, res) => {
  try {
    const { name, email, password, institute } = req.body;

    if (!validateEmail(email))
      return res.status(203).json({ err: "Wrong email id provided" });
    let existingUser = await Student.findOne({ email });
    if (existingUser)
      return res
        .status(203)
        .json({ err: "User already exists! Please sign in!!!" });
    if (!validateName(name))
      return res
        .status(203)
        .json({ err: "Please provide name in expected format" });
    if (!validatePassword(password))
      return res
        .status(203)
              .json({ err: "Please provide password in expected format" });
      
      if (!validateInstitute(institute))
          return res
            .status(203)
            .json({ message: "Please provide institute name in exprected format" });

    const hashedPass = await bcrypt.hash(password, 10);

    const newStudent = new Student({ name:name, email, password: hashedPass });
    try {
      await newStudent.save();
    } catch (err) {
        console.error("New user is having problems", err);
      return res.status(500).json({ err: "Internal server error" });
        
    }
  } catch (e) {
      console.error("We ran into an error at student signup", e);
      return res.status(500).json({err:"Internal server error"})
  }
};

export const StudentLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!validateEmail(email))
          return res.status(203).json({ err: "Wrong email id provided" });
        let existingUser = await Student.findOne({ email });
        
        if (!existingUser)
          return res
            .status(203)
            .json({ err: "User doesn't exists! Please create a account!!!" });
        if (!validatePassword(password))
          return res
            .status(203)
                .json({ err: "Please provide name in exprected format" });
        
        const passMatch = await bcrypt.compare(
          password,
          existingUser.password
        );

        if (!passMatch) {
            return res.status(400).json({err:"Please cross check the version"})
        } 

        const token = jwt.sign({user:{id:existingUser._id}}, JWT_SECRET_KEY, { expiresIn: "45s" });
        console.log(token);
        res.cookie('user', token, {
          path: "/",
          expires: new Date(Date.now() + 1000 * 45),
          httpOnly: true,
          sameSite: "lax",
        });

        return res
          .status(200)
          .json({ message: "Succefully logged in", user: existingUser, token });
        

    } catch(err) {
        console.error("We ran into an error at student login", err);
      return res.status(500).json({ err: "Internal server error" });
        
    }
}

export const studentSignout = async (req, res) => {
    try {
        res.clearCookie('user');
        return res.status(200).json({ message: "Cookies cleared" });
    } catch (error) {
        console.error("Error while signing out:", error);
        res.status(500).json({err:"Unable to clear cookies"})
    }
}