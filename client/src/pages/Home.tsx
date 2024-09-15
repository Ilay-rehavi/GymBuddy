import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Workout } from "../interfaces/workout.interface";
import WorkoutCard from "../components/WorkoutCard";
import "../styles/home.scss";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["workout query"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:4000/api/workouts");

      return response.data;
    },
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred " + error.message;

  return (
    <>
      <div className="home-container">
        {data &&
          data.map((workout: Workout) => (
            <div className="grid-item" key={workout._id.toString()}>
              <WorkoutCard workout={workout} />
            </div>
          ))}
        <WorkoutForm />
      </div>
    </>
  );
};

export default Home;
