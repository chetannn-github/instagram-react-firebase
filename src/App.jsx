import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Auth from "./Pages/Auth"
import Search from "./Pages/Search";
import Notifications from "./Pages/Notifications";
import Feed from "./Pages/Feed";
import NewPost from "./Pages/NewPost";
import { useState } from "react";
import { useSelector } from "react-redux";
import useFeedPosts from "./hooks/useFeedPosts";

function App() {
 let loggedInUser = useSelector((store)=>(store.loggedInUser))
 
  
  // console.log(user)
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={!loggedInUser ? <Navigate to="/auth" /> :<Home />}>
          <Route index element={<Feed/>} />
          <Route path="notifications" element={<Notifications />} />
          
          
      </Route>
        
      <Route path="/auth" element={loggedInUser ? <Navigate to="/" /> : <Auth />}/>
      <Route path="/:username" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;