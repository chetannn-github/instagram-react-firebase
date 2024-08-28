
import { useDispatch, useSelector } from 'react-redux'
import { closeProfilePicModal, openProfilePicModal } from '../../redux/modalSlice';


const ProfilePicModal = () => {
    let isProfilePicModalOpen = useSelector((store)=>(store.modal.profilePicModal));
    let profileUser = useSelector((store)=>(store.profilePageUser));
  
    
    let dispatch = useDispatch();

   

  return (
    <div className=" fixed z-50 left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 flex justify-center md:w-[50vw] md:left-[250px] md:translate-x-0 ">
     

    {isProfilePicModalOpen && (
      <dialog
        id="my_modal_3"
        className=" relative mt-10 h-[300px] w-[300px]  md:w-[400px] md:h-[400px]  justify-center items-start  bg-transparent"
        open
      >
        <div className=" relative px-2 md:px-6 py-4 h-full w-full bg-transparent flex gap-2 items-start">
          <img src={profileUser?.profilePicURL} className=' rounded-full relative h-full w-full' alt="" />
          
              <button
                className="  "
                onClick={()=>(dispatch(closeProfilePicModal()))}
              >
                ✕
              </button>
        </div>
      </dialog>
    )}
  </div>
  )
}

export default ProfilePicModal