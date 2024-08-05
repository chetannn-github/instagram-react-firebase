import React, { useEffect, useRef } from 'react'
import { InstagramLogo } from '../../assets/constants'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLoginForm } from '../../redux/authSlice'
import {  useLogin } from '../../hooks/useLogin'
import { useSignup } from '../../hooks/useSignup'
import useGoogleAuth from '../../hooks/useGoogleAuth'


const Authform = () => {
  const dispatch = useDispatch();
  const isLoginForm = useSelector((store) =>(store.auth.isLoginForm));
  const errorMsg = useSelector((store) => (store.auth.errorMsg));
  const handleLogin = useLogin();
  const handleSignup = useSignup();
  const handleGoogleAuth =  useGoogleAuth();




  const toggleForm = ()=>{
    dispatch(toggleLoginForm())
  }
  let inputs = {
  email : useRef(null),
  username : useRef(null),
  password : useRef(null),
  confirmPassword : useRef(null),};

  let handleAuthFormSubmit = () =>{
    if(isLoginForm){handleLogin(inputs.email.current.value,inputs.password.current.value );}
    else{handleSignup(inputs.email.current.value,inputs.username.current.value,inputs.password.current.value, inputs.confirmPassword.current.value)}
  }



  return (
    <div id="authform-wrapper" className='flex flex-col relative lg:w-[380px] md:px-10 sm:w-[500px] gap-3   py-3 w-[730px] px-2' >
      <div id="form" className='flex flex-col relative  pb-4'>
          <div id="logo" className='h-[65px] w-full  my-7 flex justify-center items-center'>
            <InstagramLogo className='h-full relative w-full object-cover' /></div>
          <div id="inputs" className='flex flex-col relative gap-4' >
            <input ref={inputs.email} placeholder='email address' className='px-4 py-2 '></input>
            {!isLoginForm && <input ref={inputs.username} placeholder='username' className='px-4 py-2 '></input>}
            <input placeholder='password' ref={inputs.password} className='px-4 py-2 '></input>
            {!isLoginForm && <input ref={inputs.confirmPassword} placeholder='confirmPassword' className='px-4 py-2 '></input>}
            <p className='text-red-600'>{errorMsg}</p>
            <button type="submit" onClick={handleAuthFormSubmit} className='bg-[#0095F6] px-4 py-2 text-black rounded-xl'>{isLoginForm?  "Login ":"Signup" }</button>
          </div>
      </div>
      <div id="signup" className='flex gap-1'>
        <p>{isLoginForm? "Don't have an account? " : "Already have an account? "}</p> 
        <Link onClick={toggleForm} className='underline text-[#0095F6]'> {isLoginForm? "Signup" : "Login "}</Link>
      </div>

      <div className='flex gap-4 justify-between items-center'>
        <div className='w-[120px] h-[1px] bg-slate-100'></div>
        <h3>OR</h3> 
        <div className='w-[120px] h-[1px] bg-slate-100'></div>
      </div>

      <div className='flex h-[30px] justify-center items-center gap-4 cursor-pointer' onClick={handleGoogleAuth}>
        <img className='relative h-full ' src="./google.png" alt="" />
        <h2 className='text-blue-700 cursor-pointer' >Signup with Google</h2>
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