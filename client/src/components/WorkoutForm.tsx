import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import { WorkoutFormData } from "../interfaces/workoutFromData.interface";
import "../styles/workout-form.scss"; // Import the SCSS file

const WorkoutForm = () => {
  const queryClient = useQueryClient();

  const formik = useFormik({
    initialValues: {
      title: "",
      reps: 0,
      load: 0,
    },
    onSubmit: (values) => {
      createWorkoutMutation.mutate(values, {
        onSuccess: () => {
          formik.resetForm();
        },
        onError: (error) => {
          console.log("error creating workout:", error);
        },
      });
    },
  });

  const createWorkoutMutation = useMutation({
    mutationKey: ["workout query"],
    mutationFn: async (newWorkoutData: WorkoutFormData) => {
      const newWorkout = await axios.post(
        "http://localhost:4000/api/workouts",
        newWorkoutData
      );
      return newWorkout.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workout query"] });
    },
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit} className="workout-form">
        <input
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          className="form-input"
        />
        <input
          name="reps"
          value={formik.values.reps}
          onChange={formik.handleChange}
          className="form-input"
        />
        <input
          name="load"
          value={formik.values.load}
          onChange={formik.handleChange}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Add Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
