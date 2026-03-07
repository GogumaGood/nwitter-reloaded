import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCE1E0BuBCiyzl122tMrpOh8d1Ova3OHBE",
  authDomain: "nwitter-reloaded-fd13b.firebaseapp.com",
  projectId: "nwitter-reloaded-fd13b",
  storageBucket: "nwitter-reloaded-fd13b.firebasestorage.app",
  messagingSenderId: "314033038956",
  appId: "1:314033038956:web:e45c812856051aa19d1a49",
  measurementId: "G-CVF856817D",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
