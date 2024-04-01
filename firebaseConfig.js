import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAOGg_i3t_nD-yhz8ABbqnPmXWLMuLGhGc",
  authDomain: "cocktail-database-f74f9.firebaseapp.com",
  databaseURL: "https:/cocktail-database-f74f9.firebaseio.com",
  projectId: "cocktail-database-f74f9",
  storageBucket: "cocktail-database-f74f9.appspot.com",
  messagingSenderId: "541494375794",
  appId: "1:541494375794:web:d57463e7b88ee4966119eb",
  measurementId: "G-3F9333QYCX",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
