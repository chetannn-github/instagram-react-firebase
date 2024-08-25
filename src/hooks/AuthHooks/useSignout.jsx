import { signOut } from 'firebase/auth';

import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const useSignout = () => {
    const navigate = useNavigate();
    const handleSignout = ()=>{
      signOut(auth).then(() => {
       console.log("signout hogyaa");
       toast.success("Chalo, phir milenge! Logout successful 😊")
       localStorage.removeItem("user")
      //  navigate("/auth")
      }).catch((error) => {
        // An error happened.
      });
  }
  return handleSignout

}

export default useSignout