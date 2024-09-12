import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getAllWorkouts,
  getWorkoutById,
  updateWorkout,
} from "../controllers/workoutsController";

export const router = express.Router();

router.get("/", getAllWorkouts);

router.get("/:id", getWorkoutById);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);
