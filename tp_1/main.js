// Creamos la aplicación de Vue.
import {createApp} from "vue";
import App from "./src/App.vue";
import "bootstrap/dist/css/bootstrap.css";
import router from "./src/router/router";
const app = createApp(App);

app.use(router);
// Montamos la aplicación en el elemento #app que tenemos en el index.
app.mount('#app');
import "bootstrap/dist/js/bootstrap.js";