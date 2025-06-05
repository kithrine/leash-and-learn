import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { builderGetMany } from "../redux/builderSlice"
import {
  trainingClassEnroll,
  trainingClassGetManyByType
} from "../redux/trainingClassSlice"

const EnrollForm = () => {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const { trainingClasses } = useSelector((state) => state.trainingClass)
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const { builders } = useSelector((state) => state.builder)
  const [selectedClass, setSelectedClass] = useState(null)
  const [selectedDog, setSelectedDog] = useState(null)

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
  
  const [avatarFile, setAvatarFile] = useState(null)
  // const [coverPhotoFile, setCoverPhotoFile] = useState(null)

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
    })

  const handleUserAvatarUpload = async (e) => {
    console.log("handleUserAvatarUpload", e)
    if (e.target.files) {
      const testString64 = await toBase64(e.target.files[0])
      setEnrollForm({ ...enrollForm, avatar: testString64})
      console.log("This is the testString in handleUserAvatarUpload function on EnrollForm", testString64)
      setAvatarFile(e.target.files[0]) // Only works for one file upload
    }
  }
  
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
    const enrollmentInfo = {selectedClass, selectedDog, userId: user.id}
    dispatch(trainingClassEnroll(enrollmentInfo))
    // Log the single selected ID
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
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Enroll Today!
          </h2>
          <form onSubmit={handleEnroll}>
            <div className="hidden">
            <div className="hidden">
              <label htmlFor="avatar" className="block mb-2 text-sm">
                Avatar
              </label>
              <div className="flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>

                <input
                  onChange={handleUserAvatarUpload}
                  type="file"
                  name="avatar"
                  id="avatar"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Upload an avatar image"
                />
              </div>
            </div>

            <div className="hidden">
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-gray-900">
                First Name
              </label>
              <div className="mt-2.5">
                <input
                  // value={enrollForm.firstName != "" ? enrollForm.firstName : loggedInUserInfo.firstName}
                  value={enrollForm.firstName}
                  onChange={(e) =>
                    setEnrollForm({
                      ...enrollForm,
                      firstName: e.target.value
                    })
                  }
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            
                />
              </div>
            </div>

            <div className="hidden">
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold text-gray-900">
                Last Name
              </label>
              <div className="mt-2.5">
                <input
                  // value={enrollForm.lastName != "" ? enrollForm.lastName : loggedInUserInfo.lastName}
                  value={enrollForm.lastName}
                  onChange={(e) =>
                    setEnrollForm({
                      ...enrollForm,
                      lastName: e.target.value
                    })
                  }
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
      
                />
              </div>
            </div>

            <div className="hidden sm:col-span-2 md:col-span-1">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  // value={enrollForm.email != "" ? enrollForm.email : loggedInUserInfo.email}
                  value={enrollForm.email}
                  onChange={(e) =>
                    setEnrollForm({
                      ...enrollForm,
                      email: e.target.value
                    })
                  }
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-gray-100 disabled:text-gray-500"
                  disabled={true}
                />
              </div>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <label
                htmlFor="username"
                className="block text-sm/6 font-semibold text-gray-900">
                Username
              </label>
              <div className="mt-2.5">
                <input
                  // value={enrollForm.username != "" ? enrollForm.username : loggedInUserInfo.username}
                  value={enrollForm.username}
                  onChange={(e) =>
                    setEnrollForm({
                      ...enrollForm,
                      username: e.target.value
                    })
                  }
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-gray-100 disabled:text-gray-500"
                />
              </div>
            </div>

            <div className="sm:col-span-2 md:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-gray-900">
                Phone Number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                    <svg
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon">
                      <path
                        fillRule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    // value={enrollForm.phoneNumber != "" ? enrollForm.phoneNumber : loggedInUserInfo.phoneNumber}
                    value={enrollForm.phoneNumber}
                    onChange={(e) =>
                      setEnrollForm({
                        ...enrollForm,
                        phoneNumber: e.target.value
                      })
                    }
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-0 sm:text-sm/6"
                    placeholder="123-456-7890"
        
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2 md:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm/6 font-semibold text-gray-900">
                Address
              </label>
              <div className="mt-2.5">
                <input
                  // value={enrollForm.address != "" ? enrollForm.address : loggedInUserInfo.address}
                  value={enrollForm.address}
                  onChange={(e) =>
                    setEnrollForm({
                      ...enrollForm,
                      address: e.target.value
                    })
                  }
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="address"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-gray-100 disabled:text-gray-500"
                />
              </div>
            </div>
            <div className="sm:col-span-3 md:col-span-1">
              <label
                htmlFor="city"
                className="block text-sm/6 font-semibold text-gray-900">
                City
              </label>
              <div className="mt-2.5">
                <input
                  // value={enrollForm.city != "" ? enrollForm.city : loggedInUserInfo.city}
                  value={enrollForm.city}
                  onChange={(e) =>
                    setEnrollForm({
                      ...enrollForm,
                      city: e.target.value
                    })
                  }
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="city"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-gray-100 disabled:text-gray-500"
                />
              </div>
            </div>

            <div className="sm:col-span-3 md:col-span-1">
              <label
                htmlFor="state"
                className="block text-sm/6 font-semibold text-gray-900">
                State
              </label>
              <div className="mt-2.5">
                <select
                  // value={enrollForm.state != "" ? enrollForm.state : loggedInUserInfo.state}
                  value={enrollForm.state}
                  onChange={(e) =>
                    setEnrollForm({
                      ...enrollForm,
                      state: e.target.value
                    })
                  }
                  type="text"
                  name="state"
                  id="state"
                  autoComplete="state"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-gray-100 disabled:text-gray-500">
                  <option defaultValue="">Select a State</option>{" "}
                  {/* {stateOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))} */}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3 md:col-span-1">
              <label
                htmlFor="zipCode"
                className="block text-sm/6 font-semibold text-gray-900">
                Zip Code
              </label>
              <div className="mt-2.5">
                <input
                  // value={enrollForm.zipCode != "" ? enrollForm.zipCode : loggedInUserInfo.zipCode}
                  value={enrollForm.zipCode}
                  onChange={(e) =>
                    setEnrollForm({
                      ...enrollForm,
                      zipCode: e.target.value
                    })
                  }
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  autoComplete="zip code"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-gray-100 disabled:text-gray-500"
                />
              </div>
            </div>
            </div>

            <div className="">
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

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-6 lg:gap-x-6">
              {/* <div className="group flex relative min-w-full"> */}
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
              {/* </div> */}
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
