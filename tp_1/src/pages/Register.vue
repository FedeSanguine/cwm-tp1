<script>
export default {
    name: 'Register',
}
</script>

<template>
<h1 class="mb-3">Registro de usuario</h1>

    <form action="#">
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" name="email" class="form-control">
    </div>
        <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" id="password" name="password" class="form-control">
        </div>
        <button class="btn btn-success align-items-center" type="submit">Crear Cuenta</button>
    </form>
</template>

