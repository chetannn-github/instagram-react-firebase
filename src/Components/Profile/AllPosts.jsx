import React from 'react'
import ProfilePost from './ProfilePost'

const AllPosts = () => {
  return (
    <div className='flex relative flex-wrap  gap-5'>
        <ProfilePost/><ProfilePost/><ProfilePost/><ProfilePost/><ProfilePost/><ProfilePost/><ProfilePost/>
    </div>
  )
}

export default AllPosts