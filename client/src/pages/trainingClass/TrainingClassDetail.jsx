// import { useSelector } from "react-redux";
import BMDetail from "../../components/BM/BMDetail"
import TrainerDetail from "../../components/Trainer/TrainerDetail"

import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import {
  trainingClassGetOne,
  trainingClassSessionDelete
} from "../../redux/trainingClassSlice"
import { ToastContainer } from "react-toastify"
import { SiDatadog } from "react-icons/si"
import TrainingClassEditModal from "../../components/modals/TrainingClassEditModal"
import SessionEditModal from "../../components/modals/SessionEditModal"
import SessionDeleteModal from "../../components/modals/SessionDeleteModal"
import TrainingClassDetailSkeleton from "../../components/skeletons/TrainingClassDetailSkeleton"
import SessionAddModal from "../../components/modals/SessionAddModal"

const TrainingClassDetail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { user } = useSelector((state) => state.auth)
  const { trainingClass } = useSelector((state) => state.trainingClass)

  const [showSessionAddModal, setShowSessionAddModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [sessionToDelete, setSessionToDelete] = useState({})
  const [loading, setLoading] = useState(true)

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

  const handleDelete = (session) => {
    // console.log("handleDelete", id, session)
    dispatch(
      trainingClassSessionDelete({
        trainingClassId: id,
        sessionId: session._id
      })
    )
  }

  // const handleSessionEdit = (session) => {
  //   setSessionForm(session);
  //   setShowModal(true);
  // };
  return (
    <>
      <div className="dark:bg-gray-900">
        {/* If page is loading... */}
        {loading ? (
          // LOADING SKELETON
          <div className="md:ml-64 pt-20 dark:bg-gray-900 min-h-screen">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
              Training Class Overview
            </h2>
            <div
              className={`${
                user.role.includes("User") && "max-w-[50vw] mt-16 md:ml-[23vw]"
              }`}>
              <TrainingClassDetailSkeleton />
            </div>
          </div>
        ) : (
          // If not loading, show the page:
          // BUSINESS MANAGER DETAIL PAGE
          <div
            className={`${
              user.role.includes("User")
                ? "mt-16 md:px-[13vw] md:ml-[20vw]"
                : "md:ml-64"
            } pt-20 dark:bg-gray-900`}>
            <ToastContainer />
            <div className="dark:bg-gray-900">
              <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white text-center">
                Training Class Overview
              </h2>
              {/* Training Class Details */}
              <div
                className={`justify-self-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
                  user.role.includes("User") ? "w-11/12" : "w-10/12"
                }`}>
                <ul
                  className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
                  id="fullWidthTab"
                  data-tabs-toggle="#fullWidthTabContent"
                  role="tablist">
                  {/* Training Class Name */}
                  <li className="w-full">
                    <div className="font-learn font-bold tracking-wider text-stone-700 text-3xl inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100">
                      {trainingClass.trainingClassName}
                    </div>
                  </li>
                </ul>
                <div className="border-t border-gray-200 dark:border-gray-600">
                  <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                    <div>
                      <dl className="divide-y divide-gray-100">
                        {/* Training Class Type */}
                        <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                          <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                            Type
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 dark:text-gray-200 sm:col-span-1 sm:mt-0">
                            {trainingClass.trainingClassType}
                          </dd>
                        </div>

                        {/* Trainer */}
                        <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                          <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                            Trainer
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 dark:text-gray-200 sm:col-span-1 sm:mt-0">
                            {trainingClass.trainer.firstName}{" "}
                            {trainingClass.trainer.lastName}
                          </dd>
                        </div>

                        {/* Training Class Description */}
                        <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                          <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                            Description
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 dark:text-gray-200 sm:col-span-1 sm:mt-0">
                            {trainingClass.trainingClassDescription}
                          </dd>
                        </div>

                        {/* Start Date */}
                        <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                          <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                            Start Date
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 dark:text-gray-200 sm:col-span-1 sm:mt-0">
                            {new Intl.DateTimeFormat("en-US").format(
                              new Date(trainingClass.startDate)
                            )}
                          </dd>
                        </div>

                        {/* End Date */}
                        <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                          <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                            End Date
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 dark:text-gray-200 sm:col-span-1 sm:mt-0">
                            {new Intl.DateTimeFormat("en-US").format(
                              new Date(trainingClass.endDate)
                            )}
                          </dd>
                        </div>
                      </dl>
                      {/* Button to Edit the Overview Details */}
                      {user.role.includes("Business Manager") && (
                        <div className="justify-self-center">
                          <TrainingClassEditModal />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CUSTOMERS */}
            <section className="bg-white dark:bg-gray-900">
              <div
                className={`py-8 px-4 mx-auto lg:py-16 ${
                  user.role.includes("User") ? "" : "lg:px-6"
                }`}>
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                  <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
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
                      : "lg:grid-cols-5 px-30"
                  } space-y-8 lg:grid sm:gap-6 xl:gap-3 lg:space-y-2 `}>
                      {/* <!-- Training Class 8 Week Cards --> */}
                      {trainingClass.customers.map((customer, index) => (
                        <div
                          className={`flex flex-col p-6 mx-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-6 dark:bg-gray-800 dark:text-white justify-between ${
                            user.role.includes("User")
                              ? "min-h-[25vh] max-h-[25vh] min-w-[12vw] max-w-[12vw]"
                              : "min-h-[33vh] max-h-[33vh] min-w-3xs max-w-2xl"
                          }`}
                          key={index}>
                          {customer.dogs[0].photo ? (
                            <img
                              src={`${customer.dogs[0].photo}`}
                              className="size-20 mb-3 rounded-full shadow-lg justify-self-center mx-auto"
                            />
                          ) : (
                            <div className="rounded-full size-20 shadow-lg p-4 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-600 justify-self-center mx-auto">
                              <SiDatadog size={50} />
                            </div>
                          )}
                          <h3 className="text-3xl font-semibold">
                            {customer.dogs[0].name}
                            {/* {customer.firstName}{" "}{customer.lastName} */}
                          </h3>
                          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
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
                                setShowDeleteModal(true)
                                setSessionToDelete(session)
                              }}
                              type="button"
                              className="text-white bg-gradient-to-r from-rose-700 to-red-500 hover:bg-gradient-to-l hover:from-rose-700 hover:to-red-500 focus:ring-4 focus:outline-none focus:ring-red-600 dark:focus:ring-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[10vw]">
                              Delete
                            </button>
                            {showDeleteModal &&
                              sessionToDelete._id === session._id && (
                                <SessionDeleteModal
                                  setShowDeleteModal={setShowDeleteModal}
                                  handleDelete={handleDelete}
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
                          class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
                          role="alert">
                          <p class="font-learn uppercase font-bold tracking-wider text-xl">
                            ** No Dogs Currently Enrolled! **
                          </p>
                          <p>
                          This class is currently full of open spots! Due to high demand, these classes tend to fill quickly. Enroll today and secure your pup's place for a rewarding learning experience. 
                          </p>
                        </div>
                      </div> )
                      :
                      (
                        <div className="px-40">
                      <div
                          class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
                          role="alert">
                          <p class="font-learn uppercase font-bold tracking-wider text-xl">
                            ** No Dogs Currently Enrolled! **
                          </p>
                          <p>
                          There are currently no dogs enrolled in this training class. 
                          </p>
                        </div>
                        </div>
                        )

                    }
                    </>
                  )}
                
              </div>
            </section>
            {/* ${user.role.includes("User") ? "" : ""} */}
            {/* TRAINING CLASS SESSIONS FOR SPECIFIC TRAINING CLASS */}
            <section className="bg-white dark:bg-gray-900">
              <div
                className={`pb-8 px-4 mx-auto lg:pb-16  ${
                  user.role.includes("User") ? "" : "lg:px-34"
                }`}>
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                  <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                    Training Class Sessions
                  </h2>
                  {/* <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
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
                  {user.role.includes("Business Manager") ||
                  user.role.includes("Trainer") ? (
                    <button
                      onClick={() => setShowSessionAddModal(true)}
                      type="button"
                      className="text-black bg-gradient-to-r from-green-400 to-lime-400 hover:bg-gradient-to-l hover:from-green-400 hover:to-lime-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[10vw]">
                      Add Session
                    </button>
                  ) : null}

                  {showSessionAddModal && (
                    <SessionAddModal
                      setShowSessionAddModal={setShowSessionAddModal}
                      handleDatepickerFormat={handleDatepickerFormat}
                    />
                  )}
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
                  {/* THE INPUT BOX I'D LIKE TO PUT WHEN EDITING THE FIELDS */}
                  {/* <input className="px-2 py-1 text-base  rounded-lg border focus:outline focus:outline-1 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cccccc]" placeholder="Type your name.." autocomplete="off"></input> */}

                  {/* <!-- Training Class 8 Week Cards --> */}
                  {trainingClass.sessions.map((session, index) => (
                    <div
                      className={`flex flex-col justify-between p-6 mx-auto max-w-2xl text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white ${
                        user.role.includes("User") ? "" : "min-w-[35vw] "
                      }`}
                      key={index}>
                      <h3 className="mb-4 text-3xl font-semibold">
                        {session.sessionName}
                      </h3>
                      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        {session.sessionDescription}
                      </p>
                      {/* <div className="flex justify-center items-baseline my-8">
                      <span className="mr-2 text-5xl font-extrabold">$29</span>
                      <span className="text-gray-500 dark:text-gray-400">
                        /month
                      </span>
                    </div> */}
                      {/* <!-- List --> */}
                      <ul role="list" className="my-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                          <h1 className="font-semibold">Session Type: </h1>
                          <span>{session.sessionType}</span>
                        </li>

                        <li className="flex items-center space-x-3">
                          <h1 className="font-semibold">Percent Complete: </h1>
                          <span>{session.percentComplete} %</span>
                        </li>

                        <li className="flex items-center space-x-3">
                          <h1 className="font-semibold">Session Date: </h1>
                          <span className="">
                            {new Intl.DateTimeFormat("en-US").format(
                              new Date(session.sessionDate)
                            )}
                          </span>
                        </li>

                        <li className="flex items-center space-x-3">
                          <h1 className="font-semibold">Session Time: </h1>
                          <span className="">{session.sessionTime}</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <h1 className="font-semibold">Session Duration: </h1>
                          <span className="">
                            {session.sessionDuration} hours
                          </span>
                        </li>
                        <li className="flex flex-col mx-auto items-center text-center justify-self-center space-x-3">
                          <h1 className="font-semibold flex justify-self-center text-center mx-auto">
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
                            <SessionEditModal
                              handleDatepickerFormat={handleDatepickerFormat}
                              session={session}
                            />
                            <button
                              onClick={() => {
                                setShowDeleteModal(true)
                                setSessionToDelete(session)
                              }}
                              type="button"
                              className="text-white bg-gradient-to-r from-rose-700 to-red-500 hover:bg-gradient-to-l hover:from-rose-700 hover:to-red-500 focus:ring-4 focus:outline-none focus:ring-red-600 dark:focus:ring-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[10vw]">
                              Delete
                            </button>
                          </>
                        ) : null}
                        {showDeleteModal &&
                          sessionToDelete._id === session._id && (
                            <SessionDeleteModal
                              setShowDeleteModal={setShowDeleteModal}
                              handleDelete={handleDelete}
                              session={session}
                            />
                          )}
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
    </>
  )
}

export default TrainingClassDetail

// const TrainingClassDetail = () => {
//   const { user } = useSelector(state => state.auth)

//   if (user.role.includes("Business Manager")) {
//     console.log("Business Manager")
//   } else if (user.role.includes("Trainer")) {
//     console.log("Trainer")
//   } else {
//     console.log("User")
//   }

//   return (
//     <div className="md:ml-64 mt-20">
//       {user.role.includes("Business Manager") ?
//       (<BMDetail />)
//       :
//       (<TrainerDetail />)
//     }
//     </div>
//   );
// };

// export default TrainingClassDetail;
