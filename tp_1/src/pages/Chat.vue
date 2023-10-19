<script>
import {chatSubscribeToMessages, chatSaveMessage} from "../services/chat.js";

export default {
    name: "Chat",
    data() {
        return {
            messages: [],
            newMessage: {
                name: '',
                emaii: '',
            }
        }
    },

    methods: {
        sendMessage() {
            chatSaveMessage({
                name: this.newMessage.name,
                email: this.newMessage.email,
                // ...this.newMessage // Podríamos haberlo escrito así, también.
            })
                .then(() => {
                    this.newMessage.name = '';
                    this.newMessage.email = '';
                });
        }
    },

    mounted() {
        chatSubscribeToMessages(messages => {
            this.messages = messages;
        });
    }
};
</script>

<template>
    <h1>Casa Cucha</h1>

    <p>Leyendo los mensajes del chat, ahora en tiempo real</p>

    <form
        action="#"
        @submit.prevent="sendMessage"
    >
        <div>
            <label for="name">Usuario</label>
            <input
                type="text"
                id="name"
                v-model="newMessage.name"
            >
        </div>
        <div>
            <label for="email">Email</label>
            <textarea
                id="email"
                v-model="newMessage.email"
            ></textarea>
        </div>
        <button type="submit">Enviar</button>
    </form>

    <div>
        <div v-for="message in messages">
            <div><b>Usuario:</b> {{ message.name }}</div>
            <div><b>Email:</b> {{ message.email }}</div>
        </div>
    </div>

</template>


