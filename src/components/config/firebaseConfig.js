// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN66OpXPERuA47mvdWLEYjuJJVCWBKFsM",
  authDomain: "food-cart-app-3e126.firebaseapp.com",
  databaseURL: "https://food-cart-app-3e126-default-rtdb.firebaseio.com",
  projectId: "food-cart-app-3e126",
  storageBucket: "food-cart-app-3e126.appspot.com",
  messagingSenderId: "628593745815",
  appId: "1:628593745815:web:6fbc35109ab3e8f025eed2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

