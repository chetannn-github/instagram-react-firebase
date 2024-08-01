import React from 'react'

const SuggestedUser = () => {
  return (
    <div id="suggested-user" className='relative flex items-center gap-3  w-full  my-2'>
        <div id="img" className='h-[34px] w-[34px] rounded-full overflow-hidden'>
        <img className='h-full w-full' src="./img1.png" alt="" />
        </div>
        <div id="user-info" className='text-white flex flex-col'>
        <p>chetan singh </p>
        <p>Chetannn</p>
        </div>
        <div id="follow" className='text-blue-500 '>Follow</div>
    </div>)
}

export default SuggestedUser