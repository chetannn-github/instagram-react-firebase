import {  doc, updateDoc } from "firebase/firestore";
import {firestore} from "../firebase"
import { useDispatch } from "react-redux";
import { closeEditPostModal } from "../redux/modalSlice";


const useEditPost = () => {
    let dispatch = useDispatch();
    let handleEditPost = async(uid,caption) =>{
        // post ki uid ke basis pr post ko find krege 
        try {
            console.log(uid, caption)
            const postRef = doc(firestore, "posts", uid);
            // updating post
            await updateDoc(postRef, {caption});
            
            dispatch(closeEditPostModal());
        } catch (error) {
            console.log(error)
        }
       

    }

    return handleEditPost


}

export default useEditPost