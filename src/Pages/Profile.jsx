import React, { useEffect } from 'react'
import Navbar from "../Components/Nav/Navbar"
import ProfileHeader from '../Components/Profile/ProfileHeader'
import AllPosts from '../Components/Profile/AllPosts'
import ProfileNav from '../Components/Profile/ProfileNav'
import NewPost from './NewPost'
import Search from "./Search"

import { useParams } from 'react-router-dom'
import useProfileData from '../hooks/ProfileHooks/useProfileData'

import EditProfile from '../Components/EditProfile/EditProfile'
import useGetAllPosts from '../hooks/PostHooks/useGetAllPosts'
import EditPost from '../Components/EditPost/EditPost'
import { useDispatch, useSelector } from 'react-redux'
import ProfilePicModal from '../Components/Modals/ProfilePicModal'
import { closeProfilePicModal } from '../redux/modalSlice'



const Profile = () => {
  let {username} = useParams();
  let profileUser = useSelector((store)=>(store.profilePageUser));
  let handleGetAllPosts = useGetAllPosts();
  useProfileData(username);
 
  useEffect(()=>{ handleGetAllPosts(username);},[username]);
  
  let dispatch = useDispatch();
  let isProfilePicModalOpen = useSelector((store)=>(store.modal.profilePicModal));
  
  
  return (
    <div className='relative max-w-[100vw] max-h-fit bg-black ' >
      <Navbar/>
      {!profileUser &&( <div className='  min-h-[100vh] px-2  py-5 relative md:ml-[250px] md:px-10 flex items-center ' >
        <img src='./loading.svg'></img>
      </div>)
      }

      {profileUser &&( <div className='  min-h-[100vh] w-[100%] px-2 bg-black py-5 relative md:ml-[250px] md:w-[calc(100%-250px)]  md:px-10 ' onClick={()=>{
        if(isProfilePicModalOpen ) dispatch(closeProfilePicModal())}}>
           <ProfileHeader/>
            <ProfileNav/>
            <AllPosts/>
            </div> )
      }


      <NewPost/>
      <Search/>
      <EditPost/>
      <EditProfile/>
      <ProfilePicModal/>
    </div>
  )
}

export default Profile