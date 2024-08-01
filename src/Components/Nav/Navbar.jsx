import React from 'react'

import { InstagramLogo } from '../../assets/constants'
import HomeNav from './HomeNav'
import ExploreNav from './ExploreNav'
import ReelNav from './ReelNav'
import NewPostNav from './NewPostNav'
import MessageNav from './MessageNav'
import ProfileNav from './ProfileNav'

const Navbar = () => {
  return (
    <div className='z-40 fixed bottom-0 left-0 px-2 w-full h-[50px] flex items-center gap-10 justify-center md:top-0  md:left-0 md:gap-10 md:justify-normal md:items-start  md:px-8 md:pt-12 md:h-full md:w-[250px] bg-black md:flex-col '>
     <div id="logo" className='hidden md:w-7/12 md:block'>
      <InstagramLogo fill={"white"}/>
     </div> 
      <HomeNav/>
      <ExploreNav/>
      <ReelNav/>
      <NewPostNav/>
      <MessageNav/>
      <ProfileNav/>
    </div>
  )
}

export default Navbar