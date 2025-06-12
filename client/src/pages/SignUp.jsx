import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { userGetAll } from "../redux/userSlice"
import { userCreate } from "../redux/userSlice"
import * as motion from "motion/react-client"
import TACModal from "../components/modals/TACModal"
import Footer from "../components/footers/Footer"
import EmailAccountAlert from "../components/alerts/EmailAccountAlert"
import PasswordAccountAlert from "../components/alerts/PasswordAccountAlert"
import UsernameAccountAlert from "../components/alerts/UsernameAccountAlert"

const SignUp = ({ users }) => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  const [message, setMessage] = useState("")
  const [showEmailAccountAlert, setShowEmailAccountAlert] = useState(false)
  const [showUsernameAccountAlert, setShowUsernameAccountAlert] = useState(false)
  const [showPasswordAlert, setShowPasswordAlert] = useState(false)
  const [showTACModal, setShowTACModal] = useState(false)
  const [ signUpForm, setSignUpForm ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  })

  const storedTheme = localStorage.getItem('theme'); 

  useEffect(() => {
    dispatch(userGetAll())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    let checkEmail = users.filter((user) => user.email === signUpForm.email).map((user) => {return user.email}).join()

    let checkUsername = users.filter((user) => user.username === signUpForm.username).map((user) => {return user.username}).join()

    console.log("checkEmail", checkEmail)

    if (signUpForm.confirmPassword === signUpForm.password && checkEmail !== signUpForm.email && checkUsername !== signUpForm.username) {
      let userForm = {
        firstName: signUpForm.firstName,
        lastName: signUpForm.lastName,
        email: signUpForm.email,
        username: signUpForm.username,
        password: signUpForm.password,
        role: "User"
      }
      console.log("userForm form sign up", userForm)
      dispatch(userCreate(userForm))
      navigate("/login")
    } else if (checkEmail === signUpForm.email) {
      setShowEmailAccountAlert(true)
    } else if (checkUsername === signUpForm.username) {
      setShowUsernameAccountAlert(true)
    } else if (signUpForm.confirmPassword !== signUpForm.password) {
      setShowPasswordAlert(true)
    }
  }
  

  return (
    <>
      <section className={`bg-neutral-50 dark:bg-neutral-900 pt-12 ${storedTheme === "light" ? "light-gray-moroccan-bg" : "dark-gray-moroccan-bg"} transition-colors ease-in-out duration-200`}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <h1><span className="font-leash text-5xl">Leash</span> <span className="font-and">&</span> <span className="font-learn uppercase text-4xl">learn</span></h1>
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-neutral-800 dark:border-neutral-700 drop-shadow-2xl dark:drop-shadow-black transition-colors ease-in-out duration-200">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-neutral-900 md:text-2xl dark:text-white font-lexend uppercase">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-row space-x-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                      First Name
                    </label>
                    <input
                    value={signUpForm.firstName}
                    onChange={(e) =>
                      setSignUpForm({
                        ...signUpForm,
                        firstName: e.target.value, 
                      })
                    }
                      name="firstName"
                      id="firstName"
                      className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="First Name"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                      Last Name
                    </label>
                    <input
                    value={signUpForm.lastName}
                    onChange={(e) =>
                      setSignUpForm({
                        ...signUpForm,
                        lastName: e.target.value, 
                      })
                    }
                      name="lastName"
                      id="lastName"
                      className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Last Name"
                      required=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                    Username
                  </label>
                  <input
                  value={signUpForm.username}
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
                      username: e.target.value, 
                    })
                  }
                    type="text"
                    name="username"
                    id="username"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    required=""
                  autoComplete="username"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                    Email
                  </label>
                  <input
                  value={signUpForm.email}
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
                      email: e.target.value, 
                    })
                  }
                    type="email"
                    name="email"
                    id="email"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@email.com"
                    required=""
                    autoComplete="email"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                    Password
                  </label>
                  <input
                  value={signUpForm.password}
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
                      password: e.target.value, 
                    })
                  }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                    Confirm password
                  </label>
                  <input
                  value={signUpForm.confirmPassword}
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
                      confirmPassword: e.target.value, 
                    })
                  }
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-1 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <p
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300">
                      I accept the{" "}
                      <span 
                      onClick={() => {setShowTACModal(true)}}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                        >
                        Terms and Conditions
                      </span>
                    </p>
                  </div>
                </div>
                <div>{showEmailAccountAlert ? <EmailAccountAlert/> : showPasswordAlert ? <PasswordAccountAlert /> :showUsernameAccountAlert ? <UsernameAccountAlert /> : null}</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full text-white bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-500 dark:hover:bg-lime-600 dark:focus:ring-stone-800 transition-colors ease-in-out duration-200">
                  Create an account
                </motion.button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-violet-600 hover:underline dark:text-yellow-400">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {showTACModal && <TACModal setShowTACModal={setShowTACModal} />}
    </>
  )
}

export default SignUp
