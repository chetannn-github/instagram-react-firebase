import { useDispatch } from "react-redux"
import { addErrorMsg } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export let useLogin = () =>{
    let dispatch = useDispatch();
    const navigate = useNavigate();
    let handleLogin = (email,password) =>{
          if(!email || !password){
            dispatch(addErrorMsg("bhai kya krr rha hh yrr tu"))
        }
    else{
        dispatch(addErrorMsg(null));
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
          console.log(userCredential.user);
          navigate('/');})
        .catch((error) => {
          if (error.message.includes("auth/user-not-found")) {
           dispatch(addErrorMsg("No user found with this email."));
          } else if (error.message.includes("auth/wrong-password")) {
           dispatch(addErrorMsg("Incorrect password."));
          } else if (error.message.includes("auth/invalid-email")) {
           dispatch(addErrorMsg("Invalid email address."));
          } else if (error.message.includes("auth/invalid-credential")) {
           dispatch(addErrorMsg("Invalid credential."));
          } else if (error.message.includes("auth/too-many-requests")) {
           dispatch(addErrorMsg("Access to this account has been temporarily disabled due to many failed login attempts."));
          } else {
         dispatch(addErrorMsg("something went wrong"));
          }
        });

    }}

    return handleLogin;


}

      



