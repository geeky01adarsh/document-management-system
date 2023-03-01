import Student from "../models/studentModel.js";
import {
  validateEmail,
  validateInstitute,
  validateName,
  validatePassword,
} from "../utils/validators.js";
import bcrypt from "bcrypt";

export const StudentSignUp = async (req, res) => {
  try {
    const { name, email, password, institute } = req.body;

    if (!validateEmail(email))
      return res.status(203).json({ message: "Wrong email id provided" });
    let existingUser = await Student.findOne({ email });
    if (existingUser)
      return res
        .status(203)
        .json({ message: "User already exists! Please sign in!!!" });
    if (!validateName(name))
      return res
        .status(203)
        .json({ message: "Please provide name in exprected format" });
    if (!validatePassword(password))
      return res
        .status(203)
              .json({ message: "Please provide name in exprected format" });
      
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
      return res.status(500).json({ message: "Internal server error" });
        
    }
  } catch (e) {
      console.error("We ran into an error at student signup", e);
      return res.status(500).json({message:"Internal server error"})
  }
};

export const StudentLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!validateEmail(email))
          return res.status(203).json({ message: "Wrong email id provided" });
        let existingUser = await Student.findOne({ email });
        
        if (!existingUser)
          return res
            .status(203)
            .json({ message: "User doesn't exists! Please create a account!!!" });
        if (!validatePassword(password))
          return res
            .status(203)
                .json({ message: "Please provide name in exprected format" });
        
        const passMatch = await bcrypt.compare(
          password,
          existingUser.password
        );

        if (passMatch) {
          return res.status(200).json({messgae:"Successfully logged in"});
          
        } else {
          return res.status(400).json({messgae:"Please cross check the version"})
        }
        

    } catch(err) {
        console.error("We ran into an error at student login", err);
      return res.status(500).json({ message: "Internal server error" });
        
    }
}