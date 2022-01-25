import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvlfX48J5wauF9hWZ5vcidEagwm_xUvIQ",
    authDomain: "giftbyso-bd9c4.firebaseapp.com",
    databaseURL: "https://giftbyso-bd9c4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "giftbyso-bd9c4",
    storageBucket: "giftbyso-bd9c4.appspot.com",
    messagingSenderId: "587818594004",
    appId: "1:587818594004:web:d42f0029d947b3ad85d541",
    measurementId: "G-FJ9CEL1350"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
