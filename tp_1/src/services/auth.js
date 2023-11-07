
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase.js';

let userData = {
    id: null,
    email: null,
}
let observers = [];

// Si el usuario figuraba como autenticado, lo marcamos como tal inmediatamente.
if(localStorage.getItem('user')) {
    userData = JSON.parse(localStorage.getItem('user'));
}

onAuthStateChanged(auth, user => {
    if(user) {
        setUserData({
            id: user.uid,
            email: user.email,
        });
        localStorage.setItem('user', JSON.stringify(userData));
    } else {
        clearUserData();
        localStorage.removeItem('user');
    }
});

/**
 * 
 * @param {{email: string, password: string}} user
 * @return {Promise}
 */
export async function register({email, password}) {
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        // Registramos al usuario también en Firestore.
        createUserProfile(userCredentials.user.uid, {email});

        return {
            id: userCredentials.user.uid,
            email: userCredentials.user.email,
        }   
    } catch (error) {
        return {
            code: error.code,
            message: error.message,
        }
    }
}

/**
 * Inicia sesión.
 * @param {{email: string, password: string}} user
 * @return {Promise}
 */
export function login({email, password}) {


            return signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
               //  console.log("[auth.js login] Sesión iniciada. Las credenciales son: ", userCredentials);

            return {...userData};
        })
        .catch(error => {
            return {
                code: error.code,
                message: error.message,
            }
        });
}

/**
 * @returns {Promise}
 */
export function logout() {
    return signOut(auth);
}

/**
 * @param {({id: null|string, email: null|string}) => void} observer 
 * @returns {() => void} Función para cancelar la suscripción.
 */
export function subscribeToAuth(observer) {
    // Agregamos el observer a la lista.
    observers.push(observer);

    // Ejecutamos el observer inmediatamente con la data actual.
    notify(observer);
    return () => {
        observers = observers.filter(obs => obs !== observer);
    }
}

/**
 * Notifica a todos los observers de los datos de la autenticación.
 */
function notifyAll() {
    observers.forEach(observer => notify(observer));
}

/**
 * Notifica a un observador de los datos.
 * 
 * @param {({id: null|string, email: null|string}) => void} observer 
 */
function notify(observer) {
    observer({...userData});
}

/**
 * 
 * @param {{id: null|string, email: null|string}} newData 
 */
function setUserData(newData) {
    userData = {
        ...userData,
        ...newData,
    }
    notifyAll();
}

function clearUserData() {
    setUserData({
        id: null,
        email: null,
    });
}

export function getUserData() {
    return {...userData};
}