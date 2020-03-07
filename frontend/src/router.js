import VueRouter from 'vue-router';

import Index from "@/page/index";
import Index1 from "@/page/index1";
import NotFound from "@/page/404";


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "",
            name: "index",
            component: Index
        },
        {
            path: "/index1",
            name: "index1",
            component: Index1
        },
        {
            path: "*",
            name: "404",
            component:  NotFound
        }
    ],
});

export default router;
