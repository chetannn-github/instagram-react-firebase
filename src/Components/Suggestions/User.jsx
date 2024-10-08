import React from 'react'
import { useSelector } from 'react-redux'
import useSignout from '../../hooks/AuthHooks/useSignout'
import { Link } from 'react-router-dom';

const User = () => {
    let userInfo = useSelector((store)=>(store.loggedInUser));
    const handleLogout = useSignout();
  return (
    <div id="suggested-user" className='relative flex items-center justify-between gap-3 mb-7 lg:w-full xl:w-5/6  my-2'>
        <Link to={`/${userInfo.username}`}>
            <div className='flex gap-3 items-center'>
                <div id="img" className='h-[54px] w-[54px] rounded-full overflow-hidden'>
                    <img className='h-full w-full object-top object-cover' src={userInfo.profilePicURL || "./img3.png"} alt="" />
                </div>
                <div id="user-info" className='text-white flex flex-col'>
                    <p>{userInfo?.username}</p>
                    <p className='text-s opacity-80'>Chetannn</p>
                </div>
            </div>
        </Link>
        <div id="follow" onClick={handleLogout} className='text-blue-500 cursor-pointer '>Logout</div>
    </div>)
}

export default User