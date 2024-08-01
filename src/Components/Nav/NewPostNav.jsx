import { Film, Plus, PlusCircle } from 'lucide-react'
import React from 'react'

const NewPostNav = () => {
  return (
    <div className='flex gap-3 '>
    <PlusCircle stroke='white' className='' />
      <div id="logo-name" className='hidden md:block text-cyan-50'>Create</div>
      
    </div>
  )
}

export default NewPostNav
