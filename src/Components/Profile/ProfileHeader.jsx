import React from 'react'
import { useSelector } from 'react-redux'

const ProfileHeader = () => {
    let loggedInUser = useSelector((store)=>(store.loggedInUser));
    let profileUser = useSelector((store)=>(store.profilePageUser));
    console.log(loggedInUser);
    console.log(profileUser)
  return (

        <div className='w-full relative  mb-10 flex gap-3 items-center'>
            <div id="img" className='h-[130px] w-[130px] rounded-full overflow-hidden'>
                <img className='h-full w-full' src={profileUser?.profilePicURL ||"./img2.png"} alt="" />
            </div>
            <div id="user-info" className='text-white flex flex-col'>
                <p>@{profileUser?.username} </p>
                <p>4 post 3 followers 43 followings</p>
                <p className='text-s opacity-80'>Walter White</p>
                <p>{profileUser?.bio}</p>
            </div>
        </div>
   
  )
}

export default ProfileHeader