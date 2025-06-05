import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { trainingClassGetMany } from '../redux/trainingClassSlice';
import BMDashboard from '../components/BM/BMDashboard';
import TrainerDashboard from '../components/Trainer/TrainerDashboard';
import UserDashboard from '../components/User/UserDashboard';
import DashboardFooter from '../components/footers/DashboardFooter';
import BMSideNav from '../components/navigation/BMSideNav';


const DashboardLayout = () => {

  const dispatch = useDispatch()
  const { trainingClasses } = useSelector((state) => state.trainingClass);
  const { user } = useSelector(state => state.auth)
  // console.log("Dashboard user:", user)

  // console.log("user.email", user.email)
  const loggedInEmail = user.email
  const userId = user.id

  if (user.role.includes("Business Manager")) {
    // console.log("Business Manager")
  } else if (user.role.includes("Trainer")) {
    // console.log("Trainer")
  } else {
    // console.log("User")
  }

  useEffect(() => {
    // console.log("user", user)
    // dispatch(trainingClassGetMany(user.username))
    // console.log("TRAINING CLASSES WITH KIT", trainingClasses)
  }, [])
  

  return (
    <>
    {user.role.includes("Business Manager") &&
    (<><BMDashboard loggedInEmail={loggedInEmail} /></>) }

    {user.role.includes("Trainer") &&
    (<TrainerDashboard loggedInEmail={loggedInEmail} />) }

    {user.role.includes("User") &&
    (<UserDashboard loggedInEmail={loggedInEmail} userId={userId} />) }
    </>
    
  );
  
};

export default DashboardLayout;
