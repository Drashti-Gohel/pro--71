import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyDPBuBlfAjDIXWzCr6xLE7L-LLCwSfwKHw",
  authDomain: "e-ride-8c878.firebaseapp.com",
  projectId: "e-ride-8c878",
  storageBucket: "e-ride-8c878.appspot.com",
  messagingSenderId: "1080339824350",
  appId: "1:1080339824350:web:cac15eb602d677bb828c4f"
};
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
