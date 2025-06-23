import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { contactDelete, getOneContact } from "../../redux/contactSlice"
import Markdown from "react-markdown"
import DashboardFooter from "../../components/footers/DashboardFooter"
import MessageDeleteModal from "../../components/modals/MessageDeleteModal"

const InboxDetail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { contact } = useSelector((state) => state.contact)
  const [messageToDelete, setMessageToDelete] = useState({})
  const [showMessageDeleteModal, setShowMessageDeleteModal] = useState(false)

  const storedTheme = localStorage.getItem("theme")

  useEffect(() => {
    console.log("Getting one message on Inbox Detail page")
    dispatch(getOneContact(id))
  }, [])

  useEffect(() => {
    console.log(
      "contact console logging anytime contact is changed I suppose",
      contact
    )
  }, [contact])

  const handleDeleteMessage = (id) => {
    dispatch(contactDelete(id))
    setShowMessageDeleteModal(false)
    if (storedTheme === "dark") {
      toast.warning("Message was deleted.", {
        theme: "dark",
        className: "font-instrument mt-14"
      })
    } else {
      toast.warning("Message was deleted.", {
        className: "font-instrument mt-14"
      })
    }
    navigate("/inbox")

  }

  return (
    <>
      <section class={`min-h-[89.5vh] font-instrument ${storedTheme === "light" ? "light-stars-bg" : "dark-stars-bg"} md:ml-64`}>
        <div class="py-8 mt-10 px-4 mx-auto max-w-2xl lg:py-16 animate__animated animate__fadeInRight animate__slow">
          <div className="flex flex-row gap-x-3 py-3 text-neutral-600 dark:text-neutral-300">
            <svg
              onClick={() => navigate("/inbox")}
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-arrow-left-circle transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer hover:text-teal-500 dark:hover:text-yellow-400"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
            <svg
              onClick={() => {
                setMessageToDelete(contact)
                setShowMessageDeleteModal(true)
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-trash3 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer hover:text-red-500"
              viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
          </div>
          <h2 class="mb-2 text-xl font-extrabold leading-none text-neutral-900 md:text-2xl dark:text-white font-palanquin-dark tracking-wider">
            {contact.subject}
          </h2>
          <div className="flex justify-between">
            <p class="mb-4 text-xl font-semibold leading-none text-neutral-900 md:text-lg dark:text-white">
              {contact.firstName} {contact.lastName}
            </p>
            <dt class="mb-2 leading-none text-neutral-900 dark:text-white items-center content-center">
              {new Date(contact.date).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
                hour: "numeric",
                minute: "numeric"
              })}
            </dt>
          </div>
          <dl>
            <dd class="mb-4 font-light text-neutral-700 sm:mb-5 dark:text-neutral-200">
              <Markdown>{contact.message}</Markdown>
            </dd>
          </dl>
          <dl class="flex items-center space-x-6 tracking-wider">
            <div>
              <dt class="mb-4 font-semibold leading-none text-neutral-900 dark:text-white">
                {contact.email}
              </dt>
              {/* <dd class="mb-4 font-light text-neutral-500 sm:mb-5 dark:text-neutral-400">Electronics/PC</dd> */}
            </div>
            <div>
              <dt class="mb-4 font-semibold leading-none text-neutral-900 dark:text-white">
                {contact.phone}
              </dt>
              {/* <dd class="mb-4 font-light text-neutral-500 sm:mb-5 dark:text-neutral-400">12kg</dd> */}
            </div>
          </dl>
          {/* <div class="flex items-center space-x-4">
            <button
              type="button"
              class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg
                aria-hidden="true"
                class="mr-1 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"></path>
              </svg>
              Edit
            </button>
            <button
              type="button"
              class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
              <svg
                aria-hidden="true"
                class="w-5 h-5 mr-1.5 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
              Delete
            </button>
          </div> */}
        </div>
      </section>
      <DashboardFooter />

      {showMessageDeleteModal && (
        <MessageDeleteModal 
          setShowMessageDeleteModal={setShowMessageDeleteModal}
          handleDeleteMessage={handleDeleteMessage}
          messageToDelete={messageToDelete}
        />
      )}

    </>
  )
}

export default InboxDetail
