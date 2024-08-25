import {  Search } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { closeNewPostModal, openSearchModal } from '../../redux/modalSlice';

const ReelNav = () => {
  let dispatch = useDispatch();
  

  return (
    
    <div className='flex gap-3 cursor-pointer 'onClick={()=>{
      dispatch(closeNewPostModal())
      dispatch(openSearchModal())}}
    >
        <Search stroke='white' className='' />
        <div id="logo-name" className='hidden md:block text-cyan-50'>Search</div>
      
    </div>
    
  )
}

export default ReelNav
