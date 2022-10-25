// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcYXPAlL-wuOxJ1TRpX6nZxZcaQD5Pq_o",
  authDomain: "ikramah-hackathon.firebaseapp.com",
  projectId: "ikramah-hackathon",
  storageBucket: "ikramah-hackathon.appspot.com",
  messagingSenderId: "760141569230",
  appId: "1:760141569230:web:2e3a1a13815462795a049f",
  measurementId: "G-M20XV89XF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
