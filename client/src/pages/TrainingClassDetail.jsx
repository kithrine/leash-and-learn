import { useSelector } from "react-redux";
import BMDetail from "../components/BM/BMDetail";
import TrainerDetail from "../components/Trainer/TrainerDetail";

const TrainingClassDetail = () => {
  const { user } = useSelector(state => state.auth)
  
  if (user.role.includes("Business Manager")) {
    console.log("Business Manager")
  } else if (user.role.includes("Trainer")) {
    console.log("Trainer")
  } else {
    console.log("User")
  }

  return (
    <div className="md:ml-64 mt-20">
      {user.role.includes("Business Manager") ? 
      (<BMDetail />) 
      :
      (<TrainerDetail />)
    }
    </div>
  );
};

export default TrainingClassDetail;
