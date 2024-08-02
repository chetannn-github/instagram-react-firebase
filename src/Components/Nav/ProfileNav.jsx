import React from 'react'
import { Link } from 'react-router-dom'

const ProfileNav = () => {
  return (<Link to={`/chetan`}>
    <div className="flex  gap-3 relative ">
      <div className='h-[30px] w-[30px] overflow-hidden rounded-full bg-black '>
        <img className='relative h-full w-full ' src="./img1.png" alt="" />
      </div>
      <div id="logo-name" className='hidden md:block text-cyan-50'>Profile</div>
    </div>
    </Link>
  )
}

export default ProfileNav