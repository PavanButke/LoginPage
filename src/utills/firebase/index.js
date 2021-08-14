import firebase  from "firebase";
import "firebase/firestore";
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyCsFTJGAAgVHkbm-MY0G8U1hw2458I7xtc",
  authDomain: "loginapp-fd2a3.firebaseapp.com",
  projectId: "loginapp-fd2a3",
  storageBucket: "loginapp-fd2a3.appspot.com",
  messagingSenderId: "746628795613",
  appId: "1:746628795613:web:ccd0e4211823c729649f34"
};



firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth =   firebase.auth();

export {db , auth};