// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmya78CDgP_62BObEC6GORB1PG1-TbT8Y",
  authDomain: "tanjums-shop.firebaseapp.com",
  projectId: "tanjums-shop",
  storageBucket: "tanjums-shop.appspot.com",
  messagingSenderId: "589395070137",
  appId: "1:589395070137:web:c70e436cf40b1cfa625f68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;