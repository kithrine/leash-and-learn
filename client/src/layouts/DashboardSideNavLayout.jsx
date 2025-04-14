import { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import BMDashboard from '../components/BMDashboard';
import TrainerDashboard from '../components/TrainerDashboard';
import TrainerSideBar from "../components/TrainerSideBar";
import UserDashboard from '../components/UserDashboard';
import DashboardFooter from '../components/DashboardFooter';
import BMSideBar from '../components/BMSideBar';
import { trainingClassGetAll, trainingClassGetMany } from "../redux/trainingClassSlice";
import { contactGetAll } from "../redux/contactSlice";

const DashboardSideNavLayout = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);
  // const { contact } = useSelector((state) => state.contact)


  useEffect(() => {
    console.log("user", user)
    if (user.role.includes("Business Manager")) {
      dispatch(trainingClassGetAll())
    } else {
      dispatch(trainingClassGetMany(user.username))
    
    }
  }, [])

  useEffect(() => {
    if (user.role.includes("Business Manager")) {
      dispatch(contactGetAll())
    } else if (user.role.includes("Trainer")) {
      dispatch(contactGetAll())
    }
  }, [])


  
  return (
    <>
      {/* <!-- Sidebar --> */}
      {user.role.includes("Business Manager") && (
        <>
          {/* <BMDashboard /> */}
          <BMSideBar />
        </>
      )}

      {user.role.includes("Trainer") && (
        <>
          {/* <TrainerDashboard /> */}
          <TrainerSideBar />
        </>
      )}

      {user.role.includes("User") && <UserDashboard />}

      <Outlet />
    </>
  );
};

export default DashboardSideNavLayout;
