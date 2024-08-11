import React from 'react'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import { useSelector } from 'react-redux'

const Post = ({postPicURL,caption , likes  , comments ,owner ,uid}) => {
  
  return (
    <div className='w-[90%] md:w-[60%]  my-5 relative '>
        <PostHeader owner = {owner}/>
        <PostContent  postPicURL = {postPicURL} uid={uid}/>
        <PostFooter caption={caption} likes= {likes} comments= {comments} uid={uid}/>
    </div>
  )
}

export default Post