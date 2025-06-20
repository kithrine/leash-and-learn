import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { trainingClassGetAll, trainingClassGetMany } from "../redux/trainingClassSlice";
import BMTrainingClasses from "../components/BM/BMTrainingClasses";
import TrainerTrainingClasses from "../components/Trainer/TrainerTrainingClasses";
import DashboardFooter from "../components/footers/DashboardFooter";
import TrainingClasses from "../pages/trainingClass/TrainingClasses";

const TrainingClassesLayout = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.role.includes("Business Manager")) {
      dispatch(trainingClassGetAll())
    } else if (user.role.includes("Trainer")) {
      dispatch(trainingClassGetMany(user.username))
    } else null
  }, [])

  return (
    <>
      {user.role.includes("Business Manager") && <TrainingClasses />}

      {user.role.includes("Trainer") && <TrainingClasses />}
      <DashboardFooter />
    </>
  );
};

export default TrainingClassesLayout;
