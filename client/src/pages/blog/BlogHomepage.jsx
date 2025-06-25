import { useState } from "react"
import { useNavigate, Link } from "react-router"
import * as motion from "motion/react-client"
import BlogNavigation from "../../components/navigation/BlogNavigation"
import FramerSplitText from "../../components/reactbits+framer-motion/FramerSplitText"
import AnimatedListBlogCategories from "../../components/reactbits+framer-motion/AnimatedListBlogCategories"
import Footer from "../../components/footers/Footer"

const BlogHomepage = () => {
  const navigate = useNavigate()
  const storedTheme = localStorage.getItem("theme")
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Importance of Positive Reinforcement in Dog Training",
      imageSrc: "/images/blog-1.jpg",
      excerpt:
        "Learn how positive reinforcement can help your dog become a well-behaved and happy companion."
    },
    {
      id: 2,
      title: "How to Teach Your Dog Basic Commands",
      imageSrc: "/images/blog-2.jpg",
      excerpt:
        "Follow these simple steps to teach your dog basic commands like sit, stay, and come."
    }
    // Add more posts as needed
  ])

  return (
    <>
      <BlogNavigation />

      <section class="bg-no-repeat bg-[url('./assets/images/blog-hero-crop5.png')] dark:bg-neutral-600 dark:bg-blend-multiply bg-neutral-500 bg-blend-soft-light bg-cover animate__animated animate__fadeIn animate__slower">
        <div class="mt-8 px-4 mx-auto max-w-screen-xl text-center py-24 lg:pt-50 lg:pb-30">
          <h1 class="mb-4 text-4xl font-extrabold leading-none text-white text-shadow-md dark:text-shadow-lg text-shadow-black md:text-5xl lg:text-6xl pt-4">
            <span className="font-leash text-8xl">Leash</span>{" "}
            <span className="font-and">&</span>{" "}
            <span className="font-learn uppercase text-7xl">Learn</span>:{" "}
            <span className="font-lexend tracking-tighter">BLOG</span>
          </h1>
          <p class="mb-8 text-lg font-normal text-white dark:text-neutral-200 text-shadow-md text-shadow-black lg:text-xl sm:px-16 lg:px-48 font-instrument">
            {/* Discover how to train your dog like a pro with our easy-to-follow
            tips and tricks. We cover everything from basic commands to advanced
            techniques in dog training. 🐾 Click here to start learning → */}
            Get ready to unleash your inner dog lover! Our blog is bursting with
            fun articles about training techniques, adorable pup pics, product
            reviews, and more. Whether you're a seasoned dog owner or just
            starting your journey, we have something for you.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 font-instrument">
            <Link
              // whileHover={{ scale: 1.05 }}
              //     whileTap={{ scale: 0.95 }}
              // onClick={() => navigate("/blog-list")}
              to="/blog-list"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white dark:text-black rounded-lg bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:ring-teal-300 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
              Explore
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <Link
              to="/create-blog"
              class="inline-flex justify-center hover:text-neutral-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-400 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
              Add Post
            </Link>
          </div>
        </div>
      </section>
      <div
        className={`${
          storedTheme === "light" ? "light-autumn-bg" : "dark-autumn-bg"
        }`}>
        <section class="">
          <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            {/* <img class="w-[75%] justify-self-center rounded-4xl" src={
                        new URL(
                          "../../assets/images/shiba-inu.jpg",
                          import.meta.url
                        ).href
                      } alt="Shiba Inu" /> */}

            <div class="grid grid-cols-2 gap-4 mt-8">
              <motion.img
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                class="w-full rounded-lg"
                src={
                  new URL(
                    "../../assets/images/girl-dogs-field.jpg",
                    import.meta.url
                  ).href
                }
                alt="office content 1"
              />
              <motion.img
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2.5 }}
                class="mt-4 w-full lg:mt-10 rounded-lg"
                src={
                  new URL("../../assets/images/shiba-inu.jpg", import.meta.url)
                    .href
                }
                alt="office content 2"
              />
            </div>

            <div class="mt-4 md:mt-0">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-white animate__animated animate__fadeIn animate__slow animate__delay-1s">
                Welcome to Our Dog-Loving Community!
              </h2>
              {/* <FramerSplitText /> */}
              <p class="mb-6 font-light text-neutral-800 md:text-lg dark:text-neutral-200 animate__animated animate__fadeIn animate__slow animate__delay-2s font-instrument">
                The Leash & Learn Community Blog is more than just a collection
                of articles – it's a vibrant space where dog lovers from all
                walks of life can connect, share their experiences, and learn
                together. We believe that every dog owner has something valuable
                to contribute, whether it's a heartwarming story, a helpful
                training tip, or simply a shared passion for our furry
                companions.
              </p>
              <p class="mb-6 font-light text-neutral-800 md:text-lg dark:text-neutral-200 animate__animated animate__fadeIn animate__slow animate__delay-2s font-instrument">
                We encourage you to join the conversation! Leave comments on
                posts, start discussions in the forums, and connect with fellow
                dog enthusiasts who understand your love for these amazing
                animals. Here at Leash & Learn, we're building a community where
                knowledge is shared freely and every voice is heard.
              </p>

              <a
                href="#"
                class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg
                  class="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section class="">
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-neutral-800 sm:text-lg dark:text-neutral-200">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-white">
                Browse Blog Categories
              </h2>
              <p class="mb-4 font-instrument">
                We are strategists, designers and developers. Want to connect
                with a community of fellow dog lovers? Our blog is the place to
                be! We offer a wide range of categories covering everything from
                basic obedience training tips to heartwarming stories about
                dogs.{" "}
              </p>
              <p className="font-instrument">
                Whether you're looking for expert advice, fun activities, or
                simply want to share your own experiences, our blog is a space
                where everyone feels welcome. Dive in and explore - we can't
                wait to meet you!
              </p>
            </div>
            <div className="w-full">
              {/* <h1>Browse Categories</h1> */}
              <AnimatedListBlogCategories
                // items={items}
                onItemSelect={(item, index) => console.log(item, index)}
                showGradients={false}
                enableArrowNavigation={true}
                displayScrollbar={true}
              />
            </div>
          </div>
        </section>

        {/* <div className="">
          <div className="mx-auto max-w-7xl pb-24 pt-8 sm:px-6 sm:pb-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-teal-400 dark:bg-lime-500 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
                <circle
                  r={512}
                  cx={512}
                  cy={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-22 lg:text-left">
                <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                  Ready to dive in?<br/> Start exploring now.
                </h2>
                <p className="mt-6 text-lg/8 text-pretty text-neutral-100 leading-6 font-instrument">
                  Click the buttons to the right to explore the community blog, company blog, or post a blog yourself! Don't forget, you must create an account or be logged in to post a blog.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start font-instrument">
                  <a
                    href="#"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-neutral-900 shadow-xs hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Create Account
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-white">
                    Log in <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-y-9 my-24 justify-between mx-auto font-instrument">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-neutral-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-neutral-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Go to Community Blog →
                  </span>
                </button>

                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-neutral-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span class="relative px-6.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-neutral-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Go to Company Blog →
                  </span>
                </button>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-neutral-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span class="relative px-14 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-neutral-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Post a Blog →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <Footer />
    </>
  )
}

export default BlogHomepage
