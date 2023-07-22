import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

export const firebaseConfig = {
  apiKey: "AIzaSyBpKNoEKcRSZxcR2ytUsTVXDyo_eWvC3_g",
  authDomain: "eshop-1f0fb.firebaseapp.com",
  projectId: "eshop-1f0fb",
  storageBucket: "eshop-1f0fb.appspot.com",
  messagingSenderId: "841233773042",
  appId: "1:841233773042:web:8595669af69d104092fb6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app