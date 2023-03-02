import multer from "multer";
import path from "path";

// here cb ==> callback
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "Content");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 * 100 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpg|png|mp4|mkv|flv|mov|wmv|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    console.log(fileTypes);
    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files format to upload");
  },
}).single("file");


export default upload;