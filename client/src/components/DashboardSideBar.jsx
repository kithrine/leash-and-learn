import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { trainingClassGetMany } from '../redux/trainingClassSlice';
import BMSideBar from '../components/BMSideBar';
import TrainerSideBar from '../components/TrainerSideBar';
// import UserSideBar from '../components/UserSideBar';


const DashboardSideBar = () => {

  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  console.log("user:", user)

  if (user.role.includes("Business Manager")) {
    console.log("Business Manager")
  } else if (user.role.includes("Trainer")) {
    console.log("Trainer")
  } else {
    console.log("User")
  }

  useEffect(() => {
    console.log("user", user)
    dispatch(trainingClassGetMany(user.username))
  }, [])
  

  return (
    <>
    {user.role.includes("Business Manager") &&
    (<BMSideBar />) }

    {user.role.includes("Trainer") &&
    (<TrainerSideBar />) }

    {/* {user.role.includes("User") &&
    (<UserSideBar />) } */}
    </>
    
  );
  
};

export default DashboardSideBar;