import {createRouter, createWebHashHistory} from "vue-router";
import { routes } from "./router.ts";

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})