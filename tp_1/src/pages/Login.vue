<script>
export default {
    name: 'Login',
}
</script>

<template>
    <h1 class="mb-4">Ingresar a mi Cuenta</h1>

    <form action="#">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
                class="form-control"
                type="email" 
                id="email"
            >
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input
                class="form-control"
                type="password" 
                id="password"
            >
        </div>
        <button
            class="btn btn-success w-50"
            type="submit"
        >Ingresar</button>
    </form>
</template>

