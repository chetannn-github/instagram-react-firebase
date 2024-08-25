import { MessageCircle, MessageCircleMore } from 'lucide-react'
import React from 'react'

const MessageNav = () => {
  return (
    <div className='flex gap-3 '>
      <MessageCircleMore stroke='white' className='' />
      <div id="logo-name" className='hidden md:block text-cyan-50'>Messages</div>
      
    </div>
  )
}

export default MessageNav