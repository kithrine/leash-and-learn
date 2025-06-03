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
  const [selectedClass, setSelectedClass] = useState(null) 
  const [selectedDog, setSelectedDog] = useState(null) 

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
    setSelectedClass(null)
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

  // Assuming your trainingClass data is fetched asynchronously...
  
  
  // useEffect(() => { 
  //   console.log("selectedClass in useEffect", selectedClass)
  //  }, [selectedClass]); 
   
  const handleRowClick = (classId) => {
    setSelectedClass(classId)
  }
  console.log("Selected Class:", selectedClass)

  const handleDogClick = (dogId) => {
    setSelectedDog(dogId)
  }
  console.log("Selected Dog:", selectedDog)

  const handleEnroll = (e) => {
    e.preventDefault()
    console.log("Enroll")
    // Log the single selected ID
  }

  // console.log("user.dogs", user.dogs)

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

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:space-y-6 lg:gap-x-6">
              <div className="group relative min-w-full">
                {user.dogs.map((dog) => (
                  <div
                    key={dog._id}
                    class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    {/* <div class="flex justify-end px-4 pt-4">
                          <button
                            onClick={() => {
                              setShowDogActions(true)
                              setDogToDelete(dog)
                            }}
                            id="dropdownButton"
                            data-dropdown-toggle="dropdown"
                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                            type="button">
                            <span class="sr-only">Open dropdown</span>
                            <svg
                              class="w-5 h-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 3">
                              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                          </button>

                          {showDogActions && dogToDelete._id === dog._id && (
                            <div
                              id="dropdown"
                              class="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                              <ul class="py-2" aria-labelledby="dropdownButton">
                                <li>
                                  <div
                                    onClick={() =>
                                      handleDogEditModal(dog, dog._id)
                                    }
                                    class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Edit
                                  </div>
                                </li>
                              
                                <li>
                                  <a
                                    onClick={() =>
                                      handleDogDeleteModal(dog, dog._id)
                                    }
                                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Delete
                                  </a>
                                </li>
                                <li>
                                  <div
                                    onClick={() => setShowDogActions(false)}
                                    class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Cancel
                                  </div>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div> */}

                    <button
                      type="button"
                      onClick={() => handleDogClick(dog._id)} // Add click handler
                      className="bg-transparent text-blue-500 hover:text-blue-700 focus:outline-none">
                      {/* Toggle button appearance based on selection */}
                      {selectedDog === dog._id ? (
                        <span>Selected</span>
                      ) : (
                        <span>Not selected</span>
                      )}
                    </button>
                    <div class="flex flex-col items-center pb-10">
                      {dog.photo ? (
                        <img
                          src={`${dog.photo}`}
                          className="size-75 mb-3 rounded-full shadow-lg"
                        />
                      ) : (
                        <div className="rounded-full size-75 shadow-lg p-4 flex flex-col items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="78"
                            viewBox="0 -960 960 960"
                            width="78"
                            fill="#666666">
                            <path d="M194-80v-416h60v356h320v-223l102-102q30-30 46-68.5t16-80.5q0-42-16.5-80.5T676-762l-32-33-131 131H333l-53 53-43-42 71-71h180l156-156 75 75q38 38 58 87.5T798-614q-1 54-21 103.5T719-423l-85 85v258H194Zm187-215L180-496q-10-10-15-22.5t-5-26.5q0-14 5-27t15-23l77-78 117 116q27 27 41.5 61.5T430-423q0 35-12.5 68.5T381-295Z" />
                          </svg>
                          <p className="uppercase text-xs">
                            upload an image of your dog!
                          </p>
                        </div>
                      )}

                      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {dog.name}
                      </h5>
                      <span class="text-sm text-gray-500 dark:text-gray-400">
                        {dog.breed}
                      </span>
                      <div class="flex justify-between mt-4 md:mt-6">
                        {/* <div className="flex flex-col"> */}
                        <div>Age: {dog.age}</div>
                      </div>
                      {/* <div className="flex flex-col"> */}
                      <div>
                        Birthday:{" "}
                        {new Intl.DateTimeFormat("en-US").format(
                          new Date(dog.birthday)
                        )}
                        {/* </div> */}
                        {/* </div> */}
                      </div>
                      <div>Gender: {dog.gender}</div>
                      <div>Size: {dog.size}</div>
                      <div>Weight: {dog.weight}</div>
                      <div>Spayed/Neutered: {dog.spayedNeutered}</div>
                      <div>Behavioral Issues: {dog.behavioralIssues}</div>
                      <div>Medical Conditions: {dog.medicalConditions}</div>
                      <div>Training Goals: {dog.trainingGoals}</div>
                      <div>Additional Notes: {dog.additionalNotes}</div>
                    </div>
                  </div>
                ))}
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
