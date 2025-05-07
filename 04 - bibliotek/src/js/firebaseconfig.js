import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiJBfUbLV3ZwWnk3nfSjBYpwHBvIqWcdw",
  authDomain: "avancerad-js-eb920.firebaseapp.com",
  databaseURL: "https://avancerad-js-eb920-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "avancerad-js-eb920",
  storageBucket: "avancerad-js-eb920.firebasestorage.app",
  messagingSenderId: "295752989615",
  appId: "1:295752989615:web:1eeeeaa25e427ee7038d5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);