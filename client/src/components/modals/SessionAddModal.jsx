import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { trainingClassSessionCreate, trainingClassGetOne } from "../../redux/trainingClassSlice";
import * as motion from "motion/react-client"
import { toast } from "react-toastify";

const SessionAddModal = ({setShowSessionAddModal, handleDatepickerFormat}) => {
  const dispatch = useDispatch()
  let trainingClassId = location.pathname.split("/")[2];
  const storedTheme = localStorage.getItem("theme")

  const [sessionAddForm, setSessionAddForm] = useState({
    // sessionIndex: session.sessionIndex,
    sessionName: "",
    sessionDescription: "",
    sessionType: "",
    percentComplete: "",
    sessionDate: "",
    sessionTime: "",
    sessionDuration: "",
    activitiesPerformed: "",
    // customers: [],
  });

  useEffect(() => {
    console.log(
      "trainingClassSessions useEffect location",
      location,
      trainingClassId
    );
    dispatch(trainingClassGetOne(trainingClassId));
  }, []);

  // useEffect(() => {
  //   console.log("sessionAddForm", sessionAddForm)
  // }, [sessionAddForm])

  const handleSessionCreate = () => {
    // console.log("trainingClassId:", trainingClassId, "session:", sessionEditForm);
    dispatch(trainingClassSessionCreate({ trainingClassId, sessionAddForm })); // add trainingClassId
    setShowSessionAddModal(false)
    if (storedTheme === "dark") {
      toast.success("Training Session added successfully!", {
        theme: "dark",
        className: "mt-14"
      })
    } else {
      toast.success("Training Session added successfully!", {
        className: "mt-14"
      })
    }
  };



  return (
    <>
      <div
          id="addSessionModal"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-49 justify-center items-center w-full md:inset-0 h-modal md:h-full drop-shadow-xl drop-shadow-neutral-300 dark:drop-shadow-black animate__animated animate__fadeInUp"
        >
           {/* <div
        className="fixed inset-0 bg-neutral-500/75 transition-opacity min-h-[104.5vh]"
        aria-hidden="true"></div> */}
          <div className="relative p-4 w-full max-w-3xl h-full md:h-auto justify-self-center mt-16 md:ml-64 drop-shadow-xl drop-shadow-neutral-300 dark:drop-shadow-black">
            {/* <!-- Modal content --> */}
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-neutral-800 sm:p-5">
              {/* <!-- Modal header --> */}
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-neutral-600">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white font-lexend uppercase">
                  Add Session
                </h3>
                <button
                  onClick={() => {
                    setShowSessionAddModal(false)
                  }}
                  type="button"
                  className="text-neutral-400 bg-transparent hover:bg-neutral-200 hover:text-neutral-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-neutral-600 dark:hover:text-white cursor-pointer"
                  data-modal-toggle="addSessionModal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <form action="#">
                <section className="font-instrument">
                  {/* <div className="py-4 px-4 mx-auto lg:px-6"> */}
                    <div className="space-y-8 sm:gap-6 xl:gap-10 lg:space-y-0">
                      {/* <!-- Edit Session Content --> */}
                      <div className="flex flex-col justify-between p-6 text-center text-neutral-900 bg-white rounded-xl border border-neutral-100 shadow dark:border-neutral-600 xl:px-8 dark:bg-neutral-800 dark:text-white">
                      <label className="flex justify-self-center text-center mx-auto">
                              Session Name:{" "}
                            </label>
                        <textarea
                          value={sessionAddForm.sessionName}
                          onChange={(e) =>
                            setSessionAddForm({
                              ...sessionAddForm,
                              sessionName: e.target.value,
                            })
                          }
                          className="block px-2 py-1 mb-4 text-2xl rounded-lg border focus:ring-teal-400 focus:border-teal-400 bg-neutral-50 focus:outline-teal-400 border-[#cccccc] dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400 dark:focus:outline-lime-400"
                          autoComplete="off"
                          resize="none"
                        />
                        {/* <h3 className="mb-4 text-2xl font-semibold">
                          {sessionForm.sessionName}
                        </h3> */}
                        <label className="flex justify-self-center text-center mx-auto">
                              Session Description:{" "}
                            </label>
                        <textarea
                          value={sessionAddForm.sessionDescription}
                          onChange={(e) =>
                            setSessionAddForm({
                              ...sessionAddForm,
                              sessionDescription: e.target.value,
                            })
                          }
                          className="font-light bg-neutral-50 sm:text-lg  block px-2 py-1 text-2xl rounded-lg border focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-400 border-[#cccccc] dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400 dark:focus:outline-lime-400"
                          rows={6}
                        />

                        {/* <!-- List --> */}
                        <ul role="list" className="mt-4 space-y-4 text-left">
                          <li className="flex items-center justify-between space-x-3">
                            <label htmlFor="session-type">Session Type:</label>
                            <input
                              value={sessionAddForm.sessionType}
                              onChange={(e) =>
                                setSessionAddForm({
                                  ...sessionAddForm,
                                  sessionType: e.target.value,
                                })
                              }
                              type="text"
                              id="session-type"
                              className="block w-1/2 p-2 text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 text-sm focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-400 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400 dark:focus:outline-lime-400"
                            />

                            {/* *** Tried to do a selectbox - will have to save for later for sure to do it this way */}

                            {/* <select
                            value={sessionAddForm.sessionType} id="session-type" className="block w-1/2 p-2 text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 text-xs focus:ring-[#beb09d]focus:border-[#beb09d] text-black focus:outline-[#beb09d] dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400 dark:focus:outline-lime-400">
                              <option value="Group">Group</option>
                              <option value="Private">Private</option>
                            </select> */}
                          </li>

                          <li className="flex justify-between items-center space-x-3">
                            <label>Percent Complete: </label>

                            <input
                              value={sessionAddForm.percentComplete}
                              onChange={(e) =>
                                setSessionAddForm({
                                  ...sessionAddForm,
                                  percentComplete: e.target.value,
                                })
                              }
                              type="text"
                              id="small-input"
                              className="block w-1/2 p-2 text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 text-sm focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-400 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400 dark:focus:outline-lime-400"
                            />
                          </li>

                          <li className="flex justify-between items-center space-x-3">
                            <label>Session Date: </label>

                            {/* {new Intl.DateTimeFormat("en-US").format(
                                  new Date(session.sessionDate)
                                )} */}
                            <input
                              value={handleDatepickerFormat(
                                sessionAddForm.sessionDate
                              )}
                              onChange={(e) =>
                                setSessionAddForm({
                                  ...sessionAddForm,
                                  sessionDate: handleDatepickerFormat(e.target.value),
                                })
                              }
                              type="date"
                              id="small-input"
                              className="block w-1/2 p-2 text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 text-sm focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-400 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400 dark:focus:outline-lime-400"
                            />
                          </li>

                          <li className="flex justify-between items-center space-x-3">
                            <label>Session Time: </label>
                            <input
                              value={sessionAddForm.sessionTime}
                              onChange={(e) =>
                                setSessionAddForm({
                                  ...sessionAddForm,
                                  sessionTime: e.target.value,
                                })
                              }
                              type="text"
                              id="small-input"
                              className="block w-1/2 p-2 text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 text-sm focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-400 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400 dark:focus:outline-lime-400"
                            />
                          </li>

                          <li className="flex justify-between items-center space-x-3">
                            <label>
                              Session Duration{" "}
                              <span className="text-sm">(in hours)</span>:{" "}
                            </label>
                            <input
                              value={sessionAddForm.sessionDuration}
                              onChange={(e) =>
                                setSessionAddForm({
                                  ...sessionAddForm,
                                  sessionDuration: e.target.value,
                                })
                              }
                              type="text"
                              id="small-input"
                              className="block w-1/2 p-2 text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 text-sm focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-400 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400 dark:focus:outline-lime-400"
                            />
                          </li>

                          <li className="flex flex-col mx-auto items-center text-center justify-self-center">
                            <label className="flex justify-self-center text-center mx-auto">
                              Activities Performed:{" "}
                            </label>
                            <textarea
                              value={sessionAddForm.activitiesPerformed}
                              onChange={(e) =>
                                setSessionAddForm({
                                  ...sessionAddForm,
                                  activitiesPerformed: e.target.value,
                                })
                              }
                              className="block w-full mx-auto px-2 py-1 text-lg rounded-lg border bg-neutral-50 focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-400 border-[#cccccc] dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400 dark:focus:outline-lime-400"
                              autoComplete="off"
                              rows={3}
                              resize="none"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  {/* </div> */}
                </section>
                <div className="flex items-center space-x-4 pt-1 font-instrument">
                  <motion.button
                    onClick={handleSessionCreate}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    // disabled={!sessionId.submitEnabled}
                    type="button"
                    className="text-white dark:text-black bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-5 py-2.5 mt-1 text-center dark:bg-lime-400 dark:hover:bg-lime-500 dark:focus:ring-lime-600 cursor-pointer disabled:opacity-50"
                  >
                   Add Session
                  </motion.button>
                  {/* <button
                    type="button"
                    className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    <svg
                      className="mr-1 -ml-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Delete
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default SessionAddModal