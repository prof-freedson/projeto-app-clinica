// require('dotenv').config({ path: '.Env' })
// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';



// const firebaseConfig = {
//     apiKey: process.env.apiKey, 
//     authDomain:process.env.authDomain,
//     projectId:process.env.projectId,
//     storageBucket:process.env.storageBucket,
//     messagingSenderId:process.env.messagingSenderId,
//     appId:process.env.appId,
//     measurementId:process.env.measurementId,

// }

const firebaseConfig = {
    apiKey: "AIzaSyCWJv6vmEIuqU8dk64kHZNcjxIKCl-Reag",
    authDomain: "vitalmob2023.firebaseapp.com",
    projectId: "vitalmob2023",
    storageBucket: "vitalmob2023.appspot.com",
    messagingSenderId: "635382772012",
    appId: "1:635382772012:web:c0706534e37d08ee2abc89",
    measurementId: "G-LBP74CMNS2"

}




firebase.initializeApp(firebaseConfig)
export { firebase };