import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Auth from "./Pages/Auth"
import Search from "./Pages/Search";
import Notifications from "./Pages/Notifications";
import Feed from "./Pages/Feed";
import NewPost from "./Pages/NewPost";

function App() {
  let user = localStorage.getItem("user");
  
  console.log(user)
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}>
          <Route index element={<Feed/>} />
          <Route path="notifications" element={<Notifications />} />
          
          
      </Route>
        
      <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />}
/>
        <Route path="/:username" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;