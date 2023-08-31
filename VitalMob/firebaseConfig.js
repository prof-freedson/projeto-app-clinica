// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWJv6vmEIuqU8dk64kHZNcjxIKCl-Reag",
    authDomain: "vitalmob2023.firebaseapp.com",
    projectId: "vitalmob2023",
    storageBucket: "vitalmob2023.appspot.com",
    messagingSenderId: "635382772012",
    appId: "1:635382772012:web:c0706534e37d08ee2abc89",
    measurementId: "G-LBP74CMNS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };