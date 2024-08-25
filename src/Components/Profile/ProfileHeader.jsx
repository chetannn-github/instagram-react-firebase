import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openEditProfileModal } from '../../redux/modalSlice';
import useSignout from '../../hooks/AuthHooks/useSignout';

const ProfileHeader = () => {
    let loggedInUser = useSelector((store)=>(store.loggedInUser));
    let profileUser = useSelector((store)=>(store.profilePageUser));
    // console.log(loggedInUser);
    // console.log(profileUser)
    let dispatch = useDispatch();
    const handleLogout = useSignout();
    
  let openEditProfile = () =>{
    dispatch((openEditProfileModal()))
  }

  return (

        <div className='w-full relative  mb-10 flex gap-3 items-center '>
            <div id="img" className='h-[60px] w-[60px] sm:h-[130px] sm:w-[130px]  rounded-full overflow-hidden'>
                <img className='h-full w-full' src={profileUser?.profilePicURL ||"./img2.png"} alt="" />
            </div>
            <div id="user-info" className='text-white flex flex-col'>
                <div className='flex gap-2 items-baseline text-sm font-semibold'>
                    <p>@{profileUser?.username} </p> 
                    {(loggedInUser?.uid===profileUser?.uid) &&
                    <div className='flex gap-4 text-black mb-4' >
                        <button onClick={openEditProfile} className=' px-4 py-1 rounded-lg bg-white'>Edit</button>
                        <button onClick={handleLogout} className=' px-4 py-1 rounded-lg bg-red-300 '>Logout</button>
                    </div>
                    }  
                </div>
                
               
                <div className='flex gap-2 md:gap-4 text-md '>
                    <p>{profileUser?.posts?.length} posts</p>
                    <p>{profileUser?.followers?.length} followers</p>
                     <p>{profileUser?.followings.length} followings</p>
                </div>
                <p className='text-s opacity-80'>Walter White</p>
                <p>{profileUser?.bio}</p>
            </div>
        </div>
   
  )
}

export default ProfileHeader