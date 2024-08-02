import React from 'react'

const Search = () => {
  return (
    <div className='ml-[250px]'>
    <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        
      </div>
    </dialog></div>
  )
}

export default Search