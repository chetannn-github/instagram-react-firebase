import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../../firebase";
import { addFeedPosts } from "../../redux/feedPostsSlice";


const useLikePost = () => {
    let loggedInUser = useSelector((store) =>(store.loggedInUser));
    let feedPosts = useSelector((store) =>(store.feedPosts));
    let dispatch = useDispatch();

    let handleLikePost = async (postId) =>{
    
    try {
        // post id ke basis pr post ko search 
        const q = query(collection(firestore, "posts"), where("uid", "==", postId));
        let postData  ;
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            postData= doc.data();
           
        }); 


        // if loggedin user ki uid likes me exist krti hh  toh hata do

        if(postData.likes.includes(loggedInUser.uid)){
            //unlike
            console.log("unlike ho gya ")
            //post.likes array me se loggedInUser.uid hata do aur save krdo 
            let updatedLikes = postData.likes.filter((user)=>(user!==loggedInUser.uid));
            const postRef = doc(firestore, "posts",postId);
            await updateDoc(postRef, {likes:updatedLikes});
            
           
              // update  redux 
            let newFeedPosts = feedPosts.filter((feedPost)=>(feedPost.uid!== postId))
            dispatch(addFeedPosts([...newFeedPosts,{...postData,likes:updatedLikes}]))
        }
        else{
             // if loggedin user ki uid likes me exist nhii  krti hh  toh add kr do 
            //like
            console.log("like ho gya ")
            let updatedLikes =[...postData.likes, loggedInUser.uid];
            const postRef = doc(firestore, "posts",postId);
            await updateDoc(postRef, {likes:updatedLikes});


               // update  redux 
               let newFeedPosts = feedPosts.filter((feedPost)=>(feedPost.uid!== postId))
               dispatch(addFeedPosts([...newFeedPosts,{...postData,likes:updatedLikes}]))
        }
        
         
    } catch (error) {
        console.log(error)
        
    }
       
    }

 return handleLikePost
}


export default useLikePost