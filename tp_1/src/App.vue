<script>
import Chat from './pages/Chat.vue';

export default {
    name: "App",
    components: {Chat}
};
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark flex-has-center ">
                <div class=" flex-end container">
                    <a class="navbar-brand" href="home">
                        <img src="#" alt="logo CasaCucha">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Abrir/cerrar menú de navegación">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <router-link class="nav-link active" to="/">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link active" to="/quienes-somos">Quiénes Somos</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link active" to="/chat">Chat</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link active" to="/registro">Registro</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link active" to="/iniciar-sesion">Iniciar Sesión</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    </header>

    <div class="container m-auto p-4">

        <router-view>
            
        </router-view>
    </div>

    <footer class="align-items-center py-3 my-4 border-top ">
            <div class="text-center text-muted fs-6">
        <p> Casa Cucha &copy; 2023 </p>
        <p>Todos los derechos reservados®</p>
            </div>
    </footer>
    
</template>