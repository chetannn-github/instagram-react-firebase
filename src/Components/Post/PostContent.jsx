import React, { useState } from 'react'
import useLikePost from '../../hooks/PostHooks/useLikePost';
import { UnlikeLogo } from '../../assets/constants';

const PostContent = ( {postPicURL,uid}) => {
  const [showUnlike, setShowUnlike] = useState(false);
  let handleDoubleClick = ()=>{
    setShowUnlike(true);
    setTimeout(() => {
      setShowUnlike(false);
    }, 1200); // hide the unlike logo after 1 second
 
    handleLike(uid,true)
  }

  let handleLike = useLikePost();
  return (
    <div id='post-content' onDoubleClick={handleDoubleClick} className='select-none my-3 h-[80vh] relative w-full '>

      {showUnlike&&<div className="z-30 absolute h-[200px] w-[200px]   left-[50%] top-[50%] translate-x-[-50%]  translate-y-[-50%] " >
         <div className='relative h-full w-full animate-bounce '> <UnlikeLogo  like={true} height=''/> </div>
        </div>}  
        
        <img className='relative w-full h-full object-contain md:object-cover' src={postPicURL} alt="" />
        
    </div>
  )
}

export default PostContent