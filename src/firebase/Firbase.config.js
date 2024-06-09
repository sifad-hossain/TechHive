// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVVPavkzIWx0kjZGQ6HXt027cmHs1ROAw",
    authDomain: "techhive-be21c.firebaseapp.com",
    projectId: "techhive-be21c",
    storageBucket: "techhive-be21c.appspot.com",
    messagingSenderId: "571069013240",
    appId: "1:571069013240:web:605aeb68cac1a65c08af0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;