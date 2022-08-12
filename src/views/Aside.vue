<template>
    <!--        导航栏-->
    <el-menu
        router
        default-active="1-4-1"
        background-color="rgb(48,65,86)"
        text-color="white"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :collapse-transition="false"
    >
        <div style="height: 56px; line-height: 60px; text-align: center">
            <!--            图标-->
            <img src="../assets/logo.png" style="width: 20px; position: relative; top: 4px; margin-right: 3px" />
            <b style="color: white" v-show="isHidden">后台管理系统</b>
        </div>
        <el-menu-item index="/home">
            <template slot="title">
                <i class="el-icon-s-home"></i>
                <span slot="title">主页</span>
            </template>
        </el-menu-item>
        <el-submenu index="1">
            <template slot="title">
                <span slot="title">
                    <i class="el-icon-s-tools"></i>
                    权限管理
                </span>
            </template>
            <el-menu-item index="/content">
                <i class="el-icon-user-solid"></i>
                用户管理
            </el-menu-item>
            <el-menu-item index="/file">
                <i class="el-icon-s-cooperation"></i>
                文件管理
            </el-menu-item>
            <el-menu-item index="/role">
                <i class="el-icon-s-custom"></i>
                角色管理
            </el-menu-item>
            <el-menu-item index="/menu">
                <i class="el-icon-menu"></i>
                菜单管理
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: "Aside",
    props: {
        isCollapse: Boolean,
        isHidden: Boolean,
        sideWidth: Number,
    },
};
</script>

<style></style>
