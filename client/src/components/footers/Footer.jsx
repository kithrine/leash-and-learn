import { Link } from "react-router";

import Logo from "../Logo";

const Footer = () => {
  return (
    <>
      <footer className="shadow p-4 bg-white md:p-8 lg:p-10 dark:bg-neutral-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <Link
            to="/"
            className="flex justify-center items-center text-5xl font-semibold text-gray-900 dark:text-white space-x-3 rtl:space-x-reverse"
          >
            <div className="absolute">
              <svg
                className="footer-paw animate-pulse absolute"
                xmlns="http://www.w3.org/2000/svg"
                height="45"
                width="45"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#725f4f"
                  d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
                />
              </svg>
              <div className="flex flex-col">
                <span className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white">
                  <span className="leash">Leash </span>
                  <span className="and text-xl relative text-white mx-1">
                    &
                  </span>{" "}
                  <span className="learn mr-1"> learn</span>
                </span>
                <span className="dog-training text-center text-lg font-bold -mt-2">
                  DOG TRAINING
                </span>
              </div>
            </div>
          </Link>

          <p className="mt-8 font-thin text-lg tracking-widest font-stretch-extra-expanded text-black dark:text-white">
            Where every dog's full potential is unleashed™
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Enroll
              </a>
            </li>
            {/* <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Campaigns</a>
          </li> */}
            {/* <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
          </li> */}
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Dashboard
              </a>
            </li>
            <li>
              <Link to="/faq" className="mr-4 hover:underline md:mr-6">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="mr-4 hover:underline md:mr-6">
                Contact
              </Link>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2021-2025{" "}
            <a href="#" className="hover:underline">
              Leash & Learn™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
