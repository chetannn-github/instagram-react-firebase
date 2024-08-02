import React from 'react'
import { HomeLogo, NotificationsLogo } from '../../assets/constants'
import { House } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomeNav= ({logo}) => {
  return (
    <Link to={"/"}>
      <div className='flex gap-3 '>
        <House stroke='white' className='' />
      <div id="logo-name" className='hidden md:block text-cyan-50'>Home</div>
      
    </div>
    </Link>
  )
}

export default HomeNav