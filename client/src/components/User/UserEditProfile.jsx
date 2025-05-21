import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { Link, useNavigate } from "react-router"
import { toast } from "react-toastify"
import UserDashboardFooter from "../footers/UserDashboardFooter"
import UserSideNav from "../navigation/UserSideNav"
import { userGetOne, userUpdate } from "../../redux/userSlice"

const UserEditProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const { email } = useParams()
  const { id } = useParams()
  const { user } = useSelector((state) => state.users)
  let loggedInUserInfo = JSON.parse(sessionStorage.getItem("userData"))

  // console.log("loggedInUserInfo", loggedInUserInfo)

  const [userEditProfileForm, setUserEditProfileForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    avatar: user.avatar,
    phoneNumber: user.phoneNumber,
    address: user.address,
    city: user.city,
    state: user.state,
    zipCode: user.zipCode
    // dogs: []
  })

  const stateOptions = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" }
  ]

  const [userDogModal, setUserDogModal] = useState(false)
  // console.log("user.email", user.email)
  // const loggedInEmail = user.email
  const [loading, setLoading] = useState(true)

  // console.log("user", user)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("userData", JSON.stringify(user))
    }
  }, [loggedInUserInfo])
  
 
  useEffect(() => {
    console.log("userEditProfileForm", userEditProfileForm)
  }, [userEditProfileForm])

  const [avatarFile, setAvatarFile] = useState(null)

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
    })

  const handleFileUpload = async (e) => {
    console.log("handleFileUpload", e)
    if (e.target.files) {
      const testString64 = await toBase64(e.target.files[0])
      setUserEditProfileForm({ ...userEditProfileForm, avatar: testString64})
      console.log("This is the testString in handleFileUpload function", testString64)
      setAvatarFile(e.target.files[0]) // Only works for one file upload
    }
  }

  const handleUserEdit = (e) => {
    console.log("handleUserEdit")
    e.preventDefault()
    dispatch(userUpdate({ id, userEditProfileForm: { ...userEditProfileForm } }))
    toast.success("Profile updated successfully!")
    navigate("/dashboard")
  }

  return (
    <>
      <section className="mt-16 bg-white py-8 antialiased dark:bg-gray-900 md:py-8">
        <div className="md:px-[13vw]">
          {/* <div className="flex p-8 px-[9vw]"> */}
          {/* <UserSideNav /> */}
          {/* <div className="grid grid-cols-2 gap-8 md:ml-[16vw]">
          <div className="col-span-2 h-36 w-[66vw] bg-teal-300"></div>
          <div className="h-[30vh] w-full bg-blue-300"></div>
          <div className=""></div>
        </div>
      </div> */}
          {/* {user.firstName} {user.address} */}

          <div className="mx-auto max-w-screen-lg px-4 2xl:px-0 md:ml-[20vw]">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Edit Profile
              </h2>
              <p className="mt-2 text-lg/8 text-gray-600">
                Edit user details
              </p>
              
            </div>
            <form
              onSubmit={handleUserEdit}
              className="mb-20 mx-auto md:mt-10 max-w-xl sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2 md:col-span-2">
                  <label
                    htmlFor="avatar"
                    className="block text-sm/6 font-semibold text-gray-900">
                    Avatar
                  </label>
                  <div className="flex items-center gap-x-2 mt-2.5">

                  {user.avatar ? (
                    <img
                      src={`${user.avatar}`}
                      className="size-15 rounded-full"
                    />
                  ) : (
                  //   <svg
                  //   className="size-16 me-3 text-gray-200 dark:text-gray-700"
                  //   aria-hidden="true"
                  //   xmlns="http://www.w3.org/2000/svg"
                  //   fill="currentColor"
                  //   viewBox="0 0 20 20">
                  //   <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  // </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#708090"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                  )}


                    <input
                      // value={userEditProfileForm.avatar != "" ? userEditProfileForm.avatar : loggedInUserInfo.avatar}
                      // value={handleFileUpload(userEditProfileForm.avatar)}
                      // onChange={(e) =>
                      //   setUserEditProfileForm({
                      //     ...userEditProfileForm,
                      //     avatar: handleFileUpload(e.target.value)
                      //   })
                      // }
                      // value={userEditProfileForm.avatar}
                      onChange={handleFileUpload}
                      // value={userEditProfileForm.avatar}
                      // onChange={(e) =>
                      //   setUserEditProfileForm({
                      //     ...userEditProfileForm,
                      //     avatar: handleFileUpload(e.target.value)
                      //   })
                      // }
                      type="file"
                      name="avatar"
                      id="avatar"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      placeholder="Upload an avatar image"
                    />
                  </div>
                </div>

                

                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-gray-900">
                    First Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      // value={userEditProfileForm.firstName != "" ? userEditProfileForm.firstName : loggedInUserInfo.firstName}
                      value={userEditProfileForm.firstName}
                      onChange={(e) =>
                        setUserEditProfileForm({
                          ...userEditProfileForm,
                          firstName: e.target.value
                        })
                      }
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-gray-900">
                    Last Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      // value={userEditProfileForm.lastName != "" ? userEditProfileForm.lastName : loggedInUserInfo.lastName}
                      value={userEditProfileForm.lastName}
                      onChange={(e) =>
                        setUserEditProfileForm({
                          ...userEditProfileForm,
                          lastName: e.target.value
                        })
                      }
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 md:col-span-1">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      // value={userEditProfileForm.email != "" ? userEditProfileForm.email : loggedInUserInfo.email}
                      value={userEditProfileForm.email}
                      onChange={(e) =>
                        setUserEditProfileForm({
                          ...userEditProfileForm,
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
                      // value={userEditProfileForm.username != "" ? userEditProfileForm.username : loggedInUserInfo.username}
                      value={userEditProfileForm.username}
                      onChange={(e) =>
                        setUserEditProfileForm({
                          ...userEditProfileForm,
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
                        // value={userEditProfileForm.phoneNumber != "" ? userEditProfileForm.phoneNumber : loggedInUserInfo.phoneNumber}
                        value={userEditProfileForm.phoneNumber}
                        onChange={(e) =>
                          setUserEditProfileForm({
                            ...userEditProfileForm,
                            phoneNumber: e.target.value
                          })
                        }
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-0 sm:text-sm/6"
                        placeholder="123-456-7890"
                        required
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
                      // value={userEditProfileForm.address != "" ? userEditProfileForm.address : loggedInUserInfo.address}
                      value={userEditProfileForm.address}
                      onChange={(e) =>
                        setUserEditProfileForm({
                          ...userEditProfileForm,
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
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 py-6 sm:grid-cols-3">
                <div className="sm:col-span-3 md:col-span-1">
                  <label
                    htmlFor="city"
                    className="block text-sm/6 font-semibold text-gray-900">
                    City
                  </label>
                  <div className="mt-2.5">
                    <input
                      // value={userEditProfileForm.city != "" ? userEditProfileForm.city : loggedInUserInfo.city}
                      value={userEditProfileForm.city}
                      onChange={(e) =>
                        setUserEditProfileForm({
                          ...userEditProfileForm,
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
                      // value={userEditProfileForm.state != "" ? userEditProfileForm.state : loggedInUserInfo.state}
                      value={userEditProfileForm.state}
                      onChange={(e) =>
                        setUserEditProfileForm({
                          ...userEditProfileForm,
                          state: e.target.value
                        })
                      }
                      type="text"
                      name="state"
                      id="state"
                      autoComplete="state"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-gray-100 disabled:text-gray-500">
                      <option defaultValue="">Select a State</option>{" "}
                      
                      {stateOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
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
                      // value={userEditProfileForm.zipCode != "" ? userEditProfileForm.zipCode : loggedInUserInfo.zipCode}
                      value={userEditProfileForm.zipCode}
                      onChange={(e) =>
                        setUserEditProfileForm({
                          ...userEditProfileForm,
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

              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-gradient-to-r from-purple-300 to-pink-200 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-gradient-to-l focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* <!-- Account Information Modal --> */}

        {userDogModal && (
          <div
            id="accountInformationModal2"
            tabIndex="-1"
            aria-hidden="true"
            className="max-h-auto fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
            <div className="max-h-auto relative max-h-full w-full max-w-lg p-4">
              {/* <!-- Modal content --> */}
              <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Account Information
                  </h3>
                  <button
                    type="button"
                    className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="accountInformationModal2">
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
                <form className="p-4 md:p-5">
                  <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="pick-up-point-input"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                        {" "}
                        Pick-up point*{" "}
                      </label>
                      <input
                        type="text"
                        id="pick-up-point-input"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Enter the pick-up point name"
                        required
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="full_name_info_modal"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                        {" "}
                        Your Full Name*{" "}
                      </label>
                      <input
                        type="text"
                        id="full_name_info_modal"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="email_info_modal"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                        {" "}
                        Your Email*{" "}
                      </label>
                      <input
                        type="text"
                        id="email_info_modal"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Enter your email here"
                        required
                      />
                    </div>

                    <div className="col-span-2">
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
                                      <path
                                        fill="#46467F"
                                        d="M0 .5h8.4v6.533H0z"
                                      />
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
                                      <path
                                        fill="#0A17A7"
                                        d="M0 .5h19.6v14H0z"
                                      />
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
                                      <path
                                        fill="#0A17A7"
                                        d="M0 .5h19.6v14H0z"
                                      />
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
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <div className="mb-2 flex items-center gap-2">
                        <label
                          htmlFor="select_country_input_billing_modal"
                          className="block text-sm font-medium text-gray-900 dark:text-white">
                          {" "}
                          Country*{" "}
                        </label>
                      </div>
                      <select
                        id="select_country_input_billing_modal"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                        <option selected>United States</option>
                        <option value="AS">Australia</option>
                        <option value="FR">France</option>
                        <option value="ES">Spain</option>
                        <option value="UK">United Kingdom</option>
                      </select>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <div className="mb-2 flex items-center gap-2">
                        <label
                          htmlFor="select_city_input_billing_modal"
                          className="block text-sm font-medium text-gray-900 dark:text-white">
                          {" "}
                          City*{" "}
                        </label>
                      </div>
                      <select
                        id="select_city_input_billing_modal"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                        <option selected>San Francisco</option>
                        <option value="NY">New York</option>
                        <option value="LA">Los Angeles</option>
                        <option value="CH">Chicago</option>
                        <option value="HU">Houston</option>
                      </select>
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="address_billing_modal"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                        {" "}
                        Delivery Address*{" "}
                      </label>
                      <textarea
                        id="address_billing_modal"
                        rows="4"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Enter here your address"></textarea>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="company_name"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                        {" "}
                        Company name{" "}
                      </label>
                      <input
                        type="text"
                        id="company_name"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Flowbite LLC"
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="vat_number"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                        {" "}
                        VAT number{" "}
                      </label>
                      <input
                        type="text"
                        id="vat_number"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="DE42313253"
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
                      onClick={() => setUserEditProfileModal(false)}
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
        )}

        <div
          id="deleteOrderModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
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
                , are you sure you want to delete this order from your account?
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
      </section>

      <UserDashboardFooter />
    </>
  )
}

export default UserEditProfile
