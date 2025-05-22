import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { addBlog, updateCoverPhoto } from "../../redux/blogSlice"
import { toast } from "react-toastify"
import BlogNavigation from "../../components/navigation/BlogNavigation"
import CommunityGuidelinesModal from "../../components/modals/CommunityGuidelinesModal"

const AddBlog = () => {
  const { user } = useSelector((state) => state.users)
  const { blog } = useSelector((state) => state.blog)

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
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
      setAddBlogForm({ ...addBlogForm, avatar: testString64})
      console.log("This is the testString in handleFileUpload function", testString64)
      setAvatarFile(e.target.files[0]) // Only works for one file upload
    }
  }

  const handleCoverPhotoUpload = async (e) => {
    console.log("handleFileUpload", e)
    if (e.target.files) {
      const testString64 = await toBase64(e.target.files[0])
      setAddBlogForm({ ...addBlogForm, coverPhoto: testString64})
      console.log("This is the testString in handleFileUpload function", testString64)
      setCoverPhotoFile(e.target.files[0]) // Only works for one file upload
      dispatch(updateCoverPhoto(testString64))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // DO NOT NEED THIS! SETTING STATE ABOVE - NO IDEA WHY THIS IS HERE
    // setAddBlogForm({
    //   title: addBlogForm.title,
    //   authorFullName: addBlogForm.authorFullName,
    //   authorTitle: addBlogForm.authorTitle,
    //   avatar: addBlogForm.avatar,
    //   category: addBlogForm.category,
    //   subCategory: addBlogForm.subCategory,
    //   readTime: addBlogForm.readTime,
    //   coverPhoto: addBlogForm.coverPhoto,
    //   body: addBlogForm.body,
    //   date: new Date()
    // })

    dispatch(addBlog(addBlogForm))
    toast.dark = true
    toast.success("Post added successfully.", {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      className: "dark-toast",
      theme: "dark"
    })
    //Redirect to BlogList (All posts page)
    navigate("/blog-list")
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
      <div className="pt-36 mx-auto max-w-screen-xl px-4 lg:px-12 font-instrument relative">
        <div className="bg-white dark:bg-gray-800 relative drop-shadow-lg sm:rounded-lg overflow-hidden p-8">
          <h1><span className="font-leash text-7xl font-bold">Leash</span> <span className="font-and text-3xl font-bold">&</span> <span className="font-learn text-5xl font-bold">Learn:</span> <span className="font-lexend uppercase text-3xl font-bold">Community Blog</span></h1>
          <h2>
            Add a new blog post or whatever to the community blog page! You must
            have an account and be logged in to post!
          </h2>
          <p>
            All posts are public. Please adhere to our{" "}
            <span onClick={() => {setShowCommGuideModal(true)}} className="text-neutral-600 hover:underline hover:cursor-pointer">community guidelines.</span>
          </p>
        </div>
      </div>

      <div className="pt-8 mx-auto max-w-screen-xl px-4 lg:px-12 font-instrument relative">
        <div className="bg-white dark:bg-gray-800 relative drop-shadow-lg sm:rounded-lg overflow-hidden">
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Add a new blog post
              </h2>
              <form onSubmit={handleSubmit}>
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div class="sm:col-span-2">
                    <label
                      for="blogTitle"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Blog Title
                    </label>
                    <input
                      value={addBlogForm.title}
                      onChange={(e) =>
                        setAddBlogForm({ ...addBlogForm, title: e.target.value })
                      }
                      type="text"
                      name="blogTitle"
                      id="blogTitle"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Title of blog"
                      required=""
                    />
                  </div>
                  <div class="w-full hidden">
                    <label
                      for="authorFirstName"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Author First Name
                    </label>
                    <input
                    value={addBlogForm.authorFirstName}
                    onChange={(e) =>
                      setAddBlogForm({ ...addBlogForm, authorFirstName: e.target.value })
                    }
                      type="text"
                      name="authorFirstName"
                      id="authorFirstName"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="First name"
                      required=""
                    />
                  </div>
                
                  <div class="w-full hidden">
                    <label
                      for="authorFirstName"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Author Last Name
                    </label>
                    <input
                    value={addBlogForm.authorLastName}
                    onChange={(e) =>
                      setAddBlogForm({ ...addBlogForm, authorLastName: e.target.value })
                    }
                      type="text"
                      name="authorLastName"
                      id="authorLastName"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Last name"
                      required=""
                    />
                  </div>
                  <div class="w-full">
                    <label
                      for="authorTitle"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Author Title
                    </label>
                    <input
                    value={addBlogForm.authorTitle}
                    onChange={(e) =>
                      setAddBlogForm({ ...addBlogForm, authorTitle: e.target.value })
                    }
                      name="authorTitle"
                      id="authorTitle"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="ex) Job title, 'Dog Lover', etc."
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      for="readTime"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Read Time
                    </label>
                    <div className="flex space-x-2">
                    <input
                    value={addBlogForm.readTime}
                    onChange={(e) =>
                      setAddBlogForm({ ...addBlogForm, readTime: e.target.value })
                    }
                      type="number"
                      name="readTime"
                      id="readTime"
                      class="w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="0"
                      required
                    />
                    <p className="items-center justify-center content-end">minute(s)</p>
                    </div>
                  </div>

                  <div>
                    <label
                      for="category"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Category
                    </label>
                    <select
                    value={addBlogForm.category}
                    onChange={(e) =>
                      setAddBlogForm({ ...addBlogForm, category: e.target.value })
                    }
                      id="category"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="subCategory"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Subcategory
                    </label>
                    <select
                    value={addBlogForm.subCategory}
                    onChange={(e) =>
                      setAddBlogForm({ ...addBlogForm, subCategory: e.target.value })
                    }
                      id="subCategory"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select subcategory</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                    </select>
                  </div>
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
                      // value={addBlogForm.avatar}
                      onChange={handleUserAvatarUpload}
                        type="file"
                        name="avatar"
                        id="avatar"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Upload an avatar image"
                      />
                    </div>
                  </div>
                  
                  <div class="sm:col-span-2">
                    <label
                      for="body"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Body
                    </label>
                    <textarea
                    value={addBlogForm.body}
                    onChange={(e) =>
                      setAddBlogForm({ ...addBlogForm, body: e.target.value })
                    }
                      id="body"
                      rows="20"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Write about dogs here!"></textarea>
                  </div>

                  <div class="sm:col-span-2">
                    <label
                      for="coverPhoto"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Cover Photo
                    </label>
                    <div class="flex items-center justify-center w-full">
{/* 
                    {blog.coverPhoto ? (
                    <img
                      src={`${blog.coverPhoto}`}
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
                  )} */}









                      <label
                        for="dropzone-file"
                        class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16">
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span class="font-semibold">Click to upload</span>{" "}
                            or drag and drop
                          </p>
                          <p class="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input 
                        // value={addBlogForm.coverPhoto}
                        onChange={handleCoverPhotoUpload}
                        id="dropzone-file" type="file" class="hidden" />
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                  Add Blog
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>

      {showCommGuideModal && <CommunityGuidelinesModal setShowCommGuideModal={setShowCommGuideModal} />}
    </>
  )
}

export default AddBlog
