import { useState } from "react"
import * as motion from "motion/react-client"
import ChatInterface from "./ChatInterface"

const ChatButton = () => {
  const [showPopover, setShowPopover] = useState(false)
  const [showChatInterface, setShowChatInterface] = useState(false)
  const storedTheme = localStorage.getItem("theme")

  return (
    <>
      {/* <div className="fixed right-20 bottom-8">
        <button 
          onMouseEnter={() => setShowPopover(true)} // Show popover on hover
          onMouseLeave={() => setShowPopover(false)} // Hide popover on leave
          className="bg-neutral-100 p-3 rounded-full border-2 border-neutral-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            class="bi bi-stars"
            viewBox="0 0 16 16">
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
          </svg>
        </button>
      {showPopover && ( // Show the popover only when showPopover is true
        <div className="absolute z-10 bg-neutral-800 text-white p-2 rounded shadow arrow"> 
          Ask AI!  
        </div>
      )}
      </div> */}

      <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
        type="button"
        // bg-gradient-to-r from-lime-500 via-emerald-400 to-teal-300
        class={`fixed z-49 right-20 bottom-8 p-3 rounded-full border-2 border-teal-300 dark:border-[#FDFF00] cursor-pointer ${storedTheme === "light" ? "light-conic-gradient" : "dark-conic-gradient"}`}
        onMouseEnter={() => setShowPopover(true)} // Show popover on hover
        onMouseLeave={() => setShowPopover(false)} // Hide popover on leave
        onClick={() => setShowChatInterface(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-star text-white dark:text-black"
          viewBox="0 0 16 16">
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
        </svg>
      </motion.button>

      {showPopover && (
        <div
          data-popover
          id="popover-default"
          class="fixed right-0 bottom-26 z-10 inline-block w-64 text-sm text-neutral-500 transition-opacity duration-300 ease-in-out bg-white border border-neutral-200 rounded-lg shadow-xs dark:text-neutral-400 dark:border-neutral-600 dark:bg-neutral-800 animate__animated animate__fadeIn">
          <div class="px-3 py-2 bg-teal-400 border-b border-teal-500 rounded-t-lg dark:border-lime-500 dark:bg-lime-400">
            <h3 class="text-xs tracking-tighter font-bold text-black dark:text-neutral-900 font-lexend text-center">ASK LEASH & LEARN AI</h3>
          </div>
          <div class="px-3 py-2 bg-teal-50 dark:bg-lime-50">
            <p className="font-instrument text-neutral-700 text-center">
              Chat with AI to ask any questions you may have about the services
              we provide or anything and everything to do with dogs & dog
              training!
            </p>
          </div>
        </div>
      )}

      {showChatInterface && (
        <ChatInterface setShowChatInterface={setShowChatInterface} />
      )}
    </>
  )
}

export default ChatButton

{
  /* <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-neutral-500 transition-opacity duration-300 bg-white border border-neutral-200 rounded-lg shadow-xs opacity-0 dark:text-neutral-400 dark:border-neutral-600 dark:bg-neutral-800">
    <div class="px-3 py-2 bg-neutral-100 border-b border-neutral-200 rounded-t-lg dark:border-neutral-600 dark:bg-neutral-700">
        <h3 class="font-semibold text-neutral-900 dark:text-white">Popover title</h3>
    </div>
    <div class="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div> */
}
