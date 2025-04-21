import { useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { blogList } from "../../redux/blogSlice"
import BlogNavigation from "../../components/navigation/BlogNavigation"
import AnimatedList from "../../components/reactbits+framer-motion/AnimatedList"
import { AnimatePresence } from "framer-motion"

const BlogList = () => {
  const { blogs } = useSelector((state) => state.blog)
  // const items = blogs.map((blog) => {blog.title})
  // console.log("items", items)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(blogList())
    console.log("blogList", blogList)
  }, [])

  return (
    <>
      <BlogNavigation />
      <div className="bg-black h-[100vh] pt-28">
        <div className="text-center font-numans text-5xl">
          <span className="text-fur">FUR </span>
          <span className="text-the">THE </span>
          <span className="text-love">LOVE </span>
          <span className="text-of">OF </span>
          <span className="text-cats">CATS</span>
          <span className="text-white">: THE BLOG</span>
        </div>
        <h1 className="text-white text-center text-xl pt-3 font-rubik pb-4">
          Engaging, informative content relevant to adopters, cat lovers, & the
          community.
        </h1>
        <div className="border-t border-white w-1/2 justify-self-center"></div>

        <div className="justify-self-center pt-8">
          <Link to="/add-blog">
            <button
              type="button"
              className="text-black font-bold mt-7 bg-blue-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-[#60c7cc] rounded-lg text-sm px-4 py-2 text-center font-quicksand">
              Add Post
            </button>
          </Link>
        </div>

        <AnimatedList
          // items={blogs.map((blog) => {blog.title})}
          onItemSelect={(item, index) => console.log(item, index)}
          showGradients={true}
          enableArrowNavigation={true}
          displayScrollbar={true} 
          />

        <div className="py-8">
          <div className="mx-auto max-w-9xl px-6 lg:px-8 font-rubik">
            <div className="article-bg shadow">
              <div className="pl-7 pr-7 pt-7 mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-5 sm:mt-7 sm:pt-7 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {blogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="border rounded-md border-neutral-800 p-10 flex flex-col items-start justify-between">
                    <img
                      className="m-auto rounded-md h-50 w-100"
                      src={
                        new URL(
                          `../../assets/images/${blog.coverPhoto}`,
                          import.meta.url
                        ).href
                      }
                    />
                    <Link reloadDocument to={`/blog/${blog.id}`}>
                      <h3 className="pt-7 text-2xl text-white group-hover:text-gray-600">
                        <div dangerouslySetInnerHTML={{ __html: blog.title }} />
                      </h3>
                    </Link>

                    <div className="flex items-center gap-x-4 text-xs pt-4">
                      {/* <img
                        className="rounded-full size-12"
                        src={
                          new URL(
                            `../assets/images/${blog.profilePhoto.slice(12)}`,
                            import.meta.url
                          ).href
                        }
                      /> */}
                      <div className="text-white">{blog.authorFullName}</div>
                      {/* <p className="text-white">{blog.authorTitle}</p> */}
                      <time className=" text-white">
                        {new Date(blog.date).toLocaleString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </time>
                      <a
                        href="#"
                        className="relative z-10 rounded-full px-3 py-1.5 font-medium text-white ">
                        #{blog.category}
                      </a>
                      <span className="flex items-end text-white">
                        {blog.readTime} min read
                      </span>
                    </div>
                    <div className="group relative mb-none">
                      <div className="mt-5 line-clamp-3 text-md text-white">
                        <div
                          className="line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: blog.body }}
                        />
                        {/* {blog.body} */}
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <Link to={`/blog/${blog.id}`}>
                        <button
                          type="button"
                          className="text-black font-bold mt-7 ml-90 bg-blue-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-[#60c7cc] rounded-lg text-sm px-4 py-2 text-center font-quicksand">
                          Read More...
                        </button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogList
