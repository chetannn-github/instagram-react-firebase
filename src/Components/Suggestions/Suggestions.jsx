import React, { useEffect } from 'react'
import SuggestedUser from './SuggestedUser'
import User from './User'
import useSuggestedUser from '../../hooks/useSuggestedUser'
import { useSelector } from 'react-redux'

const Suggestions = () => {
  let loggedInUser = useSelector((store) =>(store.loggedInUser));
  let suggestedUsers  = useSelector((store)=>(store.suggestedUsers));

  let fetchSuggestedUser = useSuggestedUser();
  useEffect(()=>{fetchSuggestedUser()},[loggedInUser.followings.length])
  return (
    <div className=' hidden xl:w-[410px] xl:block pt-5 mt-10 '>
      <User/>
      {suggestedUsers?.length!==0 &&(
      <h3 className='opacity-75'>Suggestions for you!!</h3> )}
      {suggestedUsers&&suggestedUsers.map((user,index)=>(<SuggestedUser SuggestedUser = {true} key={index+32-2} uid={user.uid} profilePicURL={user.profilePicURL} username={user.username}/>))}
     
    </div>
  )
}

export default Suggestions