import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { trainingClassGetOne, trainingClassUpdate } from "../../redux/trainingClassSlice";
import { userGetMany } from "../../redux/userSlice";

const BMTrainingClassEditModal = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let trainingClassId = location.pathname.split("/")[2];
  const { users } = useSelector((state) => state.users);
  const { trainingClass } = useSelector((state) => state.trainingClass);

  const [showModal, setShowModal] = useState(false);
  const [trainingClassEditForm, setTrainingClassEditForm] = useState({
    trainingClassType: "",
    trainer: { firstName: "" },
    trainingClassName: "",
    trainingClassDescription: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    let id = location.pathname.split("/")[2]
    // console.log("BMTrainingClassEditModal useEffect location", location, id)
    dispatch(trainingClassGetOne(id));
    dispatch(userGetMany({userType: "Trainer"}))
  }, []);

  useEffect(() => {
    if (trainingClass.trainingClassName !== "") {
      console.log("trainingClass.trainingClassName", trainingClass.trainingClassName)
      setTrainingClassEditForm(trainingClass)
    }
  }, [trainingClass])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    // Validation
    // dispatch(trainingClassUpdate(trainingClass));
    dispatch(trainingClassUpdate({ trainingClassId, trainingClassEditForm: { ...trainingClassEditForm}}))
    setShowModal(false);
  };

  useEffect(() => {
    console.log("trainingClassEditForm but really we're just looking for trainer", trainingClassEditForm)
  }, [trainingClassEditForm])
  

  const findTrainer = (trainer) => {
    console.log("findTrainer", trainer)
    const tempUser = users.find(user => user.username === trainer)
    console.log("tempUser", tempUser)
    const trainerObj = { firstName: tempUser.firstName, lastName: tempUser.lastName, username: tempUser.username, email: tempUser.email }
    console.log("trainerObj", trainerObj)
    return trainerObj
  }

  const handleDatepickerFormat = (classDate) => {
    // convert string to date
    let newDate = new Date(classDate)
    // Set  hours back because of UTC
    let dateMinus7 = newDate.setHours(newDate.getHours() -7)
    // Use en-CA default format
    return new Date(dateMinus7).toLocaleDateString('en-CA')
  }

  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
        type="button"
        className="w-full text-black bg-gradient-to-r from-green-400 to-lime-400 hover:bg-gradient-to-l hover:from-green-400 hover:to-lime-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Edit
      </button>

      { showModal && (

      <div
        id="updateProductModal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto justify-self-center mt-28 md:ml-64">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Update Training Class Details
              </h3>
              <button
              onClick={() => {setShowModal(false)}}
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
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                  value={trainingClassEditForm.trainingClassName}
                  onChange={(e) =>
                    setTrainingClassEditForm({
                      ...trainingClassEditForm,
                      trainingClassName: e.target.value,
                    })
                  }
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Ex. Apple iMac 27&ldquo;"
                  />
                </div>
                <div>
                  <label
                    htmlFor="brand"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Type
                  </label>
                  <select
                  value={trainingClassEditForm.trainingClassType}
                 
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    disabled={true}
                  >
                  
                    <option value={trainingClassEditForm.trainingClassType}>{trainingClassEditForm.trainingClassType}</option>
                  
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="trainer"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Trainer
                  </label>
                  <select
                  value={trainingClassEditForm.trainer.username}
                  onChange={(e) =>
                    setTrainingClassEditForm({
                      ...trainingClassEditForm,
                      trainer: findTrainer(e.target.value)
                      })
                  }
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    {users.map(user => (
                    <option value={user.username}>{user.firstName} {user.lastName}</option>
                  ))}
                    {/* <option defaultValue>Select trainer</option>
                    <option value="Megan Alexander">Megan Alexander</option>
                    <option value="Katherine Finch">Katherine Finch</option>
                    <option value="Annie Baysinger">Annie Baysinger</option>
                    <option value="Jesse Soliz">Jesse Soliz</option>
                    <option value="Audrey Radulovich">Audrey Radulovich</option>
                    <option value="Rashaun Marshall">Rashaun Marshall</option> */}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                  value={trainingClassEditForm.trainingClassDescription}
                  onChange={(e) =>
                    setTrainingClassEditForm({
                      ...trainingClassEditForm,
                      trainingClassDescription: e.target.value,
                    })
                  }
                    id="description"
                    rows="5"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Write a description..."
                  >
                    
                  </textarea>
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Start Date
                  </label>
                  <input
                  value={handleDatepickerFormat(trainingClassEditForm.startDate)}
                  onChange={(e) =>
                    setTrainingClassEditForm({
                      ...trainingClassEditForm,
                      startDate: handleDatepickerFormat(e.target.value),
                    })
                  }
                    type="date"
                    name="brand"
                    id="brand"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Ex. Apple"
                  />
                  
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    End Date
                  </label>
                  <input
                  value={handleDatepickerFormat(trainingClassEditForm.endDate)}
                  onChange={(e) =>
                    setTrainingClassEditForm({
                      ...trainingClassEditForm,
                      endDate: handleDatepickerFormat(e.target.value),
                    })
                  }
                    type="date"
                    name="brand"
                    id="brand"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Ex. Apple"
                  />
                  
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
                >
                  Update
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

export default BMTrainingClassEditModal;
