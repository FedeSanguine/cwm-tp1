<script>
import { register } from '../services/auth';

export default {
    name: 'Register',
    data() {
        return {
            registerLoading: false,
            newUser: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        async handleSubmit() {
            this.registerLoading = true;
            try {
                await register({...this.newUser});
                this.$router.push('/chat');
            } catch (error) {
                // TODO: Manejar el error.
            }
            this.registerLoading = false;
        }
    },
}
</script>

<template>
<h1 class="mb-3">Registro de usuario</h1>

    <form 
        action="#"
        @submit.prevent="handleSubmit"
    >
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" v-model="newUser.email" class="form-control">
    </div>
        <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" id="password" v-model="newUser.password" class="form-control">
        </div>

        <button class="btn btn-success align-items-center" type="submit" :loading="registerLoading">Crear Cuenta</button>
    </form>
</template>



