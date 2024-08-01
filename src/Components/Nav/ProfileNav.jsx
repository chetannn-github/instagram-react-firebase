import React from 'react'

const ProfileNav = () => {
  return (
    <div className="flex  gap-3 relative ">
      <div className='h-[30px] w-[30px] overflow-hidden rounded-full bg-black '>
        <img className='relative h-full w-full ' src="./img1.png" alt="" />
      </div>
      <div id="logo-name" className='hidden md:block text-cyan-50'>Profile</div>
    </div>
  )
}

export default ProfileNav