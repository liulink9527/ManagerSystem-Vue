import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Content from "../views/Content.vue";
import store from "../store";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Home,
        redirect: "/home",
        children: [
            {
                path: "home",
                component: () => import("../views/HomePage.vue"),
            },
            {
                path: "content",
                name: "用户管理",
                component: Content,
            },
        ],
    },
    {
        path: "/login",
        component: () => import("../views/Login.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    localStorage.setItem("currentPathName", to.name);
    store.commit("setPath");
    next();
});

export default router;
