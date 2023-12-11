// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoPNYnR3dci4zXzdvJz9Iscvb6YM9-iOs",
  authDomain: "ema-john-with-firebase-a-1fc6c.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-1fc6c",
  storageBucket: "ema-john-with-firebase-a-1fc6c.appspot.com",
  messagingSenderId: "787593246005",
  appId: "1:787593246005:web:4aba745a79210f8f37887c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;