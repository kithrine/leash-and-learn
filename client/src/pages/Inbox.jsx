import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactDelete, contactGetAll } from "../redux/contactSlice";
import BMSideNav from "../components/navigation/BMSideNav";
import DashboardFooter from "../components/footers/DashboardFooter";
import { useParams } from "react-router";
import ContactDeleteModal from "../components/modals/ContactDeleteModal";

const Inbox = () => {
  const dispatch = useDispatch();
  const {id} = useParams()
  const { contacts } = useSelector((state) => state.contact);
  const [contactToDelete, setContactToDelete ] = useState({})
  const [showContactDeleteModal, setShowContactDeleteModal] = useState(false)

  useEffect(() => {
    dispatch(contactGetAll());
    // console.log("contacts", contacts);
  }, []);

  const handleDeleteContact = (id) => {
    dispatch(contactDelete(id))
    setShowContactDeleteModal(false)
    dispatch(contactGetAll())
  }


  return (
    <>
      <BMSideNav />
      <div className="antialiased dark:bg-gray-900 min-h-[89.5vh]">
        <main className="p-4 md:ml-64 h-auto pt-20">
          <h3 className="learn text-center text-4xl font-bold">
            CONTACT US MESSAGES
          </h3>
          <section className="bg-white dark:bg-gray-900">
            <div className="h-full my-8 overflow-y-auto relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="overflow-y-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone Number
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                    End Date
                  </th> */}
                    <th scope="col" className="px-6 py-3">
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contacts &&
                    contacts.map((contact, index) => (
                      <>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">{contact.firstName}</td>
                        <td className="px-6 py-4">{contact.lastName}</td>
                        <td className="px-6 py-4">{contact.email}</td>
                        <td className="px-6 py-4">{contact.phone}</td>
                        <td className="px-6 py-4">{contact.message}</td>
                        <td className="px-4 py-3 flex items-center justify-end">
                            <button
                              onClick={() => {setContactToDelete(contact); setShowContactDeleteModal(true)}}
                              id="delete-contact-message"
                              className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                              type="button"
                            >
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
      </div>

      {showContactDeleteModal && <ContactDeleteModal setShowContactDeleteModal={setShowContactDeleteModal} handleDeleteContact={handleDeleteContact} contactToDelete={contactToDelete}/>}

      <DashboardFooter />
    </>
  );
};

export default Inbox;

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
