import { Types } from "mongoose";
export interface Workout {
  _id: Types.ObjectId;
  title: string;
  reps: number;
  load: number;
  createdAt: EpochTimeStamp;
}
