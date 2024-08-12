
import React, { useEffect, useState } from 'react'
import useUserInfo from '../../hooks/useUserInfo'
import useFollowUser from '../../hooks/useFollowUser';
import { useDispatch, useSelector } from 'react-redux';
import { Pencil, Trash2 } from 'lucide-react';
import { openEditPostModal } from '../../redux/modalSlice';
import { addEditPostDetails, removeEditPostDetails } from '../../redux/editPostSlice';

const PostHeader = ({owner,uid,caption}) => {
 let  handleUserInfo = useUserInfo();
 let dispatch = useDispatch();
 let loggedInUser = useSelector((store) =>(store.loggedInUser))
 let [postUserInfo , setPostUserInfo]= useState(null);
 let fetchUserInfo = async()=>{
  setPostUserInfo(await handleUserInfo(owner));
}
 useEffect(()=>{fetchUserInfo()},[owner])

 let handleFollow =useFollowUser();
 
  return (
    <div id='post-header ' className=' relative flex items-center justify-between h-[50px] w-full px-4 '>
       <div id="post-creater" className='relative flex items-center gap-3  w-full border-l-orange-400'>
        <div id="img" className='h-[34px] w-[34px] rounded-full overflow-hidden'>
            <img className='h-full w-full' src={postUserInfo?.profilePicURL} alt="" />
        </div>
        <div id="user-info" className='text-white flex flex-col'>
            <p>{postUserInfo?.username} <span className='text-xs ml-1 opacity-70'>2 hrs</span></p>
            <p>Original audio</p>
        </div>
       </div>
       {loggedInUser.uid != owner &&<div id="more-info" className='text-blue-600 cursor-pointer' onClick={()=>{handleFollow(owner)}}>
       unfollow
       </div>}
       {loggedInUser.uid === owner &&<div className='flex gap-2'>
       <Pencil onClick={()=>{
        dispatch(removeEditPostDetails());
        dispatch(openEditPostModal());
        dispatch(addEditPostDetails({uid,caption}))
      }
        }/>
       <Trash2  stroke='red'/>
       </div>}
    </div>
  )
}

export default PostHeader