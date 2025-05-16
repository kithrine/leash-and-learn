import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"

import { toast } from "react-toastify"
import { createDog, userGetOne } from "../../redux/userSlice"

const DogAddModal = ({setShowAddDogModal, loggedInEmail}) => {

  const { user } = useSelector((state) => state.users)
  const userId = user.id

  const dispatch = useDispatch()

  // let userId = location.pathname.split("/")[2];

  const [ addDogForm, setAddDogForm ] = useState({
    name: "", // x
    breed: "", // x
    age: "",  // x
    birthday: "", // x (Datepicker)
    gender: "", // x (Dropdown) 
    weight: "", // x (in lbs)
    photo: "", // x
    size: "", // x (Dropdown of xs, sm, md, lg, xl)
    spayedNeutered: "", // x (Dropdown yes/no)
    behavioralIssues: "", // x (Textarea)
    medicalConditions: "", // x (Textarea)
    trainingGoals: "", // x (Textarea)
    additionalNotes: "" // x (Textarea)
  })


  useEffect(() => {
    console.log("&&&&&&&&&&& user stuff", user)
    console.log("&&&&&&&&&&& user ID", user.id)

  }, [user])
  
  // useEffect(() => {
  //   console.log("addDogForm", addDogForm)
  // }, [addDogForm])

  useEffect(() => {
    console.log("DogAddModal useEffect ", loggedInEmail)
    dispatch(userGetOne(loggedInEmail))
  }, [])

  const handleAddDog = (e) => {
    e.preventDefault()
    console.log("userId:", userId, "dog:", addDogForm);
    dispatch(createDog({ userId, addDogForm }))
    setShowAddDogModal(false)
    toast.success("Dog added successfully!");
  }
  


  return (
    <>
      <div
        id="addDogModal"
        tabIndex="-1"
        aria-hidden="true"
        className="max-h-auto fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-[full] w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0 drop-shadow-2xl">
        <div className="max-h-auto relative mt-16 justify-self-center max-h-full w-full max-w-xl p-4">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add Dog
              </h3>
              <button
                onClick={() => setShowAddDogModal(false)}
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="addDogModal">
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
            <form onSubmit={handleAddDog} className="p-4 md:p-5">
              <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="dogName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Name{" "}
                  </label>
                  <input
                    value={addDogForm.name}
                    onChange={(e) => 
                      setAddDogForm({ ...addDogForm, name: e.target.value })
                    }
                    type="text"
                    id="dogName"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter dog's name"
                    required
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="dogBreed"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Breed{" "}
                  </label>
                  <input
                    value={addDogForm.breed}
                    onChange={(e) => 
                      setAddDogForm({ ...addDogForm, breed: e.target.value })
                    }
                    type="text"
                    id="dogBreed"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter dog's breed"
                    // required
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="dogAge"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Age{" "}
                  </label>
                  <input
                    value={addDogForm.age}
                    onChange={(e) => 
                      setAddDogForm({ ...addDogForm, age: e.target.value })
                    }
                    type="text"
                    id="dogAge"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter your dog's age"
                    // required
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="dogBirthday"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                      <span className="flex gap-x-1">Birthday{" "}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cake2" viewBox="0 0 16 16">
                        <path d="m3.494.013-.595.79A.747.747 0 0 0 3 1.814v2.683q-.224.051-.432.107c-.702.187-1.305.418-1.745.696C.408 5.56 0 5.954 0 6.5v7c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 15.773 5.898 16 8 16s4.022-.227 5.432-.603c.701-.187 1.305-.418 1.745-.696.415-.261.823-.655.823-1.201v-7c0-.546-.408-.94-.823-1.201-.44-.278-1.043-.51-1.745-.696A12 12 0 0 0 13 4.496v-2.69a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 12 1.813V4.3a22 22 0 0 0-2-.23V1.806a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v2.204a29 29 0 0 0-2 0V1.806A.747.747 0 0 0 7.092.802l-.598-.79-.595.792A.747.747 0 0 0 6 1.813V4.07c-.71.05-1.383.129-2 .23V1.806A.747.747 0 0 0 4.092.802zm-.668 5.556L3 5.524v.967q.468.111 1 .201V5.315a21 21 0 0 1 2-.242v1.855q.488.036 1 .054V5.018a28 28 0 0 1 2 0v1.964q.512-.018 1-.054V5.073c.72.054 1.393.137 2 .242v1.377q.532-.09 1-.201v-.967l.175.045c.655.175 1.15.374 1.469.575.344.217.356.35.356.356s-.012.139-.356.356c-.319.2-.814.4-1.47.575C11.87 7.78 10.041 8 8 8c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 6.639 1 6.506 1 6.5s.012-.139.356-.356c.319-.2.814-.4 1.47-.575M15 7.806v1.027l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277L1 8.82V7.806c.42.232.956.428 1.568.591C3.978 8.773 5.898 9 8 9s4.022-.227 5.432-.603c.612-.163 1.149-.36 1.568-.591m0 2.679V13.5c0 .006-.012.139-.356.355-.319.202-.814.401-1.47.576C11.87 14.78 10.041 15 8 15c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575-.344-.217-.356-.35-.356-.356v-3.02a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426"/>
                      </svg>
                    </span>
                  </label>
                  <input
                    value={addDogForm.birthday}
                    onChange={(e) => 
                      setAddDogForm({ ...addDogForm, birthday: e.target.value })
                    }
                    type="date"
                    id="dogBirthday"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Dog's Birthday"
                  />
                  <p id="floating_helper_text" class="text-xs text-gray-500 dark:text-gray-400">Enter your dog's birthday so they can recieve a free gift from us every year!</p>

                </div>

                

                {/* <div className="col-span-2">
                  <label
                    htmlFor="phone-input_billing_modal"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Phone Number*{" "}
                  </label>
                  <div className="flex items-center">
                    <button
                      id="dropdown_phone_input__button_billing_modal"
                      data-dropdown-toggle="dropdown_phone_input_billing_modal"
                      className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      type="button">
                      <svg
                        fill="none"
                        aria-hidden="true"
                        className="me-2 h-4 w-4"
                        viewBox="0 0 20 15">
                        <rect
                          width="19.6"
                          height="14"
                          y=".5"
                          fill="#fff"
                          rx="2"
                        />
                        <mask
                          id="a"
                          style={{ maskType: "luminance" }}
                          width="20"
                          height="15"
                          x="0"
                          y="0"
                          maskUnits="userSpaceOnUse">
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                        </mask>
                        <g mask="url(#a)">
                          <path
                            fill="#D02F44"
                            fillRule="evenodd"
                            d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                            clipRule="evenodd"
                          />
                          <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                          <g filter="url(#filter0_d_343_121520)">
                            <path
                              fill="url(#paint0_linear_343_121520)"
                              fillRule="evenodd"
                              d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                              clipRule="evenodd"
                            />
                          </g>
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_343_121520"
                            x1=".933"
                            x2=".933"
                            y1="1.433"
                            y2="6.1"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#fff" />
                            <stop offset="1" stopColor="#F0F0F0" />
                          </linearGradient>
                          <filter
                            id="filter0_d_343_121520"
                            width="6.533"
                            height="5.667"
                            x=".933"
                            y="1.433"
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse">
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              result="hardAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                            <feBlend
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_343_121520"
                            />
                            <feBlend
                              in="SourceGraphic"
                              in2="effect1_dropShadow_343_121520"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      +1
                      <svg
                        className="-me-0.5 ms-2 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 9-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdown_phone_input_billing_modal"
                      className="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                      <ul
                        className="p-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown_phone_input__button_billing_modal">
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">
                            <span className="inline-flex items-center">
                              <svg
                                fill="none"
                                aria-hidden="true"
                                className="me-2 h-4 w-4"
                                viewBox="0 0 20 15">
                                <rect
                                  width="19.6"
                                  height="14"
                                  y=".5"
                                  fill="#fff"
                                  rx="2"
                                />
                                <mask
                                  id="a"
                                  style={{ maskType: "luminance" }}
                                  width="20"
                                  height="15"
                                  x="0"
                                  y="0"
                                  maskUnits="userSpaceOnUse">
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                </mask>
                                <g mask="url(#a)">
                                  <path
                                    fill="#D02F44"
                                    fillRule="evenodd"
                                    d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                                    clipRule="evenodd"
                                  />
                                  <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                                  <g filter="url(#filter0_d_343_121520)">
                                    <path
                                      fill="url(#paint0_linear_343_121520)"
                                      fillRule="evenodd"
                                      d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                      clipRule="evenodd"
                                    />
                                  </g>
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_343_121520"
                                    x1=".933"
                                    x2=".933"
                                    y1="1.433"
                                    y2="6.1"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#fff" />
                                    <stop offset="1" stopColor="#F0F0F0" />
                                  </linearGradient>
                                  <filter
                                    id="filter0_d_343_121520"
                                    width="6.533"
                                    height="5.667"
                                    x=".933"
                                    y="1.433"
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse">
                                    <feFlood
                                      floodOpacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      result="hardAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    />
                                    <feOffset dy="1" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                    <feBlend
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_343_121520"
                                    />
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_343_121520"
                                      result="shape"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                              United States (+1)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">
                            <span className="inline-flex items-center">
                              <svg
                                className="me-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 20 15">
                                <rect
                                  width="19.6"
                                  height="14"
                                  y=".5"
                                  fill="#fff"
                                  rx="2"
                                />
                                <mask
                                  id="a"
                                  style={{ maskType: "luminance" }}
                                  width="20"
                                  height="15"
                                  x="0"
                                  y="0"
                                  maskUnits="userSpaceOnUse">
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                </mask>
                                <g mask="url(#a)">
                                  <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                                  <path
                                    fill="#fff"
                                    fillRule="evenodd"
                                    d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    stroke="#DB1F35"
                                    strokeLinecap="round"
                                    strokeWidth=".667"
                                    d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"
                                  />
                                  <path
                                    fill="#E6273E"
                                    fillRule="evenodd"
                                    d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                                    clipRule="evenodd"
                                  />
                                </g>
                              </svg>
                              United Kingdom (+44)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">
                            <span className="inline-flex items-center">
                              <svg
                                className="me-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 20 15"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect
                                  width="19.6"
                                  height="14"
                                  y=".5"
                                  fill="#fff"
                                  rx="2"
                                />
                                <mask
                                  id="a"
                                  style={{ maskType: "luminance" }}
                                  width="20"
                                  height="15"
                                  x="0"
                                  y="0"
                                  maskUnits="userSpaceOnUse">
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                </mask>
                                <g mask="url(#a)">
                                  <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                                  <path
                                    fill="#fff"
                                    stroke="#fff"
                                    strokeWidth=".667"
                                    d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z"
                                  />
                                  <path
                                    fill="url(#paint0_linear_374_135177)"
                                    fillRule="evenodd"
                                    d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="url(#paint1_linear_374_135177)"
                                    fillRule="evenodd"
                                    d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#fff"
                                    fillRule="evenodd"
                                    d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                                    clipRule="evenodd"
                                  />
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_374_135177"
                                    x1="0"
                                    x2="0"
                                    y1=".5"
                                    y2="7.5"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#fff" />
                                    <stop offset="1" stopColor="#F0F0F0" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint1_linear_374_135177"
                                    x1="0"
                                    x2="0"
                                    y1=".5"
                                    y2="7.033"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF2E3B" />
                                    <stop offset="1" stopColor="#FC0D1B" />
                                  </linearGradient>
                                </defs>
                              </svg>
                              Australia (+61)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">
                            <span className="inline-flex items-center">
                              <svg
                                className="me-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 20 15">
                                <rect
                                  width="19.6"
                                  height="14"
                                  y=".5"
                                  fill="#fff"
                                  rx="2"
                                />
                                <mask
                                  id="a"
                                  style={{ maskType: "luminance" }}
                                  width="20"
                                  height="15"
                                  x="0"
                                  y="0"
                                  maskUnits="userSpaceOnUse">
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                </mask>
                                <g mask="url(#a)">
                                  <path
                                    fill="#262626"
                                    fillRule="evenodd"
                                    d="M0 5.167h19.6V.5H0v4.667z"
                                    clipRule="evenodd"
                                  />
                                  <g filter="url(#filter0_d_374_135180)">
                                    <path
                                      fill="#F01515"
                                      fillRule="evenodd"
                                      d="M0 9.833h19.6V5.167H0v4.666z"
                                      clipRule="evenodd"
                                    />
                                  </g>
                                  <g filter="url(#filter1_d_374_135180)">
                                    <path
                                      fill="#FFD521"
                                      fillRule="evenodd"
                                      d="M0 14.5h19.6V9.833H0V14.5z"
                                      clipRule="evenodd"
                                    />
                                  </g>
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_d_374_135180"
                                    width="19.6"
                                    height="4.667"
                                    x="0"
                                    y="5.167"
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse">
                                    <feFlood
                                      floodOpacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      result="hardAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    />
                                    <feOffset />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                    <feBlend
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_374_135180"
                                    />
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_374_135180"
                                      result="shape"
                                    />
                                  </filter>
                                  <filter
                                    id="filter1_d_374_135180"
                                    width="19.6"
                                    height="4.667"
                                    x="0"
                                    y="9.833"
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse">
                                    <feFlood
                                      floodOpacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      result="hardAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    />
                                    <feOffset />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                    <feBlend
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_374_135180"
                                    />
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_374_135180"
                                      result="shape"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                              Germany (+49)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">
                            <span className="inline-flex items-center">
                              <svg
                                className="me-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 20 15">
                                <rect
                                  width="19.1"
                                  height="13.5"
                                  x=".25"
                                  y=".75"
                                  fill="#fff"
                                  stroke="#F5F5F5"
                                  strokeWidth=".5"
                                  rx="1.75"
                                />
                                <mask
                                  id="a"
                                  style={{ maskType: "luminance" }}
                                  width="20"
                                  height="15"
                                  x="0"
                                  y="0"
                                  maskUnits="userSpaceOnUse">
                                  <rect
                                    width="19.1"
                                    height="13.5"
                                    x=".25"
                                    y=".75"
                                    fill="#fff"
                                    stroke="#fff"
                                    strokeWidth=".5"
                                    rx="1.75"
                                  />
                                </mask>
                                <g mask="url(#a)">
                                  <path
                                    fill="#F44653"
                                    d="M13.067.5H19.6v14h-6.533z"
                                  />
                                  <path
                                    fill="#1035BB"
                                    fillRule="evenodd"
                                    d="M0 14.5h6.533V.5H0v14z"
                                    clipRule="evenodd"
                                  />
                                </g>
                              </svg>
                              France (+33)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">
                            <span className="inline-flex items-center">
                              <svg
                                className="me-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 20 15">
                                <rect
                                  width="19.6"
                                  height="14"
                                  y=".5"
                                  fill="#fff"
                                  rx="2"
                                />
                                <mask
                                  id="a"
                                  style={{ maskType: "luminance" }}
                                  width="20"
                                  height="15"
                                  x="0"
                                  y="0"
                                  maskUnits="userSpaceOnUse">
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                </mask>
                                <g mask="url(#a)">
                                  <path
                                    fill="#262626"
                                    fillRule="evenodd"
                                    d="M0 5.167h19.6V.5H0v4.667z"
                                    clipRule="evenodd"
                                  />
                                  <g filter="url(#filter0_d_374_135180)">
                                    <path
                                      fill="#F01515"
                                      fillRule="evenodd"
                                      d="M0 9.833h19.6V5.167H0v4.666z"
                                      clipRule="evenodd"
                                    />
                                  </g>
                                  <g filter="url(#filter1_d_374_135180)">
                                    <path
                                      fill="#FFD521"
                                      fillRule="evenodd"
                                      d="M0 14.5h19.6V9.833H0V14.5z"
                                      clipRule="evenodd"
                                    />
                                  </g>
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_d_374_135180"
                                    width="19.6"
                                    height="4.667"
                                    x="0"
                                    y="5.167"
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse">
                                    <feFlood
                                      floodOpacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      result="hardAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    />
                                    <feOffset />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                    <feBlend
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_374_135180"
                                    />
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_374_135180"
                                      result="shape"
                                    />
                                  </filter>
                                  <filter
                                    id="filter1_d_374_135180"
                                    width="19.6"
                                    height="4.667"
                                    x="0"
                                    y="9.833"
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse">
                                    <feFlood
                                      floodOpacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      result="hardAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    />
                                    <feOffset />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                    <feBlend
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_374_135180"
                                    />
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_374_135180"
                                      result="shape"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                              Germany (+49)
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        id="phone-input"
                        className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="123-456-7890"
                        required
                      />
                    </div>
                  </div>
                </div> */}

                <div className="col-span-2 sm:col-span-1">
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="dogGender"
                      className="block text-sm font-medium text-gray-900 dark:text-white">
                      {" "}
                      Gender{" "}
                    </label>
                  </div>
                  <select
                    value={addDogForm.gender}
                    onChange={(e) => 
                      setAddDogForm({ ...addDogForm, gender: e.target.value })
                    }
                    id="dogGender"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                    <option defaultValue="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="spayedNeutered"
                      className="block text-sm font-medium text-gray-900 dark:text-white">
                      {" "}
                      Spayed/Neutered?{" "}
                    </label>
                  </div>
                  <select
                    value={addDogForm.spayedNeutered}
                    onChange={(e) =>
                      setAddDogForm({ ...addDogForm, spayedNeutered: e.target.value })
                    }
                    id="spayedNeutered"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                    <option defaultValue="">Select option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="dogSize"
                      className="block text-sm font-medium text-gray-900 dark:text-white">
                      {" "}
                      Size{" "}
                    </label>
                  </div>
                  <select
                    value={addDogForm.size}
                    onChange={(e) => 
                      setAddDogForm({ ...addDogForm, size: e.target.value })
                    }
                    id="dogSize"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
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
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Weight <span className="font-thin">(in lbs)</span>{" "}
                  </label>
                  <input
                    value={addDogForm.weight}
                    onChange={(e) =>
                      setAddDogForm({ ...addDogForm, weight: e.target.value })
                    }
                    type="text"
                    id="dogWeight"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Dog's Weight"
                    // required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="behavioralIssues"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Behavioral Issues{" "}
                  </label>
                  <textarea
                    value={addDogForm.behavioralIssues}
                    onChange={(e) => 
                      setAddDogForm({ ...addDogForm, behavioralIssues: e.target.value })
                    }
                    id="behavioralIssues"
                    rows="4"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Does your dog have any behavioral issues?" />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="medicalConditions"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Medical Conditions{" "}
                  </label>
                  <textarea
                    value={addDogForm.medicalConditions}
                    onChange={(e) => 
                      setAddDogForm({ ...addDogForm, medicalConditions: e.target.value })
                    }
                    id="medicalConditions"
                    rows="4"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter any information about your dog's health and any medical conditions they may have" />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="trainingGoals"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Training Goals{" "}
                  </label>
                  <textarea
                    value={addDogForm.trainingGoals}
                    onChange={(e) =>
                      setAddDogForm({ ...addDogForm, trainingGoals: e.target.value })
                    }
                    id="trainingGoals"
                    rows="4"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="What are your training goals?" />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="additionalNotes"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Additional Notes{" "}
                  </label>
                  <textarea
                    value={addDogForm.additionalNotes}
                    onChange={(e) =>
                      setAddDogForm({ ...addDogForm, additionalNotes: e.target.value })
                    }
                    id="additionalNotes"
                    rows="4"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Any additional notes you would like to include here" />
                </div>
                

                <div className="col-span-2">
                  <label
                    htmlFor="dogPhoto"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Photo{" "}
                  </label>
                  <input
                    value={addDogForm.photo}
                    onChange={(e) =>
                      setAddDogForm({ ...addDogForm, photo: e.target.value})
                    }
                    type="file"
                    id="dogPhoto"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Upload a photo of your dog!"
                  />
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
                <button
                  type="submit"
                  className="me-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Save information
                </button>
                <button
                  onClick={() => setShowAddDogModal(false)}
                  type="button"
                  data-modal-toggle="accountInformationModal2"
                  className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default DogAddModal
