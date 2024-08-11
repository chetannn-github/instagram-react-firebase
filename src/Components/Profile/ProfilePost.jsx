import React from 'react'

const ProfilePost = ({postPicURL}) => {
  return (
    <div className='relative h-[400px] w-[95%] flex-shrink-0 bg-blue-950 sm:w-[47%]  lg:w-[31%]'>
        <img className='relative h-full w-full object-cover' src={postPicURL} alt="" />
    </div>
  )
}

export default ProfilePost