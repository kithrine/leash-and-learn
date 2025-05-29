import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Routes, Route } from "react-router"
import NavBar from "./components/navigation/NavBar"
import PrivateRoute from "./components/PrivateRoute"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import FAQ from "./pages/FAQ"
import DashboardSideNavLayout from "./layouts/DashboardSideNavLayout"
import Dashboard from "./pages/Dashboard"
import TrainingClasses from "./pages/TrainingClasses"
import TrainingClassDetail from "./pages/TrainingClassDetail"
import CreateForm from "./pages/CreateForm"
import Inbox from "./pages/inbox/Inbox"
import PageNotFound from "./pages/PageNotFound"
import { checkLogin } from "./redux/authSlice"
import authService from "./redux/authService"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"
import { userGetAll } from "./redux/userSlice"
import BlogHomepage from "./pages/blog/BlogHomepage"
import BlogList from "./pages/blog/BlogList"
import AddBlog from "./pages/blog/AddBlog"
import BlogDetail from "./pages/blog/BlogDetail"
import UserEditProfile from "./components/User/UserEditProfile"
import ChatButton from "./components/chat/chatButton"
import InboxDetail from "./pages/inbox/InboxDetail"

function App() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { users } = useSelector((state) => state.users)
  

  useEffect(() => {
    dispatch(userGetAll())
  }, [])

  useEffect(() => {
    if (user.token) {
      const checkToken = async () => {
        const loginToken = user.token.split(",")[0]
        dispatch(checkLogin(loginToken))
      }
      checkToken()
    }
  }, [])

  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) return storedTheme // Use stored theme if available

    // If no stored theme, respect OS preference:
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }
  const [theme, setTheme] = useState(getInitialTheme())

  const toggleTheme = () => {
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light'); // Update localStorage 
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light'); // Update state and re-render     
  }

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
      <div className={`${theme}`}>
      <ToastContainer />
      <NavBar theme={theme} setTheme={setTheme} toggleTheme={toggleTheme} />
      <ChatButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp users={users} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog-homepage" element={<BlogHomepage />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardSideNavLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user/:id" element={<UserEditProfile />} />
            <Route path="/training-classes" element={<TrainingClasses />} />
            <Route
              path="/training-classes/:id"
              element={<TrainingClassDetail />}
            />
            <Route path="/create-training-class" element={<CreateForm />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/inbox/:id" element={<InboxDetail />} />
          </Route>
          <Route path="/create-blog" element={<AddBlog />} />
        </Route>
        {/* <Route element={<SomeOtherLayout />}>
            <Route path="/dashboard" element={<UserDashboard />} />
          </Route> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </div>
    </>
  )
}

export default App
