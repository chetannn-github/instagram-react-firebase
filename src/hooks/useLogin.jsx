import { useDispatch } from "react-redux"
import { addErrorMsg } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { addUser } from "../redux/loggedInUserSlice";

export let useLogin = () =>{
    let dispatch = useDispatch();
    const navigate = useNavigate();
    let handleLogin = async(email,password) =>{
          if(!email || !password){
            dispatch(addErrorMsg("bhai kya krr rha hh yrr tu"))
        }
    else{
        dispatch(addErrorMsg(null));
        try{
           await signInWithEmailAndPassword(auth, email, password);

          const q = query(collection(firestore, "users"), where("email", "==", email));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            dispatch(addUser(doc.data()));
            localStorage.setItem("user", JSON.stringify(doc.data()));
          })
          navigate('/');

        }catch(error)  {
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
        }
      
    }}

    return handleLogin;


}

      



