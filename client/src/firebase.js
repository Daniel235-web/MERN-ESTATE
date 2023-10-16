// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d553c.firebaseapp.com",
  projectId: "mern-estate-d553c",
  storageBucket: "mern-estate-d553c.appspot.com",
  messagingSenderId: "477237774142",
  appId: "1:477237774142:web:2524b502afdd6497850e6f"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);