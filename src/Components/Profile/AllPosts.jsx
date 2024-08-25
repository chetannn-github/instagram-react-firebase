import React from 'react'
import ProfilePost from './ProfilePost'
import { useSelector } from 'react-redux'


const AllPosts = () => {
  let posts = useSelector((store) =>(store.profilePosts));

  return (
    <div className='flex relative flex-wrap justify-center gap-5 sm:justify-start min-w-full bg-black '>
      {!posts &&<div className='relative h-[400px] w-[95%] flex-shrink-0  sm:w-[47%]  lg:w-[31%]'> <img  src='./loading.svg'></img></div>}
      {posts?.length ===0 && <div>NO Post . do post  something  </div>}
       {posts&& posts.map((post, index)=>(
          <ProfilePost postPicURL={post.postPicURL} key={post.createdAt}/>
        ))}
    </div>
  )
}

export default AllPosts