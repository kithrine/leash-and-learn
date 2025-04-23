import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { blogGetOne, deleteBlog, updateBlog } from "../../redux/blogSlice"
import { toast } from "react-toastify"
import BlogDeleteModal from "../../components/modals/BlogDeleteModal"
import BlogNavigation from "../../components/navigation/BlogNavigation"
import BlogEditModal from "../../components/modals/BlogEditModal"

const BlogDetail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { blog } = useSelector((state) => state.blog)
  const [showBlogEditModal, setShowBlogEditModal] =useState(false)
  const [blogEditForm, setBlogEditForm] =useState({
    title: "",
    authorFullName: "",
    authorTitle: "",
    avatar: "",
    category: "",
    subCategory: "",
    readTime: "",
    body: "", 
    coverPhoto: "",
    // date: new Date(),
    comments: []
  })
  const [showBlogDeleteModal, setShowBlogDeleteModal] = useState(false)
  const [blogToDelete, setBlogToDelete] = useState({})

  useEffect(() => {
    console.log("blog", id)
    dispatch(blogGetOne(id))
    console.log("blog", blog)
  }, [])

  useEffect(() => {
    console.log("blog", blog)
  }, [blog])

  const handleBlogEdit = (e) => {
    e.preventDefault()
    dispatch(updateBlog({ id, blogEditForm: { ... blogEditForm}}))
    setShowBlogEditModal(false)
  }

  const handleBlogDelete = async () => {
    dispatch(deleteBlog(id))
    setShowBlogDeleteModal(false)
    navigate("/blog-list")
  }

  return (
    <>
    <BlogNavigation />
        <div className="mx-autoborder-t sm:pt-16">
          <div className="pt-12">
          <article className="items-start justify-between">
            <div className="time-blog-detail">
              <time >
                {blog.date ? new Date(blog.date).toLocaleString("en-US") : ""}
              </time>
            </div>
            <div className="group relative">
              <div>{blog.title}</div>
              {/* <div>{blog.author}</div>
              <div>{blog.city}</div>
              <div>{blog.category}</div>
              <div>{blog.readTime}</div>
              <div>{blog.body}</div> */}

              <div className="body-blog-detail">
                <div dangerouslySetInnerHTML={{ __html: blog.body }} />
              </div>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="h-10 w-10 rounded-full bg-gray-50"
              ></img>
              <div className="text-sm/6">
                <span className="author-blog-detail">
                  <div dangerouslySetInnerHTML={{ __html: blog.author }} />
                </span>
              </div>
            </div>

            {/* Edit button on specific blog post */}
            <div className="flex justify-center gap-x-8 add-page-buttons font-semibold">
              <button onClick={() => setShowBlogEditModal(true)} className="">
                Edit
              </button>

              {showBlogEditModal && <BlogEditModal handleBlogEdit={handleBlogEdit} setShowBlogEditModal={setShowBlogEditModal} blogEditForm={blogEditForm} setBlogEditForm={setBlogEditForm} />}

              {/* Delete button on specific blog post */}
              <button
                onClick={() => {setShowBlogDeleteModal(true); setBlogToDelete(id)}}
                data-modal-target="popup-modal"
                data-modal-toggle="popup-modal"
                className="delete-button-blog-detail rounded-sm bg-black text-lg/6 px-3 py-2 font-semibold shadow-sm hover:bg-rose-600 hover:text-black"
                type="button"
              >
                Delete
              </button>
        {showBlogDeleteModal && (
          <BlogDeleteModal handleBlogDelete={handleBlogDelete} blogToDelete={blogToDelete} setShowBlogDeleteModal={setShowBlogDeleteModal} />
        )}
            </div>
          </article>
        </div>
        </div>

    </>
  )
}

export default BlogDetail
