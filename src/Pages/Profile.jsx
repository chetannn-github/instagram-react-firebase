import React from 'react'
import Navbar from "../Components/Nav/Navbar"
import ProfileHeader from '../Components/Profile/ProfileHeader'
import AllPosts from '../Components/Profile/AllPosts'
import ProfileNav from '../Components/Profile/ProfileNav'
const Profile = () => {
  return (
    <div className='w-[100vw] relative '>
      <Navbar/>

      <div className='min-h-[100vh] w-[100vw] px-20 py-5 relative md:w-dynamic md:ml-[250px] '>
          <ProfileHeader/>
          <ProfileNav/>
          <AllPosts/>
      </div>  
    </div>
  )
}

export default Profile