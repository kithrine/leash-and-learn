import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { builderGetMany } from "../redux/builderSlice"
import { trainingClassGetManyByType } from "../redux/trainingClassSlice";



const EnrollForm = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users)
  const { trainingClasses } = useSelector((state) => state.trainingClass);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const { builders } = useSelector((state) => state.builder);
  // const [selectedType, setSelectedType] = useState('');  // State to store selected type
  // const [selectedDog, setSelectedDog] = useState(null); // Handle dog selection (if needed)


  useEffect(() => {
    dispatch(builderGetMany())
  }, [])


  const [enrollForm, setEnrollForm] = useState({
    trainingClassType: "",
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    username: user.username,
    avatar: user.avatar,
    phoneNumber: user.phoneNumber,
    address: user.address,
    city: user.city,
    state: user.state,
    zipCode: user.zipCode,
    dog: {}
  });

  const getClassesByType = (type) => {
    let typeOfTrainingClass = trainingClasses.filter(trainingClass => trainingClass.trainingClassType === type)
    console.log("typeOfTrainingClass", typeOfTrainingClass)
    dispatch(trainingClassGetManyByType(type))
    console.log("", )
  }
  

  // const getClassesByType = (type) => {
  //   let typeOfTrainingClass = trainingClasses.filter(trainingClass => trainingClass.trainingClassType === type)
  //   console.log("typeOfTrainingClass", typeOfTrainingClass)
  //   dispatch(trainingClassGetManyByType())
  // }

  // const handleTrainingTypeChange = (event) => { 
  //   setSelectedType(event.target.value); // Update selected training type 
  //   dispatch(trainingClassGetManyByType(event.target.value));  // Fetch classes based on the selected type
  //   console.log("trainingClassType", trainingClasses.trainingClassType)
  // };


  const handleEnroll = (e) => {
    e.preventDefault()
    console.log("Enroll")
  }

  return (
    <>

{/* <form>
      <div className="mt-54 ml-54">
        <label htmlFor="training-type">Select Training Type:</label> 
        <select id="training-type" value={selectedType} onChange={handleTrainingTypeChange}>  
          {builders.map((type) => ( // Dynamically generate options from an array of your training types
            <option key={type.trainingClassType} value={type}>{type.trainingClassType}</option> 
          ))}   
        </select>      
      </div>


      <button type="submit">Enroll Dog</button>     
    </form>  */}



      <section className="bg-white dark:bg-gray-900 min-h-[100vh] mt-16">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Enroll Today!
          </h2>
          <form onSubmit={handleEnroll}>
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
                  value={enrollForm.trainingClassType}
                  onChange={(e) =>
                    setEnrollForm({
                      ...enrollForm,
                      trainingClassType: getClassesByType(e.target.value)
                    })
                  }
                  id="service-type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option defaultValue>Select type</option>
                  {/* {trainingClasses.map(type => (
                    <option value={type.trainingClassType}>{type.trainingClassType}</option>
                  ))} */}
                  {builders.map(type => (
                    <option value={type.trainingClassType}>{type.trainingClassType}</option>
                  ))}
                </select>
              </div>






              <div className="h-96 w-[45vw] my-8 overflow-y-auto relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="overflow-y-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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

                    {/* DETAIL BUTTON */}
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






              {/* ASSIGN TRAINER */}
              {/* <div>
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
              </div> */}

              {/* NAME OF THE CLASS */}
              {/* <div className="sm:col-span-2">
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
              </div> */}

              {/* DESCRIPTION */}
              {/* <div className="sm:col-span-2">
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
              </div> */}

              {/* START DATE DATEPICKER */}
              {/* <div id="date-range-picker" date-rangepicker="true">
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
                </div> */}
              </div>

              {/* END DATE DATEPICKER */}
              {/* <div className="w-full">
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
            </div> */}

            {/* ENROLL BUTTON */}
            <button
              disabled={submitDisabled}
              type="submit"
              className="rounded-lg inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gradient-to-br from-purple-400 to-fuchsia-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300"
            >
              Enroll
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default EnrollForm