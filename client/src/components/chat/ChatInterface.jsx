import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addChat, getChatsByEmail } from "../../redux/chatSlice"
import * as motion from "motion/react-client"
import LoadingThreeDotsJumping from "../reactbits+framer-motion/LoadingDots"
import Markdown from "react-markdown"

const ChatInterface = ({ setShowChatInterface }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.users)
  const { chats, chat, loading } = useSelector((state) => state.chat)
  const token = sessionStorage.getItem("token")

  if (!token && !sessionStorage.getItem("anonymousEmail")) {
    const anonymousEmail = window.crypto.randomUUID()
    console.log("anonymousEmail", anonymousEmail)
    sessionStorage.setItem("anonymousEmail", anonymousEmail)
  }

  const [chatForm, setChatForm] = useState({
    email: token ? user.email : sessionStorage.getItem("anonymousEmail"),
    prompt: "",
    model: "gemma2",
    date: new Date()
  })

  useEffect(() => {
    console.log("chatForm useEffect", chatForm)
  }, [chatForm])

  const [finalResponse, setFinalResponse] = useState("")

  useEffect(() => {
    if (token) {
      dispatch(getChatsByEmail(user.email))
    }
  }, [user])

  useEffect(() => {
    const historyEnd = document.getElementById("historyEnd")
    if (historyEnd) {
      historyEnd.scrollIntoView({ behavior: "smooth" })
    }
  }, [chats])

  const handleAIQuestion = async (e) => {
    e.preventDefault()
    console.log("chatForm", chatForm)
    dispatch(addChat(chatForm))
    setChatForm({ ...chatForm, prompt: "" })
    setFinalResponse(chat.answer)
  }

  return (
    <>
      <div
        id="aiChatInterfaceModal"
        tabIndex="-1"
        aria-hidden="true"
        className="max-h-auto fixed right-0 bottom-0 z-49 h-[calc(100%-1rem)] max-h-[full] w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0 drop-shadow-xl drop-shadow-neutral-400 dark:drop-shadow-black animate__animated animate__fadeInRight">
        <div className="max-h-auto relative mt-22 justify-self-end max-h-full w-full max-w-xl p-4">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow dark:bg-neutral-800 font-instrument">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between rounded-t border-b border-neutral-200 p-4 dark:border-neutral-700 md:p-4">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white font-lexend uppercase tracking-widest">
                Ask Leash & Learn AI
              </h3>
              <button
                onClick={() => setShowChatInterface(false)}
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-neutral-400 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-600 dark:hover:text-white cursor-pointer"
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
                <div className="w-full h-[50vh] bg-neutral-50 overflow-y-auto rounded-lg border-neutral-300 border pb-4 dark:bg-neutral-700 dark:border-neutral-600">
                  {chats.map((chat, index) => (
                    <div className="flex flex-col space-y-3 px-2">
                      <div class="flex flex-row-reverse gap-2.5 mt-8">
                        {chat.prompt !== "" && (
                          <>
                            {user.avatar ? (
                              <img
                                src={`${user.avatar}`}
                                className="size-10 rounded-full"
                              />
                            ) : (
                              <svg
                                className="size-8 me-3 text-neutral-300 dark:text-neutral-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                              </svg>
                            )}
                            <div class="flex flex-col gap-1 w-full max-w-[320px]">
                              <div class="flex flex-row-reverse items-center gap-x-2 rtl:space-x-reverse">
                                <span class="text-sm font-semibold text-neutral-900 dark:text-white">
                                  You
                                </span>
                                <span class="text-sm font-normal text-neutral-500 dark:text-neutral-300">
                                  {new Date(chat.date).toLocaleString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric"
                                  })}
                                </span>
                              </div>
                              <div class="flex flex-col leading-1.5 p-4 border-violet-200 bg-violet-100 rounded-es-xl rounded-ee-xl rounded-ss-xl dark:bg-yellow-300 drop-shadow-xs">
                                <p class="text-sm font-normal text-neutral-900 dark:text-black">
                                  {" "}
                                  {chat.prompt}
                                </p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      <div class="flex items-start gap-2.5">
                        {chat.answer !== "" && (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              className="bi bi-robot w-8 h-8 text-neutral-600 dark:text-neutral-200"
                              viewBox="0 0 16 16">
                              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                            </svg>
                            <div class="flex flex-col gap-1 w-full max-w-[320px]">
                              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                <span class="text-sm font-semibold text-neutral-900 dark:text-white">
                                  Chatbot
                                </span>
                                <span class="text-sm font-normal text-neutral-500 dark:text-neutral-300">
                                  {new Date(chat.date).toLocaleString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric"
                                  })}
                                </span>
                              </div>
                              <div class="flex flex-col leading-1.5 p-4 border-neutral-200 bg-neutral-100 rounded-e-xl rounded-es-xl dark:bg-neutral-600 drop-shadow-sm">
                                <p class="text-sm font-normal text-neutral-900 dark:text-white">
                                  {" "}
                                  {chat.answer.length > 0 && (
                                    <Markdown>{chat.answer}</Markdown>
                                  )}
                                </p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                  <div id="historyEnd" />
                </div>

                {loading ? (
                  <div className="mt-20 mb-10">
                    <LoadingThreeDotsJumping />
                  </div>
                ) : (
                <div className="w-full pt-3">
                  <label
                    htmlFor="question"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
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
                    className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Ask me about dogs!"
                  />
                </div>

                )}

              </div>

              <div className="border-t border-neutral-200 pt-4 dark:border-neutral-700 md:pt-5 items-center flex">
                {loading ? (
                  <button disabled type="button" class="py-2.5 px-5 me-2 text-sm font-medium text-neutral-900 bg-neutral-50 rounded-lg border border-neutral-200 hover:bg-neutral-100 hover:text-teal-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-600 dark:hover:text-lime-400 dark:hover:bg-neutral-700 inline-flex items-center cursor-pointer">
                  <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 animate-spin dark:text-neutral-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#fff"/>
                  </svg>
                  Loading...
                  </button>
                ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="me-2 inline-flex items-center rounded-lg bg-teal-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:bg-lime-400 dark:hover:bg-lime-500 dark:focus:ring-lime-600 dark:text-black cursor-pointer">
                  Submit
                </motion.button>
                )}
                <motion.button
                  onClick={() => setShowChatInterface(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  data-modal-toggle="accountInformationModal2"
                  className="me-2 rounded-lg border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100 hover:text-neutral-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-neutral-100 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:ring-neutral-700 cursor-pointer">
                  Cancel
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatInterface
