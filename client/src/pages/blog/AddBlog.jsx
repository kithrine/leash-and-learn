import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { addBlog } from "../../redux/blogSlice"
import { toast } from "react-toastify"

const AddBlog = () => {
  const [blogForm, setBlogForm] = useState({
    title: "",
    authorFullName: "",
    authorTitle: "",
    avatar: "",
    category: "",
    subCategory: "",
    readTime: "",
    coverPhoto: "",
    body: "",
    comments: [],
    date: new Date()
  })

  //   title,
  //   authorFullName,
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
    console.log("blogForm", blogForm)
  }, [blogForm])

  const handleSubmit = async (e) => {
    e.preventDefault()

    setBlogForm({
      title: blogForm.title,
      authorFullName: blogForm.authorFullName,
      authorTitle: blogForm.authorTitle,
      avatar: blogForm.avatar,
      category: blogForm.category,
      subCategory: blogForm.subCategory,
      readTime: blogForm.readTime,
      coverPhoto: blogForm.coverPhoto,
      body: blogForm.body,
      date: new Date()
    })

    dispatch(addBlog({ ...blogForm }))
    //Redirect to BlogList (All posts page)
    toast.dark = true
    toast.success("Post added successfully.", {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      className: "dark-toast",
      theme: "dark"
    })
    navigate("/blog-list")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="bg-black h-[100vh] pt-28">
      <div className="text-center font-numans text-5xl pb-4">
      <span className="text-fur">FUR </span>
        <span className="text-the">THE </span>
        <span className="text-love">LOVE </span>
        <span className="text-of">OF </span>
        <span className="text-cats">CATS:</span>
        <span className="text-white"> ADD POST</span>
      </div>
    
      <div className="border-t border-white w-1/2 justify-self-center pt-4"></div>

          {/* Title */}
          <div className="add-page-author">
            <label htmlFor="author">Title</label>
            <div className="flex rounded-md sm:max-w-md">
              <input
                className="input-author"
                value={blogForm.title}
                onChange={(e) =>
                  setBlogForm({ ...blogForm, title: e.target.value })
                }
                type="text"
                name="author"
                id="author"
                autoComplete="author"
              />
            </div>
          </div>

          {/* Author */}
          <div className="add-page-author">
            <label htmlFor="author">Author</label>
            <div className="flex rounded-md sm:max-w-md">
              <input
                className="input-author"
                value={blogForm.author}
                onChange={(e) =>
                  setBlogForm({ ...blogForm, author: e.target.value })
                }
                type="text"
                name="author"
                id="author"
                autoComplete="author"
              />
            </div>
          </div>

          {/* City */}
          <div className="add-page-city">
            <label htmlFor="city">City</label>
            <div className="flex rounded-md sm:max-w-md">
              <input
                className="input-city"
                value={blogForm.city}
                onChange={(e) =>
                  setBlogForm({ ...blogForm, city: e.target.value })
                }
                type="text"
                name="city"
                id="city"
                autoComplete="city"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-15 font-medium text-[#6ecfd5]"
            >
              Category
            </label>
            <select
              value={blogForm.category}
              onChange={(e) =>
                setBlogForm({ ...blogForm, category: e.target.value })
              }
              id="category"
              className="bg-neutral-300 border border-gray-300 text-black placeholder:text-gray-500  text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-500 dark:focus:border-gray-500"
            >
              <option defaultValue="">Select category</option>
              <option value="Adoption">Adoption Stories</option>
              <option value="Behavior">Cat Behavior</option>
              <option value="Feeding">Feeding</option>
              <option value="Grooming">Grooming</option>
              <option value="Training">Training</option>
              <option value="Veterinary">Veterinary</option>
              <option value="Volunteer">Volunteer Opportunities</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Read Time */}
          <div>
            <label
              htmlFor="read-time"
              className="block mb-2 text-15 font-medium text-[#6ecfd5]"
            >
              Read Time (min)
            </label>
            <input
              value={blogForm.readTime}
              onChange={(e) =>
                setBlogForm({ ...blogForm, readTime: e.target.value })
              }
              type="number"
              name="read-time"
              id="read-time"
              className="bg-neutral-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-600 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="1"
              required=""
              min="1"
            />
          </div>

          {/* Body */}
          <div className="add-page-body">
            <label htmlFor="about">Body</label>
            <div className="mt-2">
              <textarea
                value={blogForm.body}
                onChange={(e) =>
                  setBlogForm({ ...blogForm, body: e.target.value })
                }
                id="body"
                name="body"
              ></textarea>
            </div>
          </div>

          <h3 className="add-page-public-posts">All posts are public.</h3>

          {/* Buttons */}
          <div className="flex justify-center gap-x-8 add-page-buttons font-semibold">
            <button
              onClick={() => {
                navigate(`/`)
              }}
              type="button"
              className="text-lg/6"
            >
              Cancel Post
            </button>
            <button
              type="submit"
              className="rounded-sm bg-black text-lg/6 px-3 py-2 font-semibold text-white shadow-sm hover:bg-pink-400 hover:text-black"
            >
              Add Post
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddBlog
