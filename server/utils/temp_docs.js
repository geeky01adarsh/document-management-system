import multer from "multer";
import path from 'path';
// export const upload = multer({ dest: "Content/" });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./content"); // uploads files to the './content' folder
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // generate unique file name
  },
});

 export const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|png|jpg|jpeg/; // acceptable file types
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
      );
      console.log(file.mimetype,mimetype, extname);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      return cb("Error: Only PDF, PNG, and JPG files are allowed!");
    }
  },
  limits: { fileSize: 10 * 1024 * 1024 }, // maximum file size: 10 MB
}).single("file");

