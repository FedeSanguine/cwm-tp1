<script>
import Chat from './pages/Chat.vue';

export default {
    name: "App",
    components: {Chat}
};
</script>

<template>
    <header class="flex gap-8 items-center p-4 ">
        <div>
            <p class="">DV Chat</p>
        </div>
        <nav>
            <ul class="flex ">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/quienes-somos">Quiénes Somos</router-link>
                </li>
                <li>
                    <router-link to="/chat">Chat</router-link>
                </li>
                <li>
                    <router-link to="/registro">Registro</router-link>
                </li>
                <li>
                    <router-link to="/iniciar-sesion">Iniciar Sesión</router-link>
                </li>
            </ul>
        </nav>
    </header>

    <!--
    Acá va a venir el renderizado de las rutas cuando agreguemos Vue Router.
    Mientras tanto, vamos a renderizar la "vista" del Chat.
    -->
    <div class="container m-auto p-4">
        <!-- <Chat /> -->
        <router-view></router-view>
    </div>

    <footer>
        <p>Casa Cucha &copy; 2023</p>
    </footer>
</template>