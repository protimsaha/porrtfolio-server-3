// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlXzOOKrj3fVM65mg9tWc_sgISNaVmqVU",
  authDomain: "portfolio-backend-ace42.firebaseapp.com",
  projectId: "portfolio-backend-ace42",
  storageBucket: "portfolio-backend-ace42.appspot.com",
  messagingSenderId: "121887963301",
  appId: "1:121887963301:web:93fb57cba3e68704c8754c",
  measurementId: "G-6W2EMDJ5BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);