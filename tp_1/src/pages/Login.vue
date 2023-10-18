<script>
export default {
    name: 'Login',
}
</script>

<template>
    <h1 class="mb-4">Ingresar a mi Cuenta</h1>

    <form action="#">
        <div class="mb-3">
            <label for="email" class="block mb-1 font-bold">Email</label>
            <input
                class=""
                type="email" 
                id="email"
            >
        </div>
        <div class="mb-3">
            <label for="password" class="block mb-1 font-bold">Contraseña</label>
            <input
                class=""
                type="password" 
                id="password"
            >
        </div>
        <button
            class=""
            type="submit"
        >Ingresar</button>
    </form>
</template>