import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../../firebase";
import { addFeedPosts } from "../../redux/feedPostsSlice";
import { useEffect } from "react";


const useFeedPosts = () => {
    let loggedInUser = useSelector((store)=>(store.loggedInUser));
    let dispatch = useDispatch();
    useEffect(()=>{handleFeedPosts()},[loggedInUser , loggedInUser.followings])
   
  const handleFeedPosts = async() =>{
    try{
      // saari  post nikalo jinke owner  loggeduser ke followings array  me aate ho aur khud ki bhii   aur redux me update krdo
      if(!loggedInUser && !loggedInUser.followings ) {return}
      let feedPostOwners = [...loggedInUser.followings, loggedInUser.uid]
      const q = query(collection(firestore, "posts"), where("owner", "in", feedPostOwners));

      const querySnapshot = await getDocs(q);
      let feedPosts =[];
      querySnapshot.forEach((doc) => {
          
          // console.log(doc.id, " => ", doc.data());
          feedPosts.push(doc.data());
        });
        // redux me update krdoo
        dispatch(addFeedPosts(feedPosts));

        





    }catch(error){
      console.log(error);
    }
  }
  
}

export default useFeedPosts