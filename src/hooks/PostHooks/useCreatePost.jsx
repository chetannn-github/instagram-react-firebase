import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { firestore, storage } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/loggedInUserSlice';
import { closeNewPostModal } from '../../redux/modalSlice';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { useState } from 'react';
import toast from 'react-hot-toast';


const useCreatePost = () => {
   let [loading, setLoading] = useState(false);
   let loggedInUser = useSelector((store)=>(store.loggedInUser));
    let dispatch = useDispatch();
 // return a function which takes postdetails and create post in db 
   const handleCreatePost = async(caption,selectedFile) =>{

try{
     
   
   if (!caption) {
      toast.error("Caption kahan hai, bhool gaye? 🙄")
      return
    }
    
    if (!selectedFile) {
      toast.error("Image select kar lo, thoda sa effort toh kar lo! 😒")
      return
    }
    
    if (loading) {
      toast.error("Arre, post upload ho rhii hhh, thoda sa wait kar lo! ⏰")
      
      return
    } 

      setLoading(true)

    

      const storageRef = ref(storage, `posts/${loggedInUser.uid}/${new Date().getTime()}`);
      await uploadString(storageRef, selectedFile, 'data_url')
      console.log('Uploaded a data_url string!');
      let URL = await getDownloadURL(storageRef)
    
    // new post create in db
      
         const postInfo = {
            caption,
            owner:loggedInUser.uid,
            postPicURL:URL,
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
         setLoading(false)
         toast.success("Aapka post create ho chuka hai, duniya ko dikha do! 🌎")


      }catch(error){
         console.log(error)
         toast.error("Post create mein kuch technical issue hai, try again later! 🤖")
      }
   

    // uid se user ko dhundh krr usme post ki uid add krdoo 
 }
 return {handleCreatePost,loading}
}
export default useCreatePost