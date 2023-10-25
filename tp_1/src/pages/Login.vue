<script>
import { login } from '../services/auth.js';
export default {
    name: 'Login',
    emits: ['login'],
    data() {
        return {
            loginLoading: false,
            form: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        doLogin() {
            this.loginLoading = true;

            login({
                // email: this.form.email,
                // password: this.form.password,
                ...this.form,
            })
                .then(user => {
                    // console.log('[Login.vue] User: ', user)
                    this.$emit('login', {...user});
                })
                .finally(() => {
                    this.loginLoading = false;
                });
        }
    }
}
</script>

<template>
    <h1 class="mb-4">Ingresar a mi Cuenta</h1>

    <form action="#" 
    @submit.prevent="doLogin">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
                class="form-control"
                type="email" 
                id="email"
                v-model="form.email"
            >
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input
                class="form-control"
                type="password" 
                id="password"
                v-model="form.password"
            >
        </div>
        <button
            class="btn btn-success "
            type="submit"
        >Ingresar</button>
    </form>
</template>

