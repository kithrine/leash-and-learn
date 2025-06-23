import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { trainingClassGetOne, trainingClassSessionDelete } from "../../redux/trainingClassSlice";
import { ToastContainer } from "react-toastify";
import BMTrainingClassEditModal from "../modals/TrainingClassEditModal"
import SessionEditModal from "../modals/SessionEditModal";
import SessionDeleteModal from "../modals/SessionDeleteModal";
import TrainingClassDetailSkeleton from "../skeletons/TrainingClassDetailSkeleton";
import SessionAddModal from "../modals/SessionAddModal";

const BMDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { trainingClass } = useSelector((state) => state.trainingClass);
  let trainingClassId = location.pathname.split("/")[2];


  // const [ editing, isEditing ] =

  // const [ trainingClass, setTrainingClass ] = useState({
  //   trainingClassName: "",
  //   trainingClassDescription: "",
  //   trainingClassType: "",
  //   startDate: "", // Really no idea what to put for this one or the one below ("", null, new Date()??????)
  //   endDate: "",
  //   trainer: {
  //     firstName: "",
  //     lastName: "",
  //     username: "",
  //     email: "",
  //   }
  // })
  const [showSessionAddModal, setShowSessionAddModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [sessionToDelete, setSessionToDelete] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Id for Jack", id)
    dispatch(trainingClassGetOne(id));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleDatepickerFormat = (classDate) => {
    // convert string to date
    let newDate = new Date(classDate);
    // Set  hours back because of UTC
    let dateMinus7 = newDate.setHours(newDate.getHours() + 7);
    // Use en-CA default format
    return new Date(dateMinus7).toLocaleDateString("en-CA");
  };

  const handleDelete = (session) => {
    // console.log("handleDelete", id, session)
    dispatch(trainingClassSessionDelete({ trainingClassId: id, sessionId: session._id }))
  };

  // const handleSessionEdit = (session) => {
  //   setSessionForm(session);
  //   setShowModal(true);
  // };
  return (
    <>
      {/* If page is loading... */}
      {loading ? (
        // LOADING SKELETON
        <TrainingClassDetailSkeleton />
      ) : (
        // If not loading, show the page:
        // BUSINESS MANAGER DETAIL PAGE
        <div>
          <ToastContainer />
          <div className="">
            {/* Training Class Details */}
            <div className="w-10/12 justify-self-center bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-800 dark:border-neutral-700">
              <ul
                className="text-sm font-medium text-center text-neutral-500 divide-x divide-neutral-200 rounded-lg sm:flex dark:divide-neutral-600 dark:text-neutral-400 rtl:divide-x-reverse"
                id="fullWidthTab"
                data-tabs-toggle="#fullWidthTabContent"
                role="tablist"
              >
                {/* Training Class Name */}
                <li className="w-full">
                  <div className="learn font-bold text-stone-700 text-3xl inline-block w-full p-4 rounded-ss-lg bg-neutral-50 hover:bg-neutral-100 focus:outline-none dark:bg-neutral-700 dark:hover:bg-neutral-600">
                    {trainingClass.trainingClassName}
                  </div>
                </li>
              </ul>
              <div className="border-t border-neutral-200 dark:border-neutral-600">
                <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-neutral-800">
                  <div>
                    <dl className="divide-y divide-neutral-100">
                      {/* Training Class Type */}
                      <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-neutral-900">
                          Type
                        </dt>
                        <dd className="mt-1 text-sm/6 text-neutral-700 sm:col-span-1 sm:mt-0">
                          {trainingClass.trainingClassType}
                        </dd>
                      </div>

                      {/* Trainer */}
                      <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-neutral-900">
                          Trainer
                        </dt>
                        <dd className="mt-1 text-sm/6 text-neutral-700 sm:col-span-1 sm:mt-0">
                          {trainingClass.trainer.firstName}{" "}
                          {trainingClass.trainer.lastName}
                        </dd>
                      </div>

                      {/* Training Class Description */}
                      <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-neutral-900">
                          Description
                        </dt>
                        <dd className="mt-1 text-sm/6 text-neutral-700 sm:col-span-1 sm:mt-0">
                          {trainingClass.trainingClassDescription}
                        </dd>
                      </div>

                      {/* Start Date */}
                      <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-neutral-900">
                          Start Date
                        </dt>
                        <dd className="mt-1 text-sm/6 text-neutral-700 sm:col-span-1 sm:mt-0">
                          {new Intl.DateTimeFormat("en-US").format(
                            new Date(trainingClass.startDate)
                          )}
                        </dd>
                      </div>

                      {/* End Date */}
                      <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-neutral-900">
                          End Date
                        </dt>
                        <dd className="mt-1 text-sm/6 text-neutral-700 sm:col-span-1 sm:mt-0">
                          {new Intl.DateTimeFormat("en-US").format(
                            new Date(trainingClass.endDate)
                          )}
                        </dd>
                      </div>
                    </dl>
                    {/* Button to Edit the Details Form */}
                    <div className="justify-self-center">
                    <BMTrainingClassEditModal />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TRAINING CLASS SESSIONS FOR SPECIFIC TRAINING CLASS */}
          <section className="bg-white dark:bg-neutral-900">
            <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-white">
                  Training Class Sessions
                </h2>
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
                <button
        onClick={() => setShowSessionAddModal(true)}
        type="button"
        className="text-black bg-gradient-to-r from-green-400 to-lime-400 hover:bg-gradient-to-l hover:from-green-400 hover:to-lime-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[10vw]"
      >
        Add Session
      </button>
      {showSessionAddModal && <SessionAddModal setShowSessionAddModal={setShowSessionAddModal} handleDatepickerFormat={handleDatepickerFormat} />}
              </div>
              <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
                {/* THE INPUT BOX I'D LIKE TO PUT WHEN EDITING THE FIELDS */}
                {/* <input className="px-2 py-1 text-base  rounded-lg border focus:outline focus:outline-1 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cccccc]" placeholder="Type your name.." autocomplete="off"></input> */}

                {/* <!-- Training Class 8 Week Cards --> */}
                {trainingClass.sessions.map((session, index) => (
                  <div
                    className="flex flex-col justify-between p-6 mx-auto max-w-2xl text-center text-neutral-900 bg-white rounded-lg border border-neutral-100 shadow dark:border-neutral-600 xl:p-8 dark:bg-neutral-800 dark:text-white min-w-[35vw]"
                    key={index}
                  >
                    <h3 className="mb-4 text-3xl font-semibold">
                      {session.sessionName}
                    </h3>
                    <p className="font-light text-neutral-500 sm:text-lg dark:text-neutral-400">
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
                      <li className="flex items-center space-x-3">
                        <h1 className="font-semibold">Customers: </h1>
                        <span>{session.customers}</span>
                      </li>
                    </ul>

                    <div className="flex flex-row mx-auto space-x-40">
                    <SessionEditModal handleDatepickerFormat={handleDatepickerFormat}
                      session={session}
                    />
                    <button
                      onClick={() => { setShowDeleteModal(true); setSessionToDelete(session); }}
                      type="button"
                      className="text-white bg-gradient-to-r from-rose-700 to-red-500 hover:bg-gradient-to-l hover:from-rose-700 hover:to-red-500 focus:ring-4 focus:outline-none focus:ring-red-600 dark:focus:ring-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[10vw]"
                    >
                      Delete
                    </button>
                    {showDeleteModal && sessionToDelete._id === session._id && <SessionDeleteModal setShowDeleteModal={setShowDeleteModal} handleDelete={handleDelete} session={session} />}
                  </div>
                  </div>
                ))}
                {/* {showModal && } */}
              </div>
            </div>
          </section>
        </div>
      )}
      
    </>
  );
};

export default BMDetail;
