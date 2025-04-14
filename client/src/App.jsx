import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router";
import NavBar from "./components/navigation/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import DashboardSideNavLayout from "./layouts/DashboardSideNavLayout";
import Dashboard from "./pages/Dashboard";
import TrainingClasses from "./pages/TrainingClasses";
import TrainingClassDetail from "./pages/TrainingClassDetail"
import CreateForm from "./pages/CreateForm";
import Inbox from "./pages/Inbox"
import PageNotFound from "./pages/PageNotFound";
import { checkLogin } from "./redux/authSlice";
import authService from "./redux/authService";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

    useEffect(() => {
    if (user.token) {
      const checkToken = async () => {
        const loginToken = user.token.split(",")[0];
        dispatch(checkLogin(loginToken));
      };
      checkToken();
    }
  }, []);

  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   if (token) {
  //     const checkToken = async () => {
  //       const loginToken = token.split(",")[0];
  //       dispatch(checkLogin(loginToken));
  //       // console.log("getToken:", getToken)
  //     };
  //     checkToken();
  //   }
  // }, []);

  return (
    <>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardSideNavLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/training-classes" element={<TrainingClasses />} />
          <Route path="/training-classes/:id" element={<TrainingClassDetail />} />
          <Route path="/create-training-class" element={<CreateForm />} />
          <Route path="/inbox" element={<Inbox />} />
          </Route>
        </Route>
          {/* <Route element={<SomeOtherLayout />}>
            <Route path="/dashboard" element={<UserDashboard />} />
          </Route> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
