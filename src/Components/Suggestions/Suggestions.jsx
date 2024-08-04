import React from 'react'
import SuggestedUser from './SuggestedUser'
import User from './User'

const Suggestions = () => {
  return (
    <div className=' hidden xl:w-[410px] xl:block pt-5 mt-10 '>
      <User/>
      <h3 className='opacity-75'>Suggestions for you!!</h3>
      <SuggestedUser/><SuggestedUser/><SuggestedUser/>
    </div>
  )
}

export default Suggestions