import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeNewPostModal } from '../redux/modalSlice';
import useCreatePost from '../hooks/useCreatePost';

const NewPost = () => {
  let dispatch = useDispatch();
  let isNewPostOpen = useSelector((store)=>(store.modal.newPostModal));
  let handleCreatePost = useCreatePost();
  let caption = useRef(null);

  return (
    
    <div className=" fixed z-50 left-1/2 top-1 0 -translate-x-1/2 flex w-[100vw] justify-center md:w-[50vw] md:left-[250px] md:translate-x-0 bg-transparent">
     

      {isNewPostOpen && (
        <dialog
          id="my_modal_3"
          className="   relative mt-10  h-fit w-[300px]  md:w-[400px]  justify-center items-start bg-yellow-600"
          open
        >
          <div className="border-white border  px-2 md:px-6 py-4 border-opacity-60">
            <form className='border-l-indigo-50'>
              <div className="flex justify-between items-baseline">
                <h1 className="text-xl font-semibold ">Create a post.</h1>
                <button
                  className="   "
                  onClick={()=>(dispatch(closeNewPostModal()))}
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-5 mt-5">
                <input
                  type="text"
                  className="min-w-full md:w-[300px] p-2"
                  placeholder="Write a caption"
                  ref={caption}
                />
                <input
                  type="file"
                  accept="image/*"
                  className="border-l-indigo-400"
                />
                <button
                  type="button"
                  className="bg-gray-400 text-black color-change  max-w-fit py-2 px-10 rounded-full"
                  onClick={()=>{handleCreatePost(caption.current.value)}}
                >
                  Create a post
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default NewPost;