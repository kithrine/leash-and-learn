"use client"

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

export default function FramerSplitText() {
  const containerRef = useRef(null)

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible"

      const { words } = splitText(containerRef.current.querySelector("p"))

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05)
        }
      )
    })
  }, [])

  return (
    <div className="container" ref={containerRef}>
      <h1 className="h1">
        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          The Leash & Learn Community Blog is more than just a collection of
          articles – it's a vibrant space where dog lovers from all walks of
          life can connect, share their experiences, and learn together. We
          believe that every dog owner has something valuable to contribute,
          whether it's a heartwarming story, a helpful training tip, or simply a
          shared passion for our furry companions. 
        <span class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          We encourage you to join the conversation! Leave comments on posts,
          start discussions in the forums, and connect with fellow dog
          enthusiasts who understand your love for these amazing animals. Here
          at Leash & Learn, we're building a community where knowledge is shared
          freely and every voice is heard.
        </span>
        </p>
      </h1>
      <Stylesheet />
    </div>
  )
}

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
             
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
  )
}
