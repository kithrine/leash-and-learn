import { useSelector } from "react-redux";
import BMTrainingClasses from "../components/BMTrainingClasses";
import TrainerTrainingClasses from "../components/TrainerTrainingClasses";
import DashboardFooter from "../components/DashboardFooter";

const TrainingClasses = () => {
  const { user } = useSelector((state) => state.auth);

  // console.log("TrainingClasses user", user)

  return (
    <>
      {user.role.includes("Business Manager") && <BMTrainingClasses />}

      {user.role.includes("Trainer") && <TrainerTrainingClasses />}
      <DashboardFooter />
    </>
  );
};

export default TrainingClasses;
