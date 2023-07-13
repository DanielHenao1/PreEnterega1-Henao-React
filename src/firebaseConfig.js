import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDAwAtFpx-jhq99mPwG56sDNU9hSe3jXko",
  authDomain: "comison-43240.firebaseapp.com",
  projectId: "comison-43240",
  storageBucket: "comison-43240.appspot.com",
  messagingSenderId: "235941042282",
  appId: "1:235941042282:web:caf6c532da86c57c129213",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)