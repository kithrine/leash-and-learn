import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { trainingClassCreate } from "../../redux/trainingClassSlice"
import { builderGetMany } from "../../redux/builderSlice"
import * as motion from "motion/react-client"
import TrainingClassCreateConfirmationModal from "../../components/modals/TrainingClassCreateConfirmationModal"
import DashboardFooter from "../../components/footers/DashboardFooter"
// import { DatePicker } from "react-datepicker"
// import 'react-datepicker/dist/react-datepicker.css';

const TrainingClassCreateForm = () => {
  const [trainingClass, setTrainingClass] = useState({
    trainingClassType: "",
    trainer: "",
    trainingClassName: "",
    trainingClassDescription: "",
    startDate: "",
    endDate: ""
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const { loading } = useSelector((state) => state.trainingClass)
  const { builders } = useSelector((state) => state.builder)
  const dispatch = useDispatch()

  const storedTheme = localStorage.getItem("theme")

  useEffect(() => {
    dispatch(builderGetMany())
  }, [])

  const handleTrainingClassCreate = (e) => {
    e.preventDefault()
    // console.log("handleTrainingClassCreate");
    // Validation
    dispatch(trainingClassCreate(trainingClass))
    setShowSuccessModal(true)
    setSubmitDisabled(true)
  }

  const getTrainer = (type) => {
    // let trainer = ""
    // switch (type) {
    //   case "Basic Obedience" :
    //     trainer = "Megan Alexander"
    //   case "Behavior Modification" :
    //     trainer = "Katherine Finch"
    //   case "Puppy Socialization" :
    //     trainer = ""
    //   case "" :
    //     trainer = ""
    //   case "" :
    //     trainer = ""
    //   case "" :
    //     trainer = ""
    // }
    // return trainer
    // console.log(builders.filter(builder => builder.trainingClassType === type))
    let trainingClass = builders.filter(
      (builder) => builder.trainingClassType === type
    )[0]
    // console.log(trainingClass)
    return `${trainingClass.trainer.firstName} ${trainingClass.trainer.lastName}`
  }

  return (
    <>
      <section
        className={`mt-16 py-8 antialiased md:py-8 ${
          storedTheme === "light" ? "light-melt-bg" : "dark-melt-bg"
        }`}>
        <div className="md:ml-64">
          <div className={`mx-auto max-w-screen-lg px-4 2xl:px-0 "`}>
            <div className="mx-auto max-w-full text-center animate__animated animate__fadeIn animate__slower">
              <h2 className="text-balance text-4xl pt-2 font-bold font-lexend uppercase tracking-tight text-neutral-900 dark:text-white md:text-4xl pb-6">
                Create A New Dog Training Class
              </h2>
              {/* <p className="mt-2 text-lg/8 text-violet-600 dark:text-yellow-400 font-instrument">
                Edit details of your profile
              </p>
               */}
            </div>
            <form
              onSubmit={handleTrainingClassCreate}
              className="mb-10 mx-auto md:mt-2 max-w-2xl bg-white dark:bg-neutral-800 px-10 py-10 rounded-2xl drop-shadow-xl drop-shadow-neutral-300 dark:drop-shadow-black font-instrument animate__animated animate__fadeInUp">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2 md:col-span-1">
                  {/* TYPE OF TRAINING/SERVICE */}
                  <label
                    htmlFor="service-type"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
                    Type of Training
                  </label>
                  <div className="flex items-center gap-x-2 mt-2.5">
                    <select
                      value={trainingClass.trainingClassType}
                      onChange={(e) =>
                        setTrainingClass({
                          ...trainingClass,
                          trainingClassType: e.target.value,
                          trainer: getTrainer(e.target.value)
                        })
                      }
                      id="service-type"
                      className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option defaultValue>Select type</option>
                      {builders.map((type) => (
                        <option value={type.trainingClassType}>
                          {type.trainingClassType}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* ASSIGN TRAINER */}
                <div>
                  <label
                    htmlFor="trainer"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
                    Assign Trainer
                  </label>
                  <div className="mt-2.5">
                    <select
                      value={trainingClass.trainer}
                      onChange={(e) =>
                        setTrainingClass({
                          ...trainingClass,
                          trainer: e.target.value
                        })
                      }
                      id="trainer"
                      className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option defaultValue>Select trainer</option>
                      <option value="Megan Alexander">Megan Alexander</option>
                      <option value="Katherine Finch">Katherine Finch</option>
                      <option value="Annie Baysinger">Annie Baysinger</option>
                      <option value="Jesse Soliz">Jesse Soliz</option>
                      <option value="Audrey Radulovich">
                        Audrey Radulovich
                      </option>
                      <option value="Rashaun Marshall">Rashaun Marshall</option>
                    </select>
                  </div>
                </div>

                {/* NAME OF THE CLASS */}
                <div className="col-span-2">
                  <label
                    htmlFor="class-name"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
                    Class Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      value={trainingClass.trainingClassName}
                      onChange={(e) =>
                        setTrainingClass({
                          ...trainingClass,
                          trainingClassName: e.target.value
                        })
                      }
                      type="text"
                      name="class-name"
                      id="class-name"
                      className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Name of Class"
                      required=""
                    />
                  </div>
                </div>


                {/* START DATE DATEPICKER */}
                <div className="sm:col-span-2 md:col-span-1">
                  <label
                    htmlFor="datepicker-start-date"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider mb-2">
                    Start Date
                  </label>
                  <input
                    value={trainingClass.startDate}
                    onChange={(e) =>
                      setTrainingClass({
                        ...trainingClass,
                        startDate: e.target.value
                      })
                    }
                    type="date"
                    name="start-date"
                    id="datepicker-start-date"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Start Date"
                    required=""
                  />
                </div>

                {/* END DATE DATEPICKER */}
                <div className="sm:col-span-2 md:col-span-1">
                  <label
                    htmlFor="datepicker-end-date"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider mb-2">
                    End Date
                  </label>
                  <input
                    value={trainingClass.endDate}
                    onChange={(e) =>
                      setTrainingClass({
                        ...trainingClass,
                        endDate: e.target.value
                      })
                    }
                    type="date"
                    name="end-date"
                    id="datepicker-end-date"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="End Date"
                    required=""
                  />
                </div>

                {/* DESCRIPTION */}
                <div className="sm:col-span-2 md:col-span-2">
                  <label
                    htmlFor="description"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
                    Description
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      value={trainingClass.trainingClassDescription}
                      onChange={(e) =>
                        setTrainingClass({
                          ...trainingClass,
                          trainingClassDescription: e.target.value
                        })
                      }
                      id="description"
                      rows="8"
                      className="block p-2.5 w-full text-sm text-neutral-900 bg-neutral-50 rounded-lg border border-neutral-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Description of Class"
                    />
                  </div>
                </div>
              </div>

              {/* CREATE CLASS BUTTON */}
              <div className="mt-3">
                <motion.button
                  type="submit"
                  disabled={submitDisabled}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block rounded-lg font-bold text-white dark:text-black bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 text-sm px-5 py-2.5 mt-1 text-center dark:bg-lime-400 dark:hover:bg-lime-500 dark:focus:ring-lime-600 cursor-pointer shadow-sm">
                  Create Class
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <DashboardFooter />
      {showSuccessModal && <TrainingClassCreateConfirmationModal />}
    </>
  )
}

export default TrainingClassCreateForm

// {
/* <div
                id="date-range-picker"
                date-rangepicker="true"
                className="flex items-center"
              >
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-neutral-500 dark:text-neutral-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
									value={service.startDate}
                  onChange={(e) =>
                    setService({ ...service, startDate: e.target.value }) }
                    id="datepicker-range-start"
                    name="start"
										datepicker="true"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                  />
                </div>
                <span className="mx-4 text-neutral-500">to</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-neutral-500 dark:text-neutral-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
										value={service.endDate}
										onChange={(e) => 
											setService({ ...service, endDate: e.target.value }) }
                    id="datepicker-range-end"
                    name="end"
										datepicker="true"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                  />
                </div>
              </div> */
// }
