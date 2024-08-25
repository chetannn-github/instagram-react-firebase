import { useDispatch, useSelector } from "react-redux";
import { firestore, storage } from "../../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { addUser } from "../../redux/loggedInUserSlice";
import { addProfileUser } from "../../redux/profilePageUserSlice";
import { closeEditProfileModal } from "../../redux/modalSlice";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useState } from "react";
import toast from "react-hot-toast";


const useUpdateProfile = () => {
    let loggedInUser = useSelector((store)=>(store.loggedInUser));
    let dispatch = useDispatch();
    let [loading, setLoading] = useState(false);

  let handleUpdateProfile = async(username, bio,selectedFile) =>{
    console.log(username,bio);
    // check username phele se exist toh nhii kr rhaa hhh  
    try{
      if (loading) {
        toast.error("Arre, edit ho rhii hhh, thoda sa wait kar lo! ⏰")
        
        return
      } 

      setLoading(true);




      let URL = loggedInUser.profilePicURL ;
      if(selectedFile){
        const storageRef = ref(storage, `profilePics/${loggedInUser.uid}`);
        await uploadString(storageRef, selectedFile, 'data_url')
        console.log('Uploaded a data_url string!');
        URL = await getDownloadURL(storageRef)
      }
      
        //firestore me update krr degee

        const userRef = doc(firestore, 'users', loggedInUser.uid);
        let updatedUser = {...loggedInUser,username, bio,profilePicURL:URL}
        await updateDoc(userRef,updatedUser);

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
        setLoading(false);

        }catch(err){
            console.log(err.message)
        }

  }
  return {handleUpdateProfile, loading}
}

export default useUpdateProfile