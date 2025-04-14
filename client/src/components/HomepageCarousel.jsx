import { useState, useEffect } from 'react'
// import "./Carousel.css"

const slideTotal = 5
const slideTimeout = 2500

const HomepageCarousel = () => {
  const [slide, setSlide] = useState(0)
  
  // Auto scroll slides
  useEffect(() => {
    const slideTimer = setTimeout(() => {
      handleNextClick()
    }, slideTimeout)
    return () => clearTimeout(slideTimer)
  }, [slide])

  const handlePreviousClick = () => {
    // If current slide is 0, go to last slide, (slideTotal -1)
    if (slide === 0) {
      setSlide(slideTotal - 1)
    }
    // Get to previous slide, -1
    else {
      setSlide(slide - 1)
    }
  }

  const handleNextClick = () => {
    // If current slide is the last slide (slideTotal - 1), go to beginning, 0
    if (slide === (slideTotal - 1)) {
      setSlide(0)
    }
    // Go to next, +1
    else {
      setSlide(slide + 1)
    }
  }
  
  // Function to handle slide classes for transitions in one direction, using handleNextClick
  const handleClasses = (index) => {
    // Default to hidden slide class
    let classList = "transform z-30 -translate-x-full z-10 hidden"
    // Current slide class
    if (index === slide) {
      classList = "transform z-20 translate-x-0 z-30"
    }
    // Last slide class
    else if (index === slide - 1 || (index === 4 && slide === 0)) {
      classList = "transform z-30 -translate-x-full z-10"
    }
    // Next slide class
    else if (index === slide + 1 || (index === 0 && slide === 4)) {
      classList = "transform z-10 translate-x-full z-20"
    }
    return classList
  }

  return (
    <>
      <div className="w-1/2 justify-self-center -mt-16 mr-12">
        <div id="default-carousel" className="relative carousel-photos" data-carousel="slide">
        <div className="relative overflow-hidden rounded-lg carousel-photos">
            <div className={`duration-700 ease-in-out absolute inset-0 transition-transform ${handleClasses(0)}`} data-carousel-item>
              <img src={new URL("../assets/images/training018.jpg", import.meta.url).href} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className={`duration-700 ease-in-out absolute inset-0 transition-transform ${handleClasses(1)}`} data-carousel-item>
              <img src={new URL("../assets/images/training029.jpg", import.meta.url).href} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className={`duration-700 ease-in-out absolute inset-0 transition-transform ${handleClasses(2)}`} data-carousel-item>
              <img src={new URL("../assets/images/training019.jpg", import.meta.url).href} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className={`duration-700 ease-in-out absolute inset-0 transition-transform ${handleClasses(3)}`} data-carousel-item>
              <img src={new URL("../assets/images/training045.jpg", import.meta.url).href} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className={`duration-700 ease-in-out absolute inset-0 transition-transform ${handleClasses(4)}`} data-carousel-item>
              <img src={new URL("../assets/images/l&l06.jpg", import.meta.url).href} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
          </div>

          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              onClick={() => setSlide(0)}
              type="button"
              className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              onClick={() => setSlide(1)}
              type="button"
              className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              onClick={() => setSlide(2)}
              type="button"
              className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              onClick={() => setSlide(3)}
              type="button"
              className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              onClick={() => setSlide(4)}
              type="button"
              className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <button
            onClick={handlePreviousClick}
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            onClick={handleNextClick}
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default HomepageCarousel