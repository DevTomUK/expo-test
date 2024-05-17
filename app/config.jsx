
import { getDatabase } from 'firebase/database'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWuglJv-CNq5S6y7CaM8PSNyj9_avBDlg",
  authDomain: "expo-test-2.firebaseapp.com",
  databaseURL: "https://expo-test-2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expo-test-2",
  storageBucket: "expo-test-2.appspot.com",
  messagingSenderId: "992903587990",
  appId: "1:992903587990:web:b716375cdf0051403e3ab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)