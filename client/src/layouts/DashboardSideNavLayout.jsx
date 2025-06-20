import { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { trainingClassGetAll, trainingClassGetMany } from "../redux/trainingClassSlice";
import { contactGetAll } from "../redux/contactSlice";
import BMTrainerSideNav from "../components/navigation/BMTrainerSideNav";
import UserSideNav from "../components/navigation/UserSideNav";

const DashboardSideNavLayout = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);
  // const { contact } = useSelector((state) => state.contact)
  const loggedInEmail = user.email
  const userId = user.id

  
  useEffect(() => {
    console.log("$$$$$$$$$$ testing userID", userId)

  }, [])
  

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
          <BMTrainerSideNav loggedInEmail={loggedInEmail} />
        </>
      )}

      {user.role.includes("Trainer") && (
        <>
          {/* <TrainerDashboard /> */}
          <BMTrainerSideNav loggedInEmail={loggedInEmail} />
        </>
      )}

      {user.role.includes("User") && <UserSideNav loggedInEmail={loggedInEmail} userId={userId} />}

      <Outlet />
    </>
  );
};

export default DashboardSideNavLayout;
