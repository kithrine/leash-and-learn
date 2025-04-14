import { Navigate, Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";

const PrivateRoute = () => {
  const { loading, isLoggedIn, user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const token = sessionStorage.getItem("token")
  // if (token) {
  //   const checkToken = async () => {
  //     const loginToken = token.split(",")[0]
  //     // const getToken = await authService.checkLogin(loginToken)
  //     dispatch(checkLogin(loginToken))
  //     // console.log("getToken:", getToken)
  //   }
  //   checkToken()
  // }

  // If auth is pending and state is loading
  if (loading) {
    // Do a skeleton here (*in a component, and return the component)
    return <div>Loading ... </div>
  }

  // If user is logged in
  if (token || isLoggedIn) {
    return <Outlet />
  } 
  // If user is not logged in, navigate to login page
  else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoute