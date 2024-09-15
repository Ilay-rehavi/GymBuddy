import { Workout } from "../interfaces/workout.interface";
import "../styles/workout-card.scss";

interface workoutProps {
  workout: Workout;
}
const WorkoutCard: React.FC<workoutProps> = ({ workout }) => {
  const { title, reps, load, createdAt } = workout;
  return (
    <div className="card-container">
      <h3 className="workout-title">{title}</h3>
      <p>Reps: {reps}</p>
      <p>Load:{load}</p>
      <p>Created At: {createdAt}</p>
    </div>
  );
};

export default WorkoutCard;
