// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAugwbn6pbAIXJBe6OlpqG_ZQziFJtyJro",
  authDomain: "perfect-passion.firebaseapp.com",
  projectId: "perfect-passion",
  storageBucket: "perfect-passion.appspot.com",
  messagingSenderId: "377294448467",
  appId: "1:377294448467:web:4f2b26cbb2123d21e963a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;