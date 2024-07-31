import React from 'react'
import Authform from '../Components/Auth/Authform'


const Auth = () => {
  
  return (
    <div className='flex relative h-[100vh] min-w-full justify-center lg:px-20 py-10 px-5 '>
      <div id="img-wrapper" className='min-w-[350px] h-full relative  md:block   hidden'>
        <img src="/auth.png" className='relative object-contain' alt="" />
      </div>
      <Authform />

    </div>
  )
}

export default Auth