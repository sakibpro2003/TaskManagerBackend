import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "./config";
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes

//db connection
mongoose
  .connect(config.mongoUri!)
  .then(() => console.log("database connected"))
  .catch((err) => console.log("DB error at: ", err));

export default app;
