import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.port || 5000;


app.get("/", (req, res) => {
  res.send("Hi there");
});

//
mongoose
  .connect(
    CONNECTION_URL
  )
  .then(() => console.log("Sucessfully connected to database"))
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) console.error(err);
      else console.log(`App is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
