// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkwq80NycoUy3PPn4S7UmNcZezVZSdqN0",
  authDomain: "oudbejaard.firebaseapp.com",
  projectId: "oudbejaard",
  storageBucket: "oudbejaard.firebasestorage.app",
  messagingSenderId: "726551290357",
  appId: "1:726551290357:web:f3bbbba5de6ac6b20a00bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);