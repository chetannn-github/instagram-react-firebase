import React from 'react'
import NavBar from "../Components/Nav/Navbar"
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className='relative h-[100vh]  w-full flex'> 
      <NavBar/>
      <Outlet/>
    </div>

  )
}

export default Home