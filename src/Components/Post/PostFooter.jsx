import React from 'react'
import { CommentLogo, UnlikeLogo } from '../../assets/constants'
import { Bookmark, Save, Share } from 'lucide-react'
import useLikePost from '../../hooks/PostHooks/useLikePost'
import { useSelector } from 'react-redux'



const PostFooter = ({caption ,likes  , comments , uid}) => {
   let handleLike = useLikePost();
   let loggedInId = useSelector((store)=>(store.loggedInUser.uid));
   let like = likes.includes(loggedInId);
  return (
    <div className='flex flex-col gap-2'>
       <div id="stats" className='flex gap-2'>
         <div onClick={()=>{handleLike(uid)}}> <UnlikeLogo  like={like}/></div>
           
            <CommentLogo/>
            <Share/>
            <Bookmark/>
        </div> 
        <div id="likes" className='flex gap-3'>
           <p>{likes.length} likes </p>  <p>{comments.length} comments </p> 
        </div>
        <div id="description">
           {caption}
        </div>
    </div>
  )
}

export default PostFooter