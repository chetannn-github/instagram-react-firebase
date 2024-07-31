import React from 'react'
import { InstagramLogo } from '../../assets/constants'
import { Link } from 'react-router-dom'

const Authform = () => {
  return (
    <div id="authform-wrapper" className='flex flex-col relative    lg:w-[380px] md:px-10 sm:w-[500px]  py-3 w-[730px] px-2' >
      <div id="form" className='flex flex-col relative  pb-4'>
          <div id="logo" className='h-[65px] w-full  my-7 flex justify-center items-center'>
            <InstagramLogo className='h-full relative w-full object-cover' /></div>
          <div id="inputs" className='flex flex-col relative gap-4' >
            <input placeholder='email address' className='px-4 py-2'></input>
            <input placeholder='password' className='px-4 py-2'></input>
            <button type="submit" className='bg-[#0095F6] px-4 py-2 text-white rounded-xl'>Log in</button>
          </div>
      </div>
      <div id="signup" className='flex gap-1'>
        <p>Don't have an account? </p> 
        <Link className='underline text-[#0095F6]'> Sign up</Link>
      </div>
      <div id="downloadapp" className='relative py-2 w-full'>
        <p>Get the app.</p>

        <img src="./playstore.png" className='relative  mr-3 w-[45%] inline object-contain' alt="" />
        <img src="./microsoft.png"className='relative w-[45%] object-contain inline' alt="" />
      </div>
    </div>
  )
}

export default Authform