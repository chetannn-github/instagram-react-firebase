import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/loggedInUserSlice';
import { closeNewPostModal } from '../../redux/modalSlice';
import { v4 } from 'uuid';


const useCreatePost = () => {
   let loggedInUser = useSelector((store)=>(store.loggedInUser));
    let dispatch = useDispatch();
 // return a function which takes postdetails and create post in db 
   const handleCreatePost = async(caption) =>{
    // new post create in db 
      try{
         const postInfo = {
            caption,
            owner:loggedInUser.uid,
            postPicURL:"./post.webp",
            likes:[],
            comments:[],
            createdAt:Date.now(),
            uid : v4()

         }  
         await setDoc(doc(firestore, "posts", postInfo.uid), postInfo);
        
        
        

         // uid se user ko dhundh krr usme post ki uid add krdoo 
         const userRef = doc(firestore, 'users', loggedInUser.uid);
         await updateDoc(userRef, {posts:[...loggedInUser.posts,postInfo.uid]});

         const updatedProfile = await getDoc(userRef);
         // console.log(updatedProfile.data());
         dispatch(addUser(updatedProfile.data()));
         localStorage.setItem("user", JSON.stringify(updatedProfile.data()));
         dispatch(closeNewPostModal());



      }catch(error){
         console.log(error)
      }
   

    // uid se user ko dhundh krr usme post ki uid add krdoo 
 }
 return handleCreatePost
}
export default useCreatePost