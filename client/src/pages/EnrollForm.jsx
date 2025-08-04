import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { builderGetMany } from "../redux/builderSlice"
import {
  emptyTrainingClasses,
  trainingClassEnroll,
  trainingClassGetManyByType
} from "../redux/trainingClassSlice"
import { toast, ToastContainer } from "react-toastify"
import { SiDatadog } from "react-icons/si"
import * as motion from "motion/react-client"
import DogAddModal from "../components/modals/DogAddModal"
import UserDashboardFooter from "../components/footers/UserDashboardFooter"

const EnrollForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.users)
  const { trainingClasses } = useSelector((state) => state.trainingClass)
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const { builders } = useSelector((state) => state.builder)
  const [selectedClass, setSelectedClass] = useState(null)
  const [selectedDog, setSelectedDog] = useState(null)
  const [showAddDogModal, setShowAddDogModal] = useState(false)

  const loggedInEmail = user.email

  const [enrollForm, setEnrollForm] = useState({
    // trainingClassType: "",
    userId: user.id
    // firstName: user.firstName,
    // lastName: user.lastName,
    // email: user.email,
    // username: user.username,
    // avatar: user.avatar,
    // phoneNumber: user.phoneNumber,
    // address: user.address,
    // city: user.city,
    // state: user.state,
    // zipCode: user.zipCode,
    // dog: {}
  })

  useEffect(() => {
    dispatch(builderGetMany())
    dispatch(emptyTrainingClasses())
  }, [])

  const getClassesByType = (type) => {
    let typeOfTrainingClass = trainingClasses.filter(
      (trainingClass) => trainingClass.trainingClassType === type
    )
    console.log("typeOfTrainingClass", typeOfTrainingClass)
    dispatch(trainingClassGetManyByType(type))
    setSelectedClass(null)
    console.log("")
  }

  console.log("user.dogs", user.dogs)

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

  // const [avatarFile, setAvatarFile] = useState(null)
  // // const [coverPhotoFile, setCoverPhotoFile] = useState(null)

  // const toBase64 = (file) =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader()
  //     reader.readAsDataURL(file)
  //     reader.onload = () => resolve(reader.result)
  //     reader.onerror = reject
  //   })

  // const handleUserAvatarUpload = async (e) => {
  //   console.log("handleUserAvatarUpload", e)
  //   if (e.target.files) {
  //     const testString64 = await toBase64(e.target.files[0])
  //     setEnrollForm({ ...enrollForm, avatar: testString64 })
  //     console.log(
  //       "This is the testString in handleUserAvatarUpload function on EnrollForm",
  //       testString64
  //     )
  //     setAvatarFile(e.target.files[0]) // Only works for one file upload
  //   }
  // }

  const storedTheme = localStorage.getItem('theme'); 

  const handleRowClick = (trainingClassId) => {
    setSelectedClass(trainingClassId)
  }

  console.log("Selected Class:", selectedClass)

  const handleDogClick = (dogId) => {
    setSelectedDog(dogId)
  }
  console.log("Selected Dog:", selectedDog)

  const handleEnroll = (e) => {
    e.preventDefault()
    console.log("handleEnroll selectedClass", selectedClass)
    const enrollmentInfo = { selectedClass, selectedDog, userId: user.id }
    // if (success === true) {
      //   toast.success("Successfully Enrolled!")
      // } else {
        //   toast.error("An error occured. Please try again.")
        // }
        
    if (selectedClass !== null && selectedDog !== null) {
      dispatch(trainingClassEnroll(enrollmentInfo))
      if (storedTheme === "dark") {
        toast.success("Successfully Enrolled!", {
          theme: "dark",
          className: "text-sm"
        })
      } else {
        toast.success("Successfully Enrolled!", {
          className: "text-sm"
        })
      }
      navigate("/dashboard")
    } else if (selectedClass === null && selectedDog !== null) {
      if (storedTheme === "dark") {
        toast.warning("You must select a class in order to enroll!", {
          theme: "dark",
          className: "text-sm"
        })
      } else {
        toast.warning("You must select a class in order to enroll!", {
          className: "text-sm"
        })
      }
    } else if (selectedClass !== null && selectedDog === null) {
      if (storedTheme === "dark") {
        toast.warning("You must select a dog in order to enroll!", {
          theme: "dark",
          className: "text-sm"
        })
      } else {
        toast.warning("You must select a dog in order to enroll!", {
          className: "text-sm"
        })
      }
    } else {
      if (storedTheme === "dark") {
        toast.error("You must select a class and a dog in order to enroll", {
          theme: "dark",
          className: "text-sm",
        })
      } else {
        toast.error("You must select a class and a dog in order to enroll", {
          className: "text-sm"
        })
      }
    }
  }

  // const handleCoverPhotoUpload = async (e) => {
  //   console.log("handleFileUpload", e)
  //   if (e.target.files) {
  //     const testString64 = await toBase64(e.target.files[0])
  //     setAddBlogForm({ ...addBlogForm, coverPhoto: testString64})
  //     console.log("This is the testString in handleFileUpload function", testString64)
  //     setCoverPhotoFile(e.target.files[0]) // Only works for one file upload
  //     dispatch(updateCoverPhoto(testString64))
  //   }
  // }

  // console.log("user.dogs", user.dogs)
  // console.log("user", user)

  return (
    <>
    <ToastContainer />
      <section className={`${storedTheme === "light" ? "light-kiwi-bg" : "dark-kiwi-bg"} min-h-[100vh] md:px-[13vw] mt-16`}>
        <div className="py-8 px-4 mx-auto max-w-6xl lg:py-16  md:ml-[20vw] font-instrument animate__animated animate__fadeIn animate__slow">
          <h2 className="font-lexend uppercase mb-4 text-4xl font-bold text-neutral-900 dark:text-white tracking-tighter">
            Training Class Enrollment Form
          </h2>
          <form onSubmit={handleEnroll}>
            <div className="">
              <div className="">
                <h1 className="text-3xl font-learn font-bold text-neutral-800 dark:text-neutral-100 underline underline-offset-8 pb-4 pt-4">Step 1: Choose a Class</h1>
              </div>
              {/* TYPE OF TRAINING/SERVICE */}
              <div>
                <label
                  htmlFor="service-type"
                  className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
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
                  className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-1/4 p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
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

              <div className="min-h-96 max-h-96 w-full my-8 relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-neutral-800 drop-shadow-xl drop-shadow-neutral-300 dark:drop-shadow-black">
                <table className="w-full text-sm text-left rtl:text-right text-neutral-600 dark:text-neutral-300">
                  <thead className="text-xs text-neutral-700 uppercase bg-violet-200 dark:bg-yellow-400 dark:text-neutral-900">
                    <tr>
                      <th scope="col" className="px-3 py-3">
                        Training Class Name
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Type
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Trainer
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Start Date
                      </th>
                      <th scope="col" className="px-3 py-3">
                        End Date
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Detail
                      </th>
                    </tr>
                  </thead>
                  <tbody className="overflow-y-auto">
                    {trainingClasses.map((trainingClass) => (
                      <tr
                        key={trainingClass.id}
                        onClick={() => handleRowClick(trainingClass.id)}
                        className={`border-b dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer ${selectedClass === trainingClass.id ? "bg-neutral-200 dark:bg-neutral-600" : "bg-white dark:bg-neutral-800"}`}>
                           {/* {selectedClass === trainingClass.id ? (
                            <span>Selected</span>
                          ) : (
                            <span>Not selected</span>
                          )} */}
                        <th
                          scope="row"
                          className="px-3 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white">
                          {trainingClass.trainingClassName}
                        </th>
                        <td className="px-3 py-4">
                          {trainingClass.trainingClassType}
                        </td>
                        <td className="px-3 py-4">
                          {trainingClass.trainer.firstName}{" "}
                          {trainingClass.trainer.lastName}
                        </td>
                        <td className="px-3 py-4">
                          {new Intl.DateTimeFormat("en-US").format(
                            new Date(trainingClass.startDate)
                          )}
                        </td>
                        <td className="px-3 py-4">
                          {new Intl.DateTimeFormat("en-US").format(
                            new Date(trainingClass.endDate)
                          )}
                        </td>

                        {/* DETAIL BUTTON */}
                        <td className="px-3 py-4 justify-self-center">
                          <button
                            type="button"
                            onClick={() =>
                              navigate(`/training-classes/${trainingClass.id}`)
                            }
                            className="cursor-pointer text-violet-500 dark:text-yellow-300 transition duration-300 ease-in-out hover:scale-110 hover:-tranneutral-y-0.5"
                            >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="25"
                              width="25"
                              viewBox="0 0 512 512">
                              <path
                                fill="currentColor"
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

            <div className="">
                <h1 className="text-3xl font-learn font-bold text-neutral-800 dark:text-neutral-100 underline underline-offset-8 pb-4 pt-10">Step 2: Select a Dog</h1>
              </div>


              {user.dogs.length > 0 ? 
              <>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-6 lg:gap-x-6">
              {user.dogs.map((dog) => (
                <div
                  key={dog._id}
                  onClick={() => handleDogClick(dog._id)}
                  className={`w-full max-h-[42vh] border rounded-lg shadow-sm p-2 hover:bg-neutral-50 dark:hover:bg-neutral-700 drop-shadow-xl drop-shadow-neutral-300 dark:drop-shadow-black cursor-pointer mb-7 ${selectedDog === dog._id ? "bg-neutral-200 dark:bg-neutral-600 border-2 border-neutral-600 dark:border-neutral-400" : "bg-white border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700"}`}>

                  {/* <button
                    type="button"
                    onClick={() => handleDogClick(dog._id)} // Add click handler
                    className="bg-transparent text-blue-500 hover:text-blue-700 focus:outline-none">
                    {selectedDog === dog._id ? (
                      <span>Selected</span>
                    ) : (
                      <span>Not selected</span>
                    )}
                  </button> */}
                  <div className="flex flex-col items-center pb-6">
                  {dog.photo ? (
                              <img
                                src={`${dog.photo}`}
                                className="size-75 mb-3 rounded-full shadow-lg"
                              />
                            ) : (
                              <>
                                <div className="rounded-full size-75 shadow-lg p-4 flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-600 mb-3">
                                  <SiDatadog
                                    size={170}
                                    className="text-neutral-800 dark:text-neutral-300"
                                  />

                                  <p className="uppercase text-xs text-black dark:text-white">
                                    upload an image of your dog!
                                  </p>
                                </div>
                              </>
                            )}

                    <h5 className="mb-1 text-xl font-bold font-lexend uppercase text-neutral-900 dark:text-white">
                      {dog.name}
                    </h5>
                    {/* <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {dog.breed}
                    </span>
                    <div className="flex justify-between mt-4 md:mt-6">
                      <div>Age: {dog.age}</div>
                    </div>
                    <div>
                      Birthday:{" "}
                      {new Intl.DateTimeFormat("en-US").format(
                        new Date(dog.birthday)
                      )}
               
                    </div>
                    <div>Gender: {dog.gender}</div>
                    <div>Size: {dog.size}</div>
                    <div>Weight: {dog.weight}</div>
                    <div>Spayed/Neutered: {dog.spayedNeutered}</div>
                    <div>Behavioral Issues: {dog.behavioralIssues}</div>
                    <div>Medical Conditions: {dog.medicalConditions}</div>
                    <div>Training Goals: {dog.trainingGoals}</div>
                    <div>Additional Notes: {dog.additionalNotes}</div> */}
                  </div>
                </div>
              ))}
            </div>
              </>
               : 
              //  <div className="">
                
              //   <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
              //     <p className="font-learn uppercase font-bold tracking-wider text-xl">** You have no dogs! **</p>
              //     <p>You currently have no dogs added to your profile. Please add a dog to your profile by clicking the button below, or by going to your dashboard and clicking the "Add Dog" button under the Dogs section.</p>
              //     <button
              //     onClick={() => setShowAddDogModal(true)}
              //     type="button"
              //     className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              //     Add Dog
              //   </button>
              //   </div>
              // </div>

              <div className="pt-5 pb-12 animate-wiggle-minimized drop-shadow-xl drop-shadow-gray-400 dark:drop-shadow-black">
                  <div
                    className="bg-violet-100 border-l-8 border-violet-500 text-violet-700 p-4 dark:bg-yellow-300 dark:border-yellow-600 dark:text-yellow-700"
                    role="alert">
                    <p className="font-anton tracking-wider text-xl">
                      ** You have no dogs! **
                    </p>
                   
                    <p className="font-instrument">
                    You currently have no dogs added to your profile. Please add a dog to your profile by clicking the button below, or by going to your dashboard and clicking the "Add Dog" button under the Dogs section.
                    </p>
                    <button
                  onClick={() => setShowAddDogModal(true)}
                  type="button"
                  className="text-white bg-violet-700 hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 my-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-1">
                  Add Dog
                </button>
                  </div>
                </div>
               }

            {/* ENROLL BUTTON */}

            <motion.button
              // disabled={submitDisabled}
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg font-bold text-white dark:text-black bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 text-sm px-5 py-2.5 mb-4 mt-1 text-center dark:bg-lime-400 dark:hover:bg-lime-500 dark:focus:ring-lime-600 cursor-pointer">
              Enroll Now!
            </motion.button>
          </form>
        </div>
      </section>

      <UserDashboardFooter />

      {showAddDogModal && (
        <DogAddModal
          setShowAddDogModal={setShowAddDogModal}
          loggedInEmail={loggedInEmail}
        />
      )}
    </>
  )
}

export default EnrollForm
