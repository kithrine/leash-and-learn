import { useSelector } from "react-redux";
import BMTrainingClasses from "../components/BM/BMTrainingClasses";
import TrainerTrainingClasses from "../components/Trainer/TrainerTrainingClasses";
import DashboardFooter from "../components/footers/DashboardFooter";

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
