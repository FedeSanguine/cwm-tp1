<script>
import {chatSubscribeToMessages, chatSaveMessage} from "../services/chat.js";
import { subscribeToAuth } from "../services/auth";

export default {
    name: "Chat",
    data() {
        return {
            messages: [],
            newMessage: {
                name: '',
                emaii: '',
            },
            unsubscribeAuth: () => {},
            unsubscribeChat: () => {},
        };
        
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
        this.messagesLoading = true;
        this.unsubscribeChat = chatSubscribeToMessages(messages => {
            this.messages = messages;
            this.messagesLoading = false;
        });
        this.unsubscribeAuth = subscribeToAuth(newUser => this.user = {...newUser});
    },
    unmounted() {
       // this.unsubscribeChat();
        this.unsubscribeAuth();
    }
};
</script>

<template>
    <h1 class="mb-4">Soporte</h1>


    <form
        action="#"
        @submit.prevent="sendMessage"
    >
        <div class="mb-3">
            <label for="name" class="form-label">Usuario</label>
            <input
                type="text"
                id="name"
                class="form-control"
                v-model="newMessage.name"
            >
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Mensaje</label>
            <textarea
                id="email"
                class="form-control"
                type="email"
                v-model="newMessage.email"
            ></textarea>
        </div>
        <button type="submit" class="btn btn-success w-50">Enviar</button>
    </form>


    <div>
        <div v-for="message in messages">
            <div><b>Usuario:</b> {{ message.name }}</div>
            <div><b>Mensaje:</b> {{ message.email }}</div>
        </div>
    </div>

</template>


