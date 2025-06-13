import { Link } from "react-router"

const BlogNavigation = () => {
  return (
    <>
      <nav class="bg-neutral-50 dark:bg-neutral-700 fixed w-full mt-7 md:mt-10 z-20 transition-colors ease-in-out duration-200 animate__animated animate__fadeInRight">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to="/blog-homepage"
                  class="text-neutral-900 dark:text-white hover:underline"
                  aria-current="page">
                  Blog Homepage
                </Link>
              </li>
              <li>
                <Link
                  to="/company-blog"
                  class="text-neutral-900 dark:text-white hover:underline">
                  Company Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/blog-list"
                  class="text-neutral-900 dark:text-white hover:underline">
                  Community Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/create-blog"
                  class="text-neutral-900 dark:text-white hover:underline">
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
