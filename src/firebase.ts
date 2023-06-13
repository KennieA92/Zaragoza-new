// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjNSY05LkJMAHm0htjpg1dWdoMrwUV9FA",
    authDomain: "happy-zaragoza-erasmus.firebaseapp.com",
    projectId: "happy-zaragoza-erasmus",
    storageBucket: "happy-zaragoza-erasmus.appspot.com",
    messagingSenderId: "970341879614",
    appId: "1:970341879614:web:0c847ee8c7bd984c34666f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export const auth = getAuth(app);