import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import EnrollBanner from "../components/EnrollBanner";
import Footer from "../components/footers/Footer";

const ContactUs = () => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false);
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactObj = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone,
      message: contact.message,
    };
    const getContact = await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/contact`,
      contactObj
    );
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
      <div className="bg-white mt-32">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute pointer-events-none -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  " polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Contact Us
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Contact us today to learn more about our services, pricing, and
              how we can help you and your dog thrive together.
            </p>
            <p className="text-gray-600">Please also check out our <Link to="/FAQ" className="hover:text-purple-300 font-bold underline">FAQ</Link> page for frequently asked questions!</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mb-20 mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    value={contact.firstName}
                    onChange={(e) =>
                      setContact({ ...contact, firstName: e.target.value })
                    }
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    value={contact.lastName}
                    onChange={(e) =>
                      setContact({ ...contact, lastName: e.target.value })
                    }
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    value={contact.email}
                    onChange={(e) =>
                      setContact({ ...contact, email: e.target.value })
                    }
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        aria-label="Country"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                      value={contact.phone}
                      onChange={(e) =>
                        setContact({ ...contact, phone: e.target.value })
                      }
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      placeholder="123-456-7890"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    value={contact.message}
                    onChange={(e) =>
                      setContact({ ...contact, message: e.target.value })
                    }
                    name="message"
                    id="message"
                    rows="4"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  {/* <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" --> */}
                  <button
                    type="button"
                    onClick={handleToggle}
                    className={`flex w-8 flex-none cursor-pointer rounded-full ${
                      toggle ? "bg-purple-300" : "bg-gray-200"
                    } p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300`}
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
                <label className="text-sm/6 text-gray-600" id="switch-1-label">
                  By selecting this, you agree to our<span> </span>
                  <a href="#" className="font-semibold text-purple-300">
                    privacy policy
                  </a>
                  .
                </label>
              </div>
            </div>
            <div className="mt-10">
            <button
                type="submit"
                className="block w-full rounded-md bg-gradient-to-r from-purple-300 to-pink-200 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-gradient-to-l focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
