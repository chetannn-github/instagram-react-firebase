import React, { useEffect, useState } from 'react'
import useUserInfo from '../../hooks/UserHooks/useUserInfo'
import useFollowUser from '../../hooks/UserHooks/useFollowUser';
import { useDispatch, useSelector } from 'react-redux';
import { Pencil, Trash2 } from 'lucide-react';
import { openEditPostModal } from '../../redux/modalSlice';
import { addEditPostDetails, removeEditPostDetails } from '../../redux/editPostSlice';
import useDeletePost from '../../hooks/PostHooks/useDeletePost';
import { postTimeConvertor } from '../../utils/postTimeConvertor';

const PostHeader = ({owner,uid,caption,createdAt}) => {
  let  handleUserInfo = useUserInfo();
  let  handleDelete = useDeletePost();
  let  handleFollow = useFollowUser();
  let  dispatch = useDispatch();
  let  timeAgo = postTimeConvertor(createdAt)

  let  loggedInUser = useSelector((store) => (store.loggedInUser));
  let  [postUserInfo, setPostUserInfo]= useState(null);
  let  fetchUserInfo = async()=>{
      setPostUserInfo(await handleUserInfo(owner));
  }

  useEffect(()=>{fetchUserInfo()},[owner])

  return (
    <div id='post-header ' className=' relative flex items-center justify-between h-[50px] w-full px-4 '>
       <div id="post-creater" className='relative flex items-center gap-3  w-full border-l-orange-400'>
        <div id="img" className='h-[34px] w-[34px] rounded-full overflow-hidden'>
            <img className='h-full w-full object-cover object-top' src={postUserInfo?.profilePicURL} alt="" />
        </div>
        
        <div id="user-info" className='text-white flex flex-col'>
          {!postUserInfo && <p>Loading</p>}
            {postUserInfo &&(
              <>
                <p>{postUserInfo?.username } <span className='text-xs ml-1 opacity-70'>{timeAgo}</span></p>
                <p>Original audio</p>
              </>)
            }
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
       <Trash2  stroke='red'
        onClick={()=>{
          handleDelete(uid,owner);
        }
          }
       />
       </div>}
    </div>
  )
}

export default PostHeader