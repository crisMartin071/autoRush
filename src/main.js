import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '../router';
import { createI18n } from "vue-i18n";
import VueGoodTablePlugin from "vue-good-table-next";
import "vue-good-table-next/dist/vue-good-table-next.css";

const i18n = createI18n({
    locale: "es",
    fallbackLocale: "en",
    messages: {
        "es": {
            greet: "Bienvenido a AutoRush!",
            catalog: "Conoce nuestro catálogo",
            adviser: "Unete a nosotros"
        },
        "en": {
            greet: "Welcome to AutoRush!",
            catalog: "Know all of us catalog",
            adviser: "Join us"
        }
    }
})

createApp(App).use(router).use(i18n).use(VueGoodTablePlugin).mount('#app')
