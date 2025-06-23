import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { contactDelete, contactGetAll } from "../../redux/contactSlice"
import { Link, useNavigate, useParams } from "react-router"
import { toast } from "react-toastify"
import MessageDeleteModal from "../../components/modals/MessageDeleteModal"
import DashboardFooter from "../../components/footers/DashboardFooter"

const Inbox = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { contacts } = useSelector((state) => state.contact)
  const [messageToDelete, setMessageToDelete] = useState({})
  const [showMessageDeleteModal, setShowMessageDeleteModal] = useState(false)

  const storedTheme = localStorage.getItem("theme")

  useEffect(() => {
    dispatch(contactGetAll())
    // console.log("contacts", contacts);
  }, [])

  const reverseMessages = contacts.toReversed()
  console.log("reverseMessages", reverseMessages)

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
    dispatch(contactGetAll())
  }

  return (
    <>

      {/* <div className="antialiased dark:bg-neutral-900 min-h-[89.5vh]">
        <main className="p-4 md:ml-64 h-auto pt-20">
          <h3 className="learn text-center text-4xl font-bold">INBOX</h3>
          <section className="bg-white dark:bg-neutral-900">
            <div className="h-full my-8 overflow-y-auto relative overflow-x-auto drop-shadow-xl sm:rounded-lg">
              <table className="bg-neutral-500 overflow-y-auto w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400">
               
                <tbody>

                  {contacts &&
                    contacts.map((contact, index) => (
                      <>
                        <tr
                          onClick={() => navigate(`/inbox/${contact.id}`)}
                          className="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 cursor-pointer">
                          <td className="px-4 py-4">{contact.firstName}</td>
                          <td className="px-4 py-4">{contact.lastName}</td>
                          <td className="px-4 py-4">{contact.email}</td>
                          <td className="px-4 py-4">{contact.phone}</td>
                          <td className="px-4 py-4">{contact.subject}</td>
                          <td className="px-4 my-4 line-clamp-1 max-w-[30vw]">
                            {contact.message}
                          </td>
                          <td className="px-4 py-4">
                            {new Date(contact.date).toLocaleString("en-US", {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric"
                            })}
                          </td>
                          <td className="px-4 py-3 items-center justify-end">
                            <button
                              onClick={() => {
                                setContactToDelete(contact)
                                setShowContactDeleteModal(true)
                              }}
                              id="delete-contact-message"
                              className="inline-flex items-center p-0.5 text-sm font-medium text-center text-neutral-500 hover:text-neutral-800 rounded-lg focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-100"
                              type="button">
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div> */}

      <div class={`md:ml-64 relative shadow-md min-h-[89.5vh] pt-16 bg-white dark:bg-neutral-800 ${storedTheme === "light" ? "light-curtain-bg" : "dark-curtain-bg"} font-instrument`}>
      <h3 className="text-center text-4xl font-bold font-lexend py-6 dark:text-white animate__animated animate__fadeIn animate__slower">INBOX</h3>
        <div className="animate__animated animate__fadeIn animate__slow">
        <div class="py-2 bg-neutral-200 dark:bg-neutral-700 flex items-center">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-neutral-500 dark:text-neutral-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="block py-2 ps-10 text-sm text-neutral-900 border border-neutral-300 rounded-lg w-80 bg-neutral-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2"
              placeholder="Search for messages"
            />
          </div>
        </div>
        <div className="max-h-[80vh] min-h-[80vh] overflow-y-auto bg-white dark:bg-neutral-800">
        <table class="w-full text-sm text-left rtl:text-right text-neutral-600 dark:text-neutral-300">
          {/* <thead class="text-xs text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-neutral-100 border-neutral-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-neutral-800 dark:focus:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead> */}

          <tbody className="">
            {contacts &&
              reverseMessages.map((contact, index) => (
                <tr class="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 border-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-600 dark:hover:text-white hover:text-neutral-800">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-neutral-100 border-neutral-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-neutral-800 dark:focus:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600"
                      />
                      <label for="checkbox-table-search-1" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>

                  
                  <td 
                  onClick={() => navigate(`/inbox/${contact.id}`)}
                  class="cursor-pointer px-6 my-5 line-clamp-1 content-center items-center">
                    <span className="font-bold">{contact.subject}</span> -{" "}
                    {contact.message}
                  </td>
                  <td 
                  onClick={() => navigate(`/inbox/${contact.id}`)}
                  class="cursor-pointer px-6 py-4 min-w-52">
                    {contact.firstName} {contact.lastName}
                  </td>
                  <td onClick={() => navigate(`/inbox/${contact.id}`)} class="cursor-pointer px-6 py-4">
                    {new Date(contact.date).toLocaleString("en-US", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric"
                    })}
                  </td>


                  <td class="px-6 py-4">
                    <button
                      onClick={() => {
                        setMessageToDelete(contact)
                        setShowMessageDeleteModal(true)
                      }}
                      id="delete-contact-message"
                      type="button"
                      class="cursor-pointer inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-2 py-1.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        </div>
        <nav
          class="flex items-center flex-column flex-wrap md:flex-row justify-between py-4 bg-neutral-200 dark:bg-neutral-700"
          aria-label="Table navigation">
          <span class="text-sm ml-2 font-normal text-neutral-500 dark:text-neutral-400 mb-4 md:mb-0 block w-full md:inline md:w-auto tracking-wider">
            Showing{" "}
            <span class="font-semibold text-neutral-900 dark:text-white">
              1-{contacts.length}
            </span>{" "}
            of{" "}
            <span class="font-semibold text-neutral-900 dark:text-white">
              {contacts.length}
            </span>
          </span>
          <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-neutral-500 bg-white border border-neutral-300 rounded-s-lg hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="flex items-center justify-center px-3 h-8 text-teal-600 border border-neutral-300 bg-teal-50 hover:bg-teal-100 hover:text-teal-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-lime-400 dark:hover:bg-neutral-950 dark:hover:text-lime-400">
                1
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border border-neutral-300 rounded-e-lg hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">
                Next
              </a>
            </li>
          </ul>
        </nav>
        </div>
      </div>

      {showMessageDeleteModal && (
        <MessageDeleteModal
          setShowMessageDeleteModal={setShowMessageDeleteModal}
          handleDeleteMessage={handleDeleteMessage}
          messageToDelete={messageToDelete}
        />
      )}

      <DashboardFooter />
    </>
  )
}

export default Inbox

// CARDS - 4 IN A ROW REPEATEDLY
// <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
//               <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
//                 {/* <!-- Message Cards --> */}
//                 {contacts &&
//                   contacts.map((contact, index) => (
//                     <div
//                       className="relative flex flex-row justify-between p-6 mx-auto max-w-2xl text-center text-neutral-900 bg-white rounded-lg border border-neutral-100 shadow dark:border-neutral-600 xl:p-8 dark:bg-neutral-800 dark:text-white"
//                       key={index}
//                     >
//                       {/* <!-- List --> */}
//                       <ul role="list" className="my-8 space-y-4 text-left">
//                         <li className="flex items-center space-x-3">
//                           <h1 className="font-semibold">First Name:</h1>{" "}
//                           <span> {contact.firstName}</span>
//                         </li>

//                         <li className="flex items-center space-x-3">
//                           <h1 className="font-semibold">Last Name:</h1>
//                           <span> {contact.lastName}</span>
//                         </li>

//                         <li className="flex items-center space-x-3">
//                           <h1 className="font-semibold">Email: </h1>
//                           <span>{contact.email}</span>
//                         </li>

//                         <li className="flex items-center space-x-3">
//                           <h1 className="font-semibold">Phone: </h1>
//                           <span>{contact.phone}</span>
//                         </li>

//                         <li className="flex flex-col items-center space-x-3">
//                           <h1 className="font-semibold">Message: </h1>
//                           <span>{contact.message}</span>
//                         </li>
//                       </ul>

//                     </div>
//                   ))}
//               </div>
//             </div>
