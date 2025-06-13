import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { authLogin } from "../redux/authSlice";
import * as motion from "motion/react-client"
import Footer from "../components/footers/Footer";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [ spinner, setSpinner ] = useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, isLoggedIn, user } = useSelector((state) => state.auth);

  const storedTheme = localStorage.getItem('theme'); 

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false)
    }, 2000)
  }, []);

  useEffect(() => {
    console.log("useEffect", isLoggedIn);
    if (isLoggedIn && user.token) {
      // sessionStorage.setItem("token", user.token); // Store token
      navigate("/dashboard"); // Navigate to dashboard
    }
  }, [isLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    // Validation
    if (loginForm.email === "" || loginForm.password === "") {
      // Show error message/styling
      console.log("form error");
    } else {
      dispatch(authLogin({ ...loginForm }));
      // const loginUser = await axios.post(`${import.meta.env.VITE_NODE_SERVER_URL}/users/login`, { ...loginForm })
      // console.log("loginUser:", loginUser)
      // // Destructure success and user for the "if" statement
      // const { success, user } = loginUser.data
      // // If login succeeded and token exists
      // if (success && user.token) {
      //   // Set Session Storage
      //   sessionStorage.setItem("token", user.token) // Store token
      //   navigate("/dashboard") // Navigate to dashboard
      // } else {
      //   // Some error message
      // }
    }
    // Login
  };

  return (
    // ***** IF NOT LOADING
    <>
      {!loading ? (
        <>
          <section className={`dark:bg-gray-900 pt-30 pb-15 ${storedTheme === "light" ? "light-gray-moroccan-bg" : "dark-gray-moroccan-bg"} transition-colors ease-in-out duration-200`}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[78vh] lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-neutral-800 dark:border-neutral-700 drop-shadow-2xl dark:drop-shadow-black transition-colors ease-in-out duration-200">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-neutral-900 md:text-2xl dark:text-white font-lexend uppercase text-center">
                    Sign in to your account
                  </h1>
                  <p className="text-lg text-neutral-700 dark:text-neutral-100 font-learn leading-tight font-bold tracking-wider">*NOTE: You must have an account in order to enroll in a training class, post a blog, or leave comments on a blog.</p>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        value={loginForm.email}
                        onChange={(e) =>
                          setLoginForm({
                            ...loginForm,
                            email: e.target.value, 
                          })
                        }
                        type="email"
                        name="email"
                        id="email"
                        className="bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
                        placeholder="name@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        value={loginForm.password}
                        onChange={(e) =>
                          setLoginForm({
                            ...loginForm,
                            password: e.target.value,
                          })
                        }
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-neutral-300 rounded bg-neutral-50 focus:ring-3 focus:ring-primary-300 dark:bg-neutral-700 dark:border-neutral-600 dark:focus:ring-primary-600 dark:ring-offset-neutral-800"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-neutral-500 dark:text-neutral-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-gray-600 hover:underline dark:text-gray-300"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="w-full text-white bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-500 transition-colors ease-in-out duration-200"
                      disabled={loading}
                    >
                      Sign in
                    </motion.button>
                    <p className="text-sm font-light text-neutral-500 dark:text-neutral-400">
                      Don’t have an account yet?{" "}
                      <Link
                        to="/sign-up"
                        className="font-medium text-violet-600 hover:underline dark:text-yellow-400"
                      >
                        Sign up
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        // ***** IF LOADING
        <>
        <section className={`dark:bg-gray-900 pt-30 pb-15 ${storedTheme === "light" ? "light-gray-moroccan-bg" : "dark-gray-moroccan-bg"} transition-colors ease-in-out duration-200`}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[78vh] lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-neutral-800 dark:border-neutral-700 drop-shadow-2xl dark:drop-shadow-black transition-colors ease-in-out duration-200">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-neutral-900 md:text-2xl dark:text-white font-lexend uppercase text-center">
                    Sign in to your account
                  </h1>
                  <p className="text-lg text-neutral-700 dark:text-neutral-100 font-learn leading-tight font-bold tracking-wider">*NOTE: You must have an account in order to enroll in a training class, post a blog, or leave comments on a blog.</p>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        value={loginForm.email}
                        onChange={(e) =>
                          setLoginForm({
                            ...loginForm,
                            email: e.target.value, 
                          })
                        }
                        type="email"
                        name="email"
                        id="email"
                        className="bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
                        placeholder="name@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        value={loginForm.password}
                        onChange={(e) =>
                          setLoginForm({
                            ...loginForm,
                            password: e.target.value,
                          })
                        }
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-neutral-300 rounded bg-neutral-50 focus:ring-3 focus:ring-primary-300 dark:bg-neutral-700 dark:border-neutral-600 dark:focus:ring-primary-600 dark:ring-offset-neutral-800"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-neutral-500 dark:text-neutral-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-gray-600 hover:underline dark:text-gray-300"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="w-full text-white bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-500 transition-colors ease-in-out duration-200"
                      disabled={loading}
                    >
                      Sign in
                    </motion.button>
                    <p className="text-sm font-light text-neutral-500 dark:text-neutral-400">
                      Don’t have an account yet?{" "}
                      <Link
                        to="/sign-up"
                        className="font-medium text-violet-600 hover:underline dark:text-yellow-400"
                      >
                        Sign up
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
           <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
           <svg aria-hidden="true" className="w-8 h-8 text-neutral-200 animate-spin dark:text-neutral-600 fill-teal-500 dark:fill-lime-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
           <span className="sr-only">Loading...</span>
       </div>
       </>
      )}
      <Footer />
    </>
  );
};

export default Login;
