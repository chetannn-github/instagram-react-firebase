import React from 'react'
import { CommentLogo, UnlikeLogo } from '../../assets/constants'
import { Bookmark, Save, Share } from 'lucide-react'

const PostFooter = ({caption ,likes  , comments}) => {
  return (
    <div className='flex flex-col gap-2'>
       <div id="stats" className='flex gap-2'>
            <UnlikeLogo/>
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