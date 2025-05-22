import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogGetOne, updateCoverPhoto } from '../../redux/blogSlice'
import { useParams } from 'react-router'

const BlogEditModal = ({ handleBlogEdit, setShowBlogEditModal, blogEditForm, setBlogEditForm }) => {
  const dispatch = useDispatch()
  const { blog } = useSelector((state) => state.blog)
  const { id } = useParams()

  useEffect(() => {
    dispatch(blogGetOne(id))
  }, [])

  useEffect(() => {
    if (blog.title !== "") {
      console.log("blog.title", blog.title)
      setBlogEditForm(blog)
    }
  }, [blog])

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
  
  return (
    <>
      <div
        id="updateProductModal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto justify-self-center mt-28 md:ml-64">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Edit Blog Post
              </h3>
              <button
              onClick={() => {setShowBlogEditModal(false)}}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="updateProductModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={handleBlogEdit}>
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div class="sm:col-span-2">
                    <label
                      for="blogTitle"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Blog Title
                    </label>
                    <input
                      value={blogEditForm.title}
                      onChange={(e) =>
                        setBlogEditForm({ ...blogEditForm, title: e.target.value })
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
                    value={blogEditForm.authorFirstName}
                    onChange={(e) =>
                      setBlogEditForm({ ...blogEditForm, authorFirstName: e.target.value })
                    }
                      type="text"
                      name="authorFirstName"
                      id="authorFirstName"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="First name"
                      disabled={true}
                    />
                  </div>
                  <div class="w-full hidden">
                    <label
                      for="authorLastName"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Author Last Name
                    </label>
                    <input
                    value={blogEditForm.authorLastName}
                    onChange={(e) =>
                      setBlogEditForm({ ...blogEditForm, authorLastName: e.target.value })
                    }
                      type="text"
                      name="authorLastName"
                      id="authorLastName"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Last name"
                      disabled={true}
                    />
                  </div>
                  <div class="w-full">
                    <label
                      for="authorTitle"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Author Title
                    </label>
                    <input
                    value={blogEditForm.authorTitle}
                    onChange={(e) =>
                      setBlogEditForm({ ...blogEditForm, authorTitle: e.target.value })
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
                    value={blogEditForm.readTime}
                    onChange={(e) =>
                      setBlogEditForm({ ...blogEditForm, readTime: e.target.value })
                    }
                      type="number"
                      name="readTime"
                      id="readTime"
                      class="w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="0"
                      required
                    />
                    <p className="items-center justify-center content-end font-thin">minute(s)</p>
                    </div>
                  </div>

                  <div>
                    <label
                      for="category"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Category
                    </label>
                    <select
                    value={blogEditForm.category}
                    onChange={(e) =>
                      setBlogEditForm({ ...blogEditForm, category: e.target.value })
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
                    value={blogEditForm.subCategory}
                    onChange={(e) =>
                      setBlogEditForm({ ...blogEditForm, subCategory: e.target.value })
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
                      // value={blogEditForm.avatar}
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
                    value={blogEditForm.body}
                    onChange={(e) =>
                      setBlogEditForm({ ...blogEditForm, body: e.target.value })
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
                      <label
                        for="dropzone-file"
                        class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
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
                        // value={blogEditForm.coverPhoto}
                        onChange={handleCoverPhotoUpload}
                        id="dropzone-file" type="file" class="hidden" />
                      </label>
                    </div>
                  </div>


                </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
                >
                  Update Blog
                </button>
                <button
                  type="button"
                  className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  <svg
                    className="mr-1 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogEditModal