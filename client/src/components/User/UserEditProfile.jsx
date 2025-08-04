import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { Link, useNavigate } from "react-router"
import { userGetOne, userUpdate } from "../../redux/userSlice"
import { updateAvatar } from "../../redux/userSlice"
import { toast } from "react-toastify"
import * as motion from "motion/react-client"
import UserDashboardFooter from "../footers/UserDashboardFooter"
import DashboardFooter from "../footers/DashboardFooter"

const UserEditProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const { email } = useParams()
  const { id } = useParams()
  const { user } = useSelector((state) => state.users)
  let loggedInUserInfo = JSON.parse(sessionStorage.getItem("userData"))
  const storedTheme = localStorage.getItem("theme")

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

  // const [userDogModal, setUserDogModal] = useState(false)
  // console.log("user.email", user.email)
  // const loggedInEmail = user.email
  const [loading, setLoading] = useState(true)

  // console.log("user", user)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  // useEffect(() => {
  //   if (user) {
  //     sessionStorage.setItem("userData", JSON.stringify(user))
  //   }
  // }, [loggedInUserInfo])
  
 
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
      dispatch(updateAvatar(testString64))
    }
  }

  const handleUserEdit = (e) => {
    console.log("handleUserEdit")
    e.preventDefault()
    dispatch(userUpdate({ id, userEditProfileForm: { ...userEditProfileForm } }))
    if (storedTheme === "dark") {
      toast.success("Profile updated successfully!", {
        theme: "dark"
      })
    } else {
      toast.success("Profile updated successfully!")
    }
    navigate("/dashboard")
  }

  return (
    <>
      <section className={`mt-16 py-8 antialiased md:py-8 ${
            storedTheme === "light" ? "light-marble-bg" : "dark-marble-bg"
          }`}>
        <div className="md:px-[13vw]">
          <div className={`mx-auto max-w-screen-lg px-4 2xl:px-0 ${user.role.includes("User") ? "md:ml-[20vw]" : "md:ml-64"}`}>
            <div className="mx-auto max-w-2xl text-center animate__animated animate__fadeIn animate__slower">
              <h2 className="text-balance text-4xl pt-2 font-bold font-lexend uppercase tracking-tight text-neutral-900 dark:text-white md:text-4xl md:leading-3">
                Edit Profile
              </h2>
              <p className="mt-2 text-lg/8 text-violet-600 dark:text-yellow-400 font-instrument">
                Edit details of your profile
              </p>
              
            </div>
            <form
              onSubmit={handleUserEdit}
              className="mb-10 mx-auto md:mt-2 max-w-2xl bg-white dark:bg-neutral-800 px-10 py-8 rounded-2xl drop-shadow-xl drop-shadow-neutral-300 dark:drop-shadow-black font-instrument animate__animated animate__fadeInUp ">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2 md:col-span-2">
                  <label
                    htmlFor="avatar"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
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
                  //   className="size-16 me-3 text-neutral-200 dark:text-neutral-700"
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
                      fill="currentColor"
                      className="bi bi-person-circle text-neutral-300 dark:text-neutral-600"
                      viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fillRule="evenodd"
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
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Upload an avatar image"
                    />
                  </div>
                </div>

                

                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
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
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
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
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 md:col-span-1">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
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
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-neutral-100 disabled:text-neutral-500 dark:disabled:bg-neutral-600 dark:disabled:text-neutral-400 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      disabled={true}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 md:col-span-1">
                  <label
                    htmlFor="username"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
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
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-neutral-100 disabled:text-neutral-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 md:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
                    Phone Number
                  </label>
                  <div className="mt-2.5">
                    <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-neutral-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          aria-label="Country"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-neutral-500 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                          <option>US</option>
                          <option>CA</option>
                          <option>EU</option>
                        </select>
                        <svg
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-neutral-500 sm:size-4"
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
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-0 sm:text-sm/6 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="123-456-7890"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2 md:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
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
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-neutral-100 disabled:text-neutral-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 py-6 sm:grid-cols-3">
                <div className="sm:col-span-3 md:col-span-1">
                  <label
                    htmlFor="city"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
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
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-neutral-100 disabled:text-neutral-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 md:col-span-1">
                  <label
                    htmlFor="state"
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
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
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-neutral-100 disabled:text-neutral-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
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
                    className="block text-sm/6 font-semibold text-neutral-900 dark:text-neutral-100 tracking-wider">
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
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-neutral-100 disabled:text-neutral-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block rounded-lg font-bold text-white dark:text-black bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 text-sm px-5 py-2.5 mb-4 mt-1 text-center dark:bg-lime-400 dark:hover:bg-lime-500 dark:focus:ring-lime-600 cursor-pointer shadow-sm">
                  Save Changes
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {user.role.includes("User") ? (
        <UserDashboardFooter />
      ) : (
        <DashboardFooter />
      )}
    </>
  )
}

export default UserEditProfile
