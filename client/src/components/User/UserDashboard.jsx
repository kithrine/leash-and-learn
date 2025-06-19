import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate, useParams } from "react-router"
import { trainingClassGetAll } from "../../redux/trainingClassSlice"
import { deleteDog, userGetOne } from "../../redux/userSlice"
import * as motion from "motion/react-client"
import { SiDatadog } from "react-icons/si"
import { LiaBirthdayCakeSolid } from "react-icons/lia"
import { FaBirthdayCake } from "react-icons/fa"
import DogAddModal from "../modals/DogAddModal"
import DogEditModal from "../modals/DogEditModal"
import DogDeleteModal from "../modals/DogDeleteModal"
import UserDashboardFooter from "../footers/UserDashboardFooter"
import GradientText from "../reactbits+framer-motion/GradientText"

const UserDashboard = ({ handleLogout, loggedInEmail }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const { id } = useParams()
  const { user } = useSelector((state) => state.users)
  const { trainingClasses } = useSelector((state) => state.trainingClass)
  // const { user } = useSelector((state) => state.users)
  const userId = user.id
  // console.log("loggedInEmail", loggedInEmail)

  const [showAddDogModal, setShowAddDogModal] = useState(false)
  const [showEditDogModal, setShowEditDogModal] = useState(false)
  const [showDeleteDogModal, setShowDeleteDogModal] = useState(false)
  // const [testDeleteModal, setTestDeleteModal] = useState(true)
  const [dogEditForm, setDogEditForm] = useState({})
  const [dogToDelete, setDogToDelete] = useState({})
  const [showDogActions, setShowDogActions] = useState(false)
  const [loading, setLoading] = useState(true)

  const storedTheme = localStorage.getItem("theme")

  useEffect(() => {
    dispatch(userGetOne(loggedInEmail))
    dispatch(trainingClassGetAll())
  }, [])

  // const enrolledArray = trainingClasses.map((trainingClass) =>
  //   trainingClass.customers.filter(
  //     (customer) => customer.email === loggedInEmail
  //   )
  // )
  // const enrolledCustomer = enrolledArray.flat(Infinity)[0].email

  // if loggoedInemail ==  trainingclasses.customer
  const enrolledTrainingClasses = trainingClasses.map((trainingClass) =>
    trainingClass.customers.length > 0 ? trainingClass : null
  )

  // trainingClasses.map((trainingClass) =>
  //   trainingClass.customers.filter((c)=>c.email==enrolledCustomer))
  // If you have a bunch of levels of an array, .flat(Infinity) puts it as one level of an array

  // useEffect(() => {
  //   console.log("user.id", user.id)
  //   // console.log("enrolledCustomer", enrolledCustomer)
  //   // console.log("enrolledArray", enrolledArray)
  //   console.log("enrolledTrainingClasses", enrolledTrainingClasses)
  //   // console.log("enrolledCustomer map", enrolledCustomer.map(class => (class.length > 0 )))
  //   // console.log("TEST",TEST)
  //   // console.log("trainingClasses", trainingClasses)
  // }, [trainingClasses])
  //  trainingClasses.map(trainingClass =>  trainingClass.customers.length>0 ?trainingClass:null

  // console.log("user & loading", user)
  // console.log("userId from Dashboard routes userId", userId)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const handleDogEditModal = (dog, id) => {
    // console.log("dog.id", dog, id)
    // setDogEditForm()
    if (dog._id === id) {
      console.log(
        "IMPORTANT INFORMATION DAWG dogEdit in handleDogEditModal",
        dog,
        id
      )
      setShowEditDogModal(true)
      setDogEditForm(dog)
    }
    console.log("dog edit form", dogEditForm)
  }

  const handleDogDeleteModal = (dog, id) => {
    console.log("dog.id handleDogDeleteModal", dog, id)
    if (dog._id === id) {
      console.log(
        "IMPORTANT INFORMATION DAWG dogDelete in handleDogDeleteModal",
        dog,
        id
      )
      setShowDeleteDogModal(true)
      setDogEditForm(dog)
    }
    console.log("dog delete dogToDelete", dogToDelete)
  }

  return (
    <>
      {loading ? (
        <div
          className={`min-h-[100vh] mt-16 ${
            storedTheme === "light" ? "light-marble-bg" : "dark-marble-bg"
          }`}></div>
      ) : (
        <section
          className={`mt-16 py-8 antialiased md:py-8 ${
            storedTheme === "light" ? "light-marble-bg" : "dark-marble-bg"
          }`}>
          <div className="md:px-[13vw] animate__animated animate__fadeIn">
            {/* <div className="flex p-8 px-[9vw]"> */}
            {/* <UserSideNav loggedInEmail={loggedInEmail}  /> */}
            {/* <div className="grid grid-cols-2 gap-8 md:ml-[16vw]">
          <div className="col-span-2 h-36 w-[66vw] bg-teal-300"></div>
          <div className="h-[30vh] w-full bg-blue-300"></div>
          <div className=""></div>
        </div>
      </div> */}

            <div className="mx-auto max-w-screen-lg px-4 2xl:px-0 md:ml-[20vw]">
              {storedTheme === "light" ? (
                <GradientText
                  colors={[
                    "#5eead4",
                    "#8b5cf6",
                    "#5eead4",
                    "#4079ff",
                    "#8b5cf6"
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="font-lexend uppercase tracking-wide text-6xl bg-transparent">
                  User Dashboard
                </GradientText>
              ) : (
                <GradientText
                  colors={[
                    "#facc15",
                    "#a3e635",
                    "#facc15",
                    "#a3e635",
                    "#22c55e"
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="font-lexend uppercase tracking-wide text-6xl bg-transparent">
                  User Dashboard
                </GradientText>
              )}
              <h2 className="mb-4 text-xl text-neutral-900 dark:text-white sm:text-3xl md:mb-6 pt-8 font-learn font-bold tracking-widest underline underline-offset-8">
                Account Overview
              </h2>

              <section class="bg-white dark:bg-neutral-900 border-t border-b border-neutral-200 dark:border-neutral-700">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                  <div class="mx-auto max-w-screen-sm text-center">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-neutral-900 dark:text-white">
                      Enroll in a Training Class Today!
                    </h2>
                    <p class="mb-4 leading-tight text-neutral-900 dark:text-white font-instrument tracking-wide">
                      Join a fun and supportive learning environment where you
                      and your dog can thrive together. Click below to find the
                      perfect class for your needs!
                    </p>

                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 font-instrument">
                      <Link
                        to="/enroll"
                        class="inline-flex justify-center items-center py-2 px-3 text-base font-medium text-center text-white dark:text-black rounded-lg bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:ring-violet-300 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                        Enroll Now
                        <svg
                          class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10">
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link>
                      <button
                        to=""
                        class="inline-flex justify-center items-center py-2 px-3 sm:ms-4 text-base font-medium text-center text-neutral-800 dark:text-neutral-200 rounded-lg border border-neutral-800 hover:bg-neutral-800 hover:text-white dark:border-neutral-300 dark:hover:bg-gray-100 dark:hover:text-neutral-900 focus:ring-4 focus:ring-gray-400 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer">
                        Add Dog
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <div className="py-4 md:py-12 md:mb-4 font-instrument">
                <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      {user.avatar ? (
                        <img
                          src={`${user.avatar}`}
                          className="size-16 rounded-full"
                        />
                      ) : (
                        <svg
                          className="size-16 me-3 text-neutral-200 dark:text-neutral-700"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                      )}
                      <div>
                        <span className="mb-2 inline-block rounded bg-teal-200 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-lime-300 dark:text-neutral-800 opacity-75">
                          {" "}
                          User Account{" "}
                        </span>
                        <h2 className="flex items-center text-xl font-bold leading-none text-neutral-900 dark:text-white sm:text-2xl">
                          {user.firstName} {user.lastName}
                        </h2>
                      </div>
                    </div>
                    <dl className="">
                      <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                        Email Address
                      </dt>
                      <dd className="text-neutral-500 dark:text-neutral-300">
                        {user.email}
                      </dd>
                    </dl>
                    <dl className="">
                      <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                        Username
                      </dt>
                      <dd className="text-neutral-500 dark:text-neutral-300">
                        {user.username}
                      </dd>
                    </dl>

                    {/* <dl>
                  <dt className="font-semibold text-neutral-900 dark:text-white">
                    Delivery Address
                  </dt>
                  <dd className="flex items-center gap-1 text-neutral-500 dark:text-neutral-300">
                    <svg
                      className="hidden h-5 w-5 shrink-0 text-neutral-300 dark:text-neutral-500 lg:inline"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                      />
                    </svg>
                    9th St. PATH Station, New York, United States of America
                  </dd>
                  </dl> */}
                  </div>
                  <div className="space-y-4">
                    <dl>
                      <dt className="font-semibold text-neutral-900 dark:text-white flex items-center gap-x-1 tracking-wider">
                        Home Address
                        <svg
                          className="hidden h-5 w-5 shrink-0 lg:inline"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                          />
                        </svg>
                      </dt>
                      <dd className="flex gap-1 text-neutral-500 dark:text-neutral-300">
                        {/* <svg
                          className="hidden h-5 w-5 shrink-0 text-neutral-300 dark:text-neutral-500 lg:inline"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                          />
                        </svg> */}
                        {user.address !== "" ? (
                          <>
                            {user.address}
                            <br />
                            {user.city}, {user.state} {user.zipCode}
                          </>
                        ) : (
                          <>
                            <p className="text-neutral-500 dark:text-neutral-300 font-thin">
                              Edit your profile details to add your address!
                            </p>
                          </>
                        )}
                      </dd>
                    </dl>
                    <dl>
                      <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                        Phone Number
                      </dt>
                      <dd className="text-neutral-500 dark:text-neutral-300">
                        {user.phoneNumber}
                      </dd>
                    </dl>
                    {/* <dl>
                  <dt className="font-semibold text-neutral-900 dark:text-white">
                    Favorite pick-up point
                  </dt>
                  <dd className="flex items-center gap-1 text-neutral-500 dark:text-neutral-300">
                    <svg
                      className="hidden h-5 w-5 shrink-0 text-neutral-300 dark:text-neutral-500 lg:inline"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
                      />
                    </svg>
                    Herald Square, 2, New York, United States of America
                  </dd>
                </dl> */}
                    {/* <dl>
                      <dt className="font-semibold text-neutral-900 dark:text-white">
                        My Companies
                      </dt>
                      <dd className="text-neutral-500 dark:text-neutral-300">
                        FLOWBITE LLC, Fiscal code: 18673557
                      </dd>
                    </dl>
                    <dl>
                      <dt className="mb-1 font-semibold text-neutral-900 dark:text-white">
                        Payment Methods
                      </dt>
                      <dd className="flex items-center space-x-4 text-neutral-500 dark:text-neutral-300">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-700">
                          <img
                            className="h-4 w-auto dark:hidden"
                            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                            alt=""
                          />
                          <img
                            className="hidden h-4 w-auto dark:flex"
                            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <div className="text-sm">
                            <p className="mb-0.5 font-medium text-neutral-900 dark:text-white">
                              Visa ending in 7658
                            </p>
                            <p className="font-normal text-neutral-500 dark:text-neutral-300">
                              Expiry 10/2024
                            </p>
                          </div>
                        </div>
                      </dd>
                    </dl> */}
                  </div>
                </div>

                <motion.button
                  onClick={() => navigate(`/user/${user.id}`)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  data-modal-target="accountInformationModal"
                  data-modal-toggle="accountInformationModal"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-teal-400 px-5 py-2.5 text-sm font-medium text-white dark:text-black hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:bg-lime-400 dark:hover:bg-lime-500 dark:focus:ring-lime-600 sm:w-auto cursor-pointer">
                  <svg
                    className="-ms-0.5 me-1.5 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"></path>
                  </svg>
                  Edit your data
                </motion.button>
              </div>

              <div className="flex justify-between">
                <h2 className="pb-4 text-xl text-neutral-900 dark:text-white sm:text-3xl md:pb-6 font-learn font-bold tracking-widest underline underline-offset-8">
                  Dogs
                </h2>
                <motion.button
                  onClick={() => setShowAddDogModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  class="text-white dark:text-black bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-5 mb-4 mt-1 text-center dark:bg-lime-400 dark:hover:bg-lime-500 dark:focus:ring-lime-600 cursor-pointer">
                  Add Dog
                </motion.button>
              </div>

              {/* IF USER HAS NO DOGS, SHOW ALERT, ELSE SHOW THE CONTAINER WITH THE DOGS */}
              {user.dogs.length === 0 ? (
                <div className="pt-5 pb-12 animate-wiggle-minimized drop-shadow-xl drop-shadow-gray-400 dark:drop-shadow-black">
                  <div
                    class="bg-violet-100 border-l-8 border-violet-500 text-violet-700 p-4 dark:bg-yellow-300 dark:border-yellow-600 dark:text-yellow-700"
                    role="alert">
                    <p class="font-anton tracking-wider text-xl">
                      You have not added a dog yet!
                    </p>
                    {/* <p>
                      Please{" "}
                      <span
                        className="underline cursor-pointer hover:font-bold"
                        onClick={() => navigate("/sign-up")}>
                        create an account
                      </span>{" "}
                      or{" "}
                      <span
                        className="underline cursor-pointer hover:font-bold"
                        onClick={() => navigate("/login")}>
                        log in
                      </span>
                      .
                    </p> */}
                    <p className="font-instrument">
                      Please add a dog to your account! You must add a dog in
                      order to enroll in a training class. Click{" "}
                      <span
                        onClick={() => setShowAddDogModal(true)}
                        className="underline cursor-pointer hover:font-bold">
                        here
                      </span>
                      , or click the "Add Dog" button above.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800 md:p-8 lg:mb-16">
                  {/* Actually Pretty Good Cards for a future project - Save Somewhere! */}
                  {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {user.dogs.map((dog, index) => (
                        <div key={index} className="group relative">
                          <img
                            // alt={product.imageAlt}
                            src={dog.photo}
                            className="aspect-square w-full rounded-md bg-neutral-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                          />
                          <div className="mt-4 flex justify-between">
                            <div>
                              <h3 className="text-sm text-neutral-700">
                                <a href="">
                                  <span aria-hidden="true" className="absolute inset-0" />
                                  {dog.name}
                                </a>
                              </h3>
                              <p className="mt-1 text-sm text-neutral-500">{dog.breed}</p>
                            </div>
                            <p className="text-sm font-medium text-neutral-900">{dog.age}</p>
                          </div>
                        </div>
                      ))}
                    </div> */}

                  <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-y-6 lg:gap-x-6">
                    {user.dogs.map((dog, index) => (
                      <div class="w-full bg-white border border-neutral-200 rounded-lg shadow-sm dark:bg-neutral-700 dark:border-neutral-700 min-h-full">
             
                          <div class="flex justify-end px-4 pt-4">
                            <button
                              onClick={() => {
                                setShowDogActions(true)
                                setDogToDelete(dog)
                              }}
                              id="dropdownButton"
                              data-dropdown-toggle="dropdown"
                              class="inline-block text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-600 focus:ring-4 focus:outline-none focus:ring-neutral-200 dark:focus:ring-neutral-500 rounded-lg text-sm p-1.5 cursor-pointer"
                              type="button">
                              <span class="sr-only">Open dropdown</span>
                              <svg
                                class="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                              </svg>
                            </button>

                            {showDogActions && dogToDelete._id === dog._id && (
                              <div
                                id="dropdown"
                                class="z-10 text-base list-none bg-neutral-50 divide-y divide-neutral-100 rounded-lg shadow-sm w-44 dark:bg-neutral-800 absolute">
                                <ul
                                  class="py-2"
                                  aria-labelledby="dropdownButton">
                                  <li>
                                    <div
                                      onClick={() =>
                                        handleDogEditModal(dog, dog._id)
                                      }
                                      class="cursor-pointer block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:text-neutral-200 dark:hover:text-white">
                                      Edit
                                    </div>
                                  </li>
                                  {/* <li>
                                  <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:text-neutral-200 dark:hover:text-white">
                                    Export Data
                                  </a>
                                </li> */}
                                  <li>
                                    <a
                                      onClick={() =>
                                        handleDogDeleteModal(dog, dog._id)
                                      }
                                      class="cursor-pointer block px-4 py-2 text-sm text-red-600 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:text-neutral-200 dark:hover:text-white">
                                      Delete
                                    </a>
                                  </li>
                                  <li>
                                    <div
                                      onClick={() => setShowDogActions(false)}
                                      class="cursor-pointer block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:text-neutral-200 dark:hover:text-white">
                                      Cancel
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                          <div class="flex flex-col items-center pb-10">
                            {dog.photo ? (
                              <img
                                src={`${dog.photo}`}
                                className="size-75 mb-3 rounded-full shadow-lg"
                              />
                            ) : (
                              <>
                                <div className="rounded-full size-75 shadow-lg p-4 flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-600 mb-3">
                                  <SiDatadog
                                    size={170}
                                    className="text-neutral-800 dark:text-neutral-300"
                                  />

                                  <p className="uppercase text-xs text-black dark:text-white">
                                    upload an image of your dog!
                                  </p>
                                </div>
                              </>
                            )}

                            <h5 class="text-2xl font-bold text-neutral-900 dark:text-white font-lexend uppercase leading-3 pt-1">
                              {dog.name}
                            </h5>
                            <p class="text-lg text-neutral-600 dark:text-neutral-300 font-learn">
                              {dog.breed}
                            </p>

                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16 font-instrument">
                              {/* First Data Column of Dog Info */}
                              <div className="space-y-2">
                                {/* Gender */}
                                <div className="leading-5">
                                  <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                                    Gender
                                  </dt>
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    {dog.gender}
                                  </dd>
                                </div>
                                {/* Size */}
                                <div className="leading-5">
                                  <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                                    Size
                                  </dt>
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    {dog.size}
                                  </dd>
                                </div>
                                {/* Spayed/Neutered */}
                                <div className="leading-5">
                                  <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                                    Spayed/Neutered
                                  </dt>
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    {dog.spayedNeutered}
                                  </dd>
                                </div>
                              </div>

                              {/* Second Data Column of Dog Info */}
                              <div className="space-y-2 pl-20">
                                {/* Age */}
                                <div className="leading-5">
                                  <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                                    Age
                                  </dt>
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    {dog.age}
                                  </dd>
                                </div>
                                {/* Weight */}
                                <div className="leading-5">
                                  <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                                    Weight
                                  </dt>
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    {dog.weight} lbs
                                  </dd>
                                </div>
                                {/* Birthday */}
                                <div className="leading-5">
                                  <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                                    <span className="flex items-center space-x-1">
                                      <span>Birthday </span>
                                      <LiaBirthdayCakeSolid size={20} />
                                      {/* <FaBirthdayCake size={15} /> */}
                                    </span>
                                  </dt>
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    {new Intl.DateTimeFormat("en-US").format(
                                      new Date(dog.birthday)
                                    )}
                                  </dd>
                                </div>
                              </div>
                            </div>

                            {/* Additional Dog Info in a single Column */}
                            <div className="flex flex-col font-instrument text-center px-3 space-y-2">
                              {/* Behavioral Issues */}
                              <div className="leading-5">
                                <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                                  Behavioral Issues
                                </dt>
                                {/* If user input nothing for Behavioral Issues then show "N/A" */}
                                {dog.behavioralIssues === "" ? (
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    N/A
                                  </dd>
                                ) : (
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    {dog.behavioralIssues}
                                  </dd>
                                )}
                              </div>
                              {/* Medical Conditions */}
                              <div className="leading-5">
                                <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                                  Medical Conditions
                                </dt>
                                {/* If user input nothing for Medical Conditions then show "N/A" */}
                                {dog.medicalConditions === "" ? (
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    N/A
                                  </dd>
                                ) : (
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    {dog.medicalConditions}
                                  </dd>
                                )}
                              </div>
                              {/* Training Goals */}
                              <div className="leading-5">
                                <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                                  Training Goals
                                </dt>
                                {/* If user input nothing for Training Goals then show "N/A" */}
                                {dog.trainingGoals === "" ? (
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    N/A
                                  </dd>
                                ) : (
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    {dog.trainingGoals}
                                  </dd>
                                )}
                              </div>
                              {/* Additional Notes */}
                              <div className="leading-5">
                                <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                                  Additional Notes
                                </dt>
                                {/* If user input nothing for Additional Notes then show "N/A" */}
                                {dog.additionalNotes === "" ? (
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    N/A
                                  </dd>
                                ) : (
                                  <dd className="text-neutral-500 dark:text-neutral-300">
                                    {dog.additionalNotes}
                                  </dd>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              )}

<div className="flex justify-between">
                <h2 className="pb-4 text-xl text-neutral-900 dark:text-white sm:text-3xl md:pb-6 font-learn font-bold tracking-widest underline underline-offset-8">
                  Enrolled Training Classes
                </h2>
                <motion.button
                  onClick={() => navigate("/enroll")}                  
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  class="text-white dark:text-black bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-5 mb-4 mt-1 text-center dark:bg-lime-400 dark:hover:bg-lime-500 dark:focus:ring-lime-600 cursor-pointer">
                  Enroll Now
                </motion.button>
              </div>

              {/* <div className="my-8 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800 md:p-8"> */}
                
                {/* {enrolledTrainingClasses.map((trainingClass) =>
                  trainingClass == null ? <div>Test</div> : null
                )} */}

                <div className="max-h-96 min-h-40 w-full relative overflow-x-hidden shadow-md sm:rounded-lg bg-white dark:bg-neutral-600 mb-16">
                  <table className="w-full text-sm text-left rtl:text-right text-neutral-600 dark:text-neutral-300 font-instrument">
                    <thead className="text-xs text-neutral-700 uppercase bg-violet-200 dark:bg-yellow-400 dark:text-neutral-900">
                      <tr>
                        <th scope="col" className="px-3 py-3">
                          Training Class Name
                        </th>
                        <th scope="col" className="px-3 py-3">
                          Type
                        </th>
                        <th scope="col" className="px-3 py-3">
                          Trainer
                        </th>
                        <th scope="col" className="px-3 py-3">
                          Start Date
                        </th>
                        <th scope="col" className="px-3 py-3">
                          End Date
                        </th>
                        <th scope="col" className="px-3 py-3">
                          Detail
                        </th>
                      </tr>
                    </thead>
                    <tbody className="overflow-y-auto">
                      {enrolledTrainingClasses.map(
                        (trainingClass) =>
                          trainingClass != null &&
                          trainingClass.customers.map((customer, index) =>
                            customer.email == loggedInEmail ? (
                              <tr
                                key={index}
                                // onClick={() => handleRowClick(trainingClass.id)}
                                className={`border-b bg-white dark:bg-neutral-800`}>
                                {/* className={`border-b dark:border-neutral-700 ${selectedClass === trainingClass.id ? "bg-neutral-200 dark:bg-slate-600" : "bg-white dark:bg-neutral-800"}`}> */}
                                {/* {selectedClass === trainingClass.id ? (
                            <span>Selected</span>
                          ) : (
                            <span>Not selected</span>
                          )} */}
                                <th
                                  scope="row"
                                  className="px-3 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white">
                                  {trainingClass.trainingClassName}
                                </th>
                                <td className="px-3 py-4">
                                  {trainingClass.trainingClassType}
                                </td>
                                <td className="px-3 py-4">
                                  {trainingClass.trainer.firstName}{" "}
                                  {trainingClass.trainer.lastName}
                                </td>
                                <td className="px-3 py-4">
                                  {new Intl.DateTimeFormat("en-US").format(
                                    new Date(trainingClass.startDate)
                                  )}
                                </td>
                                <td className="px-3 py-4">
                                  {new Intl.DateTimeFormat("en-US").format(
                                    new Date(trainingClass.endDate)
                                  )}
                                </td>

                                {/* DETAIL BUTTON */}
                                <td className="px-3 py-4 justify-self-center">
                                  <button
                                    onClick={() =>
                                      navigate(
                                        `/training-classes/${trainingClass.id}`
                                      )
                                    }
                                    className="cursor-pointer text-violet-500 dark:text-yellow-300 transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-0.5"
                                    >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="25"
                                      width="25"
                                      viewBox="0 0 512 512">
                                      <path
                                        fill="currentColor"
                                        d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"
                                      />
                                    </svg>
                                  </button>
                                </td>
                              </tr>
                            ) : (null)
                          )
                      )}
                    </tbody>
                  </table>
                </div>

                {/* <div className="flex flex-wrap items-center gap-y-4 border-b border-neutral-200 pb-4 dark:border-neutral-700 md:pb-5">
                  <dl className="w-1/2 sm:w-48">
                    <dt className="text-base font-medium text-neutral-500 dark:text-neutral-400">
                      Order ID:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-neutral-900 dark:text-white">
                      <a href="#" className="hover:underline">
                        #FWB12546798
                      </a>
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                    <dt className="text-base font-medium text-neutral-500 dark:text-neutral-400">
                      Date:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-neutral-900 dark:text-white">
                      11.12.2023
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                    <dt className="text-base font-medium text-neutral-500 dark:text-neutral-400">
                      Price:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-neutral-900 dark:text-white">
                      $499
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                    <dt className="text-base font-medium text-neutral-500 dark:text-neutral-400">
                      Status:
                    </dt>
                    <dd className="me-2 mt-1.5 inline-flex shrink-0 items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      <svg
                        className="me-1 h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                      </svg>
                      In transit
                    </dd>
                  </dl>

                  <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                    <button
                      id="actionsMenuDropdownModal10"
                      data-dropdown-toggle="dropdownOrderModal10"
                      type="button"
                      className="flex w-full items-center justify-center rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-neutral-100 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:ring-neutral-700 md:w-auto">
                      Actions
                      <svg
                        className="-me-0.5 ms-1.5 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 9-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div
                      id="dropdownOrderModal10"
                      className="z-10 hidden w-40 divide-y divide-neutral-100 rounded-lg bg-white shadow dark:bg-neutral-700"
                      data-popper-reference-hidden=""
                      data-popper-escaped=""
                      data-popper-placement="bottom">
                      <ul
                        className="p-2 text-left text-sm font-medium text-neutral-500 dark:text-neutral-400"
                        aria-labelledby="actionsMenuDropdown10">
                        <li>
                          <a
                            href="#"
                            className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-600 dark:hover:text-white">
                            <svg
                              className="me-1.5 h-4 w-4 text-neutral-400 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"></path>
                            </svg>
                            <span>Order again</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-600 dark:hover:text-white">
                            <svg
                              className="me-1.5 h-4 w-4 text-neutral-400 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24">
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path>
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                            </svg>
                            Order details
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-modal-target="deleteOrderModal"
                            data-modal-toggle="deleteOrderModal"
                            className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-white">
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"></path>
                            </svg>
                            Cancel order
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>

          {/* {testDeleteModal && ( */}

          <div
            id="deleteOrderModal"
            tabIndex="-1"
            aria-hidden="true"
            className="hidden fixed left-0 right-0 top-0 z-50 h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
            <div className="relative h-full w-full max-w-md p-4 md:h-auto">
              {/* <!-- Modal content --> */}
              <div className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-neutral-800 sm:p-5">
                <button
                  type="button"
                  className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-neutral-400 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-600 dark:hover:text-white"
                  data-modal-toggle="deleteOrderModal">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 p-2 dark:bg-neutral-700">
                  <svg
                    className="h-8 w-8 text-neutral-500 dark:text-neutral-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                    />
                  </svg>
                  <span className="sr-only">Danger icon</span>
                </div>
                <p className="mb-3.5 text-neutral-900 dark:text-white">
                  <a
                    href="#"
                    className="font-medium text-blue-700 hover:underline dark:text-blue-500">
                    @heleneeng
                  </a>
                  , are you sure you want to delete this order from your
                  account?
                </p>
                <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                  This action cannot be undone.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <button
                    data-modal-toggle="deleteOrderModal"
                    type="button"
                    className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-neutral-500 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600 dark:hover:text-white dark:focus:ring-neutral-600">
                    No, cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Yes, delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* )} */}
        </section>
      )}

      {showEditDogModal && (
        <DogEditModal
          setShowEditDogModal={setShowEditDogModal}
          loggedInEmail={loggedInEmail}
          userId={userId}
          dog={dogEditForm}
        />
      )}

      {showDeleteDogModal && (
        <DogDeleteModal
          setShowDeleteDogModal={setShowDeleteDogModal}
          dogToDelete={dogToDelete}
          userId={userId}
        />
      )}

      {showAddDogModal && (
        <DogAddModal
          setShowAddDogModal={setShowAddDogModal}
          loggedInEmail={loggedInEmail}
        />
      )}

      <UserDashboardFooter />
    </>
  )
}

export default UserDashboard
