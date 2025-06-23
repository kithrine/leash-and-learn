import { useDispatch } from "react-redux"
import { deleteDog } from "../../redux/userSlice"

const DogDeleteModal = ({
  setShowDeleteDogModal,
  dogToDelete,
  userId,
  dog
}) => {
  const dispatch = useDispatch()
  const storedTheme = localStorage.getItem("theme")


  const handleDogDelete = (e) => {
    e.preventDefault()

    console.log("handleDogDelete", userId, dogToDelete)
    dispatch(deleteDog({ userId: userId, dogId: dogToDelete._id }))
    console.log("is DogDelete working?")
    setShowDeleteDogModal(false)
    if (storedTheme === "dark") {
      toast.warning("Dog was deleted.", {
        theme: "dark"
      })
    } else {
      toast.warning("Dog was deleted.")
    }
  }
  return (
    <div
      className="relative z-40 font-instrument"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div
        className="fixed inset-0 bg-neutral-500/75 transition-opacity"
        aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 md:ml-[20vw] animate__animated animate__fadeIn">
          <form onSubmit={handleDogDelete}>
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white dark:bg-neutral-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-700 sm:mx-0 sm:size-10">
                    <svg
                      className="size-6 text-red-600 dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold text-neutral-900 dark:text-white tracking-wider"
                      id="modal-title">
                      Delete Dog
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Are you sure you want to delete this dog? All of your
                        data will be permanently removed. This action cannot be
                        undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-900 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  // onClick={() => handleDogDelete(dogToDelete)}
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto cursor-pointer transition duration-300 ease-in-out">
                  Delete
                </button>
                <button
                  onClick={() => setShowDeleteDogModal(false)}
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-neutral-500 dark:hover:bg-neutral-600 px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 dark:text-neutral-200 hover:bg-neutral-100 sm:mt-0 sm:w-auto cursor-pointer transition duration-300 ease-in-out">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DogDeleteModal
