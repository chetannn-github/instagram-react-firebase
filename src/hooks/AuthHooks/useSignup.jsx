import { useDispatch } from "react-redux"
import { addErrorMsg } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { addUser } from "../../redux/loggedInUserSlice";


export let useSignup = () =>{
    let dispatch = useDispatch();
    const navigate = useNavigate();
    
    
    let handleSignup = async(email,username,password,confirmPassword ) =>{
      if((!email || !password || !username || !confirmPassword) || (password !=confirmPassword)) {
          dispatch(addErrorMsg("bhai kya krr rha hh yrr tu"));
          return;
      }
        
      dispatch(addErrorMsg(null));
    
      //CHECKING USERNAME ALREADY EXIST OR NOT
      const q = query(collection(firestore, "users"), where("username", "==", username));
      const querySnapshot = await getDocs(q);


      if(!querySnapshot.empty){
        dispatch(addErrorMsg("oops!! username already exists..."));
        return
      }


      try{
        let {user} = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser,{displayName: username});
        // saving user to db
        if(user){
          const userInfo = {
            email , username,
            uid:user.uid,
            bio:"",
            profilePicURL:"./user.webp",
            followers:[],
            followings:["Mklt9vKxC1bJQLJkJDVdCYQVJw42"],
            posts:[],
            createdAt:Date.now(),
          }
          await setDoc(doc(firestore, "users", userInfo.uid), userInfo);

          dispatch(addUser(userInfo));
          localStorage.setItem("user", JSON.stringify(userInfo));
          console.log("data save hua ")
        }
           
        navigate("/");
        }
        catch(error) {
          if (error.message.includes("auth/email-already-in-use")) {
          dispatch(addErrorMsg("Email already in use."));
        } else if (error.message.includes("auth/invalid-email")) {
          dispatch(addErrorMsg("Invalid email address."));
        } else if (error.message.includes("auth/weak-password")) {
          dispatch(addErrorMsg("Weak password."));
        } else {
          dispatch(addErrorMsg(error.message));
        
        }
      }

    }

    return handleSignup;
    

}

      



