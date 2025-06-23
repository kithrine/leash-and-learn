import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogGetOne } from '../../redux/blogSlice'
import { useParams } from 'react-router'

const BlogCommentEditModal = ({ handleEditComment, setShowCommentEditModal, commentEditForm, setCommentEditForm, comment, blogId, setShowCommentActions }) => {
  const dispatch = useDispatch()
  const { blog } = useSelector((state) => state.blog)
  const { id } = useParams()


  useEffect(() => {
    console.log("commentEditForm", commentEditForm)
    dispatch(blogGetOne(id))
  }, [])

  // useEffect(() => {
  //   if (comment.comment !== "") {
  //     // console.log("comment.comment", comment.comment)
  //     setCommentEditForm(comment)
  //   }
  // }, [comment])

  useEffect(() => {
    // setCommentEditForm(comment);
    // console.log("useEffect sessionForm", sessionEditForm);
    // console.log("sessionEditForm", sessionEditForm)
  }, []);

  // useEffect(() => {
  //   console.log("commentEditForm", commentEditForm)
  // }, [commentEditForm])

  
  return (
    <>
      <div
        id="updateProductModal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-49 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-[37vw] h-full md:h-auto justify-self-center mt-28 font-instrument">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-neutral-800 sm:p-5 drop-shadow-xl drop-shadow-neutral-400 dark:drop-shadow-black animate__animated animate__fadeInRight">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-neutral-600">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white font-lexend uppercase">
                Edit Comment
              </h3>
              <button
              onClick={() => {setShowCommentEditModal(false)}}
                type="button"
                className="text-neutral-400 bg-transparent hover:bg-neutral-200 hover:text-neutral-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-neutral-600 dark:hover:text-white cursor-pointer transition duration-300 ease-in-out"
                data-modal-toggle="updateProductModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={handleEditComment}>
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                 
                  <div class="sm:col-span-2">
                    {/* <label
                      for="comment"
                      class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                      Body
                    </label> */}
                    <textarea
                    value={commentEditForm.comment}
                    onChange={(e) =>
                      setCommentEditForm({ ...commentEditForm, comment: e.target.value })
                    }
                      id="comment"
                      rows="15"
                      class="block p-2.5 w-full text-sm text-neutral-900 bg-neutral-50 rounded-lg border border-neutral-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Write about dogs here!"></textarea>
                  </div>
                </div>
              <div className="flex items-center space-x-4 mt-4">
                <button
                  type="submit"
                  className="text-white bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-400 dark:hover:bg-lime-500 dark:focus:ring-lime-600 dark:text-neutral-800 cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                >
                  Save Changes
                </button>
                {/* <button
                  type="button"
                  className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  <svg
                    className="mr-1 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Delete
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCommentEditModal