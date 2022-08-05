<template>
    <div>
        <el-container style="min-height: 100vh">
            <!-- 侧边栏导航 父组件给子组件传值-->
            <el-aside :width="sideWidth + 'px'" style="overflow-x: hidden; background-color: rgb(48, 65, 86); box-shadow: 2px 0 6px rgb(0 21 41 / 35%)">
                <Aside :isCollapse="isCollapse" :isHidden="isHidden" :sideWidth="sideWidth" />
            </el-aside>
            <el-container>
                <!-- 顶部栏 -->
                <el-header style="border-bottom: 1px solid #ccc">
                    <Header :collapseBtnClass="collapseBtnClass" @collaspse="collapse" />
                </el-header>
                <el-main>
                    <!-- 当前页面的子路由会在router-view中显示 -->
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Aside from './Aside.vue'
import Header from './Header.vue'
import Content from "./Content.vue";
import HomePage from './HomePage.vue'
export default {
    name: "Home",
    components: {
        Aside,
        Header,
        Content,
        HomePage,
    },
    data() {
        return {
            collapseBtnClass: "el-icon-s-fold",
            isCollapse: false,
            sideWidth: 200,
            isHidden: true,
        };
    },
    methods: {
        collapse() {
            this.isCollapse = !this.isCollapse;
            if (this.isCollapse) {
                this.sideWidth = 64;
                this.collapseBtnClass = "el-icon-s-unfold";
                this.isHidden = false;
            } else {
                this.sideWidth = 200;
                this.collapseBtnClass = "el-icon-s-fold";
                this.isHidden = true;
            }
        },
    },
};
</script>

<style>
.el-header {
    background-color: whitesmoke;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>
