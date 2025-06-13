import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useDispatch } from "react-redux";
import { contactAdd } from "../redux/contactSlice";
import * as motion from "motion/react-client"
import { ToastContainer, toast } from "react-toastify";
import EnrollBanner from "../components/EnrollBanner";
import Footer from "../components/footers/Footer";

const ContactUs = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false);
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: new Date(),
    subject: "",
    message: "",
  });
  const storedTheme = localStorage.getItem("theme")


  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const contactObj = {
    //   firstName: contact.firstName,
    //   lastName: contact.lastName,
    //   email: contact.email,
    //   phone: contact.phone,
    //   message: contact.message,
    // };
    // const getContact = await axios.post(
    //   `${import.meta.env.VITE_NODE_SERVER_URL}/contact`,
    //   contactObj
    // );

    // * DISPATCH
    dispatch(contactAdd({ ... contactForm}))

    // console.log(getContact);
    toast.success("Message sent successfully!", { autoClose: 2000});
    setTimeout(() => {
      navigate("/")
    }, 2500);
  };

  return (
    <>
      <ToastContainer />
      <EnrollBanner />
      <div className={`py-32 ${storedTheme === "light" ? "light-diamond-morph-bg"
            : "dark-diamond-morph-bg"
        }  transition-colors ease-in-out duration-200`}>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* TOP BLUR */}
          <div
            className="absolute pointer-events-none -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] dark:from-yellow-400 dark:to-lime-400 opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  " polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          {/* BOTTOM BLUR */}
          <div
            className="absolute pointer-events-none -right-60 -z-10 transform-gpu overflow-hidden blur-3xl sm:-right-130 bottom-20"
            aria-hidden="true"
          >
            <div
              className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] dark:from-lime-400 dark:via-yellow-400 dark:to-amber-400 opacity-20 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  " polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          
          <div className={`bg-white dark:bg-neutral-800 w-1/2 mx-auto py-8 rounded-4xl drop-shadow-2xl dark:drop-shadow-black transition-colors ease-in-out duration-200 animate__animated animate__fadeInUp animate__slow`}>
          <div className="mx-auto max-w-2xl text-center font-instrument border-b border-violet-200 dark:border-neutral-700 pb-6">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-lexend uppercase">
              Contact Us
            </h2>
            <p className="mt-2 text-lg/8 leading-6 text-gray-600 dark:text-neutral-200 tracking-wide">
              Contact us today to learn more about our services, pricing, and
              how we can help you and your dog thrive together.
            </p>
            <p className="text-gray-600 dark:text-neutral-300 tracking-wide">Please also check out our <Link to="/FAQ" className="text-violet-500 dark:text-yellow-400 font-bold hover:underline underline-offset-2 font-rubik">FAQ</Link> page for frequently asked questions!</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mb-20 mx-auto mt-16 max-w-xl sm:mt-8 px-3"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    value={contactForm.firstName}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, firstName: e.target.value })
                    }
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:outline-lime-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    value={contactForm.lastName}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, lastName: e.target.value })
                    }
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:outline-lime-500"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:outline-lime-500"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <div className="flex rounded-md bg-white dark:bg-neutral-700 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-teal-400 dark:has-[input:focus-within]:outline-lime-500">
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        aria-label="Country"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 sm:text-sm/6 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:outline-lime-500"
                      >
                        <option>US</option>
                        <option>CA</option>
                        <option>EU</option>
                      </select>
                      <svg
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, phone: e.target.value })
                      }
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline sm:text-sm/6 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:outline-lime-500"
                      placeholder="123-456-7890"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <div className="mt-2.5">
                  <input
                    value={contactForm.subject}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, subject: e.target.value })
                    }
                    type="text"
                    name="subject"
                    id="subject"
                    autoComplete="subject"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:outline-lime-500"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, message: e.target.value })
                    }
                    name="message"
                    id="message"
                    rows="4"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:outline-lime-500"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  {/* <!-- Enabled: "bg-teal-400", Not Enabled: "bg-gray-200" --> */}
                  <button
                    type="button"
                    onClick={handleToggle}
                    className={`flex w-8 flex-none cursor-pointer rounded-full ${
                      toggle ? "bg-violet-500 dark:bg-yellow-400" : "bg-gray-200"
                    } p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:focus-visible:outline-yellow-400`}
                    role="switch"
                    aria-checked="false"
                    aria-labelledby="switch-1-label"
                    required
                  >
                    <span className="sr-only">Agree to policies</span>
                    {/* <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" --> */}
                    <span
                      aria-hidden="true"
                      className={`size-4 ${
                        toggle
                          ? "translate-x-3.5 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                          : "translate-x-0 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                      }`}
                    ></span>
                  </button>
                </div>
                <label className="text-sm/6 text-gray-600 dark:text-neutral-300" id="switch-1-label">
                  By selecting this, you agree to our<span> </span>
                  <a href="#" className="font-semibold text-violet-500 dark:text-yellow-400">
                    privacy policy
                  </a>
                  .
                </label>
              </div>
            </div>
            <div className="mt-10">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white focus:ring-4 focus:outline-none focus:ring-teal-300 bg-teal-400 hover:bg-teal-500 dark:bg-lime-600 dark:hover:bg-lime-700 shadow-sm hover:bg-gradient-to-l focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 dark:focus:ring-lime-500 transition-colors ease-in-out duration-200"
              >
                Submit
              </motion.button>
              
            </div>
          </form>
          </div>
        </div>
      </div>
        <Footer />
    </>
  );
};

export default ContactUs;
