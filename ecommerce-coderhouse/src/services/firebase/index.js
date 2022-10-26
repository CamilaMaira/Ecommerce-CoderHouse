import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDfFu0PMPU8rF8YehROjU2VYeJolUMn6SY",
  authDomain: "ecommerce-coder-11a28.firebaseapp.com",
  projectId: "ecommerce-coder-11a28",
  storageBucket: "ecommerce-coder-11a28.appspot.com",
  messagingSenderId: "387764953683",
  appId: "1:387764953683:web:24a1b3b771c6f9ecd99ca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)