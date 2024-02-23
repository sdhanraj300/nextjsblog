// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE,
  authDomain: "netflix-tailwindcss.firebaseapp.com",
  projectId: "netflix-tailwindcss",
  storageBucket: "netflix-tailwindcss.appspot.com",
  messagingSenderId: "276399452632",
  appId: "1:276399452632:web:4cb38b0015cf3e2430c2ad",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
