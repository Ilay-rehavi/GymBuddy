import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/workouts";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/workouts", router);

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in the environment variables");
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("running on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
