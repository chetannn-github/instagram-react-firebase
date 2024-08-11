import React, { useState } from 'react'
import useLikePost from '../../hooks/useLikePost';
import { UnlikeLogo } from '../../assets/constants';

const PostContent = ( {postPicURL,uid}) => {
  const [showUnlike, setShowUnlike] = useState(false);
  let handleDoubleClick = ()=>{
    setShowUnlike(true);
    setTimeout(() => {
      setShowUnlike(false);
    }, 1000); // hide the unlike logo after 1 second
 
    handleLike(uid)
  }

  let handleLike = useLikePost();
  return (
    <div id='post-content' onDoubleClick={handleDoubleClick} className='my-3 h-[80vh] relative w-full bg-red-200'>

      {showUnlike&&<div className="z-30 absolute h-[200px] w-[200px] bg-transparent left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" >
          <UnlikeLogo  like={true} height=''/> 
        </div>}  
        
        <img className='relative w-full h-full object-cover ' src={postPicURL} alt="" />
        
    </div>
  )
}

export default PostContent