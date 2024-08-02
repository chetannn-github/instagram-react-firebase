import { Ellipsis } from 'lucide-react'
import React from 'react'

const PostHeader = () => {
  return (
    <div id='post-header ' className=' relative flex items-center justify-between h-[50px] w-full px-4 '>
       <div id="post-creater" className='relative flex items-center gap-3  w-full border-l-orange-400'>
        <div id="img" className='h-[34px] w-[34px] rounded-full overflow-hidden'>
            <img className='h-full w-full' src="./img1.png" alt="" />
        </div>
        <div id="user-info" className='text-white flex flex-col'>
            <p>chetan singh <span className='text-xs ml-1 opacity-70'>2 hrs</span></p>
            <p>Original audio</p>
        </div>
       </div>
       <div id="more-info" className='text-blue-600'>
       unfollow
       </div>
    </div>
  )
}

export default PostHeader