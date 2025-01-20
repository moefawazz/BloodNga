import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsO13e0FTMgXAV_Dnm3K0P52Cn1rUlMR4",
  authDomain: "managebarcode.firebaseapp.com",
  projectId: "managebarcode",
  storageBucket: "managebarcode.firebasestorage.app",
  messagingSenderId: "10581970033",
  appId: "1:10581970033:web:5575adbe53b7171cb25fd0",
  measurementId: "G-SR0PJRVGQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const imageDb=getStorage(app)