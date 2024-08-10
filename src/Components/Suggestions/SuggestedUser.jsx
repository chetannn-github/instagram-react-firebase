import React from 'react'

const SuggestedUser = ({username = "chetan",profilePicURL="./img1.png",SuggestedUser=false}) => {
  return (
    <div id="suggested-user" className='relative flex items-center  justify-between gap-3  mb-5 lg:w-full xl:w-5/6   my-2'>
        <div className='flex gap-3 items-center'>
        <div id="img" className='h-[34px] w-[34px] rounded-full overflow-hidden'>
        <img className='h-full w-full' src={profilePicURL} alt="" />
        </div>
        <div id="user-info" className='text-white flex flex-col'>
        <p>{username}</p>
       {SuggestedUser &&<p className='text-xs opacity-80'> Suggested for you</p>}
        </div>
        </div>
        <div id="follow" className='text-blue-500 '>Follow</div>
    </div>)
}

export default SuggestedUser