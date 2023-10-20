// Vamos a definir los detalles de nuestro Router de Vue.
import Home from './../pages/Home.vue';
import About from './../pages/About.vue';
import Chat from './../pages/Chat.vue';
import Register from './../pages/Register.vue';
import Login from './../pages/Login.vue';
import Perfil from './../pages/Perfil.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { subscribeToAuth } from '../services/auth';

// Primero definimos la lista de rutas.
const routes = [
    { path: '/',                component: Home },
    { path: '/quienes-somos',   component: About },
    { path: '/registro',        component: Register },
    { path: '/iniciar-sesion',  component: Login },
    { path: '/chat',            component: Chat,        meta: { requiresAuth: true }, },
    { path: '/perfil',          component: Perfil,      meta: { requiresAuth: true }, },
];

// Creamos el router, pasándole las rutas y el administrador de historia de navegación.
const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

let user = {
    id: null,
    email: null,
}

subscribeToAuth(newUser => user = newUser);

router.beforeEach(to => {
    if(user.id === null && to.meta.requiresAuth) {
        return '/iniciar-sesion';

    }
});

export default router;