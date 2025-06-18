import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router"
import { logout } from "../../redux/authSlice"
import { userGetOne } from "../../redux/userSlice";
import { MdAssignmentAdd } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { RiDashboardFill } from "react-icons/ri";
import { LuDog } from "react-icons/lu";
import DogAddModal from "../modals/DogAddModal";




const UserSideNav = ({ loggedInEmail }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.users);
  // console.log("user.email", user.email)
  // const loggedInEmail = user.email
  const [ loading, setLoading ] = useState(true)
  // const userId = user.id
  // console.log("userId in UserSideNav", userId)
  const [showAddDogModal, setShowAddDogModal] = useState(false)


  useEffect(() => {
    dispatch(userGetOne(loggedInEmail))
  }, [])
  // console.log("user", user)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = async () => {
    // Get token before delete it
    const token = sessionStorage.getItem("token");
    if (token) {
      const logoutToken = token.split(",")[0];
      dispatch(logout(logoutToken));
    }
    dispatch(chatLogout())
    // Make service call to logout
  };
  

  return (
    <>
    {!loading && (
      <div className="md:px-[13vw]">
      <aside
      className=" md:py-8 mt-16 fixed z-40 w-80 h-[60vh] py-3 transition-transform -translate-x-full bg-white border rounded-xl border-neutral-200 md:translate-x-0 dark:bg-neutral-800 dark:border-neutral-700 font-instrument drop-shadow-xl drop-shadow-neutral-300 dark:drop-shadow-black animate__animated animate__fadeInLeft"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-5 px-3 min-h-full bg-white dark:bg-neutral-800">
        <form action="#" method="GET" className="md:hidden mb-2">
          <label htmlFor="sidebar-search" className="sr-only">Search</label>
          <div className="relative">
            <div
              className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <svg
                className="w-5 h-5 text-neutral-500 dark:text-neutral-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              name="search"
              id="sidebar-search"
              className="bg-teal-400 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
        </form>

        <div className="flex space-x-4 px-2 pb-5">
        {user.avatar ? (
                    <img
                      src={`${user.avatar}`}
                      className="h-16 w-16 rounded-lg"
                    />
                  ) : (
                    <svg
                    className="h-16 w-16 me-3 text-neutral-200 dark:text-neutral-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  )}

                  {/* <img
                    className="h-16 w-16 rounded-lg"
                    src={`${user.avatar}`}
                    alt="Helene avatar"
                  /> */}
                  <div>
                    {/* <span className="mb-2 inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                      {" "}
                      PRO Account{" "}
                    </span> */}
                    <h2 className="flex items-center text-xl font-bold text-neutral-900 dark:text-white sm:text-2xl">
                      {user.firstName}{" "}{user.lastName}
                    </h2>
                    <h2 className="flex items-center text-base leading-none text-neutral-900 dark:text-white lg:text-base">
                      {user.email}
                    </h2>
                    
                  </div>
                </div>
        
        <ul className="space-y-2">
          
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-base font-medium text-neutral-900 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 group"
            >
             {/* <LuLayoutDashboard size={25} /> */}
             <RiDashboardFill size={25} className="text-teal-400 dark:text-lime-400" />


              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to={`/user/${user.id}`}
              className="flex items-center p-2 text-base font-medium text-neutral-900 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 group"
            >
              <ImProfile size={25} className="text-teal-400 dark:text-lime-400" />

              <span className="flex-1 ml-3 whitespace-nowrap">Edit Profile</span> 
            </Link>
          </li>
          <li>
            <Link
              to="/enroll"
              className="flex items-center p-2 text-base font-medium text-neutral-900 rounded-lg transition duration-75 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:text-white group"
            >
              

              {/* <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#beb09d" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg> */}
              <div className="">
              <MdAssignmentAdd size={25} className="text-teal-400 dark:text-lime-400" />
              </div>
              <span className="ml-3">Enroll In A Class</span>
            </Link>
          </li>

          <li>
            <div
              onClick={() => setShowAddDogModal(true)}
              className="flex items-center p-2 text-base font-medium text-neutral-900 rounded-lg transition duration-75 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:text-white group"
            >
              <LuDog size={25} className="text-teal-400 dark:text-lime-400" />
              <span className="flex-1 ml-3">Add Dog</span>
              {/* <span className="float-right inline-flex items-center justify-center w-2 h-2 p-2 ms-3 text-xs font-medium text-white bg-stone-600 rounded-full dark:bg-stone-900 dark:text-purple-300">number</span> */}
            </div>
          </li>
          {/* <li>
            <button
              type="button"
              className="flex items-center p-2 w-full text-base font-medium text-neutral-900 rounded-lg transition duration-75 group hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-neutral-500 transition duration-75 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Pages</span>
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <ul id="dropdown-pages" className="hidden py-2 space-y-2">
              <li>
                <Link
                  to="#"
                  className="flex items-center p-2 pl-11 w-full text-base font-medium text-neutral-900 rounded-lg transition duration-75 group hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"
                  >Settings</Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center p-2 pl-11 w-full text-base font-medium text-neutral-900 rounded-lg transition duration-75 group hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"
                  >Kanban</Link>
                
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center p-2 pl-11 w-full text-base font-medium text-neutral-900 rounded-lg transition duration-75 group hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"
                  >Calendar</Link>
                
              </li>
            </ul>
          </li> */}
          
          {/* <li>
            <Link
              to="#"
              className="flex items-center p-2 text-base font-medium text-neutral-900 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 group"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-neutral-500 transition duration-75 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                ></path>
                <path
                  d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
              <span
                className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800"
              >
                4
              </span>
            </Link>
          </li> */}
        </ul>
        <ul
          className="pt-5 mt-5 space-y-2 border-t border-neutral-200 dark:border-neutral-700"
        >
          
          <li>
            <Link
              to="/login"
              className="flex items-center p-2 text-base font-medium text-neutral-900 rounded-lg transition duration-75 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:text-white group"
            >
              <LuLogOut size={25} className="text-teal-400 dark:text-lime-400" />

              <span onClick={handleLogout} className="ml-3">Logout</span>
            </Link>
          </li>
          {/* <li>
            <Link
              to="#"
              className="flex items-center p-2 text-base font-medium text-neutral-900 rounded-lg transition duration-75 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:text-white group"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-neutral-500 transition duration-75 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-3">Help</span>
            </Link>
          </li> */}
        </ul>
      </div>
      <div
        className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-neutral-800 z-20 rounded-xl"
      >
        <Link
          to="#"
          className="inline-flex justify-center p-2 text-teal-400 dark:text-lime-400 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-600"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
            ></path>
          </svg>
        </Link>
        <Link
          to="#"
          data-tooltip-target="tooltip-settings"
          className="inline-flex justify-center p-2 text-teal-400 dark:text-lime-400 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-600"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <div
          id="tooltip-settings"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-neutral-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
        >
          Settings page
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        

        {/* <!-- Dropdown --> */}
        <div
          className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-neutral-100 shadow dark:bg-neutral-700"
          id="language-dropdown"
        >
          <ul className="py-1" role="none">
            <li>
              <Link
                to="#"
                className="block py-2 px-4 text-sm text-neutral-700 hover:bg-neutral-100 dark:hover:text-white dark:text-neutral-300 dark:hover:bg-neutral-600"
                role="menuitem"
              >
                <div className="inline-flex items-center">
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5 rounded-full mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    id="flag-icon-css-us"
                    viewBox="0 0 512 512"
                  >
                    <g fillRule="evenodd">
                      <g strokeWidth="1pt">
                        <path
                          fill="#bd3d44"
                          d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)"
                        />
                        <path
                          fill="#fff"
                          d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)"
                        />
                      </g>
                      <path
                        fill="#192f5d"
                        d="M0 0h98.8v70H0z"
                        transform="scale(3.9385)"
                      />
                      <path
                        fill="#fff"
                        d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                        transform="scale(3.9385)"
                      />
                    </g>
                  </svg>
                  English (US)
                </div>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </aside>
    </div>
    )}

<div className="">
{showAddDogModal && (
        <DogAddModal
          setShowAddDogModal={setShowAddDogModal}
          loggedInEmail={loggedInEmail}
        />
      )}</div>
    </>
  )
}

export default UserSideNav