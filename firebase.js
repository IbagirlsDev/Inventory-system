// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0qwpWAS3skWm42We2MYnav6L-akQVVlw",
  authDomain: "inventary-1e848.firebaseapp.com",
  projectId: "inventary-1e848",
  storageBucket: "inventary-1e848.appspot.com",
  messagingSenderId: "787217097361",
  appId: "1:787217097361:web:af88778b4bc08611c61530",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//  `db` está disponible para cualquier archivo JS en tu proyecto
export { db };
