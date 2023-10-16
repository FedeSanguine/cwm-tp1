// En este archivo vamos a definir los servicios de Firebase que vamos a utilizar, y exportarlos para ser
// consumidos por otros servicios.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore.
export const db = getFirestore(app);

