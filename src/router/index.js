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
            {
                path: "/personInfo",
                name: "个人信息",
                component: () => import("../views/PersonInfo.vue"),
            },
            {
                path: "/file",
                name: "文件管理",
                component: () => import("../views/File.vue"),
            },
            {
                path: "/role",
                name: "角色管理",
                component: () => import("../views/Role.vue"),
            },
            {
                path: "/menu",
                name: "菜单管理",
                component: () => import("../views/Menu.vue"),
            },
        ],
    },
    {
        path: "/login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/register",
        component: () => import("../views/Register.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    let user = localStorage.getItem("user") ? JSON.stringify(localStorage.getItem("user")) : {};
    if (to.path === "/login") return next();
    if (!user) return next("/login");
    next();
});

export default router;
