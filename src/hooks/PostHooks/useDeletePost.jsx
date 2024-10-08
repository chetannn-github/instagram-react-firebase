import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/loggedInUserSlice";
import toast from "react-hot-toast";


const useDeletePost = () => {
    let loggedInUser = useSelector((store) =>(store.loggedInUser));
    let dispatch = useDispatch();
    let handleDeletePost = async(postId,owner) =>{ 
        try {
            if(owner != loggedInUser.uid){
                return 
            }


            // uid ke basis pr post ko delete krdo 
            await deleteDoc(doc(firestore, "posts", postId));
            console.log("delete ho gya !!");

            let updatedPosts = loggedInUser.posts.filter((post)=>(post !== postId));
            const userRef = doc(firestore, "users", loggedInUser.uid);
            // updating post
            await updateDoc(userRef, {posts:updatedPosts});
            dispatch(addUser({ ...loggedInUser, posts: updatedPosts}));
            localStorage.setItem("user", JSON.stringify({ ...loggedInUser, posts: updatedPosts }));
            toast.success("Post delete ho gaya, khalaas! 👋")
        } catch (error) {
            console.log(error.message);
            toast.error("Post ko delete nahi kar saka, kuch technical issue hai! 🤖")
            
        }
       

    }
    return handleDeletePost
}

export default useDeletePost