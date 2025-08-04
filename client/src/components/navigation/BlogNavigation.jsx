import { Link } from "react-router"

const BlogNavigation = () => {
  return (
    <>
      <nav className="bg-neutral-50 dark:bg-neutral-700 fixed w-full mt-7 md:mt-10 z-20 transition-colors ease-in-out duration-200 animate__animated animate__fadeInRight font-instrument">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to="/blog-homepage"
                  className="text-neutral-900 dark:text-white hover:underline"
                  aria-current="page">
                  Blog Homepage
                </Link>
              </li>
              <li>
                <Link
                  to="/company-blog"
                  className="text-neutral-900 dark:text-white hover:underline">
                  Company Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/blog-list"
                  className="text-neutral-900 dark:text-white hover:underline">
                  Community Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/create-blog"
                  className="text-neutral-900 dark:text-white hover:underline">
                  Add Blog Post
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default BlogNavigation
