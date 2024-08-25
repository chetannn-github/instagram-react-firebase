import {  doc, updateDoc } from "firebase/firestore";
import {firestore} from "../../firebase"
import { useDispatch, useSelector } from "react-redux";
import { closeEditPostModal } from "../../redux/modalSlice";
import { addUser } from "../../redux/loggedInUserSlice";
import { useState } from "react";
import toast from "react-hot-toast";


const useEditPost = () => {
    let dispatch = useDispatch();
    let loggedInUser  = useSelector((store)=>(store.loggedInUser))
    let [loading,setLoading] = useState(false);

    let handleEditPost = async(uid,caption) =>{
        // post ki uid ke basis pr post ko find krege 
        try {
            if(loading){
                toast.error("update ho rhaa thora rukk jaoo!!⏰");
                return
            }
            setLoading(true)


            console.log(uid, caption)
            const postRef = doc(firestore, "posts", uid);
            // updating post
            await updateDoc(postRef, {caption});
            
            dispatch(closeEditPostModal());
            dispatch(addUser(loggedInUser))
            setLoading(false);
            toast.success("post updated successfully! ")

        } catch (error) {
            console.log(error);
            toast.error("something wrong in edit post!!")
        }
       

    }

    return {handleEditPost , loading}


}

export default useEditPost