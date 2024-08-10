import React from 'react'
import SuggestedUser from './SuggestedUser'
import User from './User'

const Suggestions = () => {
  
  return (
    <div className=' hidden xl:w-[410px] xl:block pt-5 mt-10 '>
      <User/>
      <h3 className='opacity-75'>Suggestions for you!!</h3>
      {[1,3,3].map((item,index)=>(<SuggestedUser SuggestedUser = {true} key={index+32-2} />))}
      
    </div>
  )
}

export default Suggestions