import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0Lo-2BdUF0pdw944OXd25fj3VCkP9ORg",
    authDomain: "casa-cucha-d1802.firebaseapp.com",
    projectId: "casa-cucha-d1802",
    storageBucket: "casa-cucha-d1802.appspot.com",
    messagingSenderId: "364775758918",
    appId: "1:364775758918:web:7190eff3f90a975de2be47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore.
export const db = getFirestore(app);

// Obtener la instancia de Authentication.
export const auth = getAuth(app);
