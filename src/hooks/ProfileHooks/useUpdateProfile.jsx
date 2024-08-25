import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { addUser } from "../../redux/loggedInUserSlice";
import { addProfileUser } from "../../redux/profilePageUserSlice";
import { closeEditProfileModal } from "../../redux/modalSlice";


const useUpdateProfile = () => {
    let loggedInUser = useSelector((store)=>(store.loggedInUser));
    let dispatch = useDispatch();

  let handleUpdateProfile = async(username, bio) =>{
    console.log(username,bio);
    // check username phele se exist toh nhii kr rhaa hhh  
    try{
        //firestore me update krr degee

        const userRef = doc(firestore, 'users', loggedInUser.uid);
        await updateDoc(userRef, { username,bio });

        const updatedProfile = await getDoc(userRef);
        console.log(updatedProfile.data());
      
        if (updatedProfile.exists()) {
          // Update local storage && redux
          dispatch(addUser(updatedProfile.data()));
          dispatch(addProfileUser(updatedProfile.data()));
          localStorage.setItem("user", JSON.stringify(updatedProfile.data()));
        }
        // hide the modal
        dispatch(closeEditProfileModal());

        }catch(err){
            console.log(err.message)
        }

  }
  return handleUpdateProfile
}

export default useUpdateProfile