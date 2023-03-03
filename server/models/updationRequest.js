import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
  },
  requestName: {
    type: String,
    required: true,
  },
  requestValue: {
    type: String,
    required: true,
  },
  requestDetails: {
    type: String,
    required: true,
    },
    
});

const Request = mongoose.model('Request', requestSchema);

export default Request;
