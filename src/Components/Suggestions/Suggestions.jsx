import React from 'react'
import SuggestedUser from './SuggestedUser'

const Suggestions = () => {
  return (
    <div className='hidden lg:w-lg lg:block pt-5'>
      <h3 className='opacity-75'>Suggestions for you!!</h3>
        <SuggestedUser/><SuggestedUser/><SuggestedUser/><SuggestedUser/>
    </div>
  )
}

export default Suggestions