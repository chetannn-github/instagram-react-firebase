import React from 'react'
import Navbar from "../Components/Nav/Navbar"
import ProfileHeader from '../Components/Profile/ProfileHeader'
import AllPosts from '../Components/Profile/AllPosts'
import ProfileNav from '../Components/Profile/ProfileNav'
import NewPost from './NewPost'
import Search from "./Search"
import useSignout from '../hooks/useSignout'
import { useParams } from 'react-router-dom'
import useProfileData from '../hooks/useProfileData'
import { useDispatch, useSelector } from 'react-redux'
import EditProfile from '../Components/EditProfile/EditProfile'
import { openEditProfileModal, openNewPostModal } from '../redux/modalSlice'


const Profile = () => {
  let {username} = useParams();
  let dispatch = useDispatch();
  const handleLogout = useSignout();
  useProfileData(username);
  let loggedInUser = useSelector((store)=>(store.loggedInUser));
  let profileUser = useSelector((store)=>(store.profilePageUser));
  let openEditProfile = () =>{
    dispatch((openEditProfileModal()))
  }
  
  return (
    <div className='relative max-w-[100vw] max-h-fit ' >
      <Navbar/>

      <div className='  min-h-[100vh] px-2  py-5 relative md:ml-[250px] md:px-10 '>
          <ProfileHeader/>
          
          
          
          <ProfileNav/>
          <AllPosts/>
      </div>  

      <NewPost/>
      <Search/>
      <EditProfile/>
    </div>
  )
}

export default Profile