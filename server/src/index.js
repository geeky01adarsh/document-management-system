// importing dependencies
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from 'morgan';
import multer from 'multer';
import * as dotenv from "dotenv";

// importing other functions
import studentAuthRouter from "../routes/studentAuthRouter.js";
import staffRouter from "../routes/staffRoutes.js";
import docsRouter from "../routes/docsRoutes.js";

// initializing app
const app = express();

// middlewares
dotenv.config();
// app.use(cors({ credentials: true}));
app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(multer().any())
app.use(express.json());
app.use(morgan("dev"));
express.static("Content");
app.use(bodyParser.urlencoded({ extended: true }));
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.port || 5000;

// definining routes
app.get("/", (req, res) => {
  res.send("Hi there");
});
app.use("/auth/student", studentAuthRouter);
app.use("/staff", staffRouter);
app.use('/docs', docsRouter);
app.use(express.static('Content'));

// hosting app
mongoose
  .connect(CONNECTION_URL)
  .then(() => console.log("Sucessfully connected to database"))
  .catch((err) => console.error("Error occurred while connecting to db", err));

app.listen(PORT, (err) => {
  if (err) console.error("Error occurred while hosting app:", err);
  else console.log(`App is running on port ${PORT}`);
});
