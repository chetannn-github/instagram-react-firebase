import React from 'react'
import ProfilePost from './ProfilePost'
import { useSelector } from 'react-redux'

const AllPosts = () => {
  let posts = useSelector((store) =>(store.profilePosts));

  return (
    <div className='flex relative flex-wrap justify-center gap-5 sm:justify-start'>
       {posts&& posts.map((post, index)=>(
          <ProfilePost postPicURL={post.postPicURL} key={post.createdAt}/>
        ))}
    </div>
  )
}

export default AllPosts