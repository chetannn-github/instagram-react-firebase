import React from 'react'
import { HomeLogo, NotificationsLogo } from '../../assets/constants'
import { House } from 'lucide-react'

const HomeNav= ({logo}) => {
  return (
    <div className='flex gap-3 '>
    <House stroke='white' className='' />
      <div id="logo-name" className='hidden md:block text-cyan-50'>Home</div>
      
    </div>
  )
}

export default HomeNav