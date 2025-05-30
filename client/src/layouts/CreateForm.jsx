import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import TrainingClassCreateForm from '../components/BM/TrainingClassCreateForm';
import DashboardFooter from '../components/footers/DashboardFooter';


const CreateForm = () => {

  const { user } = useSelector(state => state.auth)
  // console.log("user:", user)

  // if (user.role.includes("Business Manager")) {
  //   console.log("Business Manager")
  // } else if (user.role.includes("Trainer")) {
  //   console.log("Trainer")
  // } else {
  //   console.log("User")
  // }

  return (
    <>
    {user.role.includes("Business Manager") &&
    (<TrainingClassCreateForm />) }
{/* 
    {user.role.includes("Trainer") &&
    (<TrainerCreateForm />) }

    {user.role.includes("User") &&
    (<UserCreateForm />) } */}

    </>
    
  );
  
};

export default CreateForm;