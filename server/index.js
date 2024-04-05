// const express = require('express')

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { UserRouter } from "./routes/user.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
// app.use(express.urlencoded({ extended: false }));
app.use("/auth", UserRouter);

// replace the email_name with your gmail without the `@gmail`.
// add your password to password
// add mongodb_link to mongodb_link

// reference to "https://cloud.mongodb.com" in the database section, then to your cluster, then to the connect button. Pick the first option "drivers" and copy the link on step 3

mongoose.connect(
  `mongodb+srv://"email_name":"password""mongodb_link"/authentication?retryWrites=true&w=majority`
);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
