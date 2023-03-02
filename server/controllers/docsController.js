import upload from "../utils/fileUpload.js";


export const studentDocsUpload = async (req, res) => {
  try {
    const student = req.student;
    if (!student) {
      return res.status(400).json({ err: "Something went wrong" });
    }
    console.log(req.file);
    // upload(
    //   (req,
    //   res,
    //   async (err) => {
    //     if (err) {
    //       console.error("Error in uploading file:", err);
    //       return res.status(500).json({ err: "File upload failed" });
    //     }
    //     const { fileName } = req.body;
    //     if (!fileName)
    //       return res.status(203).json({ err: "Please provide the file name" });
    //     if (!req.file)
    //       return res
    //         .status(203)
    //         .json({ err: "We require a file to be uploaded" });
    //     console.log(file.path);
    //     let documentDetails = {
    //       fileName,
    //       student_id: student._id,
    //       content: req.file.path,
    //     };

    //     return res.status(200).json({ msg: "Successfully uploaded files" });
    //   })
    // );
    return res.status(200).json({ msg: "working till now" });
  } catch (error) {
    console.error("Error while uploading the student data:", error);
    res.status(500).json({ err: "Document uploading failed" });
  }
};
