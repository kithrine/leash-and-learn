import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  trainingClassGetOne,
  trainingClassSessionUpdate,
} from "../../redux/trainingClassSlice";

const SessionEditModal = ({ session }) => {
  const dispatch = useDispatch();
  let trainingClassId = location.pathname.split("/")[2];
  const { id } = useParams();
  const { trainingClass } = useSelector((state) => state.trainingClass);
  const [showEditSessionModal, setShowEditSessionModal] = useState(false);
  // const [sessionEditForm, setSessionEditForm] = useState({
    //   sessionIndex: 0,
    //   submitEnabled: true,
    //   sessionName: "",
    //   sessionDescription: "",
    //   sessionType: "",
    //   percentComplete: 0,
    //   sessionDate: null,
    //   sessionTime: "",
    //   sessionDuration: 0,
    //   activitiesPerformed: "",
    //   customers: [],
    // });
    const [sessionEditForm, setSessionEditForm] = useState({
      sessionIndex: session.sessionIndex,
      sessionName: session.sessionName,
      sessionDescription: session.sessionDescription,
      sessionType: session.sessionType,
      percentComplete: session.percentComplete,
      sessionDate: session.sessionDate,
      sessionTime: session.sessionTime,
      sessionDuration: session.sessionDuration,
      activitiesPerformed: session.activitiesPerformed,
      customers: [],
    });
    
    // console.log("session on edit modal: ", session);
  // console.log("testing edit text: ", sessionEditForm);

  useEffect(() => {
    console.log(
      "trainingClassSessions useEffect location",
      location,
      trainingClassId
    );
    dispatch(trainingClassGetOne(trainingClassId));
  }, []);

  // useEffect(() => {
  //   console.log("trainingClassSessions useEffect trainingClass", trainingClass)
  //   console.log("trainingClassSessions useEffect trainingClass.sessions", trainingClass.sessions)
  //   setSessionEditForm(trainingClass.sessions)
  // }, [trainingClass])

  useEffect(() => {
    setSessionEditForm(session);
    // console.log("useEffect sessionForm", sessionEditForm);
    // console.log("sessionEditForm", sessionEditForm)
  }, []);

  useEffect(() => {
    console.log("sessionEditForm", sessionEditForm)
  }, [sessionEditForm])
  
  const handleDatepickerFormat = (classDate) => {
    // convert string to date
    let newDate = new Date(classDate);
    // Set  hours back because of UTC
    let dateMinus7 = newDate.setHours(newDate.getHours() + 7);
    // Use en-CA default format
    return new Date(dateMinus7).toLocaleDateString("en-CA");
  };

  const handleSessionEditModal = (session) => {
    // setSessionEditForm(session);
    setShowEditSessionModal(true);
  };

  const handleUpdate = () => {
    console.log("trainingClassId:", trainingClassId, "session:", sessionEditForm);
    dispatch(trainingClassSessionUpdate({ trainingClassId, sessionId: sessionEditForm._id, sessionEditForm })); // add trainingClassId
    setShowEditSessionModal(false)
    toast.success("Training Session updated successfully!");
  };

  return (
    <>
      <button
        onClick={() => handleSessionEditModal(session)}
        type="button"
        className="text-black bg-gradient-to-r from-green-400 to-lime-400 hover:bg-gradient-to-l hover:from-green-400 hover:to-lime-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[10vw]"
      >
        Edit
      </button>

      {showEditSessionModal && (
        <div
          id="updateProductModal"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center justify-self-center ml-96 w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 ml-80 w-full max-w-3xl h-full md:h-auto">
            {/* <!-- Modal content --> */}
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              {/* <!-- Modal header --> */}
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Edit Session
                </h3>
                <button
                  onClick={() => {
                    setShowEditSessionModal(false);
                  }}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="updateProductModal"
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
                <section className="bg-white dark:bg-gray-900">
                  <div className="py-4 px-4 mx-auto lg:px-6">
                    <div className="space-y-8 sm:gap-6 xl:gap-10 lg:space-y-0">
                      {/* <!-- Edit Session Content --> */}
                      <div className="flex flex-col justify-between p-6 mx-auto max-w-2xl text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <textarea
                          value={sessionEditForm.sessionName}
                          onChange={(e) =>
                            setSessionEditForm({
                              ...sessionEditForm,
                              sessionName: e.target.value,
                            })
                          }
                          className="block px-2 py-1 mb-4 text-2xl rounded-lg border focus:ring-[#beb09d]focus:border-[#beb09d] bg-gray-50 text-black focus:outline-[#beb09d] border-[#cccccc]"
                          autoComplete="off"
                          resize="none"
                        />
                        {/* <h3 className="mb-4 text-2xl font-semibold">
                          {sessionForm.sessionName}
                        </h3> */}

                        <textarea
                          value={sessionEditForm.sessionDescription}
                          onChange={(e) =>
                            setSessionEditForm({
                              ...sessionEditForm,
                              sessionDescription: e.target.value,
                            })
                          }
                          className="font-light bg-gray-50 text-gray-700 sm:text-lg dark:text-gray-400 block px-2 py-1 text-2xl rounded-lg border focus:ring-[#beb09d]focus:border-[#beb09d] text-black focus:outline-[#beb09d] border-[#cccccc]"
                          rows={6}
                        />

                        {/* <!-- List --> */}
                        <ul role="list" className="my-4 space-y-4 text-left">
                          <li className="flex items-center justify-between space-x-3">
                            <label htmlFor="session-type">Session Type:</label>
                            <input
                              value={sessionEditForm.sessionType}
                              onChange={(e) =>
                                setSessionEditForm({
                                  ...sessionEditForm,
                                  sessionType: e.target.value,
                                })
                              }
                              type="text"
                              id="session-type"
                              className="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-[#beb09d]focus:border-[#beb09d] text-black focus:outline-[#beb09d] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />

                            {/* *** Tried to do a selectbox - will have to save for later for sure to do it this way */}

                            {/* <select
                            value={sessionEditForm.sessionType} id="session-type" className="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-[#beb09d]focus:border-[#beb09d] text-black focus:outline-[#beb09d] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option value="Group">Group</option>
                              <option value="Private">Private</option>
                            </select> */}
                          </li>

                          <li className="flex justify-between items-center space-x-3">
                            <label>Percent Complete: </label>

                            <input
                              value={sessionEditForm.percentComplete}
                              onChange={(e) =>
                                setSessionEditForm({
                                  ...sessionEditForm,
                                  percentComplete: e.target.value,
                                })
                              }
                              type="text"
                              id="small-input"
                              className="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-[#beb09d]focus:border-[#beb09d] text-black focus:outline-[#beb09d] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </li>

                          <li className="flex justify-between items-center space-x-3">
                            <label>Session Date: </label>

                            {/* {new Intl.DateTimeFormat("en-US").format(
                                  new Date(session.sessionDate)
                                )} */}
                            <input
                              value={handleDatepickerFormat(
                                sessionEditForm.sessionDate
                              )}
                              onChange={(e) =>
                                setSessionEditForm({
                                  ...sessionEditForm,
                                  sessionDate: handleDatepickerFormat(e.target.value),
                                })
                              }
                              type="date"
                              id="small-input"
                              className="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-[#beb09d]focus:border-[#beb09d] text-black focus:outline-[#beb09d] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </li>

                          <li className="flex justify-between items-center space-x-3">
                            <label>Session Time: </label>
                            <input
                              value={sessionEditForm.sessionTime}
                              onChange={(e) =>
                                setSessionEditForm({
                                  ...sessionEditForm,
                                  sessionTime: e.target.value,
                                })
                              }
                              type="text"
                              id="small-input"
                              className="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-[#beb09d]focus:border-[#beb09d] text-black focus:outline-[#beb09d] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </li>

                          <li className="flex justify-between items-center space-x-3">
                            <label>
                              Session Duration{" "}
                              <span className="text-xs">(in hours)</span>:{" "}
                            </label>
                            <input
                              value={sessionEditForm.sessionDuration}
                              onChange={(e) =>
                                setSessionEditForm({
                                  ...sessionEditForm,
                                  sessionDuration: e.target.value,
                                })
                              }
                              type="text"
                              id="small-input"
                              className="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-[#beb09d]focus:border-[#beb09d] text-black focus:outline-[#beb09d] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </li>

                          <li className="flex flex-col mx-auto items-center text-center justify-self-center">
                            <label className="flex justify-self-center text-center mx-auto">
                              Activities Performed:{" "}
                            </label>
                            <textarea
                              value={sessionEditForm.activitiesPerformed}
                              onChange={(e) =>
                                setSessionEditForm({
                                  ...sessionEditForm,
                                  activitiesPerformed: e.target.value,
                                })
                              }
                              className="block w-full mx-auto px-2 py-1 mb-4 text-lg rounded-lg border bg-gray-50 focus:ring-[#beb09d]focus:border-[#beb09d] text-black focus:outline-[#beb09d] border-[#cccccc]"
                              autoComplete="off"
                              rows={3}
                              resize="none"
                            />
                          </li>

                          <li className="flex items-center space-x-3">
                            <span>
                              Customers: <span className="font-semibold"></span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleUpdate}
                    // disabled={!sessionId.submitEnabled}
                    type="button"
                    className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 disabled:opacity-50"
                  >
                    Update Session
                  </button>
                  <button
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
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SessionEditModal;

// {/* THE INPUT BOX I'D LIKE TO PUT WHEN EDITING THE FIELDS */}
// <input className="px-2 py-1 text-base  rounded-lg border focus:outline focus:outline-1 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cccccc]" placeholder="Type your name.." autoComplete="off"></input>
