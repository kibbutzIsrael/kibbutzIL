// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2lLiDun1SBFVNp9LYTzVQpXvSRgnINz4",
  authDomain: "kibbutzil-homepage.firebaseapp.com",
  projectId: "kibbutzil-homepage",
  storageBucket: "kibbutzil-homepage.appspot.com",
  messagingSenderId: "632741138209",
  appId: "1:632741138209:web:111fdeadc5bf8bd541f860",
  measurementId: "G-2R1VLPLDHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);