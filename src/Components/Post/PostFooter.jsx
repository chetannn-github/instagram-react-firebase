import React from 'react'
import { CommentLogo, UnlikeLogo } from '../../assets/constants'
import { Bookmark, Save, Share } from 'lucide-react'

const PostFooter = () => {
  return (
    <div className='flex flex-col gap-2'>
       <div id="stats" className='flex gap-2'>
            <UnlikeLogo/>
            <CommentLogo/>
            <Share/>
            <Bookmark/>
        </div> 
        <div id="likes">
            323 likes
        </div>
        <div id="description">
            username बहुत प्यारा दोस्त कौन है??
Shri Hit Premanand Govind sharan Ji Maharaj Golden words🧡_____.......🙏💯like and share an
        </div>
    </div>
  )
}

export default PostFooter