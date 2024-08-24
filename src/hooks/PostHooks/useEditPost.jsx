import {  doc, updateDoc } from "firebase/firestore";
import {firestore} from "../../firebase"
import { useDispatch, useSelector } from "react-redux";
import { closeEditPostModal } from "../../redux/modalSlice";
import { addUser } from "../../redux/loggedInUserSlice";


const useEditPost = () => {
    let dispatch = useDispatch();
    let loggedInUser  = useSelector((store)=>(store.loggedInUser))
    let handleEditPost = async(uid,caption) =>{
        // post ki uid ke basis pr post ko find krege 
        try {
            console.log(uid, caption)
            const postRef = doc(firestore, "posts", uid);
            // updating post
            await updateDoc(postRef, {caption});
            
            dispatch(closeEditPostModal());
            dispatch(addUser(loggedInUser))

        } catch (error) {
            console.log(error)
        }
       

    }

    return handleEditPost


}

export default useEditPost