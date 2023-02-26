// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiRvBBjwMXs-Qw3_f49s7MskTUEmb7n5Y",
  authDomain: "next-js-app-81b9e.firebaseapp.com",
  projectId: "next-js-app-81b9e",
  storageBucket: "next-js-app-81b9e.appspot.com",
  messagingSenderId: "808135949085",
  appId: "1:808135949085:web:502a41fdd490558b16bff4",
  measurementId: "G-KHH6E61CJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);