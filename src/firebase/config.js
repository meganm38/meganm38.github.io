// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8wanHmGFNOmvAnp_w6klJS1y1zNONZLU",
  authDomain: "mywebsite-6af0e.firebaseapp.com",
  projectId: "mywebsite-6af0e",
  storageBucket: "mywebsite-6af0e.appspot.com",
  messagingSenderId: "493099119178",
  appId: "1:493099119178:web:eb439734bc02eeac3aacb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }