import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router"

const AnimatedItem = ({
  children,
  delay = 0,
  index,
  onMouseEnter,
  onClick
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.5, triggerOnce: false })
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer">
      {children}
    </motion.div>
  )
}

const AnimatedList = ({
  items = [],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = "",
  itemClassName = "",
  displayScrollbar = true,
  initialSelectedIndex = -1
}) => {
  const { blogs } = useSelector((state) => state.blog)
  const navigate = useNavigate()

  const listRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex)
  const [keyboardNav, setKeyboardNav] = useState(false)
  const [topGradientOpacity, setTopGradientOpacity] = useState(0)
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1)

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target
    setTopGradientOpacity(Math.min(scrollTop / 50, 1))
    const bottomDistance = scrollHeight - (scrollTop + clientHeight)
    setBottomGradientOpacity(
      scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
    )
  }

  // Keyboard navigation: arrow keys, tab, and enter selection
  useEffect(() => {
    if (!enableArrowNavigation) return
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
        e.preventDefault()
        setKeyboardNav(true)
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1))
      } else if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
        e.preventDefault()
        setKeyboardNav(true)
        setSelectedIndex((prev) => Math.max(prev - 1, 0))
      } else if (e.key === "Enter") {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault()
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex)
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation])

  // Scroll the selected item into view if needed
  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return
    const container = listRef.current
    const selectedItem = container.querySelector(
      `[data-index="${selectedIndex}"]`
    )
    if (selectedItem) {
      const extraMargin = 50
      const containerScrollTop = container.scrollTop
      const containerHeight = container.clientHeight
      const itemTop = selectedItem.offsetTop
      const itemBottom = itemTop + selectedItem.offsetHeight
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: "smooth" })
      } else if (
        itemBottom >
        containerScrollTop + containerHeight - extraMargin
      ) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: "smooth"
        })
      }
    }
    setKeyboardNav(false)
  }, [selectedIndex, keyboardNav])

  const reverseBlogs = blogs.toReversed()

  return (
    <div className={`relative w-[80vw] justify-self-center ${className}`}>
      <div
        ref={listRef}
        className={`h-[120vh] overflow-y-auto p-4 ${
          displayScrollbar
            ? "[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-gray-300 [&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:[&::-webkit-scrollbar-track]:bg-black dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:rounded-[4px]"
            : "scrollbar-hide"
        }`}
        onScroll={handleScroll}
        // style={{
        //   scrollbarWidth: "thin",
        //   scrollbarColor: "#222 #060606"
        // }}
      >
        {reverseBlogs.map((blog, index) => (
          <AnimatedItem
            key={index}
            delay={0.1}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index)
              if (onItemSelect) {
                onItemSelect(blog, index)
              }
            }}>
            <div
              onClick={() => navigate(`/blog/${blog.id}`)}
              className={`p-4 bg-neutral-50 dark:bg-[#111] rounded-lg shadow-md shadow-neutral-400 dark:shadow-black font-instrument ${
                selectedIndex === index ? "bg-[#222]" : ""
              } ${itemClassName}`}>
              <div className="py-6 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col min-h-50">
                  {blog.coverPhoto ? (
                    <img
                      className="m-auto rounded-md h-50 w-200"
                      src={`${blog.coverPhoto}`}
                    />
                  ) : null}
                  {/* <span className="font-semibold title-font text-gray-700">
                    {blog.category}
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
                </div>
                <div className="md:flex-grow pl-8">
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="relative z-10 rounded-full bg-teal-300 dark:bg-yellow-400 px-3 py-1.5 font-bold text-neutral-900 hover:bg-teal-400 dark:hover:bg-yellow-500 text-xs">
                          {blog.category}
                        </div>
                        <span className="px-2 dark:text-neutral-300"> · </span>
                        <span className="text-sm dark:text-neutral-300">{blog.readTime} min read</span>
                      </div>
                      <time className=" text-black dark:text-neutral-300">
                        {new Date(blog.date).toLocaleString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </time>
                    </div>
                  </div>
                  <h2 className="text-2xl font-medium text-black dark:text-white title-font mb-2">
                    {blog.title}
                  </h2>
                  <p className="leading-relaxed line-clamp-3 text-neutral-800 dark:text-neutral-100">{blog.body}</p>
                  <div className="flex justify-between items-center py-3">
                    <div className="flex items-center gap-x-3">
                      <div>
                        {blog.avatar ? (
                          <img
                            src={`${blog.avatar}`}
                            className="size-10 rounded-full"
                          />
                        ) : (
                          <svg
                            className="size-10 me-3 text-gray-200 dark:text-gray-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
                        )}
                      </div>
                      <div className="text-black dark:text-neutral-100">
                        {blog.authorFirstName} {blog.authorLastName}
                      </div>
                    </div>
                    <a className="text-violet-500 dark:text-lime-400 inline-flex items-center transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
      {showGradients && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-[#060606] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: topGradientOpacity }}></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#060606] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: bottomGradientOpacity }}></div>
        </>
      )}
    </div>
  )
}

export default AnimatedList
