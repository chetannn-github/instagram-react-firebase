import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Auth from "./Pages/Auth"
import Search from "./Pages/Search";
import Notifications from "./Pages/Notifications";
import Feed from "./Pages/Feed";
import NewPost from "./Pages/NewPost";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}>
          <Route index element={<Feed/>} />
          <Route path="search" element={<Search />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="newpost" element={<NewPost/>} />
          
      </Route>
        
        <Route path="/auth" element={<Auth />} />
        <Route path="/:username" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;