import { useEffect, useState } from 'react'

import { InstagramLogo } from '../../assets/constants'
import HomeNav from './HomeNav'

import ReelNav from './ReelNav'
import NewPostNav from './NewPostNav'
import MessageNav from './MessageNav'
import ProfileNav from './ProfileNav'

import { onAuthStateChanged } from 'firebase/auth'
import { removeUser } from '../../redux/loggedInUserSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'



const Navbar = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();


  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > document.body.offsetHeight - document.getElementById('navbar').offsetHeight) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth,(user)=>{
      if(!user){
        dispatch(removeUser());
        localStorage.removeItem("user");
        navigate('/auth');
      }
    });
  // unsuscribe when component is unmounted
  return ()=>unsuscribe();
},[])



  return (
    <div className={`z-40 fixed bottom-0 left-0 px-2 w-full h-[50px] bg-black flex items-center gap-10 justify-center md:top-0  md:left-0 md:gap-10 md:justify-normal md:items-start  md:px-8 md:pt-12 md:h-full md:max-w-[250px]  md:flex-col
      ${hidden ? "translate-y-full" : ""} md:translate-y-0 z-50 ease-in-out transition-all`} id="navbar" >
     <div id="logo" className='hidden md:w-7/12 md:block'>
      <InstagramLogo />
     </div> 
      <HomeNav/>
      <ReelNav/><NewPostNav/>
      
      
      
      <MessageNav/>
      <ProfileNav/>
    </div>
  )
}

export default Navbar