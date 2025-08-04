import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { addBlog, updateCoverPhoto } from "../../redux/blogSlice"
import { toast } from "react-toastify"
import * as motion from "motion/react-client"
import BlogNavigation from "../../components/navigation/BlogNavigation"
import CommunityGuidelinesModal from "../../components/modals/CommunityGuidelinesModal"
import Footer from "../../components/footers/Footer"

const AddBlog = () => {
  const { user } = useSelector((state) => state.users)
  const { blog } = useSelector((state) => state.blog)

  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedSubCategory, setSelectedSubCategory] = useState("")
  const [showCommGuideModal, setShowCommGuideModal] = useState(false)
  const [addBlogForm, setAddBlogForm] = useState({
    userId: user.id,
    title: "",
    authorFirstName: user.firstName,
    authorLastName: user.lastName,
    authorTitle: "",
    avatar: user.avatar,
    category: "",
    subCategory: "",
    readTime: "",
    coverPhoto: "",
    body: "",
    comments: [],
    date: new Date()
  })

  //   title,
  //   authorFirstName,
  //   authorLastName,
  //   authorTitle,
  //   avatar,
  //   category,
  //   subCategory,
  //   readTime,
  //   body,
  //   coverPhoto,
  //   comments

  // const { blog } = useSelector((state) => state.blog)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const storedTheme = localStorage.getItem("theme")

  useEffect(() => {
    console.log("addBlogForm", addBlogForm)
  }, [addBlogForm])

  useEffect(() => {
    console.log("addBlogForm COVER PHOTO", addBlogForm.coverPhoto)
    // dispatch(updateCoverPhoto(testString64))
  }, [addBlogForm.coverPhoto])

  const [avatarFile, setAvatarFile] = useState(null)
  const [coverPhotoFile, setCoverPhotoFile] = useState(null)

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
    })

  const handleUserAvatarUpload = async (e) => {
    console.log("handleFileUpload", e)
    if (e.target.files) {
      const testString64 = await toBase64(e.target.files[0])
      setAddBlogForm({ ...addBlogForm, avatar: testString64 })
      console.log(
        "This is the testString in handleFileUpload function",
        testString64
      )
      setAvatarFile(e.target.files[0]) // Only works for one file upload
    }
  }

  const handleCoverPhotoUpload = async (e) => {
    console.log("handleFileUpload", e)
    if (e.target.files) {
      const testString64 = await toBase64(e.target.files[0])
      setAddBlogForm({ ...addBlogForm, coverPhoto: testString64 })
      console.log(
        "This is the testString in handleFileUpload function",
        testString64
      )
      setCoverPhotoFile(e.target.files[0]) // Only works for one file upload
      dispatch(updateCoverPhoto(testString64))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(addBlog(addBlogForm))
    if (storedTheme === "dark") {
      toast.success("Post added successfully!", {
        theme: "dark",
        position: "top-right",
      })
    } else {
      toast.success("Post added successfully!", {
        position: "top-right",
      })
    }
    //Redirect to BlogList (All posts page)
    navigate("/blog-list")
    // sessionStorage.setItem("checkUser", user.email)
  }

  // const handleCategorySelect = () => {
  //   const newSelectedCategory = e.target.value;
  //   if (!newSelectedCategory) return;

  //   setSelectedCategory(newSelectedCategory);

  //   // Get the corresponding subcategories
  //   const subCategories = getSubCategories(selectedCategory);

  //   // Populate the subcategory dropdown
  //   selectedSubCategory = '';
  //   Object.values(subCategories).forEach((subCategory) => {
  //     const option = document.createElement('option');
  //     option.value = subCategory.id;
  //     option.textContent = subCategory.name;
  //     if (subCategory.id === 'default') {
  //       selectedSubCategory = subCategory.name;
  //     }
  //     document.querySelector(`select[theme="multiple"]`).appendChild(option);
  //   });
  // }

  return (
    <>
      <BlogNavigation />
      <div
        className={`${
          storedTheme === "light"
            ? "light-rounded-plus-bg"
            : "dark-rounded-plus-bg"
        }`}>
        <div className="pt-20 mt-8 mx-auto max-w-screen-xl px-4 lg:px-12 font-instrument relative">
          {/* <div className="bg-white dark:bg-neutral-800 relative drop-shadow-lg sm:rounded-lg overflow-hidden p-8"> */}
          <div className="text-center dark:text-white text-shadow-md text-shadow-violet-200 dark:text-shadow-lg dark:text-shadow-black animate__animated animate__fadeIn animate__slow">
            <h1 className="text-3xl font-extrabold leading-none md:text-5xl lg:text-5xl pt-4">
              <span className="font-leash text-7xl">Leash</span>{" "}
              <span className="font-and">&</span>{" "}
              <span className="font-learn uppercase">Learn</span>{" "}
            </h1>
            <h1 className="mb-4 text-2xl font-extrabold leading-none md:text-4xl lg:text-3xl font-lexend tracking-tighter uppercase text-neutral-800 dark:text-neutral-200 -mt-2">
              Community Blog
            </h1>
          </div>
          {/* </div> */}
        </div>

        <div className="pt-4 pb-16 mx-auto max-w-screen-xl px-4 lg:px-12 font-instrument relative">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="bg-white dark:bg-neutral-800 relative drop-shadow-lg sm:rounded-lg overflow-hidden dark:drop-shadow-black">
            <section className="bg-white dark:bg-neutral-900">
              <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <div className="text-neutral-900 dark:text-white pb-4">
                  <h2 className="text-2xl font-bold tracking-wide text-center">
                    Add a new blog post!
                  </h2>
                  <h2 className="">
                    Add a new blog post to the community blog page! All posts
                    are public, be careful what you share. Please adhere to our{" "}
                    <span
                      onClick={() => {
                        setShowCommGuideModal(true)
                      }}
                      className="text-teal-400 dark:text-lime-400 hover:underline hover:cursor-pointer">
                      community guidelines{" "}
                    </span>
                     to ensure a positive & respectful experience for all.
                  </h2>
                </div>
                <div className="border-t border-violet-200 dark:border-neutral-700"></div>
                <form onSubmit={handleSubmit} className="pt-6">
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2 lg:col-span-1">
                      <label
                        for="blogTitle"
                        className="block mb-2 tracking-wide font-medium text-neutral-900 dark:text-white">
                        Blog Title
                      </label>
                      <input
                        value={addBlogForm.title}
                        onChange={(e) =>
                          setAddBlogForm({
                            ...addBlogForm,
                            title: e.target.value
                          })
                        }
                        type="text"
                        name="blogTitle"
                        id="blogTitle"
                        className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Title of blog"
                        required=""
                      />
                    </div>

                    <div>
                      <label
                        for="category"
                        className="block mb-2 tracking-wide font-medium text-neutral-900 dark:text-white">
                        Category
                      </label>
                      <select
                        value={addBlogForm.category}
                        onChange={(e) =>
                          setAddBlogForm({
                            ...addBlogForm,
                            category: e.target.value
                          })
                        }
                        id="category"
                        className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option selected="">Select category</option>
                        <option value="Foundational Training">
                          Foundational Training
                        </option>
                        <option value="Advanced Training">
                          Advanced Training
                        </option>
                        <option value="Training Tools & Techniques">
                          Training Tools & Techniques
                        </option>
                        <option value="Specific Breed Focus">
                          Specific Breed Focus
                        </option>
                        <option value="Dog Behavior">Dog Behavior</option>
                        <option value="Health & Wellness">
                          Health & Wellness
                        </option>
                        <option value="Dog Care">Dog Care</option>
                        <option value="Everything Puppies!">
                          Everything Puppies!
                        </option>
                        <option value="Community & Lifestyle">
                          Community & Lifestyle
                        </option>
                        <option value="Fun & Entertainment">
                          Fun & Entertainment
                        </option>
                        <option value="DIY">DIY</option>
                        <option value="Products and Reviews">
                          Products and Reviews
                        </option>
                        <option value="Heartwarming Stories">
                          Heartwarming Stories
                        </option>
                      </select>
                    </div>

                    <div className="w-full hidden">
                      <label
                        for="authorFirstName"
                        className="block mb-2 tracking-wide font-medium text-neutral-900 dark:text-white">
                        Author First Name
                      </label>
                      <input
                        value={addBlogForm.authorFirstName}
                        onChange={(e) =>
                          setAddBlogForm({
                            ...addBlogForm,
                            authorFirstName: e.target.value
                          })
                        }
                        type="text"
                        name="authorFirstName"
                        id="authorFirstName"
                        className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="First name"
                        required=""
                      />
                    </div>

                    <div className="w-full hidden">
                      <label
                        for="authorFirstName"
                        className="block mb-2 tracking-wide font-medium text-neutral-900 dark:text-white">
                        Author Last Name
                      </label>
                      <input
                        value={addBlogForm.authorLastName}
                        onChange={(e) =>
                          setAddBlogForm({
                            ...addBlogForm,
                            authorLastName: e.target.value
                          })
                        }
                        type="text"
                        name="authorLastName"
                        id="authorLastName"
                        className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Last name"
                        required=""
                      />
                    </div>

                    <div className="w-full">
                      <label
                        for="authorTitle"
                        className="block mb-2 tracking-wide font-medium text-neutral-900 dark:text-white">
                        Author Title
                      </label>
                      <input
                        value={addBlogForm.authorTitle}
                        onChange={(e) =>
                          setAddBlogForm({
                            ...addBlogForm,
                            authorTitle: e.target.value
                          })
                        }
                        name="authorTitle"
                        id="authorTitle"
                        className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="ex) Job title, 'Dog Lover', etc."
                        required=""
                      />
                    </div>

                    <div>
                      <label
                        for="readTime"
                        className="block mb-2 tracking-wide font-medium text-neutral-900 dark:text-white">
                        Read Time
                      </label>
                      <div className="flex space-x-2">
                        <input
                          value={addBlogForm.readTime}
                          onChange={(e) =>
                            setAddBlogForm({
                              ...addBlogForm,
                              readTime: e.target.value
                            })
                          }
                          type="number"
                          name="readTime"
                          id="readTime"
                          className="w-[80%] bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="0"
                          required
                        />
                        <p className="items-center justify-center content-end text-neutral-900 dark:text-white">
                          minute(s)
                        </p>
                      </div>
                    </div>

                    {/* <div>
                    <label
                      for="subCategory"
                      className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                      Subcategory
                    </label>
                    <select
                    value={addBlogForm.subCategory}
                    onChange={(e) =>
                      setAddBlogForm({ ...addBlogForm, subCategory: e.target.value })
                    }
                      id="subCategory"
                      className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select subcategory</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                    </select>
                  </div> */}
                    <div className="hidden">
                      <label htmlFor="avatar" className="block mb-2 tracking-wide">
                        Avatar
                      </label>
                      <div className="flex items-center gap-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          className="bi bi-person-circle"
                          viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                          <path
                            fillRule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                          />
                        </svg>

                        <input
                          // value={addBlogForm.avatar}
                          onChange={handleUserAvatarUpload}
                          type="file"
                          name="avatar"
                          id="avatar"
                          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Upload an avatar image"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        for="body"
                        className="block mb-2 tracking-wide font-medium text-neutral-900 dark:text-white">
                        Body
                      </label>
                      <textarea
                        value={addBlogForm.body}
                        onChange={(e) =>
                          setAddBlogForm({
                            ...addBlogForm,
                            body: e.target.value
                          })
                        }
                        id="body"
                        rows="20"
                        className="block p-2.5 w-full text-sm text-neutral-900 bg-neutral-50 rounded-lg border border-neutral-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write about dogs here!"></textarea>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        for="coverPhoto"
                        className="block mb-2 tracking-wide font-medium text-neutral-900 dark:text-white">
                        Cover Photo
                      </label>
                      <div className="flex items-center justify-center w-full">
                        {/* 
                    {blog.coverPhoto ? (
                    <img
                      src={`${blog.coverPhoto}`}
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
                      fill="#708090"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                  )} */}

                        {/* <label
                          for="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-36 border-2 border-neutral-300 border-dashed rounded-lg cursor-pointer bg-neutral-50 dark:hover:bg-neutral-800 dark:bg-neutral-700 hover:bg-neutral-100">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-neutral-500 dark:text-neutral-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400">
                              <span className="font-semibold">Click to upload</span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            // value={addBlogForm.coverPhoto}
                            onChange={handleCoverPhotoUpload}
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label> */}

<input
                    onChange={handleCoverPhotoUpload}
                    className="block w-full text-sm text-neutral-900 border border-neutral-300 rounded-lg cursor-pointer bg-neutral-50 dark:text-neutral-400 focus:outline-none dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 p-2"
                    id="file_input"
                    type="file"
                  />
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white dark:text-black bg-teal-400 rounded-lg focus:ring-4 hover:bg-teal-500 focus:ring-teal-200 dark:bg-lime-400 dark:hover:bg-lime-500 dark:focus:ring-lime-700 cursor-pointer">
                    Add Blog
                  </motion.button>
                </form>
              </div>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />

      {showCommGuideModal && (
        <CommunityGuidelinesModal
          setShowCommGuideModal={setShowCommGuideModal}
        />
      )}
    </>
  )
}

export default AddBlog
