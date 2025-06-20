import { useEffect } from "react"
import { Link, useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { trainingClassGetAll, trainingClassGetMany } from "../../redux/trainingClassSlice"
import { userGetOne } from "../../redux/userSlice"
import * as motion from "motion/react-client"
import GradientText from "../reactbits+framer-motion/GradientText"
import DashboardFooter from "../footers/DashboardFooter"
import PieChartMaleToFemaleDogs from "../charts/PieChartMaleToFemaleDogs"
import BarChartTotalNumberOfDogsPerService from "../charts/BarChartTotalNumberOfDogsPerService"
import LineChartTotalDogsEnrolledPerServicePastYear from "../charts/LineChartTotalDogsEnrolledPerServicePastYear"
import LineChartTrainer from "../charts/LineChartTrainer"

const BMTrainerDashboard = ({ loggedInEmail }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { trainingClasses } = useSelector((state) => state.trainingClass)
  const { user } = useSelector((state) => state.users)

  const storedTheme = localStorage.getItem("theme")

  // console.log("BMTrainingClassesDashboard trainingClasses", trainingClasses);

  useEffect(() => {
    dispatch(userGetOne(loggedInEmail))
  }, [])

  useEffect(() => {
    if (user.role.includes("Business Manager")) {
      dispatch(trainingClassGetAll())
    } else {
      dispatch(trainingClassGetMany(user.username))
    }
  }, [trainingClasses])

  return (
    <>
      <div
        className={`antialiased ${
          storedTheme === "light" ? "light-marble-bg" : "dark-marble-bg"
        }`}>
        <main className="p-4 md:ml-64 h-auto pt-24 animate__animated animate__fadeIn animate__slow transition duration-200 ease-in-out">
          {/* BUSINESS MANAGER GRADIENT TEXT - LIGHT/DARK MODE */}
          {storedTheme === "light" && user.role.includes("Business Manager") ? (
            <GradientText
              colors={["#5eead4", "#8b5cf6", "#5eead4", "#4079ff", "#8b5cf6"]}
              animationSpeed={3}
              showBorder={false}
              className="font-lexend uppercase tracking-wide text-6xl bg-transparent">
              Business Manager Dashboard
            </GradientText>
          ) : storedTheme === "dark" &&
            user.role.includes("Business Manager") ? (
            <GradientText
              colors={["#facc15", "#a3e635", "#facc15", "#a3e635", "#22c55e"]}
              animationSpeed={3}
              showBorder={false}
              className="font-lexend uppercase tracking-wide text-6xl bg-transparent">
              Business Manager Dashboard
            </GradientText>
          ) : // TRAINER GRADIENT TEXT - LIGHT/DARK MODE
          storedTheme === "light" && user.role.includes("Trainer") ? (
            <GradientText
              colors={["#5eead4", "#8b5cf6", "#5eead4", "#4079ff", "#8b5cf6"]}
              animationSpeed={3}
              showBorder={false}
              className="font-lexend uppercase tracking-wide text-6xl bg-transparent">
              Trainer Dashboard
            </GradientText>
          ) : storedTheme === "dark" && user.role.includes("Trainer") ? (
            <GradientText
              colors={["#facc15", "#a3e635", "#facc15", "#a3e635", "#22c55e"]}
              animationSpeed={3}
              showBorder={false}
              className="font-lexend uppercase tracking-wide text-6xl bg-transparent">
              Trainer Dashboard
            </GradientText>
          ) : null}

          <div className="px-20">
            {/* SHOWING CHARTS DEPENDING ON USER ROLE */}
            {user.role.includes("Business Manager") ? (
              <>
                <div className="flex pt-16 transition duration-200 ease-in-out">
                  <h1 className="w-1/4 text-center mb-6 font-learn font-bold text-xl dark:text-neutral-200">
                    Percentage of Male/Female Dogs Enrolled
                  </h1>
                  <h1 className="w-3/4 text-center font-learn font-bold text-xl dark:text-neutral-200">
                    Total Number of Dogs Currently Enrolled in Each Service
                  </h1>
                </div>
                <div className="flex mb-6">
                  <div className="w-1/4 h-80 mb-1 overflow-y-auto relative overflow-x-auto drop-shadow-xl dark:drop-shadow-lg drop-shadow-neutral-300 dark:drop-shadow-black sm:rounded-lg">
                    <PieChartMaleToFemaleDogs />
                  </div>
                  <div className="w-3/4 h-80 mb-1 ml-4 overflow-y-auto relative overflow-x-auto drop-shadow-xl dark:drop-shadow-lg drop-shadow-neutral-300 dark:drop-shadow-black sm:rounded-lg">
                    <BarChartTotalNumberOfDogsPerService />
                  </div>
                </div>
                <div className="flex">
                  <h1 className="w-full text-center mb-3 font-learn font-bold text-xl dark:text-neutral-200">
                    Dogs Enrolled per Service - 2024
                  </h1>
                </div>
                <div className="flex">
                  <div className="w-full h-80 mb-1 overflow-y-auto relative overflow-x-auto drop-shadow-xl dark:drop-shadow-lg drop-shadow-neutral-300 dark:drop-shadow-black sm:rounded-lg">
                    <LineChartTotalDogsEnrolledPerServicePastYear />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex pt-16 transition duration-200 ease-in-out">
                  <h1 className="w-full text-center mb-3 font-learn font-bold text-xl dark:text-neutral-200">
                    Dogs Enrolled in Puppy Socialization - Year 2024
                  </h1>
                </div>
                <div className="flex">
                  <div className="w-full h-80 mb-1 overflow-y-auto relative overflow-x-auto drop-shadow-xl dark:drop-shadow-lg drop-shadow-neutral-300 dark:drop-shadow-black sm:rounded-lg">
                    <LineChartTrainer />
                  </div>
                </div>
              </>
            )}

            <h2 className="mb-4 text-xl text-neutral-900 dark:text-white sm:text-3xl md:mb-6 pt-18 font-learn font-bold tracking-widest underline underline-offset-8">
              Account Overview
            </h2>
            <div className="py-4 md:pb-12 md:pt-4 md:mb-4 font-instrument">
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
                        {user.role}{" "}
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
                    {user.phoneNumber !== "" ? (
                      <dd className="text-neutral-500 dark:text-neutral-300">
                        {user.phoneNumber}
                      </dd>
                    ) : (
                      <p className="text-neutral-500 dark:text-neutral-300 font-thin">
                        Edit your profile details to add your phone number!
                      </p>
                    )}
                  </dl>
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

            <h2 className="mb-4 text-xl text-neutral-900 dark:text-white sm:text-3xl md:mb-6 font-learn font-bold tracking-widest underline underline-offset-8">
              Training Classes
            </h2>

            <div className="h-120 my-8 overflow-y-auto relative overflow-x-auto drop-shadow-xl dark:drop-shadow-lg drop-shadow-neutral-300 dark:drop-shadow-black sm:rounded-lg bg-white dark:bg-neutral-800">
              <table className="overflow-y-auto w-full text-sm text-left rtl:text-right text-neutral-600 dark:text-neutral-300 font-instrument">
                <thead className="text-xs text-neutral-700 uppercase bg-violet-200 dark:bg-yellow-400 dark:text-neutral-900">
                  <tr className="tracking-wider">
                    <th scope="col" className="px-3 py-4">
                      Training Class Name
                    </th>
                    <th scope="col" className="px-3 py-4">
                      Type
                    </th>
                    <th scope="col" className="px-3 py-4">
                      Trainer
                    </th>
                    <th scope="col" className="px-3 py-4">
                      Start Date
                    </th>
                    <th scope="col" className="px-3 py-4">
                      End Date
                    </th>
                    <th scope="col" className="px-3 py-4">
                      Detail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trainingClasses.map((trainingClass, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700">
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

                      {/* DETIAL BUTTON */}
                      <td className="px-3 py-4 justify-self-center">
                        <button
                          onClick={() =>
                            navigate(`/training-classes/${trainingClass.id}`)
                          }
                          className="cursor-pointer text-violet-500 dark:text-yellow-300 transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-0.5">
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <DashboardFooter />
    </>
  )
}

export default BMTrainerDashboard

// {/* THE BASIC DASHBOARD WITH BLOCKS AND DASHES */}

// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
// <div className="border-2 border-dashed border-neutral-300 rounded-lg dark:border-neutral-600 h-32 md:h-64"></div>
// <div className="border-2 border-dashed rounded-lg border-neutral-300 dark:border-neutral-600 h-32 md:h-64"></div>
// <div className="border-2 border-dashed rounded-lg border-neutral-300 dark:border-neutral-600 h-32 md:h-64"></div>
// <div className="border-2 border-dashed rounded-lg border-neutral-300 dark:border-neutral-600 h-32 md:h-64"></div>
// </div>
// <div className="border-2 border-dashed rounded-lg border-neutral-300 dark:border-neutral-600 h-96 mb-4"></div>
// <div className="grid grid-cols-2 gap-4 mb-4">
// <div className="border-2 border-dashed rounded-lg border-neutral-300 dark:border-neutral-600 h-48 md:h-72"></div>
// <div className="border-2 border-dashed rounded-lg border-neutral-300 dark:border-neutral-600 h-48 md:h-72"></div>
// <div className="border-2 border-dashed rounded-lg border-neutral-300 dark:border-neutral-600 h-48 md:h-72"></div>
// <div className="border-2 border-dashed rounded-lg border-neutral-300 dark:border-neutral-600 h-48 md:h-72"></div>
// </div>
// <div className="border-2 border-dashed rounded-lg border-neutral-300 dark:border-neutral-600 h-96 mb-4"></div>
// <div className="grid grid-cols-2 gap-4">
// <div className="border-2 border-dashed rounded-lg border-neutral-300 dark:border-neutral-600 h-48 md:h-72"></div>
// <div className="border-2 border-dashed rounded-lg border-neutral-300 dark:border-neutral-600 h-48 md:h-72"></div>
// <div className="border-2 border-dashed rounded-lg border-neutral-300 dark:border-neutral-600 h-48 md:h-72"></div>
// <div className="border-2 border-dashed rounded-lg border-neutral-300 dark:border-neutral-600 h-48 md:h-72"></div>
// </div>
