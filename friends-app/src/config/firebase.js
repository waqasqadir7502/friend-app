import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyDIJCddz99ZpgphrJt7LmGWIoDxxp-ykmU",
  authDomain: "the-analog-b9b25.firebaseapp.com",
  projectId: "the-analog-b9b25",
  storageBucket: "the-analog-b9b25.appspot.com",
  messagingSenderId: "553257649006",
  appId: "1:553257649006:web:50b63bcaad5f27afbfb77f",
  measurementId: "G-HZ0VP5QJY0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore();



export {
    auth,
    createUserWithEmailAndPassword,

    db,
    doc,
    setDoc,
}