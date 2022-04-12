// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkQq3pqaU6rW3OsYV1BvToApLfZOfuexY",
    authDomain: "ema-john-simple-5b15a.firebaseapp.com",
    projectId: "ema-john-simple-5b15a",
    storageBucket: "ema-john-simple-5b15a.appspot.com",
    messagingSenderId: "5352714138",
    appId: "1:5352714138:web:f993a01c8e64b6ad8b1423"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;