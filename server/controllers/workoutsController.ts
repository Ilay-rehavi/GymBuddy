import mongoose from "mongoose";
import Workout from "../models/Workoutmodel";
import express from "express";

const createWorkout = async (req: express.Request, res: express.Response) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json({ workout });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "unknown error" });
    }
  }
};

const getAllWorkouts = async (req: express.Request, res: express.Response) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

const getWorkoutById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "invalid workout Id" });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "No workout found" });
  }

  res.status(200).json({ workout });
};

const deleteWorkout = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "invalid workout Id" });
  }
  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: "No workout found" });
  }
  res.status(200).json(workout);
};

const updateWorkout = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "invalid workout Id" });
  }
  const workout = await Workout.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(404).json({ error: "No workout found" });
  }

  res.status(200).json(workout);
};

export {
  updateWorkout,
  createWorkout,
  getAllWorkouts,
  getWorkoutById,
  deleteWorkout,
};
