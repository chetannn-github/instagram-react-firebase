import React from 'react'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'


const Post = ({postPicURL,caption , likes  , comments ,owner ,uid,createdAt}) => {
  
  return (
    <div className='w-[90%] md:w-[60%]  my-5 relative '>
        <PostHeader owner = {owner} uid={uid} caption={caption} createdAt={createdAt}/>
        <PostContent  postPicURL = {postPicURL} uid={uid}/>
        <PostFooter caption={caption} likes= {likes} comments= {comments} uid={uid}/>
    </div>
  )
}

export default Post