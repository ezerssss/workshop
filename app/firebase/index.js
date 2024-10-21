// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYE53BKMy8HntoS0T-h4z7ISnyDBRSrSA",
    authDomain: "workshop-761c8.firebaseapp.com",
    projectId: "workshop-761c8",
    storageBucket: "workshop-761c8.appspot.com",
    messagingSenderId: "92772246442",
    appId: "1:92772246442:web:28626301898de6ca3b01d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
