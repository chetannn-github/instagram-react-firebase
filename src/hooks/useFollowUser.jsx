import { useDispatch, useSelector } from "react-redux"
import {firestore} from "../firebase"
import { addUser } from "../redux/loggedInUserSlice";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const useFollowUser = () => {
    let loggedInUser = useSelector((store)=>(store.loggedInUser));
    let dispatch = useDispatch();

    let handleFollow =async (uid) =>{
        let follow = loggedInUser.followings.includes(uid);
        if(follow){
            // unfollow  
            console.log("unfollow ho rha hh")
            //remove from following list of loggedin user then save to db 
            const loggedUserRef = doc(firestore, "users", loggedInUser.uid);
            const updatedFollowings = loggedInUser.followings.filter((user) => user !== uid);
            await updateDoc(loggedUserRef, {followings:updatedFollowings});
            dispatch(addUser({ ...loggedInUser, followings: updatedFollowings }));
      

            // remove from follower list of username user then save to db
            const userRef = doc(firestore, "users", uid);
            const otherUser = await getDoc(userRef);
            const updatedFollowers = otherUser.data().followers.filter((user) => user !== loggedInUser.uid);
            await updateDoc(userRef, {followers:updatedFollowers});
        }
        else{
        //follow
        try{
            console.log("follow ho rha hh")
            const loggedUserRef = doc(firestore, "users", loggedInUser.uid);
            const updatedFollowings = [...loggedInUser.followings, uid];
            await updateDoc(loggedUserRef, {followings:updatedFollowings});
            dispatch(addUser({ ...loggedInUser, followings: updatedFollowings }));
      

            // remove from follower list of username user then save to db
            const userRef = doc(firestore, "users", uid);
            const otherUser = await getDoc(userRef);
            const updatedFollowers = [...otherUser.data().followers, loggedInUser.uid];
            
            await updateDoc(userRef, {followers:updatedFollowers});

        }
        catch(err) {
            console.log(err.message)
        }
    }

    }
    return handleFollow;
}

export default useFollowUser