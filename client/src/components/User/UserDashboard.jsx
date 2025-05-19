import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate, useParams } from "react-router"
import UserDashboardFooter from "../footers/UserDashboardFooter"
import UserSideNav from "../navigation/UserSideNav"
import { deleteDog, userGetOne } from "../../redux/userSlice"
import DogAddModal from "../modals/DogAddModal"
import DogEditModal from "../modals/DogEditModal"
import DogDeleteModal from "../modals/DogDeleteModal"

const UserDashboard = ({ handleLogout, loggedInEmail }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const { id } = useParams()
  const { user } = useSelector((state) => state.users)
  // const { user } = useSelector((state) => state.users)
  const userId = user.id
  // console.log("loggedInEmail", loggedInEmail)

  const [showAddDogModal, setShowAddDogModal] = useState(false)
  const [showEditDogModal, setShowEditDogModal] = useState(false)
  const [showDeleteDogModal, setShowDeleteDogModal] = useState(false)
  // const [testDeleteModal, setTestDeleteModal] = useState(true)
  const [dogEditForm, setDogEditForm] = useState({})
  const [dogToDelete, setDogToDelete] = useState({})
  const [showDogActions, setShowDogActions] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    dispatch(userGetOne(loggedInEmail))
  }, [])

  // console.log("user & loading", user)
  // console.log("userId from Dashboard routes userId", userId)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const handleDogEditModal = (dog, id) => {
    // console.log("dog.id", dog, id)
    // setDogEditForm()
    if (dog._id === id) {
      console.log(
        "IMPORTANT INFORMATION DAWG dogEdit in handleDogEditModal",
        dog,
        id
      )
      setShowEditDogModal(true)
      setDogEditForm(dog)
    }
    console.log("dog edit form", dogEditForm)
  }

  const handleDogDeleteModal = (dog, id) => {
    console.log("dog.id handleDogDeleteModal", dog, id)
    if (dog._id === id) {
      console.log(
        "IMPORTANT INFORMATION DAWG dogDelete in handleDogDeleteModal",
        dog,
        id
      )
      setShowDeleteDogModal(true)
      setDogEditForm(dog)
    }
    console.log("dog delete dogToDelete", dogToDelete)

  }

  return (
    <>
      {!loading && (
        <section className="mt-16 bg-white py-8 antialiased dark:bg-gray-900 md:py-8">
          <div className="md:px-[13vw]">
            {/* <div className="flex p-8 px-[9vw]"> */}
            {/* <UserSideNav loggedInEmail={loggedInEmail}  /> */}
            {/* <div className="grid grid-cols-2 gap-8 md:ml-[16vw]">
          <div className="col-span-2 h-36 w-[66vw] bg-teal-300"></div>
          <div className="h-[30vh] w-full bg-blue-300"></div>
          <div className=""></div>
        </div>
      </div> */}

            <div className="mx-auto max-w-screen-lg px-4 2xl:px-0 md:ml-[20vw]">
              <nav className="mb-4 flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                      <svg
                        className="me-2 h-4 w-4"
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
                          d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                        />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg
                        className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180"
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
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                      <a
                        href="#"
                        className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ms-2">
                        My account
                      </a>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg
                        className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180"
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
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                      <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                        Account
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
                General overview
              </h2>
              <div className="grid grid-cols-2 gap-6 border-b border-t border-gray-200 py-4 dark:border-gray-700 md:py-8 lg:grid-cols-4 xl:gap-16">
                <div>
                  <svg
                    className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
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
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                  <h3 className="mb-2 text-gray-500 dark:text-gray-400">
                    Orders made
                  </h3>
                  <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                    24
                    <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      <svg
                        className="-ms-1 me-1 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v13m0-13 4 4m-4-4-4 4"></path>
                      </svg>
                      10.3%
                    </span>
                  </span>
                  <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                    <svg
                      className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"
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
                        d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    vs 20 last 3 months
                  </p>
                </div>
                <div>
                  <svg
                    className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                    />
                  </svg>
                  <h3 className="mb-2 text-gray-500 dark:text-gray-400">
                    Reviews added
                  </h3>
                  <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                    16
                    <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      <svg
                        className="-ms-1 me-1 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v13m0-13 4 4m-4-4-4 4"></path>
                      </svg>
                      8.6%
                    </span>
                  </span>
                  <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                    <svg
                      className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"
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
                        d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    vs 14 last 3 months
                  </p>
                </div>
                <div>
                  <svg
                    className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
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
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  <h3 className="mb-2 text-gray-500 dark:text-gray-400">
                    Favorite products added
                  </h3>
                  <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                    8
                    <span className="ms-2 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                      <svg
                        className="-ms-1 me-1 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v13m0-13 4 4m-4-4-4 4"></path>
                      </svg>
                      12%
                    </span>
                  </span>
                  <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                    <svg
                      className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"
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
                        d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    vs 10 last 3 months
                  </p>
                </div>
                <div>
                  <svg
                    className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
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
                      d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4"
                    />
                  </svg>
                  <h3 className="mb-2 text-gray-500 dark:text-gray-400">
                    Product returns
                  </h3>
                  <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                    2
                    <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      <svg
                        className="-ms-1 me-1 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v13m0-13 4 4m-4-4-4 4"></path>
                      </svg>
                      50%
                    </span>
                  </span>
                  <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                    <svg
                      className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"
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
                        d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    vs 1 last 3 months
                  </p>
                </div>
              </div>
              <div className="py-4 md:py-8">
                <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      <img
                        className="h-16 w-16 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                        alt="Helene avatar"
                      />
                      <div>
                        <span className="mb-2 inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                          {" "}
                          User Account{" "}
                        </span>
                        <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">
                          {user.firstName} {user.lastName}
                        </h2>
                      </div>
                    </div>
                    <dl className="">
                      <dt className="font-semibold text-gray-900 dark:text-white">
                        Email Address
                      </dt>
                      <dd className="text-gray-500 dark:text-gray-400">
                        {user.email}
                      </dd>
                    </dl>
                    <dl className="">
                      <dt className="font-semibold text-gray-900 dark:text-white">
                        Username
                      </dt>
                      <dd className="text-gray-500 dark:text-gray-400">
                        {user.username}
                      </dd>
                    </dl>
                    <dl>
                      <dt className="font-semibold text-gray-900 dark:text-white">
                        Home Address
                      </dt>
                      <dd className="flex gap-1 text-gray-500 dark:text-gray-400">
                        <svg
                          className="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline"
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
                            d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                          />
                        </svg>
                        {user.address !== "" ? (
                          <>
                            {user.address}
                            <br />
                            {user.city}, {user.state} {user.zipCode}
                          </>
                        ) : (
                          <>
                            <p className="text-gray-400 font-thin">
                              Edit your profile details to add your address!
                            </p>
                          </>
                        )}
                      </dd>
                    </dl>
                    {/* <dl>
                  <dt className="font-semibold text-gray-900 dark:text-white">
                    Delivery Address
                  </dt>
                  <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <svg
                      className="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline"
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
                        d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                      />
                    </svg>
                    9th St. PATH Station, New York, United States of America
                  </dd>
                </dl> */}
                  </div>
                  <div className="space-y-4">
                    <dl>
                      <dt className="font-semibold text-gray-900 dark:text-white">
                        Phone Number
                      </dt>
                      <dd className="text-gray-500 dark:text-gray-400">
                        {user.phoneNumber}
                      </dd>
                    </dl>
                    {/* <dl>
                  <dt className="font-semibold text-gray-900 dark:text-white">
                    Favorite pick-up point
                  </dt>
                  <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <svg
                      className="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline"
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
                        d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
                      />
                    </svg>
                    Herald Square, 2, New York, United States of America
                  </dd>
                </dl> */}
                    <dl>
                      <dt className="font-semibold text-gray-900 dark:text-white">
                        My Companies
                      </dt>
                      <dd className="text-gray-500 dark:text-gray-400">
                        FLOWBITE LLC, Fiscal code: 18673557
                      </dd>
                    </dl>
                    <dl>
                      <dt className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Payment Methods
                      </dt>
                      <dd className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                          <img
                            className="h-4 w-auto dark:hidden"
                            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                            alt=""
                          />
                          <img
                            className="hidden h-4 w-auto dark:flex"
                            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <div className="text-sm">
                            <p className="mb-0.5 font-medium text-gray-900 dark:text-white">
                              Visa ending in 7658
                            </p>
                            <p className="font-normal text-gray-500 dark:text-gray-400">
                              Expiry 10/2024
                            </p>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/user/${user.id}`)}
                  type="button"
                  data-modal-target="accountInformationModal"
                  data-modal-toggle="accountInformationModal"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
                  <svg
                    className="-ms-0.5 me-1.5 h-4 w-4"
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
                      d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"></path>
                  </svg>
                  Edit your data
                </button>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:p-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Dogs
                </h3>
                <button
                  onClick={() => setShowAddDogModal(true)}
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add Dog
                </button>

                {/* PROB GET RID OF THIS ONE */}
                {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {user.dogs.map((dog, index) => (
            <div key={index} className="group relative">
              <img
                // alt={product.imageAlt}
                src={dog.photo}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {dog.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{dog.breed}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{dog.age}</p>
              </div>
            </div>
          ))}
        </div> */}

                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:space-y-6 lg:gap-x-6">
                  {user.dogs.map((dog, index) => (
                    <div className="group relative min-w-full">
                      <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-end px-4 pt-4">
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
                                {/* <li>
                                  <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Export Data
                                  </a>
                                </li> */}
                                <li>
                                  <a
                                    onClick={() => handleDogDeleteModal(dog, dog._id)}
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
                        </div>
                        <div class="flex flex-col items-center pb-10">
                          <img
                            class="w-24 h-24 mb-3 rounded-full shadow-lg"
                            src="/docs/images/people/profile-picture-3.jpg"
                            alt="Bonnie image"
                          />
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
                      {showDeleteDogModal && dogToDelete._id === dog._id && (
        <DogDeleteModal
          setShowDeleteDogModal={setShowDeleteDogModal}
          dogToDelete={dogToDelete}
          userId={userId}
        />
      )}
                    </div>
                    
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:p-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Latest orders
                </h3>
                <div className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 pb-4 dark:border-gray-700 md:pb-5">
                  <dl className="w-1/2 sm:w-48">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Order ID:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                      <a href="#" className="hover:underline">
                        #FWB12546798
                      </a>
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Date:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                      11.12.2023
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Price:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                      $499
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Status:
                    </dt>
                    <dd className="me-2 mt-1.5 inline-flex shrink-0 items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      <svg
                        className="me-1 h-3 w-3"
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
                          d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                      </svg>
                      In transit
                    </dd>
                  </dl>

                  <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                    <button
                      id="actionsMenuDropdownModal10"
                      data-dropdown-toggle="dropdownOrderModal10"
                      type="button"
                      className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto">
                      Actions
                      <svg
                        className="-me-0.5 ms-1.5 h-4 w-4"
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
                          d="m19 9-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div
                      id="dropdownOrderModal10"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                      data-popper-reference-hidden=""
                      data-popper-escaped=""
                      data-popper-placement="bottom">
                      <ul
                        className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="actionsMenuDropdown10">
                        <li>
                          <a
                            href="#"
                            className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg
                              className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
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
                                d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"></path>
                            </svg>
                            <span>Order again</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg
                              className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24">
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path>
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                            </svg>
                            Order details
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-modal-target="deleteOrderModal"
                            data-modal-toggle="deleteOrderModal"
                            className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg
                              className="me-1.5 h-4 w-4"
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
                                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"></path>
                            </svg>
                            Cancel order
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {testDeleteModal && ( */}

          <div
            id="deleteOrderModal"
            tabIndex="-1"
            aria-hidden="true"
            className="hidden fixed left-0 right-0 top-0 z-50 h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
            <div className="relative h-full w-full max-w-md p-4 md:h-auto">
              {/* <!-- Modal content --> */}
              <div className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
                <button
                  type="button"
                  className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="deleteOrderModal">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                  <svg
                    className="h-8 w-8 text-gray-500 dark:text-gray-400"
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
                      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                    />
                  </svg>
                  <span className="sr-only">Danger icon</span>
                </div>
                <p className="mb-3.5 text-gray-900 dark:text-white">
                  <a
                    href="#"
                    className="font-medium text-blue-700 hover:underline dark:text-blue-500">
                    @heleneeng
                  </a>
                  , are you sure you want to delete this order from your
                  account?
                </p>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                  This action cannot be undone.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <button
                    data-modal-toggle="deleteOrderModal"
                    type="button"
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600">
                    No, cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Yes, delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* )} */}
        </section>
      )}

      {showEditDogModal && (
        <DogEditModal
          setShowEditDogModal={setShowEditDogModal}
          loggedInEmail={loggedInEmail}
          userId={userId}
          dog={dogEditForm}
        />
      )}

      

      {showAddDogModal && (
        <DogAddModal
          setShowAddDogModal={setShowAddDogModal}
          loggedInEmail={loggedInEmail}
        />
      )}

      <UserDashboardFooter />
    </>
  )
}

export default UserDashboard
