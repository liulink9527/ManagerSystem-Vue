<template>
    <div style="line-height: 60px; display: flex">
        <div style="flex: 1">
            <span :class="collapseBtnClass" style="cursor: pointer; font-size: 18px" @click="collapse"></span>

            <el-breadcrumb separator="/" style="display: inline-block; margin-left: 10px">
                <el-breadcrumb-item :to="'/'">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{ this.$route.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-dropdown style="width: 120px; cursor: pointer">
            <div style="display: inline-block">
                <img :src="user.avatarUrl" alt="" style="width: 30px; border-radius: 50%; position: relative; top: 10px; right: 5px" />
            </div>
            <span>{{ user.nickname }}</span>
            <i class="el-icon-arrow-down" style="margin-left: 5px"></i>
            <el-dropdown-menu slot="dropdown" style="width: 100px; text-align: center">
                <el-dropdown-item style="font-size: 14px; padding: 5px 0">个人信息</el-dropdown-item>
                <el-dropdown-item style="font-size: 14px; padding: 5px 0">
                    <span @click="exit">退出</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
        };
    },
    props: {
        collapseBtnClass: String,
    },
    computed: {
        currentPathName() {
            return this.$store.state.currentPathName;
        },
    },
    watch: {
        currentPathName(newVal, oldVal) {
            console.log(newVal);
        },
    },
    methods: {
        collapse() {
            this.$emit("collaspse");
        },
        exit() {
            this.$router.push("/login");
            localStorage.removeItem("user");
        },
    },
};
</script>

<style>
.myseparator {
    color: aqua;
}
</style>
