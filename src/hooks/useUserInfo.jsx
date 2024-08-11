import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

const useUserInfo = () => {

 let handleUserInfo = async(uid) =>{
    const userRef = doc(firestore, 'users', uid);
    let userInfo = await getDoc(userRef);
    // console.log(userInfo.data())
    return userInfo.data()
 }
 return handleUserInfo;
}

export default useUserInfo