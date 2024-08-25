import React from 'react'
import ProfilePost from './ProfilePost'
import { useSelector } from 'react-redux'
import Spinner from '../Spinner';

const AllPosts = () => {
  let posts = useSelector((store) =>(store.profilePosts));

  return (
    <div className='flex relative flex-wrap justify-center gap-5 sm:justify-start min-w-full '>
      {!posts && <Spinner/>}
      {posts?.length ===0 && <div>NO Post . do post  something  </div>}
       {posts&& posts.map((post, index)=>(
          <ProfilePost postPicURL={post.postPicURL} key={post.createdAt}/>
        ))}
    </div>
  )
}

export default AllPosts