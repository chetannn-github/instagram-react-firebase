import React from 'react'
import { useSelector } from 'react-redux'
import useSignout from '../../hooks/useSignout'

const User = () => {
    let userInfo = useSelector((store)=>(store.user));
    const handleLogout = useSignout();
  return (
    <div id="suggested-user" className='relative flex items-center justify-between gap-3 mb-7 lg:w-full xl:w-5/6  my-2'>
        <div className='flex gap-3 items-center'>
            <div id="img" className='h-[54px] w-[54px] rounded-full overflow-hidden'>
                <img className='h-full w-full' src="./img1.png" alt="" />
            </div>
            <div id="user-info" className='text-white flex flex-col'>
                <p>{userInfo?.displayName}</p>
                <p className='text-s opacity-80'>Chetannn</p>
            </div>
        </div>
        
        <div id="follow" onClick={handleLogout} className='text-blue-500 '>Logout</div>
    </div>)
}

export default User