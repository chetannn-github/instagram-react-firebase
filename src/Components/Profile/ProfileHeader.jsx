import React from 'react'

const ProfileHeader = () => {
  return (

        <div className='w-full relative  mb-10 flex gap-3 items-center'>
            <div id="img" className='h-[130px] w-[130px] rounded-full overflow-hidden'>
                <img className='h-full w-full' src="./img1.png" alt="" />
            </div>
            <div id="user-info" className='text-white flex flex-col'>
                <p>@chetan </p>
                <p>4 post 3 followers 43 followings</p>
                <p className='text-s opacity-80'>Walter White</p>
                <p>I am the danger boyz!!</p>
            </div>
        </div>
   
  )
}

export default ProfileHeader