import Work from "../view/Work.vue";
import Home from "../view/Home.vue";

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