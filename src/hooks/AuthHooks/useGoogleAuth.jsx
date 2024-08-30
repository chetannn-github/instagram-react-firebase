import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { firestore } from "../../firebase";
import { addUser } from "../../redux/loggedInUserSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";



const auth = getAuth();
    const useGoogleAuth = () =>{
    const navigate = useNavigate();
    let dispatch = useDispatch();
    const handleGoogleAuth =async ()=>{
        const provider = new GoogleAuthProvider();

        try{
            let {user} = await signInWithPopup(auth, provider);
            // console.log(user);

            //checking is it signup / login 
            const q = query(collection(firestore, "users"), where("email", "==", user.email));
            const querySnapshot = await getDocs(q);

            //login
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                dispatch(addUser(doc.data()));
                localStorage.setItem("user", JSON.stringify(doc.data()));
              })

            //signup
            if(querySnapshot.empty && user){
                const userInfo = {
                    email:user.email ,
                    username:user.email.split("@")[0],
                    uid:user.uid,
                    bio:"",
                    profilePicURL:user.photoURL,
                    followers:[],
                    followings:["FjkZzIL9cqe0FNHq2VNL1VH76wl1"],
                    posts:[],
                    createdAt:Date.now(),
    
                }
                await setDoc(doc(firestore, "users", userInfo.uid), userInfo);
                // console.log("data save hua - signup with google");
                dispatch(addUser(userInfo));
                localStorage.setItem("user", JSON.stringify(userInfo));
            }
            toast.success(" aapka swagat hai! 👏")
            navigate("/");
        }
      
        
        catch(error){
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            
            // The AuthCredential type that was used.
           console.log(error)
           toast.error("Auth failed ! try again")
            // ...
        };

    }
    return handleGoogleAuth
    }

export default useGoogleAuth;