import React from 'react'
import Suggestions from '../Components/Suggestions/Suggestions'
import Post from '../Components/Post/Post'
import Search from './Search'
import NewPost from './NewPost'

const Feed = () => {
  return (
    <div className='flex relative w-[100vw] h-max text-white md:ml-[250px]  md:w-dynamic '>
      <div id='feed' className='relative w-full h-max  flex flex-col items-center     '>
        <Post/><Post/>
      </div>
      
      <NewPost/>
      <Search/>

      <Suggestions/>
    </div>
    
  )
}

export default Feed