import { Film, Plus, PlusCircle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NewPostNav = () => {
  return (
    <Link to={"/newpost"}>
    <div className='flex gap-3 '>
    <PlusCircle stroke='white' className='' />
      <div id="logo-name" className='hidden md:block text-cyan-50'>Create</div>
      
    </div></Link>
  )
}

export default NewPostNav
