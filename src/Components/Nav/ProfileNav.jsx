import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfileNav = () => {
  let loggedInUser = useSelector((store)=>(store.loggedInUser));

  return (<Link to={`/${loggedInUser.username}`}>
    <div className="flex  gap-3 relative ">
      <div className='h-[30px] w-[30px] overflow-hidden rounded-full bg-black '>
        <img className='relative h-full w-full ' src={loggedInUser?.profilePicURL || "./img1.png"} alt="" />
      </div>
      <div id="logo-name" className='hidden md:block text-cyan-50'>Profile</div>
    </div>
    </Link>
  )
}

export default ProfileNav