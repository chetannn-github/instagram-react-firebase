import { useDispatch, useSelector } from "react-redux"
import {firestore} from "../../firebase"
import { collection, getDocs, query, where } from "firebase/firestore";
import { addSuggestedUsers } from "../../redux/suggestedUsers";
import toast from "react-hot-toast";

const useSuggestedUser = () => {
    let loggedInUser = useSelector((store) =>(store.loggedInUser));
    let dispatch = useDispatch();
    
    let fetchSuggestedUser =async () =>{
        // fetch all users from firebase db which are not in followers list of loggedin user 
        try {
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
            
            console.log("suggested users add hue");
            dispatch(addSuggestedUsers(suggestedUsers));
        } catch (error) {
            console.log("error in suggesting user" + error.message);
            toast.error("error in suggesting users");
        }
           
    }
    return fetchSuggestedUser
}

export default useSuggestedUser