import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAdqjBZGFYLs00LR_Mc08i6Pwwcfzerc9A",
  authDomain: "busybuy-17e65.firebaseapp.com",
  projectId: "busybuy-17e65",
  storageBucket: "busybuy-17e65.appspot.com",
  messagingSenderId: "629997349943",
  appId: "1:629997349943:web:124641d3334043c7fd63b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
