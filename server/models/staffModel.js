import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  department: {
    type: String,
  },
});

const Staff = mongoose.model("Staff", staffSchema);

export default Staff;
