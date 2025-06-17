import { Link } from "react-router"
import Footer from "../components/footers/Footer"
import EnrollBanner from "../components/EnrollBanner"
import HomepageCarousel from "../components/HomepageCarousel"
import { ToastContainer } from "react-toastify"
import { motion } from "framer-motion"
import FramerSplitText from "../components/reactbits+framer-motion/FramerSplitText"
import SplitText from "../components/reactbits+framer-motion/SplitText"
// import RollingGallery from "../components/RollingGallery";
// Ready to unleash your dog's full potential?
import InfiniteScroll from "../components/reactbits+framer-motion/InfiniteScroll"
import ChromaGrid from "../components/reactbits+framer-motion/ChromaGrid"
import SpotlightCard from "../components/reactbits+framer-motion/SpotlightCard"
import RollingGallery from "../components/reactbits+framer-motion/RollingGallery"

const HomePage = () => {
  // const items = [
  //   { content: <div>
  //     <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-purple-100 lg:h-12 lg:w-12 dark:bg-purple-900">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         height="24"
  //         width="19"
  //         viewBox="0 0 384 512">
  //         <path
  //           fill="#000000"
  //           d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"
  //         />
  //       </svg>
  //     </div>
  //     <h3 className="mb-2 text-xl font-bold dark:text-white">
  //       Basic Obedience Training
  //     </h3>
  //     <p className="text-gray-500 dark:text-gray-400">
  //       Embark on a journey of mutual respect and understanding with
  //       our Basic Obedience Training. Our program covers essential
  //       commands like sit, stay, come, and heel, ensuring your dog
  //       is well-behaved and responsive in any situation.
  //     </p>
  //   </div> },
  //   { content: <p>Paragraph Item 2</p> },
  //   { content: "Text Item 3" },
  //   { content: <p>Paragraph Item 4</p> },
  //   { content: "Text Item 5" },
  //   { content: <p>Paragraph Item 6</p> },
  //   { content: "Text Item 7" },
  //   { content: <p>Paragraph Item 8</p> },
  //   { content: "Text Item 9" },
  //   { content: <p>Paragraph Item 10</p> },
  //   { content: "Text Item 11" },
  //   { content: <p>Paragraph Item 12</p> },
  //   { content: "Text Item 13" },
  //   { content: <p>Paragraph Item 14</p> },
  // ];

  // const items = [
  //   {
  //     image: "https://i.pravatar.cc/300?img=1",
  //     title: "Sarah Johnson",
  //     subtitle: "Frontend Developer",
  //     handle: "@sarahjohnson",
  //     borderColor: "#3B82F6",
  //     gradient: "linear-gradient(145deg, #3B82F6, #000)",
  //     url: "https://github.com/sarahjohnson"
  //   },
  //   {
  //     image: "https://i.pravatar.cc/300?img=2",
  //     title: "Mike Chen",
  //     subtitle: "Backend Engineer",
  //     handle: "@mikechen",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(180deg, #10B981, #000)",
  //     url: "https://linkedin.com/in/mikechen"
  //   }
  // ];

  const storedTheme = localStorage.getItem("theme")


  return (
    <>
      <div className={`${
          storedTheme === "light"
            ? "light-gray-church-bg"
            : "dark-gray-church-bg"
        }`}>
        <EnrollBanner />
        <ToastContainer />
        {/* <div className="w-1/12 h-7 bg-white rounded border-solid border border-black dark:bg-gray-700">
        <div className="h-7 bg-gradient-to-b from-green-600 to-green-400 rounded dark:bg-blue-500 border-solid border border-black border-r-white" style={{width: "80%"}}></div>
        </div> */}
        {/* <RollingGallery autoplay={true} pauseOnHover={true} /> */}

        {/* <span className='learn text-4xl font-bold ml-4'>DOG TRAINING</span> */}

        {/* <div className="mt-36">
          
          <span className="flex flex-row items-center justify-center  text-5xl font-semibold  dark:text-white">
            <span className="leash mt-3">Leash</span> 
            <div>
          <svg className="animate-pulse" xmlns="http://www.w3.org/2000/svg" height="45" width="45" viewBox="0 0 512 512"><path fill="#725f4f" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg>
            <span className="and text-xl absolute -mt-7 ml-4 text-white">&</span>
            </div> 
            <span className="learn">learn</span>
          </span>
          </div> */}
        {/* <div className="pt-42 mb-20"> */}
        <div className="mb-0">
          <section class="bg-no-repeat bg-[url('./assets/images/giant-dog2-cropped.jpg')] dark:bg-gray-500 dark:bg-blend-multiply bg-gray-700 bg-blend-soft-light bg-[50%] min-h-[110vh]">
            <div class="pt-8 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-45">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="text-center">
                <div>
                  <h2 className=" justify-self-center mr-24 text-5xl tracking-tight font-extrabold text-gray-200">
                    Welcome to{" "}
                  </h2>
                </div>
                <div className="mx-auto max-w-screen-xl text-center">
                  <div className="flex justify-center items-center text-7xl font-semibold text-white space-x-3 rtl:space-x-reverse">
                    <div className="absolute mt-36">
                      <svg
                        className="homepage-paw animate-pulse absolute mt-9 ml-"
                        xmlns="http://www.w3.org/2000/svg"
                        height="95"
                        width="95"
                        viewBox="0 0 512 512">
                        <path
                          fill="#725f4f"
                          d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
                        />
                      </svg>
                      <div className="flex flex-col">
                        <span className="self-center text-9xl font-semibold whitespace-nowrap text-white">
                          <span className="leash mr-4">Leash </span>
                          <span className="and text-5xl relative text-white mx-1 mr-5 -mt-4">
                            &
                          </span>{" "}
                          <span className="learn pr-12"> learn</span>
                        </span>
                        <span className="dog-training text-center text-5xl font-bold mr-8 -mt-4 text-gray-400">
                          DOG TRAINING
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <p className="mr-16 font-thin text-3xl tracking-widest font-stretch-extra-expanded mt-40 text-black dark:text-white">
              Where every dog's full potential is unleashed™
            </p> */}
                  <SplitText
                    text="Where every dog's full potential is unleashed™"
                    className="mr-12 mt-40 pb-4 text-3xl font-thin text-center tracking-widest font-stretch-extra-expanded text-white"
                    delay={50}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          
          {/* <FramerSplitText text="Where every dog's full potential is unleashed" /> */}
        </div>

        <section class={`pt-8`}>
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black bg-[#FFDD00] -skew-x-8 pl-4 pb-2 transition-colors ease-in-out duration-300 animate">
              Where Training is an Adventure!
              </h2>
              <p class="mb-4 text-black dark:text-white font-rubik">
              At Leash & Learn Dog Training, we believe in unlocking your dog's potential through positive reinforcement. Our experienced trainers guide both pups and owners with patience, clarity, and a whole lot of love. We celebrate each milestone, big or small, creating a fun and rewarding learning environment where dogs thrive and bonds deepen. 
              </p>
              <p className="text-black dark:text-white font-rubik">
              Whether you’re tackling basic obedience or navigating complex behavioral challenges, we're here to empower you with the tools for a happier, more harmonious life together.
              </p>
            </div>
            {/* <div class="grid grid-cols-2 gap-4 mt-8"> */}
              {/* <img
                class="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="office content 1"
              />
              <img
                class="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 2"
              /> */}
              <RollingGallery autoplay={true} pauseOnHover={true} />
            {/* </div> */}
          </div>
        </section>

        {/* <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center">
          <HomepageCarousel />
        </motion.div> */}

        {/* <FramerSplitText /> */}
        <section className="mt-8">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-10">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white transition-colors ease-in-out duration-300">
                Dog Training Services
              </h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400  transition-colors ease-in-out duration-300">
                Here is a glimpse of our diverse range of services:
              </p>
            </div>

            {/* <div style={{ height: '600px', position: 'relative' }} className="dark:bg-gray-900">
              <ChromaGrid 
                // items={items}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div> */}

            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <SpotlightCard
                className="custom-spotlight-card drop-shadow-xl drop-shadow-violet-200 dark:drop-shadow-lg dark:drop-shadow-emerald-600"
                spotlightColor="rgba(0, 229, 255, 0.2)">
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-teal-300 dark:bg-lime-400 lg:h-12 lg:w-12 transition-colors ease-in-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="19"
                      viewBox="0 0 384 512">
                      <path
                        fill="black"
                        d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white transition-colors ease-in-out duration-300 tracking-widest font-learn uppercase underline underline-offset-6">
                    Basic Obedience Training
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 transition-colors ease-in-out duration-300 tracking-wide">
                    Embark on a journey of mutual respect and understanding with
                    our Basic Obedience Training. Our program covers essential
                    commands like sit, stay, come, and heel, ensuring your dog
                    is well-behaved and responsive in any situation.
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card drop-shadow-xl drop-shadow-violet-200 dark:drop-shadow-lg dark:drop-shadow-emerald-600"
                spotlightColor="rgba(0, 229, 255, 0.2)">
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-teal-300 dark:bg-lime-400 lg:h-12 lg:w-12 transition-colors ease-in-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="19"
                      viewBox="0 0 384 512">
                      <path
                        fill="#000000"
                        d="M32 32C32 14.3 46.3 0 64 0S96 14.3 96 32l0 208-64 0L32 32zM224 192c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zm-64-64c17.7 0 32 14.3 32 32l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c0-17.7 14.3-32 32-32zm160 96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6l0 8.6c0 88.4-71.6 160-160 160l-61.7 0c-42.4 0-83.1-16.9-113.1-46.9L37.5 453.5C13.5 429.5 0 396.9 0 363l0-27c0-35.3 28.7-64 64-64l88 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-56 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l56 0c39.8 0 72-32.2 72-72z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white transition-colors ease-in-out duration-300 tracking-widest font-learn uppercase underline underline-offset-6">
                    Behavior Modification
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 transition-colors ease-in-out duration-300 tracking-wide">
                    If your dog has a few quirks, our Behavior Modification
                    service is here to help. Tailored to address specific issues
                    such as barking, jumping, aggressiveness, or resource
                    guarding, our approach is compassionate and effective,
                    promoting a peaceful home environment.
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card drop-shadow-xl drop-shadow-violet-200 dark:drop-shadow-lg dark:drop-shadow-emerald-600"
                spotlightColor="rgba(0, 229, 255, 0.2)">
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-teal-300 dark:bg-lime-400 lg:h-12 lg:w-12 transition-colors ease-in-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="25"
                      viewBox="0 0 640 512">
                      <path
                        fill="#000000"
                        d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white transition-colors ease-in-out duration-300 tracking-widest font-learn uppercase underline underline-offset-6">
                    Puppy Socialization
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 transition-colors ease-in-out duration-300 tracking-wide">
                    Introduce your puppy to the world with our Puppy
                    Socialization program. We guide them through positive
                    interactions with other dogs, people, and various
                    environments, laying the foundation for a confident and
                    sociable adult dog.
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card drop-shadow-xl drop-shadow-violet-200 dark:drop-shadow-lg dark:drop-shadow-emerald-600"
                spotlightColor="rgba(0, 229, 255, 0.2)">
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-teal-300 dark:bg-lime-400 lg:h-12 lg:w-12 transition-colors ease-in-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="21"
                      viewBox="0 0 448 512">
                      <path
                        fill="#000000"
                        d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288l21.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-21.3 0c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352L32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l69.6 0c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white transition-colors ease-in-out duration-300 tracking-widest font-learn uppercase underline underline-offset-6">
                    Agility Training
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 transition-colors ease-in-out duration-300 tracking-wide">
                    For the energetic and adventurous pup, Agility Training is
                    the perfect outlet. Our courses are designed to enhance your
                    dog's physical fitness, coordination, and mental agility,
                    all while having a blast.
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card drop-shadow-xl drop-shadow-violet-200 dark:drop-shadow-lg dark:drop-shadow-emerald-600"
                spotlightColor="rgba(0, 229, 255, 0.2)">
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-teal-300 dark:bg-lime-400 lg:h-12 lg:w-12 transition-colors ease-in-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="22.5"
                      viewBox="0 0 576 512">
                      <path
                        fill="#000000"
                        d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white transition-colors ease-in-out duration-300 tracking-widest font-learn uppercase underline underline-offset-6">
                    Advanced Obedience
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 transition-colors ease-in-out duration-300 tracking-wide">
                    Take your dog's training to the next level with our Advanced
                    Obedience course. This program is ideal for dogs that have
                    mastered the basics and are ready for more challenging
                    commands and scenarios.
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card drop-shadow-xl drop-shadow-violet-200 dark:drop-shadow-lg dark:drop-shadow-emerald-600"
                spotlightColor="rgba(0, 229, 255, 0.2)">
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-teal-300 dark:bg-lime-400 lg:h-12 lg:w-12 transition-colors ease-in-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="25"
                      width="25"
                      viewBox="0 0 512 512">
                      <path
                        fill="#000000"
                        d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160.9 286.2c4.8 1.2 9.9 1.8 15.1 1.8c35.3 0 64-28.7 64-64l0-64 44.2 0c12.1 0 23.2 6.8 28.6 17.7L320 192l64 0c8.8 0 16 7.2 16 16l0 32c0 44.2-35.8 80-80 80l-48 0 0 50.7c0 7.3-5.9 13.3-13.3 13.3c-1.8 0-3.6-.4-5.2-1.1l-98.7-42.3c-6.6-2.8-10.8-9.3-10.8-16.4c0-2.8 .6-5.5 1.9-8l15-30zM160 160l40 0 8 0 0 32 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c0-8.8 7.2-16 16-16zm128 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white transition-colors ease-in-out duration-300 tracking-widest font-learn uppercase underline underline-offset-6">
                    Service & Therapy Dog
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 transition-colors ease-in-out duration-300 tracking-wide">
                    Our Service & Therapy Dog training is dedicated to preparing
                    dogs for roles that make a significant impact on people's
                    lives. We specialize in training dogs to assist individuals
                    with disabilities, providing comfort and support in various
                    settings.
                  </p>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* <div style={{height: '500px', position: 'relative'}} className="dark:bg-gray-800 bg-gray-300">
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={0.5}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div> */}

        <div className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-xl">
              <h2 className="text-pretty text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors ease-in-out duration-300">
                Meet Our Trainers
              </h2>
              <p className="mt-6 text-lg/8 text-gray-500 dark:text-gray-400 sm:text-xl transition-colors ease-in-out duration-300">
              Our team of certified trainers brings years of experience and a deep understanding of canine behavior. We combine proven techniques with personalized attention, ensuring that every dog receives the guidance they need to excel. From puppyhood basics to advanced training solutions, we're committed to equipping you with the knowledge and skills for a well-behaved, happy dog who thrives at your side.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {/* Megan Alexander - Basic Obedience */}
              <li>
                <div className="flex items-center gap-x-6">
                  <div className="relative">
                    <img
                      className="size-36 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-125"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                      alt="Sofia Avatar"
                    />
                  </div>
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                      Megan Alexander
                    </h3>
                    <p className="text-sm/6 font-semibold text-violet-500 dark:text-lime-400">
                      Basic Obedience
                    </p>
                  </div>
                </div>
              </li>

              {/* Katherine Finch - Behavior Modification */}
              <li>
                <div className="flex items-center gap-x-6">
                  <div className="relative">
                    <img
                      className="size-36 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-125"
                      alt="Katherine Finch Avatar"
                      src={
                        new URL(
                          "../assets/images/KatherineFinch.jpg",
                          import.meta.url
                        ).href
                      }
                    />
                  </div>
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                      Katherine Finch
                    </h3>
                    <p className="text-sm/6 font-semibold text-violet-500 dark:text-lime-400">
                      Behavior Modification
                    </p>
                  </div>
                </div>
              </li>

              {/* Annie Baysinger - Puppy Socialization */}
              <li>
                <div className="flex items-center gap-x-6">
                  <div className="relative">
                    <img
                      className="size-36 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-125"
                      alt="Annie Baysinger Avatar"
                      src={
                        new URL(
                          "../assets/images/AnnieBaysinger.jpg",
                          import.meta.url
                        ).href
                      }
                    />
                  </div>
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                      Annie Baysinger
                    </h3>
                    <p className="text-sm/6 font-semibold text-violet-500 dark:text-lime-400">
                      Puppy Socialization
                    </p>
                  </div>
                </div>
              </li>

              {/* Jesse Soliz - Agility */}
              <li>
                <div className="flex items-center gap-x-6">
                  <div className="relative">
                    <img
                      className="size-36 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-125"
                      alt="Jesse Soliz Avatar"
                      src={
                        new URL(
                          "../assets/images/JesseSoliz.jpg",
                          import.meta.url
                        ).href
                      }
                    />
                  </div>
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                      Jesse Soliz
                    </h3>
                    <p className="text-sm/6 font-semibold text-violet-500 dark:text-lime-400">
                      Agility
                    </p>
                  </div>
                </div>
              </li>

              {/* Audrey Radulovich - Advanced Obedience */}
              <li>
                <div className="flex items-center gap-x-6">
                  <div className="relative">
                    <img
                      className="size-36 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-125"
                      alt="Audrey Radulovich Avatar"
                      src={
                        new URL(
                          "../assets/images/AudreyRadulovich.jpg",
                          import.meta.url
                        ).href
                      }
                    />
                  </div>
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                      Audrey Radulovich
                    </h3>
                    <p className="text-sm/6 font-semibold text-violet-500 dark:text-lime-400">
                      Advanced Obedience
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-x-6">
                  <div className="relative">
                    <img
                      className="size-36 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-125"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                      alt="Neil Avatar"
                    />
                  </div>
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                      Rashaun Marshall
                    </h3>
                    <p className="text-sm/6 font-semibold text-violet-500 dark:text-lime-400">
                      Service & Therapy Dog Training
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="mx-auto max-w-7xl py-14 sm:px-6 sm:pb-32 lg:px-8">
            <div className="relative isolate overflow-hidden transition-colors ease-in-out duration-300 bg-teal-400 dark:bg-amber-400 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-semibold tracking-tight text-balance text-white dark:text-black sm:text-4xl">
                  Create an Account.
                </h2>
                <h2 className="text-3xl font-semibold tracking-tight text-white dark:text-black sm:text-4xl">
                  Enroll in a class today.
                </h2>
                <p className="mt-6 text-lg/8 text-pretty text-neutral-100 dark:text-neutral-800">
                Ready to see a happier, more obedient pup? Join the Leash & Learn community – create an account now and enroll in your perfect class!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    to="/sign-up"
                    className="rounded-md bg-white dark:bg-neutral-950 dark:hover:bg-neutral-900 px-3.5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                    Create Account
                  </Link>
                  <Link to="/enroll" className="text-sm/6 font-semibold text-white dark:text-black transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                    Enroll Now <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  alt="Trainer With Dogs"
                  src={
                    new URL(
                      "../assets/images/dog-trainer.jpg",
                      import.meta.url
                    ).href
                  }
                  width={1000}
                  height={500}
                  className="absolute top-0 left-0 w-170 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default HomePage
