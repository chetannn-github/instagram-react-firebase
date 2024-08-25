import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACpxe9g1WwZoknwdclw5M-uvxmJ-PVTZQ",
  authDomain: "insta-react-699bb.firebaseapp.com",
  projectId: "insta-react-699bb",
  storageBucket: "insta-react-699bb.appspot.com",
  messagingSenderId: "804648223476",
  appId: "1:804648223476:web:d2f08f4544504f531554a1",
  measurementId: "G-XQ030ZSP2K"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);
export {firestore, storage};

