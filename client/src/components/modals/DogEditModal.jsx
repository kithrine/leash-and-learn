import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { updateDog, userGetOne } from "../../redux/userSlice"
import { toast } from "react-toastify"
import * as motion from "motion/react-client"


const DogEditModal = ({setShowEditDogModal, loggedInEmail, userId, dog}) => {
  const { user } = useSelector((state) => state.users)
  console.log("edit dog modal dog", dog._id)
  const dogId = dog._id

  const dispatch = useDispatch()

  const storedTheme = localStorage.getItem("theme")

  const [showBirthdayPopover, setShowBirthdayPopover] = useState(false)
  const [ editDogForm, setEditDogForm ] = useState({
    name: dog.name,
    breed: dog.breed,
    age: dog.age,
    birthday: dog.birthday,
    gender: dog.gender,
    weight: dog.weight,
    photo: dog.photo,
    size: dog.size,
    spayedNeutered: dog.spayedNeutered,
    behavioralIssues: dog.behavioralIssues,
    medicalConditions: dog.medicalConditions,
    trainingGoals: dog.trainingGoals,
    additionalNotes: dog.additionalNotes,
  })

  const handleDatepickerFormat = (classDate) => {
    // convert string to date
    let newDate = new Date(classDate);
    // Set  hours back because of UTC
    let dateMinus7 = newDate.setHours(newDate.getHours() + 7);
    // Use en-CA default format
    return new Date(dateMinus7).toLocaleDateString("en-CA");
  };

  const [dogPhoto, setDogPhoto] = useState(null)

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
    })

  const handleDogPhotoUpload = async (e) => {
    console.log("handleDogPhotoUpload", e)
    if (e.target.files) {
      const testString64 = await toBase64(e.target.files[0])
      setEditDogForm({ ...editDogForm, photo: testString64})
      console.log("This is the testString in handleDogPhotoUpload function", testString64)
      setDogPhoto(e.target.files[0]) // Only works for one file upload
    }
  }

  const handleEditDog = (e) => {
    e.preventDefault()
    console.log("handleEditDog")
    dispatch(
      updateDog({
        userId,
        dogId,
        // dogId: editDogForm._id,
        // editDogForm: { ...editDogForm }
        editDogForm
      })
    ) 
    // console.log("^^^^handleEditDog function", userId, dogId, editDogForm)
    setShowEditDogModal(false)
    if (storedTheme === "dark") {
      toast.success("Dog updated successfully!", {
        theme: "dark"
      })
    } else {
      toast.success("Dog updated successfully!")
    }
  }



  return (
    <>
    <div
        id="editDogModal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-40 justify-center items-center w-full md:inset-0 h-modal md:h-full drop-shadow-2xl drop-shadow-neutral-400 dark:drop-shadow-black animate__animated animate__fadeIn">
        <div className="relative mt-16 justify-self-center h-full w-full max-w-3xl p-4 md:ml-[20vw] pb-12">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow dark:bg-neutral-800">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between rounded-t border-b border-neutral-200 p-4 dark:border-neutral-700 md:p-5">
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white font-lexend uppercase">
                Edit Dog
              </h3>
              <button
                onClick={() => setShowEditDogModal(false)}
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-neutral-400 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-600 dark:hover:text-white cursor-pointer"
                data-modal-toggle="editDogModal">
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={handleEditDog} className="p-4 md:p-5 font-instrument">
              <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="dogName"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                    {" "}
                    Name{" "}
                  </label>
                  <input
                    value={editDogForm.name}
                    onChange={(e) => 
                      setEditDogForm({ ...editDogForm, name: e.target.value })
                    }
                    type="text"
                    id="dogName"
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter dog's name"
                    required
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="dogBreed"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                    {" "}
                    Breed{" "}
                  </label>
                  <input
                    value={editDogForm.breed}
                    onChange={(e) => 
                      setEditDogForm({ ...editDogForm, breed: e.target.value })
                    }
                    type="text"
                    id="dogBreed"
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter dog's breed"
                    // required
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="dogAge"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                    {" "}
                    Age{" "}
                  </label>
                  <input
                    value={editDogForm.age}
                    onChange={(e) => 
                      setEditDogForm({ ...editDogForm, age: e.target.value })
                    }
                    type="text"
                    id="dogAge"
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter your dog's age"
                    // required
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="dogBirthday"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                    {" "}
                      <span className="flex gap-x-1">Birthday{" "}
                      <button
                        className="cursor-pointer"
                        onMouseEnter={() => setShowBirthdayPopover(true)} // Show popover on hover
                        onMouseLeave={() => setShowBirthdayPopover(false)} // Hide popover on leave
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-cake2"
                          viewBox="0 0 16 16">
                          <path d="m3.494.013-.595.79A.747.747 0 0 0 3 1.814v2.683q-.224.051-.432.107c-.702.187-1.305.418-1.745.696C.408 5.56 0 5.954 0 6.5v7c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 15.773 5.898 16 8 16s4.022-.227 5.432-.603c.701-.187 1.305-.418 1.745-.696.415-.261.823-.655.823-1.201v-7c0-.546-.408-.94-.823-1.201-.44-.278-1.043-.51-1.745-.696A12 12 0 0 0 13 4.496v-2.69a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 12 1.813V4.3a22 22 0 0 0-2-.23V1.806a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v2.204a29 29 0 0 0-2 0V1.806A.747.747 0 0 0 7.092.802l-.598-.79-.595.792A.747.747 0 0 0 6 1.813V4.07c-.71.05-1.383.129-2 .23V1.806A.747.747 0 0 0 4.092.802zm-.668 5.556L3 5.524v.967q.468.111 1 .201V5.315a21 21 0 0 1 2-.242v1.855q.488.036 1 .054V5.018a28 28 0 0 1 2 0v1.964q.512-.018 1-.054V5.073c.72.054 1.393.137 2 .242v1.377q.532-.09 1-.201v-.967l.175.045c.655.175 1.15.374 1.469.575.344.217.356.35.356.356s-.012.139-.356.356c-.319.2-.814.4-1.47.575C11.87 7.78 10.041 8 8 8c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 6.639 1 6.506 1 6.5s.012-.139.356-.356c.319-.2.814-.4 1.47-.575M15 7.806v1.027l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277L1 8.82V7.806c.42.232.956.428 1.568.591C3.978 8.773 5.898 9 8 9s4.022-.227 5.432-.603c.612-.163 1.149-.36 1.568-.591m0 2.679V13.5c0 .006-.012.139-.356.355-.319.202-.814.401-1.47.576C11.87 14.78 10.041 15 8 15c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575-.344-.217-.356-.35-.356-.356v-3.02a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426" />
                        </svg>
                      </button>
                    </span>
                  </label>
                  <input
                    value={handleDatepickerFormat(editDogForm.birthday)}
                    onChange={(e) => 
                      setEditDogForm({ ...editDogForm, birthday: e.target.value })
                    }
                    type="date"
                    id="dogBirthday"
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Dog's Birthday"
                  />
                  {/* <p id="floating_helper_text" class="text-xs text-neutral-500 dark:text-neutral-400">Enter your dog's birthday so they can recieve a free gift from us every year!</p> */}
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="dogGender"
                      className="block text-sm font-medium text-neutral-900 dark:text-white">
                      {" "}
                      Gender{" "}
                    </label>
                  </div>
                  <select
                    value={editDogForm.gender}
                    onChange={(e) => 
                      setEditDogForm({ ...editDogForm, gender: e.target.value })
                    }
                    id="dogGender"
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                    <option defaultValue="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="spayedNeutered"
                      className="block text-sm font-medium text-neutral-900 dark:text-white">
                      {" "}
                      Spayed/Neutered?{" "}
                    </label>
                  </div>
                  <select
                    value={editDogForm.spayedNeutered}
                    onChange={(e) =>
                      setEditDogForm({ ...editDogForm, spayedNeutered: e.target.value })
                    }
                    id="spayedNeutered"
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                    <option defaultValue="">Select option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="dogSize"
                      className="block text-sm font-medium text-neutral-900 dark:text-white">
                      {" "}
                      Size{" "}
                    </label>
                  </div>
                  <select
                    value={editDogForm.size}
                    onChange={(e) => 
                      setEditDogForm({ ...editDogForm, size: e.target.value })
                    }
                    id="dogSize"
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                    <option defaultValue="">Select Size</option>
                    <option value="Extra Small">Extra Small</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra Large">Extra Large</option>
                  </select>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="dogWeight"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                    {" "}
                    Weight <span className="font-thin">(in lbs)</span>{" "}
                  </label>
                  <input
                    value={editDogForm.weight}
                    onChange={(e) =>
                      setEditDogForm({ ...editDogForm, weight: e.target.value })
                    }
                    type="text"
                    id="dogWeight"
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Dog's Weight"
                    // required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="behavioralIssues"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                    {" "}
                    Behavioral Issues{" "}
                  </label>
                  <textarea
                    value={editDogForm.behavioralIssues}
                    onChange={(e) => 
                      setEditDogForm({ ...editDogForm, behavioralIssues: e.target.value })
                    }
                    id="behavioralIssues"
                    rows="4"
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Does your dog have any behavioral issues?" />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="medicalConditions"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                    {" "}
                    Medical Conditions{" "}
                  </label>
                  <textarea
                    value={editDogForm.medicalConditions}
                    onChange={(e) => 
                      setEditDogForm({ ...editDogForm, medicalConditions: e.target.value })
                    }
                    id="medicalConditions"
                    rows="4"
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter any information about your dog's health and any medical conditions they may have" />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="trainingGoals"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                    {" "}
                    Training Goals{" "}
                  </label>
                  <textarea
                    value={editDogForm.trainingGoals}
                    onChange={(e) =>
                      setEditDogForm({ ...editDogForm, trainingGoals: e.target.value })
                    }
                    id="trainingGoals"
                    rows="4"
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="What are your training goals?" />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="additionalNotes"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                    {" "}
                    Additional Notes{" "}
                  </label>
                  <textarea
                    value={editDogForm.additionalNotes}
                    onChange={(e) =>
                      setEditDogForm({ ...editDogForm, additionalNotes: e.target.value })
                    }
                    id="additionalNotes"
                    rows="4"
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Any additional notes you would like to include here" />
                </div>
                

                <div className="col-span-2">
                  <label
                    htmlFor="dogPhoto"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                    {" "}
                    Photo{" "}
                  </label>
                  <input
                    // value={editDogForm.photo}
                    onChange={handleDogPhotoUpload}
                    type="file"
                    id="dogPhoto"
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Upload a photo of your dog!"
                  />
                </div>
              </div>
              <div className="border-t border-neutral-200 pt-4 dark:border-neutral-700 md:pt-5">
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="me-2 inline-flex items-center rounded-lg bg-teal-400 px-5 py-2.5 text-center text-sm font-medium text-white dark:text-neutral-900 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:bg-lime-400 dark:hover:bg-lime-500 dark:focus:ring-lime-300 cursor-pointer transition duration-300 ease-in-out">
                  Save Information
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowEditDogModal(false)}
                  type="button"
                  data-modal-toggle="accountInformationModal2"
                  className="me-2 rounded-lg border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-neutral-100 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:ring-neutral-700 cursor-pointer transition duration-300 ease-in-out">
                  Cancel
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showBirthdayPopover && (
        <div
          data-popover
          id="popover-default"
          class="z-51 fixed top-50 right-140 inline-block w-64 text-neutral-700 transition-opacity duration-300 ease-in-out bg-teal-50 border border-neutral-200 rounded-lg shadow-xs dark:text-neutral-300 dark:border-neutral-600 dark:bg-neutral-900 font-instrument text-xs">
          {/* <div class="px-3 py-2 bg-neutral-100 border-b border-neutral-200 rounded-t-lg dark:border-neutral-600 dark:bg-neutral-700">
            <h3 class="font-semibold text-neutral-900 dark:text-white">ASK AI</h3>
          </div> */}
          <div class="px-2 py-2 text-center">
            <p>
            Enter your dog's birthday so they can recieve a free gift
            from us every year!
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default DogEditModal