// import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
// import { useEffect } from "react";
// import { useNavigate} from "react-router-dom";

// const auth = getAuth();

// const useGoogleAuth = () => {
//   const navigate = useNavigate();

//   const handleGoogleAuth = async () => {
//     try {
       
//       await signInWithRedirect(auth, new GoogleAuthProvider());
      
//     } catch (error) {
//       console.log(error.message);
//     }

    
//   };

 

//   return handleGoogleAuth;
// }

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const auth = getAuth();
    const useGoogleAuth = () =>{
        const navigate = useNavigate();

    const handleGoogleAuth = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            navigate("/")
            
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

    }
    return handleGoogleAuth
    }

export default useGoogleAuth;