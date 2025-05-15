import { initializeApp } from "firebase/app";
import {getDatabase, ref} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const todoRef = ref(database, '/todo');