import { Film, Plus, PlusCircle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { closeSearchModal, openNewPostModal } from '../../redux/modalSlice'
import { useDispatch } from 'react-redux'

const NewPostNav = () => {
  let dispatch = useDispatch();
  return (
    
    <div className='flex gap-3 cursor-pointer ' onClick={()=>{
      dispatch(closeSearchModal())
      dispatch(openNewPostModal())}}>
    <PlusCircle stroke='white' className='' />
      <div id="logo-name" className='hidden md:block text-cyan-50'>Create</div>
      
    </div>
  )
}

export default NewPostNav
