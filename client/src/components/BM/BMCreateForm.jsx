import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { trainingClassCreate } from "../../redux/trainingClassSlice";
import { builderGetMany } from "../../redux/builderSlice";
import BMSideNav from "../navigation/BMSideNav";
import BMCreateFormConfirmationModal from "../modals/BMCreateFormConfirmationModal";
import DashboardFooter from "../footers/DashboardFooter";
// import { DatePicker } from "react-datepicker"
// import 'react-datepicker/dist/react-datepicker.css';


const BMCreateForm = () => {
  const [trainingClass, setTrainingClass] = useState({
    trainingClassType: "",
    trainer: "",
    trainingClassName: "",
    trainingClassDescription: "",
    startDate: "",
    endDate: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const { loading } = useSelector((state) => state.trainingClass);
  const { builders } = useSelector((state) => state.builder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(builderGetMany())
  }, [])
  
  useEffect(() => {
    console.log("builders", builders);
  }, [builders]);

  useEffect(() => {
    console.log("trainingClass", trainingClass);
  }, [trainingClass]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    // Validation
    dispatch(trainingClassCreate(trainingClass));
    setShowModal(true);
    setSubmitDisabled(true);
  };

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
    console.log(builders.filter(builder => builder.trainingClassType === type))
    let trainingClass = builders.filter(builder => builder.trainingClassType === type)[0]
    console.log(trainingClass)
    return `${trainingClass.trainer.firstName} ${trainingClass.trainer.lastName}`
  }


  return (
    <>
      <section className="bg-white dark:bg-gray-900 min-h-[89.5vh]">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add A New Dog Training Class
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* TYPE OF TRAINING/SERVICE */}
              <div>
                <label
                  htmlFor="service-type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Type of Training
                </label>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option defaultValue>Select type</option>
                  {builders.map(type => (
                    <option value={type.trainingClassType}>{type.trainingClassType}</option>
                  ))}
                  {/* <option value="Basic Obedience">Basic Obedience</option>
                  <option value="Behavior Modification">
                    Behavior Modification
                  </option>
                  <option value="Puppy Socialization">
                    Puppy Socialization
                  </option>
                  <option value="Agility">Agility</option>
                  <option value="Advanced Obedience">Advanced Obedience</option>
                  <option value="Service & Therapy Dog Training">
                    Service & Therapy Dog Training
                  </option> */}
                </select>
              </div>

              {/* ASSIGN TRAINER */}
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Assign Trainer
                </label>
                <select
                  value={trainingClass.trainer}
                  onChange={(e) =>
                    setTrainingClass({
                      ...trainingClass,
                      trainer: e.target.value,
                    })
                  }
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option defaultValue>Select trainer</option>
                  <option value="Megan Alexander" >Megan Alexander</option>
                  <option value="Katherine Finch">Katherine Finch</option>
                  <option value="Annie Baysinger">Annie Baysinger</option>
                  <option value="Jesse Soliz">Jesse Soliz</option>
                  <option value="Audrey Radulovich">Audrey Radulovich</option>
                  <option value="Rashaun Marshall">Rashaun Marshall</option>
                </select>
              </div>

              {/* NAME OF THE CLASS */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="class-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Class Name
                </label>
                <input
                  value={trainingClass.trainingClassName}
                  onChange={(e) =>
                    setTrainingClass({
                      ...trainingClass,
                      trainingClassName: e.target.value,
                    })
                  }
                  type="text"
                  name="class-name"
                  id="class-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type name of class"
                  required=""
                />
                {/* ADD THE SYNTAX FOR NAMING THE CLASSES UNDERNEATH THE INPUT FEILD!! */}
              </div>

              {/* DESCRIPTION */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  value={trainingClass.trainingClassDescription}
                  onChange={(e) =>
                    setTrainingClass({
                      ...trainingClass,
                      trainingClassDescription: e.target.value,
                    })
                  }
                  id="description"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
                {/* ADD WHAT SHOULD BE INCLUDED IN THE DESCRIPTION UNDERNEATH THE INPUT FEILD!! */}
              </div>

              {/* START DATE DATEPICKER */}
              <div id="date-range-picker" date-rangepicker="true">
                <div className="w-full">
                  <label
                    htmlFor="datepicker-start-date"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Start Date
                  </label>
                  <input
                    value={trainingClass.startDate}
                    onChange={(e) =>
                      setTrainingClass({
                        ...trainingClass,
                        startDate: e.target.value,
                      })
                    }
                    type="date"
                    name="start-date"
                    id="datepicker-start-date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Product brand"
                    required=""
                  />
                </div>
              </div>

              {/* END DATE DATEPICKER */}
              <div className="w-full">
                <label
                  htmlFor="datepicker-end-date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  End Date
                </label>
                <input
                  value={trainingClass.endDate}
                  onChange={(e) =>
                    setTrainingClass({
                      ...trainingClass,
                      endDate: e.target.value,
                    })
                  }
                  type="date"
                  name="end-date"
                  id="datepicker-end-date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                />
              </div>
            </div>

            {/* ADD CLASS BUTTON */}
            <button
              disabled={submitDisabled}
              type="submit"
              className="rounded-lg inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gradient-to-br from-purple-400 to-fuchsia-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300"
            >
              Add Class
            </button>
          </form>
        </div>
      </section>
      {showModal && <BMCreateFormConfirmationModal />}
      <DashboardFooter />
    </>
  );
};

export default BMCreateForm;

// {
/* <div
                id="date-range-picker"
                date-rangepicker="true"
                className="flex items-center"
              >
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                  />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                  />
                </div>
              </div> */
// }
