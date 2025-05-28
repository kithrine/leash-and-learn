import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { contactDelete, contactGetAll } from "../../redux/contactSlice"
import BMSideNav from "../../components/navigation/BMSideNav"
import DashboardFooter from "../../components/footers/DashboardFooter"
import { Link, useNavigate, useParams } from "react-router"
import ContactDeleteModal from "../../components/modals/MessageDeleteModal"
import DashboardSideNavLayout from "../../layouts/DashboardSideNavLayout"
import MessageDeleteModal from "../../components/modals/MessageDeleteModal"

const Inbox = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { contacts } = useSelector((state) => state.contact)
  const [messageToDelete, setMessageToDelete] = useState({})
  const [showMessageDeleteModal, setShowMessageDeleteModal] = useState(false)

  useEffect(() => {
    dispatch(contactGetAll())
    // console.log("contacts", contacts);
  }, [])

  const reverseMessages = contacts.toReversed()
  console.log("reverseMessages", reverseMessages)

  const handleDeleteMessage = (id) => {
    dispatch(contactDelete(id))
    setShowMessageDeleteModal(false)
    dispatch(contactGetAll())
  }

  return (
    <>
      <DashboardSideNavLayout />
      {/* <div className="antialiased dark:bg-gray-900 min-h-[89.5vh]">
        <main className="p-4 md:ml-64 h-auto pt-20">
          <h3 className="learn text-center text-4xl font-bold">INBOX</h3>
          <section className="bg-white dark:bg-gray-900">
            <div className="h-full my-8 overflow-y-auto relative overflow-x-auto drop-shadow-xl sm:rounded-lg">
              <table className="bg-gray-500 overflow-y-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               
                <tbody>

                  {contacts &&
                    contacts.map((contact, index) => (
                      <>
                        <tr
                          onClick={() => navigate(`/inbox/${contact.id}`)}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
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
                              className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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

      <div class="md:ml-64 relative shadow-md sm:rounded-lg min-h-[89.5vh]">
        <div class="pb-4 bg-white dark:bg-gray-900">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              class="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          {/* <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      class="cursor-pointer inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-2 py-1.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <nav
          class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation">
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span class="font-semibold text-gray-900 dark:text-white">
              1-{contacts.length}
            </span>{" "}
            of{" "}
            <span class="font-semibold text-gray-900 dark:text-white">
              {contacts.length}
            </span>
          </span>
          <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                1
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </a>
            </li>
          </ul>
        </nav>
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
//                       className="relative flex flex-row justify-between p-6 mx-auto max-w-2xl text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
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
