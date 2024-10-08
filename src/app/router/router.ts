import Work from "../../pages/Work.vue";
import Home from "../../pages/Home.vue";

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/work',
        name: 'work',
        component: Work
    }
]