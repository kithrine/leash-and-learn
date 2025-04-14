import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import BMCreateForm from '../components/BM/BMCreateForm';
import DashboardFooter from '../components/footers/DashboardFooter';


const CreateForm = () => {

  const { user } = useSelector(state => state.auth)
  console.log("user:", user)

  if (user.role.includes("Business Manager")) {
    console.log("Business Manager")
  } else if (user.role.includes("Trainer")) {
    console.log("Trainer")
  } else {
    console.log("User")
  }

  return (
    <>
    {user.role.includes("Business Manager") &&
    (<BMCreateForm />) }
{/* 
    {user.role.includes("Trainer") &&
    (<TrainerCreateForm />) }

    {user.role.includes("User") &&
    (<UserCreateForm />) } */}

    </>
    
  );
  
};

export default CreateForm;