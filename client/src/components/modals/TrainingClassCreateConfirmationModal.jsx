import { useNavigate } from "react-router";
import * as motion from "motion/react-client"


const TrainingClassCreateConfirmationModal = () => {
  const navigate = useNavigate();
  const storedTheme = localStorage.getItem("theme")

  return (
    <>
      <div
      className="relative z-10 font-instrument"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div
        className="fixed inset-0 bg-neutral-500/75 transition-opacity"
        aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 md:ml-64 animate__animated animate__fadeInUp animate__slow">
          
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white dark:bg-neutral-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="p-4 md:p-5 text-center text-lime-500">
                <svg
                className="mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                height="52"
                width="52"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                />
              </svg>
                  <div className="mt-3 text-center">
                    <h3
                      className="font-semibold text-neutral-900 dark:text-white font-lexend uppercase text-xl"
                      id="modal-title">
                      Training Class Created!
                    </h3>
                    <div className="mt-2">
                      {/* <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Are you sure you want to delete this session? All of your
                        data will be permanently removed. This action cannot be
                        undone.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-900 px-4 py-3 flex sm:px-6 justify-between">
                <button
                  onClick={() => navigate("/training-classes")}
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-teal-400 dark:bg-lime-400 dark:hover:bg-lime-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-800 dark:text-neutral-800 hover:bg-teal-500 sm:mt-0 sm:w-auto cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 tracking-wider">
                  Go to List of Training Classes
                </button>
                <button
                  onClick={() => navigate("/dashboard")}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-violet-500 px-3 py-2 text-sm font-semibold text-white dark:text-neutral-800 shadow-sm hover:bg-violet-600 dark:bg-yellow-400 hover:dark:bg-yellow-500 sm:ml-3 sm:w-auto cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 tracking-wider">
                  Return to Dashboard
                </button>
              </div>
            </div>
     
        </div>
      </div>
    </div>
    </>
  );
};

export default TrainingClassCreateConfirmationModal;
