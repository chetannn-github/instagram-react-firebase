import React from 'react'
import { useSelector } from 'react-redux'
import useFollowUser from '../../hooks/UserHooks/useFollowUser';
import { Link } from 'react-router-dom';

const SuggestedUser = ({username = "mr.csr",profilePicURL="./img1.png",SuggestedUser=false , uid="ODy9l49aj5bPVGpgbsEM0p3aOMQ2"}) => {
  let loggedInUser = useSelector((store)=>(store.loggedInUser));
  let handleFollow = useFollowUser();
  let isFollower = loggedInUser.followings.includes(uid);
  let isMe = (loggedInUser.uid === uid)? true: false;

  return (
   
      <div id="suggested-user" className='relative flex items-center  justify-between gap-3  mb-5 lg:w-full xl:w-5/6   my-2'>
         <Link to={`/${username}`}><div className='flex gap-3 items-center'>
        <div id="img" className='h-[34px] w-[34px] rounded-full overflow-hidden'>
        <img className='h-full w-full' src={profilePicURL} alt="" />
        </div>
        <div id="user-info" className='text-white flex flex-col'>
        <p>{username}</p>
       {SuggestedUser &&<p className='text-xs opacity-80'> Suggested for you</p>}
        </div>
        </div>
 </Link>
        {!isMe&&(
          <div id="follow" className='text-blue-500 cursor-pointer ' onClick={()=>{handleFollow(uid)}}>
          { isFollower? "unfollow" : "follow"}
        </div>)}
      </div>
   )
}

export default SuggestedUser