import React from 'react'
import Suggestions from '../Components/Suggestions/Suggestions'
import Post from '../Components/Post/Post'

const Feed = () => {
  return (
    <div className='flex relative md:w-dynamic md:ml-[250px]'>
    <div id='feed' className='w-[100vw] h-max  flex flex-col items-center relative  md:w-full  lg:w-[60vw]'>
      <Post/><Post/>
    </div>
    <Suggestions/></div>
    
  )
}

export default Feed