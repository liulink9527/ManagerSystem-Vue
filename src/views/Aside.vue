<template>
    <!--        导航栏-->
    <el-menu router default-active="1-4-1" background-color="rgb(48,65,86)" text-color="white" class="el-menu-vertical-demo" :collapse="isCollapse" :collapse-transition="false">
        <div style="height: 56px; line-height: 60px; text-align: center">
            <!--            图标-->
            <img src="../assets/logo.png" style="width: 20px; position: relative; top: 4px; margin-right: 3px" />
            <b style="color: white" v-show="isHidden">个人博客后台</b>
        </div>
        <el-menu-item index="/home">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">主页</span>
            </template>
        </el-menu-item>
        <el-menu-item index="/content">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">用户管理</span>
            </template>
        </el-menu-item>
    
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
