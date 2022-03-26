// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1eRjANNDSxzh_SHlN9nPj3tH49gPWCn4",
  authDomain: "busmate-test.firebaseapp.com",
  databaseURL:
    "https://busmate-test-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "busmate-test",
  storageBucket: "busmate-test.appspot.com",
  messagingSenderId: "317259706858",
  appId: "1:317259706858:web:547eb26cb70f941da68293",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
