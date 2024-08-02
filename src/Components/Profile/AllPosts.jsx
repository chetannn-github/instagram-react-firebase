import React from 'react'
import ProfilePost from './ProfilePost'

const AllPosts = () => {
  return (
    <div className='flex relative flex-wrap justify-center gap-5 sm:justify-start'>
        <ProfilePost/><ProfilePost/><ProfilePost/><ProfilePost/><ProfilePost/><ProfilePost/><ProfilePost/>
    </div>
  )
}

export default AllPosts