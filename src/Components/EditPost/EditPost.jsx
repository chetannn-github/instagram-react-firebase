import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeEditPostModal } from '../../redux/modalSlice';
import useEditPost from '../../hooks/PostHooks/useEditPost';

const EditPost = () => {
    let isEditPostOpen = useSelector((store)=>(store.modal.editPostModal));
    let editPost = useSelector((store)=>(store.editPost))

    let {handleEditPost,loading} = useEditPost();
    let dispatch = useDispatch();

    let updatePost = {
        caption:useRef(editPost?.caption)
    }

    let handleFormSubmit = () =>{
        handleEditPost(editPost?.uid,updatePost.caption.current.value)
    }

  return (
    <div className=" fixed z-50 left-1/2 top-1 0 -translate-x-1/2 flex w-[100vw] justify-center md:w-[50vw] md:left-[250px] md:translate-x-0 bg-transparent">
     

    {isEditPostOpen && (
      <dialog
        id="my_modal_3"
        className="   relative mt-10  h-fit w-[300px]  md:w-[400px]  justify-center items-start "
        open
      >
        <div className="border-white border  px-2 md:px-6 py-4 border-opacity-60">
          <form className='border-l-indigo-50'>
            <div className="flex justify-between items-baseline">
              <h1 className="text-xl font-semibold ">Update your Post.</h1>
              <button
                className="  "
                onClick={()=>(dispatch(closeEditPostModal()))}
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-5 mt-5">
              
              <input
                type="text" ref={updatePost.caption}
                defaultValue={editPost?.caption}
                className="min-w-full md:w-[300px] p-2"
                placeholder="bio"
              /> 
             
              <input
                type="file"
                accept="image/*"
                className="border-l-indigo-400"
              />
              <div
                onClick={handleFormSubmit}
                className={`bg-gray-400 text-black color-change  max-w-fit py-2 px-10 rounded-full ${loading? "cursor-not-allowed":"cursor-pointer"}`}
              >
                  {loading? <img className='relative h-full w-[30px]' src='./loading.svg'></img> :"Update Post" }
              </div>
            </div>
          </form>
        </div>
      </dialog>
    )}
  </div>
  )
}

export default EditPost