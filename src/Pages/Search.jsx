import React, { useState } from 'react'
import SuggestedUser from '../Components/Suggestions/SuggestedUser'

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenModal = () => {
    setIsSearchOpen(true);
  };

  const handleCloseModal = () => {
    setIsSearchOpen(false);
  };
  return (
    <div className='md:ml-[250px] w-[100vw] flex justify-center md:w-[60vw]'>
    <button className="btn absolute" onClick={handleOpenModal}>
        Open modal
    
    
    </button>

    {isSearchOpen && (
    <dialog id="my_modal_3"
     className=" modal relative mt-10 flex h-fit bg-red-600 w-[300px] md:w-[370px]  justify-center items-start " open>
      <div className="border-white  border px-6 py-4 border-opacity-60">
        <form method="dialog">
          <div className='flex justify-between items-baseline'>
             <h1 className='text-xl font-semibold'>Search User</h1>
          <button className="btn btn-xl btn-circle btn-ghost "
            onClick={handleCloseModal}>
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