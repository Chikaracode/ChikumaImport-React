import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD7ag4kW8gx1DryxfREd_r30EBjDr77FyE",
  authDomain: "chikuma-ecommerce.firebaseapp.com",
  projectId: "chikuma-ecommerce",
  storageBucket: "chikuma-ecommerce.appspot.com",
  messagingSenderId: "585308674112",
  appId: "1:585308674112:web:5ee08b075b96caea1427a5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)