// importing dependencies
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

// importing other functions
import studentAuthRouter from "../routes/studentAuthRouter.js";
import staffRouter from "../routes/staffRoutes.js";

// initializing app
const app = express();

// middlewares
dotenv.config();
app.use(cors({ credentials: true}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.port || 5000;

// definining routes
app.get("/", (req, res) => {
  res.send("Hi there");
});
app.use("/auth/student", studentAuthRouter);
app.use("/staffs", staffRouter);

// hosting app
mongoose
  .connect(CONNECTION_URL)
  .then(() => console.log("Sucessfully connected to database"))
  .catch((err) => console.error("Error occurred while connecting to db", err));

app.listen(PORT, (err) => {
  if (err) console.error("Error occurred while hosting app:", err);
  else console.log(`App is running on port ${PORT}`);
});
