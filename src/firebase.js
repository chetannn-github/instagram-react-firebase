// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACpxe9g1WwZoknwdclw5M-uvxmJ-PVTZQ",
  authDomain: "insta-react-699bb.firebaseapp.com",
  projectId: "insta-react-699bb",
  storageBucket: "insta-react-699bb.appspot.com",
  messagingSenderId: "804648223476",
  appId: "1:804648223476:web:d2f08f4544504f531554a1",
  measurementId: "G-XQ030ZSP2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);

export {firestore, storage};

