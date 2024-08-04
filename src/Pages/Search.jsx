import React, { useState } from 'react'
import SuggestedUser from '../Components/Suggestions/SuggestedUser'
import { useDispatch, useSelector } from 'react-redux';
import { closeSearchModal } from '../redux/modalSlice';

const Search = () => {
  let dispatch = useDispatch();
  let isSearchOpen= useSelector((store)=>(store.modal.searchModal));
  console.log(isSearchOpen)
  return (
    <div className='fixed z-50 left-1/2 top-0 -translate-x-1/2 flex w-[100vw] justify-center md:w-[50vw] md:left-[250px]  md:translate-x-0 bg-transparent'>
    

    {isSearchOpen && (
    <dialog id="my_modal_3"
     className="relative mt-10 flex px-3 h-fit  w-[300px] md:w-[370px]  justify-center items-start " open>
      <div className=" relative mt-10  h-fit w-[300px]  md:w-[400px]  justify-center items-start bg-yellow-600">
        <form method="dialog">
          <div className='flex justify-between items-baseline'>
             <h1 className='text-xl font-semibold'>Search User</h1>
          <button className="btn btn-xl btn-circle btn-ghost "
            onClick={()=>(dispatch(closeSearchModal()))}>
              ✕
          </button>

          </div>
         
          
          <div className='flex flex-col gap-5 mt-5' >
          <input 
            type="text" 
            className='w-[250px] md:w-[300px] p-2'
             placeholder='Username'/>
          
          <button type="button" className=' bg-gray-400 py-2 px-4 rounded-full'>Search</button>

          <SuggestedUser/>
          </div>
        </form>
        
      </div>
    </dialog>)}
    </div>
  )
}

export default Search