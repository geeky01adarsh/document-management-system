import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobNo: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
    default: "IIST",
  },
  enrolmentNo: {
    type: String,
  },
  admissionNo: {
    type: String,
  },
  documents: [
    {
      name: String,
      value: String,
      path: String,
    },
  ],
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
