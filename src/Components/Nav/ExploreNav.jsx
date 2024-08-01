import { Compass } from 'lucide-react'
import React from 'react'

const ExploreNav = () => {
  return (
    <div className='flex gap-3 '>
    <Compass stroke='white' className='' />
      <div id="logo-name" className='hidden md:block text-cyan-50'>Home</div>
      
    </div>
  )
}

export default ExploreNav