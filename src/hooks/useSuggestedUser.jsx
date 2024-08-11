import { useDispatch, useSelector } from "react-redux"
import {firestore} from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore";
import { addSuggestedUsers } from "../redux/suggestedUsers";

const useSuggestedUser = () => {
    let loggedInUser = useSelector((store) =>(store.loggedInUser));
    let dispatch = useDispatch();
    
    let fetchSuggestedUser =async () =>{
        // fetch all users from firebase db which are not in followers list of loggedin user 
       
            const followings = loggedInUser.followings;
            let q ;
            if(followings.length){
             q = query(collection(firestore, "users"), where("uid", "not-in", followings));
            }else{
                q = query(collection(firestore, "users"), where("uid", "!=", loggedInUser.uid));
            }

            const querySnapshot = await getDocs(q);
            let suggestedUsers =[];
            querySnapshot.forEach((doc) => {
                if(doc.data().uid!= loggedInUser.uid){suggestedUsers.push(doc.data());}
              
            //   console.log(doc.id, " => ", doc.data());
            });

          dispatch(addSuggestedUsers(suggestedUsers));
    }
    return fetchSuggestedUser}

export default useSuggestedUser