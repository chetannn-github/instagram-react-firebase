import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/loggedInUserSlice";


const useDeletePost = () => {
    let loggedInUser = useSelector((store) =>(store.loggedInUser));
    let dispatch = useDispatch();
    let handleDeletePost = async(postId) =>{ 
        // uid ke basis pr post ko delete krdo 
        await deleteDoc(doc(firestore, "posts", postId));
        console.log("delete ho gya !!");

        let updatedPosts = loggedInUser.posts.filter((post)=>(post !== postId));
        const userRef = doc(firestore, "users", loggedInUser.uid);
        // updating post
        await updateDoc(userRef, {posts:updatedPosts});
        dispatch(addUser({ ...loggedInUser, posts: updatedPosts}));
        localStorage.setItem("user", JSON.stringify({ ...loggedInUser, posts: updatedPosts }));

    }
    return handleDeletePost
}

export default useDeletePost