import { signOut } from 'firebase/auth';

import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const useSignout = () => {
    const navigate = useNavigate();



    const handleSignout = ()=>{
      signOut(auth).then(() => {
       console.log("signout hogyaa")
      //  navigate("/auth")
      }).catch((error) => {
        // An error happened.
      });
  }
  return handleSignout

}

export default useSignout