import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { builderGetMany } from "../redux/builderSlice"
import { trainingClassGetManyByType } from "../redux/trainingClassSlice"

const EnrollForm = () => {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const { trainingClasses } = useSelector((state) => state.trainingClass)
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const { builders } = useSelector((state) => state.builder)

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
  })

  const getClassesByType = (type) => {
    let typeOfTrainingClass = trainingClasses.filter(
      (trainingClass) => trainingClass.trainingClassType === type
    )
    console.log("typeOfTrainingClass", typeOfTrainingClass)
    dispatch(trainingClassGetManyByType(type))
    console.log("")
  }

  // const [selectedClass, setSelectedClass] = useState([]);

  // const handleRowClick = (classId) => {
  //   if (selectedClass.includes(classId)) {
  //     setSelectedClass(selectedClass.filter((id) => id !== classId)); // Remove selection if already selected
  //   } else {
  //     setSelectedClass([...selectedClass, classId]); // Add to selections
  //   }
  //   console.log("selectedClass", selectedClass)
  // };

  const [selectedClass, setSelectedClass] = useState(null) // Use a single variable for selected class ID

  const handleRowClick = (classId) => {
    setSelectedClass(classId)
    console.log("Selected Class:", selectedClass)
  }

  const handleEnroll = (e) => {
    e.preventDefault()
    console.log("Enroll")
    // Log the single selected ID
  }

  return (
    <>
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
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option defaultValue>Select type</option>
                  {/* {trainingClasses.map(type => (
                    <option value={type.trainingClassType}>{type.trainingClassType}</option>
                  ))} */}
                  {builders.map((type) => (
                    <option value={type.trainingClassType}>
                      {type.trainingClassType}
                    </option>
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
                      <tr
                        key={trainingClass.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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

                        {/* <button 
                onClick={() => handleRowClick(trainingClass.id)} // Add click handler
                className="bg-transparent text-blue-500 hover:text-blue-700 focus:outline-none" >

                
               {selectedClass.includes(trainingClass.id) ? (
                 <span>Selected</span> 
               ) : (<span>Not selected</span>)} 
              </button> */}

                        <button
                          type="button"
                          onClick={() => handleRowClick(trainingClass.id)} // Add click handler
                          className="bg-transparent text-blue-500 hover:text-blue-700 focus:outline-none">
                          {/* Toggle button appearance based on selection */}
                          {selectedClass === trainingClass.id ? (
                            <span>Selected</span>
                          ) : (
                            <span>Not selected</span>
                          )}
                        </button>

                        {/* DETAIL BUTTON */}
                        <td className="px-6 py-4 justify-self-center">
                          <button
                            onClick={() =>
                              navigate(`/training-classes/${trainingClass.id}`)
                            }>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="25"
                              width="25"
                              viewBox="0 0 512 512">
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
            </div>

            

            {/* ENROLL BUTTON */}
            <button
              disabled={submitDisabled}
              type="submit"
              className="rounded-lg inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gradient-to-br from-purple-400 to-fuchsia-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300">
              Enroll
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default EnrollForm
