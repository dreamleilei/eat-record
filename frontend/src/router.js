import VueRouter from 'vue-router';

import Index from "./page/index.vue";
import Index1 from "./page/index1.vue";
import NotFound from "./page/404.vue"

const User = {
    template: '<div>Hello world</div>'
};

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
