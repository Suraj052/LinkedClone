
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDBgOfjJWwL5wURZaL2cnUWghF_Z4ouo6k",
  authDomain: "linkedin-clone-bb244.firebaseapp.com",
  projectId: "linkedin-clone-bb244",
  storageBucket: "linkedin-clone-bb244.appspot.com",
  messagingSenderId: "146613453358",
  appId: "1:146613453358:web:bb973538fef72ff418d5bf"
};


// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth}