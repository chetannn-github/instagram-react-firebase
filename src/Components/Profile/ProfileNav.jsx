import { Bookmark, Heart, Table } from 'lucide-react'
import React from 'react'

const ProfileNav = () => {
  return (
    <div className='flex gap-5 w-5/6 justify-center mb-5'>
        <div className='flex gap-2'><Table/> <h3>Posts</h3></div>
       <div className='flex gap-2'><Bookmark />
        Saved
       </div> 
        <div className='flex gap-2'>
            <Heart/>
            <h3>Likes</h3>
        </div>
    </div>
  )
}

export default ProfileNav