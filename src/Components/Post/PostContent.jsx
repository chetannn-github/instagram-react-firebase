import React from 'react'

const PostContent = ( {postPicURL}) => {
  return (
    <div id='post-content' className='my-3 h-[90vh] relative w-full bg-red-200'>
        <img className='relative w-full h-full object-cover ' src={postPicURL} alt="" />
    </div>
  )
}

export default PostContent