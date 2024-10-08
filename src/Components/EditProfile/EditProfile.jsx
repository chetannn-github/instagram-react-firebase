import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeEditProfileModal } from '../../redux/modalSlice';
import useUpdateProfile from '../../hooks/ProfileHooks/useUpdateProfile';
import usePreviewImg from '../../hooks/usePreviewImg';

const EditProfile = () => {
    let isEditPostOpen = useSelector((store)=>(store.modal.editProfileModal))
    let loggedInUser = useSelector((store)=>(store.loggedInUser));
    let {handleUpdateProfile , loading} = useUpdateProfile();
    let dispatch = useDispatch();
    let updateProfileInputs = {
        username: useRef(loggedInUser?.username),
        bio:useRef(loggedInUser?.bio)

    }

    let handleFormSubmit = () =>{
        handleUpdateProfile(updateProfileInputs.username.current.value,updateProfileInputs.bio.current.value,selectedFile)
    }

  let  {selectedFile, handleImageChange } = usePreviewImg();


  return (
    <div className=" fixed z-50 left-1/2 top-1 0 -translate-x-1/2 flex w-[100vw] justify-center md:w-[50vw] md:left-[250px] md:translate-x-0 bg-transparent">
     

    {isEditPostOpen && (
      <dialog
        id="my_modal_3"
        className="   relative mt-10  h-fit w-[300px]  md:w-[400px]  justify-center items-start bg-black"
        open
      >
        <div className="border-white border  px-2 md:px-6 py-4 border-opacity-60">
          <form className='border-l-indigo-50'>
            <div className="flex justify-between items-baseline">
              <h1 className="text-xl font-semibold ">Update your Profile.</h1>
              <button
                className="  "
                onClick={()=>(dispatch(closeEditProfileModal()))}
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-5 mt-5">
              <input ref={updateProfileInputs.username}
                defaultValue={loggedInUser?.username}
                type="text"
                className="min-w-full md:w-[300px] p-2 bg-black"
                placeholder="username"
              /> 
              <input
                type="text" ref={updateProfileInputs.bio}
                defaultValue={loggedInUser?.bio}
                className="min-w-full md:w-[300px] p-2 bg-black"
                placeholder="bio"
              /> 
             
              <input
                type="file"
                accept="image/*"
                className="border-l-indigo-400 bg-black"
                onChange={handleImageChange}
              />
              <div
                onClick={handleFormSubmit}
               
                className={`bg-gray-400 text-black color-change  max-w-fit py-2 px-10 rounded-full ${loading? "cursor-not-allowed":"cursor-pointer"}`}
              >
                {loading? <img className='relative h-full w-[30px]' src='./loading.svg'></img> :"Update Profile" }
              </div>
            </div>
          </form>
        </div>
      </dialog>
    )}
  </div>
  )
}

export default EditProfile