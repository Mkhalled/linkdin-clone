
import firebase from "firebase";
//V9
// import  * as firebase from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAH3HzDsBTpQuPEfuscMNGNIk6JfPOaQIo",
    authDomain: "linkdin-clone-4e90c.firebaseapp.com",
    projectId: "linkdin-clone-4e90c",
    storageBucket: "linkdin-clone-4e90c.appspot.com",
    messagingSenderId: "596142275338",
    appId: "1:596142275338:web:af52a29bb8d9ac502818f3"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

   export {db ,auth};