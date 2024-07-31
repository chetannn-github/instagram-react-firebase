import React from 'react'
import Authform from '../Components/Auth/Authform'


const Auth = () => {
  return (
    <div className='flex relative h-[100vh] min-w-full justify-center px-20 py-10'>
      <div id="img-wrapper" className=' w-[30%] '>
        <img src="/auth.png" className='relative object-contain' alt="" />
      </div>
      <Authform />

    </div>
  )
}

export default Auth