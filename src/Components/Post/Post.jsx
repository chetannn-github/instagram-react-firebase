import React from 'react'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'

const Post = () => {
  return (
    <div className=' w-[60%]  my-5 relative '>
        <PostHeader/>
        <PostContent/>
        <PostFooter/>
    </div>
  )
}

export default Post