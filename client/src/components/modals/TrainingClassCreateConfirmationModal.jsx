import { useNavigate } from "react-router";

const TrainingClassCreateConfirmationModal = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        id="popup-modal"
        data-modal-placement="center-center"
        tabIndex="-1"
        className="bm-create-modal ml-80 mt-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="ml-96 relative p-1 w-full max-w-md max-h-full">
          <div className="ml-16 relative bg-gradient-to-r from-stone-100 via-white to-stone-100 rounded-lg shadow dark:bg-gray-700">
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                height="52"
                width="52"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#6ec484"
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                />
              </svg>
              <h3 className="learn mb-5 text-2xl font-bold text-gray-900 dark:text-gray-400">
                Training Class Created!
              </h3>
              <button
                onClick={() => navigate("/dashboard")}
                data-modal-hide="popup-modal"
                type="button"
                className="text-white hover:text-white bg-[#beb09d] hover:bg-black focus:ring-4 focus:outline-none focus:ring-black dark:focus:ring-purple-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingClassCreateConfirmationModal;
