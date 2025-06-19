import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { trainingClassGetAll } from "../../redux/trainingClassSlice";
import { userGetOne } from "../../redux/userSlice";
import BMSideNav from "../navigation/BMSideNav";
import GradientText from "../reactbits+framer-motion/GradientText"
import DashboardFooter from "../footers/DashboardFooter";
import PieChartMaleToFemaleDogs from "../charts/PieChartMaleToFemaleDogs";
import BarChartTotalNumberOfDogsPerService from "../charts/BarChartTotalNumberOfDogsPerService";
import LineChartTotalDogsEnrolledPerServicePastYear from "../charts/LineChartTotalDogsEnrolledPerServicePastYear"

const BMDashboard = ({ loggedInEmail }) => {
  const navigate = useDispatch();
  const dispatch = useDispatch();

  const { trainingClasses } = useSelector((state) => state.trainingClass);
  const { user } = useSelector((state) => state.users)

  const storedTheme = localStorage.getItem("theme")

  // console.log("BMTrainingClassesDashboard trainingClasses", trainingClasses);

  useEffect(() => {
    dispatch(userGetOne(loggedInEmail))
  }, [])

  useEffect(() => {
    dispatch(trainingClassGetAll());
  }, []);

  return (
    <>
      <div className={`antialiased ${storedTheme === "light" ? "light-marble-bg" : "dark-marble-bg"}`}>
        <main className="p-4 md:ml-64 h-auto pt-20">
        {storedTheme === "light" && user.role.includes("Business Manager") ? (
           (
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
              Business Manager Dashboard
            </GradientText>

          )
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
                  Business Manager Dashboard
                </GradientText>
              )}
              
          <div className="flex">
            <h1 className="w-1/4 text-center mb-6 phudu font-bold">
              Total Number of Male to Female Dogs Enrolled
            </h1>
            <h1 className="w-3/4 text-center phudu font-bold">
              Total Number of Dogs Currently Enrolled in Each Service
            </h1>
          </div>
          <div className="flex mb-6">
            <div className="w-1/4 h-80 mb-1 overflow-y-auto relative overflow-x-auto shadow-md sm:rounded-lg">
              <PieChartMaleToFemaleDogs />
            </div>
            <div className="w-3/4 h-80 mb-1 ml-4 overflow-y-auto relative overflow-x-auto shadow-md sm:rounded-lg">
              <BarChartTotalNumberOfDogsPerService />
            </div>
          </div>
          <div className="flex">
          <h1 className="w-full text-center mb-3 phudu font-bold">
              Dogs Enrolled per Service - 2024
            </h1>
          </div>
          <div className="flex">
            <div className="w-full h-80 mb-1 overflow-y-auto relative overflow-x-auto shadow-md sm:rounded-lg">
              <LineChartTotalDogsEnrolledPerServicePastYear />
            </div>
          
          </div>
          <div className="h-96 my-8 overflow-y-auto relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="overflow-y-auto w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400">
              <thead className="text-xs text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Training Class Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Trainer
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Start Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    End Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {trainingClasses.map((trainingClass) => (
                  <tr className="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white"
                    >
                      {trainingClass.trainingClassName}
                    </th>
                    <td className="px-6 py-4">
                      {trainingClass.trainingClassType}
                    </td>
                    <td className="px-6 py-4">
                      {trainingClass.trainer.firstName}{" "}
                      {trainingClass.trainer.lastName}
                    </td>
                    <td className="px-6 py-4">
                      {new Intl.DateTimeFormat("en-US").format(
                        new Date(trainingClass.startDate)
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {new Intl.DateTimeFormat("en-US").format(
                        new Date(trainingClass.endDate)
                      )}
                    </td>

                    {/* DETIAL BUTTON */}
                    <td className="px-6 py-4 justify-self-center">
                      <button
                        onClick={() =>
                          navigate(`/training-classes/${trainingClass.id}`)
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="25"
                          width="25"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#d0c5f2"
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
        </main>
      </div>

      <DashboardFooter />
    </>
  );
};

export default BMDashboard;

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
