import { useDispatch } from "react-redux"
import { addErrorMsg } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export let useSignup = () =>{
    let dispatch = useDispatch();
    const navigate = useNavigate();
    let handleLogin = (email,username,password,confirmPassword ) =>{
          if((!email || !password || !username || !confirmPassword) || (password !=confirmPassword)) {
            dispatch(addErrorMsg("bhai kya krr rha hh yrr tu"))
        }
        
    else{
        dispatch(addErrorMsg(null));
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed up 
             const user = userCredential.user;
             console.log(user);
                navigate("/");
            })
        
            .catch((error) => {
                if (error.message.includes("auth/email-already-in-use")) {
                addErrorMsg(dispatch("Email already in use."));
              } else if (error.message.includes("auth/invalid-email")) {
                addErrorMsg(dispatch("Invalid email address."));
              } else if (error.message.includes("auth/weak-password")) {
                addErrorMsg(dispatch("Weak password."));
              } else {
                addErrorMsg(dispatch("An unknown error occurred."));
              
              }
            });
  

    }}

    return handleLogin;


}

      



