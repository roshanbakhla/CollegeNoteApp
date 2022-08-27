// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_w-ykEjNef2coI-wDI8RMJNSS39Sf1s0",
  authDomain: "ssginoteapp.firebaseapp.com",
  projectId: "ssginoteapp",
  storageBucket: "ssginoteapp.appspot.com",
  messagingSenderId: "446446219389",
  appId: "1:446446219389:web:ede5aad6c452bfa7ef8114",
  measurementId: "G-X8WQ9HVHVF",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
 export const db = getFirestore()
 export const auth = getAuth(app);
const analytics = getAnalytics(app)
