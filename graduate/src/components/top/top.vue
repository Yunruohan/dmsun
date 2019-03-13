<template>
    <div id="nav-contain">
        <el-menu 
            background-color="#000"
            text-color="#fff"
            active-text-color="blue"
            class="el-menu-demo" 
            mode="horizontal"
            router 
            >
            <img src="../../assets/logo1.png">
            <el-menu-item index="/">产品服务</el-menu-item>
            <el-menu-item @click="tryRouter">产品体验</el-menu-item>
            <el-menu-item index="/main/resource">开发资源</el-menu-item>
            <el-menu-item index="3">使用说明</el-menu-item>
            <el-menu-item index="4">合作伙伴</el-menu-item>
            <el-menu-item index="5" @click="userRouter">个人中心</el-menu-item>
            <el-menu-item v-if="mark" style="margin-left:100px" index="/login">登录</el-menu-item>
            <el-menu-item v-if="mark" index="/register">注册</el-menu-item>
        </el-menu>
    </div>
</template>
<<script>
export default {
    data() {
        return {
            mark: true
        }
    },
    created() {
        if(this.$store.state.validate === 1) {
            this.mark = false
        }
    },
    methods: {
        tryRouter() {
            if(this.$store.state.validate === 0) {
                this.$router.push('/login')
            }else {
                this.$router.push('/main/try')
            }
        },
        userRouter() {
            if(this.$store.state.validate === 0) {
                this.$router.push('/login')
            }else {
                this.$router.push('/main/user')
            }
        }
    }
}
</script>
<style lang="scss">
#nav-contain{
    position: relative;
    width: 1200px;
    margin: 0 auto;
    font-size: 0;
    .el-menu-item {
        width: 105px;
    }
    img {
        width: 180px;
        height: 55px;
        float: left;
        margin-left: 70px;
    }
}
</style>
