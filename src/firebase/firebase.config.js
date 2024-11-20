// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTiU83x2hUHnybgurJhfo-pb5QebZUddo",
  authDomain: "assingment-10-1899d.firebaseapp.com",
  projectId: "assingment-10-1899d",
  storageBucket: "assingment-10-1899d.firebasestorage.app",
  messagingSenderId: "766500446114",
  appId: "1:766500446114:web:159c6651f0f297b222dcfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);