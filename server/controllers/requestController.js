import Student from "../models/studentModel.js";
import Request from "../models/updationRequest.js";
import { upload } from "../utils/temp_docs.js";

export const studentReq = async (req, res) => {
  try {
    const student_id = req.params.student_id;

    if (!student_id) {
      return res.status(400).json({ err: "Something went wrong" });
    }

    let StudentDetails;
    try {
      StudentDetails = await Student.findById(student_id);
    } catch (error) {
      console.error("Error while fetching student details", error);
      return res.status(500).json({ err: "Internal server error" });
    }

    if (!StudentDetails) {
      return res.status(404).json({ err: "No such student found" });
    }

    upload(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res.status(400).send(err);
      } else {
        const { fileName, fileValue } = req.body;
        if (!fileName) {
          return res.status(403).json({ err: "Please provide a file name" });
        }
        let requestDetails = new Request({
          student_id,
          requestName: fileName,
          requestValue: fileValue,
          requestDetails: req.file.path,
        });

        try {
          await requestDetails.save();
        } catch (error) {
          console.log("Unable to update details", error);
          return res
            .status(500)
            .json({ err: "Unable to update the student data" });
        }

        return res.status(202).json({ msg: "Request queued!" });
      }
    });
  } catch (error) {
    console.log("Can't make the updation request", error);
    res.status(500).json({ err: "Error while updation of the data" });
  }
};

export const getAllRequests = async (req, res) => {
  try {
    let requestLists;
    try {
      requestLists = await Request.find();
    } catch (error) {
      console.error("Error while loading all the requests", error);
      return res.status(500).json({ err: "Can't load up all the requests" });
    }
    return res.status(200).json(requestLists);
  } catch (error) {
    console.error("Error while getting requests", error);
    return res.status(500).json({ err: "Internal server error" });
  }
};

export const getThisReq = async (req, res) => {
  try {
    const requestId = req.params.req_id;
    let requestDetails;
    try {
      requestDetails = await Request.findOne({_id: requestId});
    } catch (err) {
      console.error("Error while finding the request", err);
      return res.status(500).json({ err: "Error while finding the request" });
    }
    return res.status(200).json(requestDetails);
  } catch (error) {
    console.error("Error while rejecting requests", error);
    return res.status(500).json({ err: "internal server error" });
  }
};

export const rejectReq = async (req, res) => {
  try {
    const requestId = req.params.req_id;
    try {
      await Request.findByIdAndDelete(requestId);
    } catch (err) {
      console.error("Error while removing the request data", err);
      return res.status(500).json({err: "Unable to reject request"});
    }
    return res.status(200).json({ msg: "Request successfully removed" });
  } catch (error) {
    console.error("Error while rejecting requests", error);
    return res.status(500).json({ err: "internal server error" });
  }
};


export const acceptUser = async (req, res) => {
  try {
    const requestId = req.params.req_id;

    let requestDetails;
    try {
      requestDetails = await Request.find();
    } catch (error) {
      console.log("Error while fetching requests", error);
      return res.status(500). json({err:"can't find the request"})
    }

    if (!requestDetails) return res.status(404).json({ err: 'No such user found' });

    const student_id = requestDetails.student_id;
    if (!student_id)
      return res.status(404).json({ err: "No student id was found" });
    let stuDetails;
    try {
      stuDetails = await Student.findById(student_id);
    } catch (error) {
      console.error("Error while fetching student details", error);
      return res.status(500).json({ err: "Internal server error" });
    }

    if (!stuDetails) {
      return res.status(404).json({ err: "No such student found" });
    }

    try {
      await Student.findByIdAndUpdate(requestDetails.student_id, {
        documents: [
          ...stuDetails,
          {
            name: requestDetails.requestName,
            value: requestDetails.requestValue,
            path: requestDetails.requestDetails,
          },
        ],
      });
    } catch (error) {
      console.error("can't update the user details", error)
      return res.status(403).json({ err: "Can't update the data" });
    }

    try {
      await Request.findByIdAndDelete(requestId);
    } catch (err) {
      console.error("Error while removing the request data", err);
      return res.status(500).json({ err: "Unable to reject request" });
    }
    return res.status(200).json({ msg: "Request successfully accepted" });
  } catch (error) {
    console.error("Error while accepting requests", error);
    return res.status(500).json({ err: "internal server error" });
  }
}