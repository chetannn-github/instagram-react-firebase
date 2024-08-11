import React from 'react'
import Suggestions from '../Components/Suggestions/Suggestions'
import Post from '../Components/Post/Post'
import Search from './Search'
import NewPost from './NewPost'
import { useSelector } from 'react-redux'

const Feed = () => {
  let feedPosts = useSelector((store)=>(store.feedPosts));

  return (
    <div className='flex relative w-[100vw] h-max text-white md:ml-[250px]  md:w-dynamic '>
      <div id='feed' className='relative w-full h-max  flex flex-col items-center     '>
        {feedPosts&&feedPosts.map((feedPost)=>(
          <Post key={feedPost.createdAt} postPicURL={feedPost.postPicURL} caption={feedPost.caption} owner= {feedPost.owner} likes= {feedPost.likes} comments= {feedPost.comments}/>
        ))}
      </div>
      
      <NewPost/>
      <Search/>

      <Suggestions/>
    </div>
    
  )
}

export default Feed