throw new Error("Replace src/app/lib/firebase.config.js with your own config");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfWmb9eJ_Qj0Jv1mzSergkIIzLpXU2r1I",
  authDomain: "test-webapp-ingdg.firebaseapp.com",
  projectId: "test-webapp-ingdg",
  storageBucket: "test-webapp-ingdg.firebasestorage.app",
  messagingSenderId: "738818534343",
  appId: "1:738818534343:web:a7f9de7e73f4e51826c7e2",
  measurementId: "G-RSTTX4TZ0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
