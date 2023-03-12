// import upload from "../utils/fileUpload.js";
import Student from "../models/studentModel.js";
import { upload } from "../utils/temp_docs.js";

export const studentDocsUpload = async (req, res) => {
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
        const { fileName } = req.body;
        if (!fileName) {
          return res.status(403).json({ err: "Please provide a file name" });
        }
        let documentDetails = {
          fileName,
          student_id,
          content: req.file.path,
        };

        try {
          StudentDetails = await Student.findOneAndUpdate(
            { _id: student_id },
            {
              documents: [
                ...StudentDetails.documents,
                {
                  name: fileName,
                  path: req.file.path,
                },
              ],
            },
            {
              returnOriginal: false,
            }
          );
        } catch (error) {
          console.log("Unable to update details", error);
          return res
            .status(500)
            .json({ err: "Unable to update the student data" });
        }
        // console.log(documentDetails);
        const {
          name,
          password,
          email,
          institute,
          enrolmentNo,
          admissionNo,
          documents,
          mobNo,
        } = StudentDetails;

        return res.status(202).json({ msg: "File uploaded successfully!" });
      }
    });
  } catch (error) {
    console.error("Error while uploading the student data:", error);
    res.status(500).json({ err: "Document uploading failed" });
  }
};


// export const getDocuments
