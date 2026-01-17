import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Cars from "../views/Cars.vue";
import Formulary from "../views/Formulary.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/cars",
            name: "cars",
            component: Cars
        },
        {
            path: "/joinus",
            name: "joinus",
            component: Formulary
        }
    ]
})

export default router;