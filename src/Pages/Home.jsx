import NavBar from "../Components/Nav/Navbar"
import { Outlet } from 'react-router-dom'
import useFeedPosts from '../hooks/PostHooks/useFeedPosts';

const Home = () => {
  useFeedPosts();
  
  return (
    <div className='relative h-[100vh] bg-black  w-full flex'> 
      <NavBar/>
      {/* <div className='md:w-[250px] h-[100vh]  md:px-8 md:pt-12  bg-slate-800 text-white'></div> */}
      <Outlet/>
      
      
      
    </div>

  )
}

export default Home