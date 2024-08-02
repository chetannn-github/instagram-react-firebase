import {  Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ReelNav = () => {
  return (
    <Link to={"/search"}>
    <div className='flex gap-3 '>
    <Search stroke='white' className='' />
      <div id="logo-name" className='hidden md:block text-cyan-50'>Search</div>
      
    </div>
    </Link>
  )
}

export default ReelNav
