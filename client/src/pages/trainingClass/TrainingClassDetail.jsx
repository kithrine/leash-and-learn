import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import {
  trainingClassGetOne,
  trainingClassSessionDelete
} from "../../redux/trainingClassSlice"
import { ToastContainer } from "react-toastify"
import { SiDatadog } from "react-icons/si"
import * as motion from "motion/react-client"
import TrainingClassEditModal from "../../components/modals/TrainingClassEditModal"
import SessionEditModal from "../../components/modals/SessionEditModal"
import SessionDeleteModal from "../../components/modals/SessionDeleteModal"
import TrainingClassDetailSkeleton from "../../components/skeletons/TrainingClassDetailSkeleton"
import SessionAddModal from "../../components/modals/SessionAddModal"
import DashboardFooter from "../../components/footers/DashboardFooter"
import UserDashboardFooter from "../../components/footers/UserDashboardFooter"

const TrainingClassDetail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { user } = useSelector((state) => state.auth)
  const { trainingClass } = useSelector((state) => state.trainingClass)

  const [showTrainingClassEditModal, setShowTrainingClassEditModal] = useState(false)
  const [showSessionAddModal, setShowSessionAddModal] = useState(false)
  const [showEditSessionModal, setShowEditSessionModal] = useState(false);
  const [showSessionDeleteModal, setShowSessionDeleteModal] = useState(false)
  const [sessionToEdit, setSessionToEdit] = useState({})
  const [sessionToDelete, setSessionToDelete] = useState({})
  const [loading, setLoading] = useState(true)

  const [sessionEditForm, setSessionEditForm] = useState({
    // sessionIndex: session.sessionIndex,
    // sessionName: session.sessionName,
    // sessionDescription: session.sessionDescription,
    // sessionType: session.sessionType,
    // percentComplete: session.percentComplete,
    // sessionDate: session.sessionDate,
    // sessionTime: session.sessionTime,
    // sessionDuration: session.sessionDuration,
    // activitiesPerformed: session.activitiesPerformed,
    // customers: [],
  });

  const storedTheme = localStorage.getItem("theme")

  useEffect(() => {
    console.log("Id for Jack", id)
    dispatch(trainingClassGetOne(id))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const handleDatepickerFormat = (classDate) => {
    // convert string to date
    let newDate = new Date(classDate)
    // Set  hours back because of UTC
    let dateMinus7 = newDate.setHours(newDate.getHours() + 7)
    // Use en-CA default format
    return new Date(dateMinus7).toLocaleDateString("en-CA")
  }

  const handleSessionEditModal = (session, id) => {
    // setSessionEditForm(session);
    if (session._id === id) {
      console.log(
        "IMPORTANT INFORMATION SESSION EDIT sessionEdit in handleSessionEditModal",
        session,
        id
      )
      setShowEditSessionModal(true)
      setSessionEditForm(session)
    }
    setShowEditSessionModal(true);
  };

  const handleSessionDeleteModal = (session, id) => {
    console.log("session.id handleSessionDeleteModal", session, id)
    if (session._id === id) {
      console.log(
        "IMPORTANT INFORMATION DAWG sessionDelete in handleSessionDeleteModal",
        session,
        id
      )
      setShowSessionDeleteModal(true)
      setSessionToDelete(session)
    }
    console.log("session delete sessionToDelete", sessionToDelete)
  }

  // const handleSessionDelete = (session) => {
  //   // console.log("handleSessionDelete", id, session)
  //   dispatch(
  //     trainingClassSessionDelete({
  //       trainingClassId: id,
  //       sessionId: session._id
  //     })
  //   )
  // }

  // const handleSessionEdit = (session) => {
  //   setSessionForm(session);
  //   setShowModal(true);
  // };
  return (
    <>
      <div
        className={`${
          storedTheme === "light" ? "light-jupiter-bg" : "dark-jupiter-bg"
        }`}>
        {/* If page is loading... */}
        {loading ? (<>
        <div className="min-h-screen">
          {/* // LOADING SKELETON */}
            {user.role.includes("Business Manager") || user.role.includes("Trainer") ? (
          <div className="md:ml-64 pt-20 min-h-screen">
            <h2 className="mb-4 text-4xl font-extrabold text-neutral-900 dark:text-white text-center font-lexend uppercase py-8">
              Training Class Details
            </h2>
            <div
              className={`max-w-[75vw] mx-auto`}>
              <TrainingClassDetailSkeleton />
            </div>
                </div>
            ) : null}
            {/* <div
              className={`${
                user.role.includes("User") ? "max-w-[50vw] mt-16 md:ml-[23vw] mx-auto" : "max-w-[75vw] mx-auto"
              }`}>
              <TrainingClassDetailSkeleton />
            </div> */}</div></>
        ) : (
          // **** IF NOT LOADING, SHOW PAGE:
          <div
            className={`${
              user.role.includes("User")
                ? "mt-16 md:px-[13vw] md:ml-[20vw] pt-2"
                : "md:ml-64 pt-20"
            } animate__animated animate__fadeIn animate__slower`}>
            <ToastContainer />

            <div className="">
              <h2 className="mb-4 text-4xl font-extrabold text-neutral-900 dark:text-white text-center font-lexend uppercase py-8">
                Training Class Details
              </h2>

              {/* TRAINING CLASS DETAILS TABLE */}
              <div
                className={`justify-self-center bg-white border border-neutral-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700 drop-shadow-xl drop-shadow-neutral-300 dark:drop-shadow-black ${
                  user.role.includes("User") ? "w-11/12" : "w-3/4"
                }`}>
                <ul
                  className="text-sm font-medium text-center text-neutral-500 divide-x divide-neutral-200 rounded-lg sm:flex dark:divide-neutral-600 dark:text-neutral-400 rtl:divide-x-reverse"
                  id="fullWidthTab"
                  data-tabs-toggle="#fullWidthTabContent"
                  role="tablist">
                  {/* Training Class Name */}
                  <li className="w-full">
                    <div className="font-instrument font-bold tracking-wider text-neutral-800 text-3xl inline-block w-full p-4 rounded-ss-lg bg-violet-200 focus:outline-none dark:bg-yellow-400 dark:text-neutral-900 transition duration-300 ease-in-out">
                      {trainingClass.trainingClassName}
                    </div>
                  </li>
                </ul>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16 font-instrument px-30 py-10 transition duration-300 ease-in-out">
                  {/* First Data Column of Class Info */}
                  <div className="space-y-4 justify-self-center">
                    {/* Training Class Type */}
                    <div className="leading-5">
                      <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                        Type
                      </dt>
                      <dd className="text-neutral-500 dark:text-neutral-300">
                        {trainingClass.trainingClassType}
                      </dd>
                    </div>
                    <div className="border-t mx-1 text-neutral-300 dark:text-neutral-600"></div>
                    {/* Start Date */}
                    <div className="leading-5">
                      <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                        Start Date
                      </dt>
                      <dd className="text-neutral-500 dark:text-neutral-300">
                      {new Intl.DateTimeFormat("en-US").format(new Date(trainingClass.startDate))}
                      </dd>
                    </div>
                  </div>

                  {/* Second Data Column of Class Info */}
                  <div className="space-y-4 justify-self-center">
                    {/* Trainer */}
                    <div className="leading-5">
                      <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                        Trainer
                      </dt>
                      <dd className="text-neutral-500 dark:text-neutral-300">
                        {trainingClass.trainer.firstName}{" "}
                        {trainingClass.trainer.lastName}
                      </dd>
                    </div>
                    <div className="border-t mx-1 text-neutral-300 dark:text-neutral-600"></div>
                    {/* End Date */}
                    <div className="leading-5">
                      <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                        End Date
                      </dt>
                      <dd className="text-neutral-500 dark:text-neutral-300">
                      {new Intl.DateTimeFormat("en-US").format(new Date(trainingClass.endDate))}
                      </dd>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col font-instrument text-center px-15 pb-10 space-y-2">
                <div className="border-t mx-40 pb-6 text-neutral-300 dark:text-neutral-600"></div>
                  {/* Training Class Description */}
                  <div className="">
                    <dt className="font-semibold text-neutral-900 dark:text-white tracking-wider">
                      Description
                    </dt>
                    {/* If user input nothing for Behavioral Issues then show "N/A" */}
                    {trainingClass.trainingClassDescription === "" ? (
                      <dd className="text-neutral-500 dark:text-neutral-300">
                        N/A
                      </dd>
                    ) : (
                      <dd className="text-neutral-500 dark:text-neutral-300">
                        {trainingClass.trainingClassDescription}
                      </dd>
                    )}
                  </div>
                  {/* Button to Edit the Overview Details */}
                    {user.role.includes("Business Manager") && (
                      <div className="justify-self-center">
                      <motion.button
        onClick={() => setShowTrainingClassEditModal(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        className="w-[5vw] justify-self-center text-black bg-gradient-to-r from-green-400 to-lime-400 hover:bg-gradient-to-l hover:from-green-400 hover:to-lime-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 cursor-pointer "
        >
        Edit
      </motion.button>
        </div>
                    )}
                </div>
              </div>
            </div>

            

            {/* CUSTOMERS */}
            <section className="">
              <div
                className={`py-8 px-4 mx-auto lg:py-16 ${
                  user.role.includes("User") ? "" : "lg:px-6"
                }`}>
                <div className={`${user.role.includes("User") ? "" : "px-40"} mb-8 lg:mb-12`}>
                  {/* <h2 className="mb-4 text-4xl font-extrabold text-neutral-900 dark:text-white">
                    {user.role.includes("User") ? "Dogs Enrolled" : "Customers"}
                  </h2> */}
                  <h2 className="mb-4 text-xl text-neutral-900 dark:text-white sm:text-3xl md:mb-6 font-learn font-bold tracking-widest underline underline-offset-8">
                  {user.role.includes("User") ? "Dogs Enrolled" : "Customers"}
                  </h2>
                </div>
                {/* THE INPUT BOX I'D LIKE TO PUT WHEN EDITING THE FIELDS */}
                {/* <input className="px-2 py-1 text-base  rounded-lg border focus:outline focus:outline-1 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cccccc]" placeholder="Type your name.." autocomplete="off"></input> */}

                {trainingClass.customers.length > 0 ? (
                  <>
                    <div
                      className={`${
                        user.role.includes("User")
                          ? "lg:grid-cols-4"
                          : "lg:grid-cols-5 px-40"
                      } space-y-8 lg:grid sm:gap-6 xl:gap-3 lg:space-y-2 font-instrument`}>
                      {/* <!-- Training Class 8 Week Cards --> */}
                      {trainingClass.customers.map((customer, index) => (
                        <div
                          className={`flex flex-col p-6 mx-auto text-center text-neutral-900 bg-white rounded-lg border border-neutral-100 drop-shadow-xl drop-shadow-neutral-300 dark:drop-shadow-black dark:border-neutral-600 xl:p-6 dark:bg-neutral-800 dark:text-white justify-between ${
                            user.role.includes("User")
                              ? "min-h-[25vh] max-h-[25vh] min-w-[12vw] max-w-[12vw]"
                              : "min-h-[33vh] max-h-[33vh] min-w-[12.5vw] max-w-2xl"
                          }`}
                          key={index}>
                          {customer.dogs[0].photo ? (
                            <img
                              src={`${customer.dogs[0].photo}`}
                              className="size-20 mb-3 rounded-full shadow-lg justify-self-center mx-auto"
                            />
                          ) : (
                            <div className="rounded-full size-20 shadow-lg p-4 flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-600 justify-self-center mx-auto">
                              <SiDatadog size={50} />
                            </div>
                          )}
                          <h3 className="text-xl font-semibold font-lexend uppercase text-center">
                            {customer.dogs[0].name}
                            {/* {customer.firstName}{" "}{customer.lastName} */}
                          </h3>
                          <p className="font-learn text-neutral-500 sm:text-lg dark:text-neutral-400 leading-3">
                            {customer.dogs[0].breed}
                          </p>
                          <div className="flex items-center mx-auto space-x-3">
                            <h1 className="font-semibold">Owner: </h1>
                            <span>
                              {customer.firstName} {customer.lastName}
                            </span>
                          </div>

                          {/* <!-- List --> */}
                          <ul role="list" className="space-y-2">
                            {user.role.includes("Business Manager") ||
                            user.role.includes("Trainer") ? (
                              <li className="flex flex-col items-center text-center mx-auto justify-center">
                                <h1 className="font-semibold">
                                  Contact Information:{" "}
                                </h1>
                                <span>{customer.email}</span>
                                <span>{customer.phoneNumber}</span>
                              </li>
                            ) : null}
                            {/* <li className="flex items-center space-x-3">
                            <h1 className="font-semibold">
                              Percent Complete:{" "}
                            </h1>
                            <span>{customer.percentComplete} %</span>
                          </li> */}

                            {/* <li className="flex items-center space-x-3">
                            <h1 className="font-semibold">Session Date: </h1>
                            <span className="">
                              {new Intl.DateTimeFormat("en-US").format(
                                new Date(customer.sessionDate)
                              )}
                            </span>
                          </li>

                          <li className="flex items-center space-x-3">
                            <h1 className="font-semibold">Session Time: </h1>
                            <span className="">{customer.sessionTime}</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <h1 className="font-semibold">
                              Session Duration:{" "}
                            </h1>
                            <span className="">
                              {customer.sessionDuration} hours
                            </span>
                          </li>
                          <li className="flex flex-col mx-auto items-center text-center justify-self-center space-x-3">
                            <h1 className="font-semibold flex justify-self-center text-center mx-auto">
                              Activities Performed:{" "}
                            </h1>
                            <span className="block w-full mx-auto">
                              {customer.activitiesPerformed}
                            </span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <h1 className="font-semibold">Customers: </h1>
                            <span>{customer.customers}</span>
                          </li> */}
                          </ul>

                          {/* <div className="flex flex-row mx-auto space-x-40">
                            <SessionEditModal
                              handleDatepickerFormat={handleDatepickerFormat}
                              session={session}
                            />
                            <button
                              onClick={() => {
                                setShowSessionDeleteModal(true)
                                setSessionToDelete(session)
                              }}
                              type="button"
                              className="text-white bg-gradient-to-r from-rose-700 to-red-500 hover:bg-gradient-to-l hover:from-rose-700 hover:to-red-500 focus:ring-4 focus:outline-none focus:ring-red-600 dark:focus:ring-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[10vw]">
                              Delete
                            </button>
                            {showSessionDeleteModal &&
                              sessionToDelete._id === session._id && (
                                <SessionDeleteModal
                                  setShowSessionDeleteModal={setShowSessionDeleteModal}
                                  handleSessionDelete={handleSessionDelete}
                                  session={session}
                                />
                              )}
                          </div> */}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {user.role.includes("User") ? (
                      <div className="">
                        <div
                          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
                          role="alert">
                          <p className="font-learn uppercase font-bold tracking-wider text-xl">
                            ** No Dogs Currently Enrolled! **
                          </p>
                          <p>
                            This class is currently full of open spots! Due to
                            high demand, these classes tend to fill quickly.
                            Enroll today and secure your pup's place for a
                            rewarding learning experience.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="px-40">
                        {/* <div
                          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
                          role="alert">
                          <p className="font-learn uppercase font-bold tracking-wider text-xl">
                            ** No Dogs Currently Enrolled! **
                          </p>
                          <p>
                            There are currently no dogs enrolled in this
                            training class.
                          </p>
                        </div> */}


                        <div className="pt-5 animate-wiggle-minimized drop-shadow-xl drop-shadow-gray-400 dark:drop-shadow-black">
                  <div
                    className="bg-violet-100 border-l-8 border-violet-500 text-violet-700 p-4 dark:bg-yellow-300 dark:border-yellow-600 dark:text-yellow-700"
                    role="alert">
                    <p className="font-anton tracking-wider text-xl">
                    ** No Dogs Currently Enrolled! **
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
                    There are currently no dogs enrolled in this
                    training class.
                    </p>
                  </div>
                </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </section>
            {/* ${user.role.includes("User") ? "" : ""} */}
            {/* TRAINING CLASS SESSIONS FOR SPECIFIC TRAINING CLASS */}
            <section className="">
            <div className={`${user.role.includes("User") ? "px-4" : "px-46"} flex justify-between`}>
                <h2 className="pb-4 text-xl text-neutral-900 dark:text-white sm:text-3xl md:pb-6 font-learn font-bold tracking-widest underline underline-offset-8">
                  Training Class Sessions
                </h2>
                {user.role.includes("Business Manager") ||
                  user.role.includes("Trainer") ? (
                    <motion.button
                    onClick={() => setShowSessionAddModal(true)}                  
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="text-white dark:text-black font-instrument bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300  rounded-full text-sm px-5 mb-4 mt-1 text-center dark:bg-lime-400 dark:hover:bg-lime-500 dark:focus:ring-lime-600 cursor-pointer">
                  Add Session
                </motion.button>
                  ) : null}
                
              </div>
                  {showSessionAddModal && (
                    <SessionAddModal
                      setShowSessionAddModal={setShowSessionAddModal}
                      handleDatepickerFormat={handleDatepickerFormat}
                    />
                  )}
                  {/* <p className="mb-5 font-light text-neutral-500 sm:text-xl dark:text-neutral-400">
                  Here at Flowbite we focus on markets where technology,
                  innovation, and capital can unlock long-term value and drive
                  economic growth.
                  </p> */}
                  {/* <button
                  // onClick={() => setShowModal(!showModal)}
                  type="button"
                  className="text-black bg-gradient-to-r from-green-400 to-lime-400 hover:bg-gradient-to-l hover:from-green-400 hover:to-lime-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                  Edit All Sessions
                  </button> */}
             
              <div
                className={`pb-8 px-4 mx-auto lg:pb-24 lg:mt-6 font-instrument ${
                  user.role.includes("User") ? "" : "lg:px-44"
                }`}>
                <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-8 lg:space-y-0">
                  {/* THE INPUT BOX I'D LIKE TO PUT WHEN EDITING THE FIELDS */}
                  {/* <input className="px-2 py-1 text-base  rounded-lg border focus:outline focus:outline-1 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cccccc]" placeholder="Type your name.." autocomplete="off"></input> */}

                  {/* <!-- Training Class 8 Week Cards --> */}
                  {trainingClass.sessions.map((session, index) => (
                    <div
                      className={`flex flex-col justify-between p-6 mx-auto max-w-2xl text-center text-neutral-900 bg-white rounded-lg border border-neutral-100 drop-shadow-xl drop-shadow-neutral-300 dark:drop-shadow-black dark:border-neutral-600 xl:p-8 dark:bg-neutral-800 dark:text-white ${
                        user.role.includes("User") ? "" : "min-w-[100%]"
                      }`}
                      key={index}>
                      <h3 className="mb-4 text-3xl font-semibold">
                        {session.sessionName}
                      </h3>
                      <p className="font-light text-neutral-500 sm:text-lg dark:text-neutral-300">
                        {session.sessionDescription}
                      </p>
                      {/* <div className="flex justify-center items-baseline my-8">
                      <span className="mr-2 text-5xl font-extrabold">$29</span>
                      <span className="text-neutral-500 dark:text-neutral-400">
                        /month
                      </span>
                    </div> */}
                      {/* <!-- List --> */}
                      <ul role="list" className="my-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                          <h1 className="font-semibold tracking-wider">Session Type: </h1>
                          <span>{session.sessionType}</span>
                        </li>

                        <li className="flex items-center space-x-3">
                          <h1 className="font-semibold tracking-wider">Percent Complete: </h1>
                          <span>{session.percentComplete} %</span>
                        </li>

                        <li className="flex items-center space-x-3">
                          <h1 className="font-semibold tracking-wider">Session Date: </h1>
                          <span className="">
                            {new Intl.DateTimeFormat("en-US").format(
                              new Date(session.sessionDate)
                            )}
                          </span>
                        </li>

                        <li className="flex items-center space-x-3">
                          <h1 className="font-semibold tracking-wider">Session Time: </h1>
                          <span className="">{session.sessionTime}</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <h1 className="font-semibold tracking-wider">Session Duration: </h1>
                          <span className="">
                            {session.sessionDuration} hours
                          </span>
                        </li>
                        <li className="flex flex-col mx-auto items-center text-center justify-self-center space-x-3">
                          <h1 className="font-semibold flex justify-self-center text-center mx-auto tracking-wider">
                            Activities Performed:{" "}
                          </h1>
                          <span className="block w-full mx-auto">
                            {session.activitiesPerformed}
                          </span>
                        </li>
                        {/* <li className="flex items-center space-x-3">
                        <h1 className="font-semibold">Customers: </h1>
                        <span>{session.customers}</span>
                      </li> */}
                      </ul>

                      <div className="flex flex-row mx-auto space-x-40">
                        {user.role.includes("Business Manager") ||
                        user.role.includes("Trainer") ? (
                          <>
                            <motion.button
                              onClick={() => handleSessionEditModal(session, session._id)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              type="button"
                              className="text-black bg-gradient-to-r from-green-400 to-lime-400 hover:bg-gradient-to-l hover:from-green-400 hover:to-lime-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[5vw] cursor-pointer"
                            >
                              Edit
                            </motion.button>
                            {/* <SessionEditModal
                              handleDatepickerFormat={handleDatepickerFormat}
                              session={session}
                            setShowEditSessionModal={setShowEditSessionModal}
                            /> */}
                            <motion.button
                              onClick={() => {
                                // setShowSessionDeleteModal(true)
                                // setSessionToDelete(session)
                                handleSessionDeleteModal(session, session._id)
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              type="button"
                              className="text-white bg-gradient-to-r from-rose-700 to-red-500 hover:bg-gradient-to-l hover:from-rose-700 hover:to-red-500 focus:ring-4 focus:outline-none focus:ring-red-600 dark:focus:ring-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[5vw] cursor-pointer">
                              Delete
                            </motion.button>
                          </>
                        ) : null}

                      </div>
                    </div>
                  ))}
                  {/* {showModal && } */}
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
      {showTrainingClassEditModal && (<TrainingClassEditModal setShowTrainingClassEditModal={setShowTrainingClassEditModal} />)}

        {showEditSessionModal && (
          <SessionEditModal
          handleDatepickerFormat={handleDatepickerFormat}
          session={sessionEditForm}
          setShowEditSessionModal={setShowEditSessionModal}
          sessionEditForm={sessionEditForm}
          setSessionEditForm={setSessionEditForm}
          />
        )}
        {showSessionDeleteModal &&
          // sessionToDelete._id === session._id && 
          (
            <SessionDeleteModal
            setShowSessionDeleteModal={setShowSessionDeleteModal}
            // handleSessionDelete={handleSessionDelete}
            sessionToDelete={sessionToDelete}
            />
          )}



      {user.role.includes("User") ? (
        <UserDashboardFooter />
      ) : (
        <DashboardFooter />
      )}
    </>
  )
}

export default TrainingClassDetail;

// OLD TRAINING CLASS DETAILS TABLE
// {/* <div className="">
//   <h2 className="mb-4 text-4xl font-extrabold text-neutral-900 dark:text-white text-center font-lexend uppercase py-8">
//     Training Class Overview
//   </h2>
//   {/* Training Class Details */}
//   <div
//     className={`justify-self-center bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-800 dark:border-neutral-700 ${
//       user.role.includes("User") ? "w-11/12" : "w-10/12"
//     }`}>
//     <ul
//       className="text-sm font-medium text-center text-neutral-500 divide-x divide-neutral-200 rounded-lg sm:flex dark:divide-neutral-600 dark:text-neutral-400 rtl:divide-x-reverse"
//       id="fullWidthTab"
//       data-tabs-toggle="#fullWidthTabContent"
//       role="tablist">
//       {/* Training Class Name */}
//       <li className="w-full">
//         <div className="font-learn font-bold tracking-wider text-stone-700 text-3xl inline-block w-full p-4 rounded-ss-lg bg-neutral-50 hover:bg-neutral-100 focus:outline-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-100">
//           {trainingClass.trainingClassName}
//         </div>
//       </li>
//     </ul>
//     <div className="border-t border-neutral-200 dark:border-neutral-600">
//       <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-neutral-800">
//         <div>
//           <dl className="divide-y divide-neutral-100">
//             {/* Training Class Type */}
//             <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
//               <dt className="text-sm/6 font-medium text-neutral-900 dark:text-neutral-100">
//                 Type
//               </dt>
//               <dd className="mt-1 text-sm/6 text-neutral-700 dark:text-neutral-200 sm:col-span-1 sm:mt-0">
//                 {trainingClass.trainingClassType}
//               </dd>
//             </div>

//             {/* Trainer */}
//             <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
//               <dt className="text-sm/6 font-medium text-neutral-900 dark:text-neutral-100">
//                 Trainer
//               </dt>
//               <dd className="mt-1 text-sm/6 text-neutral-700 dark:text-neutral-200 sm:col-span-1 sm:mt-0">
//                 {trainingClass.trainer.firstName}{" "}
//                 {trainingClass.trainer.lastName}
//               </dd>
//             </div>

//             {/* Training Class Description */}
//             <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
//               <dt className="text-sm/6 font-medium text-neutral-900 dark:text-neutral-100">
//                 Description
//               </dt>
//               <dd className="mt-1 text-sm/6 text-neutral-700 dark:text-neutral-200 sm:col-span-1 sm:mt-0">
//                 {trainingClass.trainingClassDescription}
//               </dd>
//             </div>

//             {/* Start Date */}
//             <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
//               <dt className="text-sm/6 font-medium text-neutral-900 dark:text-neutral-100">
//                 Start Date
//               </dt>
//               <dd className="mt-1 text-sm/6 text-neutral-700 dark:text-neutral-200 sm:col-span-1 sm:mt-0">
//                 {new Intl.DateTimeFormat("en-US").format(
//                   new Date(trainingClass.startDate)
//                 )}
//               </dd>
//             </div>

//             {/* End Date */}
//             <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
//               <dt className="text-sm/6 font-medium text-neutral-900 dark:text-neutral-100">
//                 End Date
//               </dt>
//               <dd className="mt-1 text-sm/6 text-neutral-700 dark:text-neutral-200 sm:col-span-1 sm:mt-0">
//                 {new Intl.DateTimeFormat("en-US").format(
//                   new Date(trainingClass.endDate)
//                 )}
//               </dd>
//             </div>
//           </dl>
//           {/* Button to Edit the Overview Details */}
//           {user.role.includes("Business Manager") && (
//             <div className="justify-self-center">
//               <TrainingClassEditModal />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}
