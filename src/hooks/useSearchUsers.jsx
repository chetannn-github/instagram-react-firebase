import { collection, query, where, getDocs, limit } from "firebase/firestore";
import {firestore} from "../firebase"
import { useDispatch } from "react-redux";
import { addSearchedUser, removeSearchedUser } from "../redux/searchedUserSlice";
const useSearchUsers = () => {
    //input is username and o/p will be all users which includes that username
    let dispatch = useDispatch();

    let handleSearchUsers = async(username) =>{
        dispatch(removeSearchedUser());
        const userRef = collection(firestore, "users");
        const q = query(collection(firestore, "users"), where("username", ">=", username), where("username", "<=", username + "\uf8ff"), limit(3));


        const querySnapshot = await getDocs(q);
        let searchResults = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.data())
            searchResults.push(doc.data());
        });

        // console.log(searchResults);
        // add data to redux store 
        dispatch(addSearchedUser(searchResults));


    }
    return handleSearchUsers;


}

export default useSearchUsers