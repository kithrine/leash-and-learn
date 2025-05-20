import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addChat } from '../../redux/chatSlice'
import LoadingThreeDotsJumping from '../reactbits+framer-motion/LoadingDots'
import Markdown from "react-markdown"


const ChatInterface = ({ setShowChatInterface }) => {
  const dispatch = useDispatch()
  const { chat, loading } = useSelector((state) => state.chat)
  const [chatForm, setChatForm] = useState({
    prompt: "",
    model: "gemma2",
    date: new Date()
  })
  const [ finalResponse, setFinalResponse ] = useState("")

  const handleAIQuestion = async (e) => {
    e.preventDefault()
    console.log("chatForm", chatForm)
    dispatch(addChat(chatForm))
    setChatForm({ prompt: "" })
    setFinalResponse(chat.answer)
  }

  return (
    <>
      <div
        id="aiChatInterfaceModal"
        tabIndex="-1"
        aria-hidden="true"
        className="max-h-auto fixed right-0 bottom-0 z-50 h-[calc(100%-1rem)] max-h-[full] w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0 drop-shadow-2xl">
        <div className="max-h-auto relative mt-22 justify-self-end max-h-full w-full max-w-xl p-4">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-learn tracking-widest">
                Ask AI
              </h3>
              <button
                onClick={() => setShowChatInterface(false)}
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="aiChatInterfaceModal">
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={handleAIQuestion} className="p-4 md:p-5">
              <div className="mb-5 flex flex-col">
                <div className="w-full h-[50vh] bg-gray-50 overflow-y-auto rounded-lg border-gray-300 border">
                {loading ? (
            <div className="mt-70 ml-24">
              <LoadingThreeDotsJumping />
            </div>
          ) : (
            <>
          
                <p className="font-bold font-palanquin tracking-wider text-lg">
                  {chat.prompt}
                </p>
            
              <div className={`px-3 py-1`}>
                <p className="font-instrument text-lg">
                  {chat.answer.length > 0 && (
                    <Markdown>{chat.answer}</Markdown>
                  )}
                </p>
              </div>
            </>
          )}
                </div>
                

                <div className="w-full">
                  <label
                    htmlFor="question"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Question{" "}
                  </label>
                  <textarea
                    value={chatForm.prompt}
                    onChange={(e) =>
                      setChatForm({ ...chatForm, prompt: e.target.value })
                    }
                    id="question"
                    rows="4"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Ask me about dogs!" />
                </div>
              
              </div>
              <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
                <button
                  type="submit"
                  className="me-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Submit
                </button>
                <button
                  onClick={() => setShowChatInterface(false)}
                  type="button"
                  data-modal-toggle="accountInformationModal2"
                  className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatInterface