import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProfileUser, removeProfileUser } from "../../redux/profilePageUserSlice";

const useProfileData = async(username) => {
    let dispatch = useDispatch();
    useEffect(()=>{fetchProfileData()},[username]);
    
    
    let fetchProfileData = async()=>{
        const q = query(collection(firestore, "users"), where("username", "==", username));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
      
        // console.log(doc.id, " => ", doc.data());
        dispatch(addProfileUser(doc.data()));
        })
    
    } 
    
}

export default useProfileData