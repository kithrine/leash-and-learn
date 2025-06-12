import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { chatLogout } from "../../redux/chatSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"

const NavBar = ({ theme, setTheme, toggleTheme}) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { isLoggedIn } = useSelector((state) => state.auth);
  // console.log("location:", location);

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
      <nav className="shadow fixed left-0 right-0 top-0 z-50 bg-white border-gray-200 dark:bg-neutral-900">
        {/* Add this to the above navbar element to make it overlap/lay on top of the sidebar: fixed left-0 right-0 top-0 z-50 */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex justify-around items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="absolute">
              <svg
                className=" navbar-paw animate-pulse absolute"
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="30"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#725f4f"
                  d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
                />
              </svg>
              <div className="flex flex-col">
                <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                  <span className="leash mr-1">Leash </span>{" "}
                  <span className="and text-sm relative text-white">&</span>{" "}
                  <span className="learn ml-1"> learn</span>
                </span>
                <span className="dog-training text-center text-xs font-bold -mt-2 text-gray-800 dark:text-gray-400">
                  DOG TRAINING
                </span>
              </div>
            </div>
          </Link>

          {/* AVATAR AND DROPDOWN FOR AVATAR */}
          {/* <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button> */}
            {/* <!-- Dropdown menu --> */}
            {/* <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div> */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-neutral-900 dark:border-neutral-700">
              {/* <div className="flex flex-row space-between p-4"> */}

              {/* HOME */}
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 ${
                    location.pathname === "/"
                      ? "bg-purple-300 md:bg-transparent md:text-purple-300"
                      : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              {/* ABOUT */}
              {/* <li>
                <Link
                  to="/about"
                  className={`block py-2 px-3 ${
                    location.pathname === "/about"
                      ? "bg-purple-300 md:bg-transparent md:text-purple-300"
                      : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  About
                </Link>
              </li> */}

              {/* SERVICES */}
              {/* <li>
                <Link
                  to="/services"
                  className={`block py-2 px-3 ${
                    location.pathname === "/services"
                      ? "bg-purple-300 md:bg-transparent md:text-purple-300"
                      : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Services
                </Link>
              </li> */}

              {/* SUCCESS STORIES */}
              {/* <li>
                <Link
                  to="/success-stories"
                  className={`block py-2 px-3 ${
                    location.pathname === "/success-stories"
                      ? "bg-purple-300 md:bg-transparent md:text-purple-300"
                      : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Success Stories
                </Link>
              </li> */}

              {/* FAQ */}
              <li>
                <Link
                  to="/FAQ"
                  className={`block py-2 px-3 ${
                    location.pathname === "/FAQ"
                      ? "bg-purple-300 md:bg-transparent md:text-purple-300"
                      : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  FAQ
                </Link>
              </li>

              {/* BLOG */}
              <li>
                <Link
                  to="/blog-homepage"
                  className={`block py-2 px-3 ${
                    location.pathname === "/blog-homepage"
                      ? "bg-purple-300 md:bg-transparent md:text-purple-300"
                      : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Blog
                </Link>
              </li>

              {/* CONTACT US */}
              <li>
                <Link
                  to="/contact-us"
                  className={`block py-2 px-3 ${
                    location.pathname === "/contact-us"
                      ? "bg-purple-300 md:bg-transparent md:text-purple-300"
                      : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Contact Us
                </Link>
              </li>

              {/* DASHBOARD */}
              <li>
                <Link
                  to="/dashboard"
                  className={`block py-2 px-3 ${
                    location.pathname === "/dashboard"
                      ? "bg-purple-300 md:bg-transparent md:text-purple-300"
                      : "text-gray-900"
                  } mr-60 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Dashboard
                </Link>
              </li>
              {/* </div> */}

              {/* LOGIN/LOGOUT */}
              <li>
                {!isLoggedIn ? (
                  <Link
                    to="/login"
                    className={`block py-2 px-3 ${
                      location.pathname === "/login"
                        ? "bg-purple-300 md:bg-transparent md:text-purple-300"
                        : "text-gray-900"
                    } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    Login
                  </Link>
                ) : (
                  <span
                    onClick={handleLogout}
                    className={`block py-2 px-3 ${
                      location.pathname === "/login"
                        ? "bg-purple-300 md:bg-transparent md:text-purple-300"
                        : "text-gray-900"
                    } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer`}
                  >
                    Logout
                  </span>
                )}
              </li>
            </ul>
            {/* DARK/LIGHT MODE BUTTON */}
            {/* <button
                onClick={toggleTheme}
                className={`p-2 transition-colors duration-500 rounded-full ${
                  darkMode
                    ? "hover:bg-gray-700"
                    : "bg-gray-200 hover:bg-gray-300"
                } hover:bg-gray-200 dark:hover:bg-gray-700`}>
                {darkMode ? (
                  <SunIcon className="w-6 h-6" />
                ) : (
                  <MoonIcon className="w-6 h-6" />
                )}
              </button> */}
              <button 
                onClick={toggleTheme}
                className={`p-2 transition-colors duration-500 rounded-full 
               bg-gray-200 hover:bg-gray-300
             dark:bg-gray-500 dark:hover:bg-gray-700`}>
              {theme === "dark" ? (
                <SunIcon className="w-6 h-6" />
              )
                :
                (
                  <MoonIcon className="w-6 h-6" />
                )
              }
              </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
