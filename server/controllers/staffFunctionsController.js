import Student from "../models/studentModel.js"


export const getAllStudents = async (req, res) => {
    try { 
        let students = await Student.find();
        return res.status(200).json(students);
    } catch (err) {
        console.error("Can't get all student's data:", err)
    }
}