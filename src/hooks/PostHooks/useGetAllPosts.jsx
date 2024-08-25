import { collection, getDocs,  query, where } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { firestore } from '../../firebase.js';
import { addProfilePosts, removeProfilePosts } from '../../redux/profilePosts.js';


const useGetAllPosts = () => {
   
    let dispatch = useDispatch();
    // uid ke basis prr saare posts ko dhundh krr redux  me add krdo 
    let handleGetAllPosts = async (username) =>{
        // find uid for that username
      try{
          const que= query(collection(firestore, "users"), where("username", "==", username));
          const querySnap = await getDocs(que);
          let user;
          querySnap.forEach((doc) => {
          user = doc.data();
          });

        
        // db se saari post laao jisme owner ki uid match krr rhii 
        dispatch(removeProfilePosts())
        const q = query(collection(firestore, "posts"), where("owner", "==", user.uid));
        const querySnapshot = await getDocs(q);
        let posts = [];

        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          posts.push(doc.data());
        });

        // redux  store  me krdo
        dispatch(addProfilePosts(posts));
      }
      catch(err){
        console.log(err)
      }
    }

    return handleGetAllPosts

}

export default useGetAllPosts