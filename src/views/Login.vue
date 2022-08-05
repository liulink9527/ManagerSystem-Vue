<template>
    <div class="container">
        <!-- <form acction="#">
            <div style="height: 40px; line-height: 30px; text-align: center">
                <img src="../assets/logo.png" style="width: 35px; margin-right: 3px" />
            </div>
            <el-input size="medium" style="margin: 10px 0" v-model="user.username" placeholder="用户名"></el-input>
            <el-input size="medium" style="margin: 10px 0" v-model="user.password" show-password placeholder="密码"></el-input>
            <button type="submit" @click="login">登录</button>
        </form> -->
        <el-form :model="user" ref="userForm" :rules="rules" class="login-form">
            <div style="height: 50px; text-align: center">
                <!--            图标-->
                <img src="../assets/logo.png" style="width: 35px; margin-right: 3px" />
            </div>
            <el-form-item prop="username">
                <el-input size="medium" v-model="user.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input size="medium" v-model="user.password" show-password placeholder="密码"></el-input>
            </el-form-item>
            <el-button type="submit" @click="login">登录</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            user: {},
            rules: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                    { min: 3, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" },
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    { min: 3, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" },
                ],
            },
        };
    },
    methods: {
        login() {
            // 登录校验
            this.$refs["userForm"].validate(valid => {
                if (valid) {
                    this.request.post("/user/login", this.user).then(response => {
                        if (!response) {
                            this.$message.error("密码错误");
                        } else {
                            this.$router.push("/");
                        }
                    });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped>
html,
body {
    margin: 0;
    font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

.container {
    /*width: 100vw;*/
    /*height: 50vw;*/
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("../assets/ccc.png") fixed no-repeat center center;
    background-size: cover;
    min-height: 100vh;
    /*background-size: 100% 100%;*/
}

.login-form {
    width: 240px;
    height: 240px;
    display: flex;
    flex-direction: column;
    padding: 50px;
    text-align: center;
    position: relative;
    z-index: 100;
    background: inherit;
    border-radius: 18px;
    overflow: hidden;
}

.login-form::before {
    content: "";
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    position: absolute;
    top: -10px;
    left: -10px;
    overflow: hidden;
    background: inherit;
    box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.25);
    filter: blur(2px);
    z-index: -1;
}

.login-form h2 {
    font-size: 18px;
    font-weight: 400;
    color: #3d5245;
}

.login-form input,
.login-form button {
    margin: 6px 0;
    height: 36px;
    border: none;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    padding: 0 14px;
    color: #3d5245;
}

.login-form input::placeholder {
    color: #3d5245;
}

.login-form button:focus,
.login-form input:focus {
    outline: 0;
}

.login-form button {
    margin-top: 24px;
    background-color: rgba(209, 179, 9, 0.4);
    color: white;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: 0.4s;
}

.login-form button:hover {
    background-color: rgba(209, 179, 9, 0.7);
}

.login-form button::before,
.login-form button::after {
    content: "";
    display: block;
    width: 80px;
    height: 100%;
    background: rgba(179, 255, 210, 0.5);
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    transform: skewX(-15deg);
    filter: blur(30px);
    overflow: hidden;
    transform: translateX(-100px);
}

.login-form button:hover::after {
    width: 40px;
    background: rgba(179, 255, 210, 0.3);
    left: 60px;
    opacity: 0;
    filter: blur(5px);
}

.login-form button:hover::before {
    transition: 1s;
    transform: translateX(320px);
}
.login-form button:hover::after {
    transition: 1s;
    transform: translateX(320px);
    opacity: 1;
}
</style>
