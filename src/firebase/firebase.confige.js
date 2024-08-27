// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyCVMUvx_7VxkcEQ-v9rUL_QZE1zOkz-TEc",
     authDomain: "react-career-hub-auth-6493b.firebaseapp.com",
     projectId: "react-career-hub-auth-6493b",
     storageBucket: "react-career-hub-auth-6493b.appspot.com",
     messagingSenderId: "1038661961721",
     appId: "1:1038661961721:web:e7efd802f86b0c15a8df28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;