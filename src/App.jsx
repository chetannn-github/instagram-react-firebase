import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Auth from "./Pages/Auth"
import Notifications from "./Pages/Notifications";
import Feed from "./Pages/Feed";

import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

function App() {
 let loggedInUser = useSelector((store)=>(store.loggedInUser))
 
 // console.log(user)
  return (
    <div className="relative bg-black">
    {/* <Toaster/> */}
    <Toaster className="z-50"  position="top-center"/>
    
    <BrowserRouter>
    
      <Routes>
          <Route path="/" element={!loggedInUser ? <Navigate to="/auth" /> :<Home />}>
            <Route index element={<Feed/>} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="/:username" element={<Profile />} />
          </Route>
        
          <Route path="/auth" element={loggedInUser ? <Navigate to="/" /> : <Auth />}/>
          
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;