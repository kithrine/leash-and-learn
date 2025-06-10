import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { builderGetMany } from "../redux/builderSlice"
import {
  emptyTrainingClasses,
  trainingClassEnroll,
  trainingClassGetManyByType
} from "../redux/trainingClassSlice"
import { toast } from "react-toastify"
import DogAddModal from "../components/modals/DogAddModal"
import StarBorder from "../components/reactbits+framer-motion/StarBorder"

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
          theme: "dark"
        })
      } else {
        toast.success("Successfully Enrolled!")
      }
      navigate("/dashboard")
    } else if (selectedClass === null && selectedDog !== null) {
      if (storedTheme === "dark") {
        toast.warning("You must select a class in order to enroll!", {
          theme: "dark"
        })
      } else {
        toast.warning("You must select a class in order to enroll!")
      }
    } else if (selectedClass !== null && selectedDog === null) {
      if (storedTheme === "dark") {
        toast.warning("You must select a dog in order to enroll!", {
          theme: "dark"
        })
      } else {
        toast.warning("You must select a dog in order to enroll!")
      }
    } else {
      if (storedTheme === "dark") {
        toast.error("You must select a class and a dog in order to enroll", {
          theme: "dark"
        })
      } else {
        toast.error("You must select a class and a dog in order to enroll")
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
      <section className="bg-white dark:bg-gray-900 min-h-[100vh] md:px-[13vw] mt-16">
        <div className="py-8 px-4 mx-auto max-w-6xl lg:py-16  md:ml-[20vw]">
          <h2 className="font-learn mb-4 text-6xl font-bold text-gray-900 dark:text-white tracking-wide">
            Training Class Enrollment Form
          </h2>
          <form onSubmit={handleEnroll}>
            <div className="">
              <div className="">
                <h1 className="text-4xl font-palanquin-dark font-bold text-gray-800 dark:text-gray-100 underline underline-offset-4 pb-4 pt-10">Step 1: Choose a Class</h1>
              </div>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
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

              <div className="min-h-96 max-h-96 w-full my-8 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                  <tbody className="overflow-y-auto">
                    {trainingClasses.map((trainingClass) => (
                      <tr
                        key={trainingClass.id}
                        onClick={() => handleRowClick(trainingClass.id)}
                        className={`border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 ${selectedClass === trainingClass.id ? "bg-gray-200 dark:bg-slate-600" : "bg-white dark:bg-gray-800"}`}>
                           {/* {selectedClass === trainingClass.id ? (
                            <span>Selected</span>
                          ) : (
                            <span>Not selected</span>
                          )} */}
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

                        {/* DETAIL BUTTON */}
                        <td className="px-6 py-4 justify-self-center">
                          <button
                            type="button"
                            onClick={() =>
                              navigate(`/training-classes/${trainingClass.id}`)
                            }
                            className="cursor-pointer"
                            >
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

            <div className="">
                <h1 className="text-4xl font-palanquin-dark font-bold text-gray-800 dark:text-gray-100 underline underline-offset-4 pb-4 pt-10">Step 2: Select a Dog</h1>
              </div>


              {user.dogs.length > 0 ? 
              <>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-6 lg:gap-x-6">
              {user.dogs.map((dog) => (
                <div
                  key={dog._id}
                  onClick={() => handleDogClick(dog._id)}
                  class={`w-full max-h-[44vh] border rounded-lg shadow-sm p-2 hover:bg-gray-50 dark:hover:bg-gray-700 ${selectedDog === dog._id ? "bg-gray-200 dark:bg-slate-600 border-2 border-gray-600 dark:border-gray-400" : "bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"}`}>

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
                    {/* <span class="text-sm text-gray-500 dark:text-gray-400">
                      {dog.breed}
                    </span>
                    <div class="flex justify-between mt-4 md:mt-6">
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
               <div className="">
                
                <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
                  <p class="font-learn uppercase font-bold tracking-wider text-xl">** You have no dogs! **</p>
                  <p>You currently have no dogs added to your profile. Please add a dog to your profile by clicking the button below, or by going to your dashboard and clicking the "Add Dog" button under the Dogs section.</p>
                  <button
                  onClick={() => setShowAddDogModal(true)}
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add Dog
                </button>
                </div>
              </div>
               }

            {/* ENROLL BUTTON */}

            <StarBorder
              as="button"
              className="cursor-pointer"
              color="cyan"
              speed="5s"
            >
              Enroll
            </StarBorder>
            <button
              // disabled={submitDisabled}
              type="submit"
              className="rounded-lg inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gradient-to-br from-purple-400 to-fuchsia-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300">
              Enroll
            </button>
          </form>
        </div>
      </section>

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
