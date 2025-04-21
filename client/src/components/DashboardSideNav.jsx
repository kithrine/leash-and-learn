import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { trainingClassGetMany } from '../redux/trainingClassSlice';
import BMSideNav from './navigation/BMSideNav';
import TrainerSideNav from "./navigation/TrainerSideNav"
// import UserSideBar from '../components/UserSideBar';


const DashboardSideNav = () => {

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
    // console.log("user", user)
    dispatch(trainingClassGetMany(user.username))
  }, [])
  

  return (
    <>
    {user.role.includes("Business Manager") &&
    (<BMSideNav />) }

    {user.role.includes("Trainer") &&
    (<TrainerSideNav />) }

    {/* {user.role.includes("User") &&
    (<UserSideBar />) } */}
    </>
    
  );
  
};

export default DashboardSideNav;