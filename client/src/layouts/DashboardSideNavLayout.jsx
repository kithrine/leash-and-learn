import { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import BMDashboard from '../components/BM/BMDashboard';
import TrainerDashboard from '../components/Trainer/TrainerDashboard';
import TrainerSideNav from "../components/navigation/TrainerSideNav";
import UserDashboard from "../components/User/UserDashboard";
import DashboardFooter from '../components/footers/DashboardFooter';
import BMSideNav from "../components/navigation/BMSideNav";
import { trainingClassGetAll, trainingClassGetMany } from "../redux/trainingClassSlice";
import { contactGetAll } from "../redux/contactSlice";
import UserSideNav from "../components/navigation/UserSideNav";

const DashboardSideNavLayout = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);
  // const { contact } = useSelector((state) => state.contact)


  useEffect(() => {
    // console.log("user", user)
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
          <BMSideNav />
        </>
      )}

      {user.role.includes("Trainer") && (
        <>
          {/* <TrainerDashboard /> */}
          <TrainerSideNav />
        </>
      )}

      {/* {user.role.includes("User") && <UserSideNav />} */}

      <Outlet />
    </>
  );
};

export default DashboardSideNavLayout;
