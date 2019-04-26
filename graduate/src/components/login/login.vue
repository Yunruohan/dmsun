<template>
    <div id='login'>
       <div class="login_input">
        <div class="login_input_title">心脏指数预测估计平台</div>
        <el-form ref="login_form" :model="form" :rules="loginRules">
            <el-form-item label="用户名" prop="username">
                <el-input
                    type="text"
                    v-model="form.username">
                </el-input>
            </el-form-item>
             <el-form-item label="密码" prop="password">
                <el-input
                    type="password"
                    v-model="form.password">
                </el-input>
            </el-form-item>
            <el-form-item>
                <div class="panel-header-btn submit-btn" @click="login()">
                    <span class="el-icon-loading" v-if="loading"></span>
                    <span v-else>登录</span>
                </div>
                <div class="panel-header-btn submit-btn" @click="register">
                    <span class="el-icon-loading" v-if="loading"></span>
                    <span v-else>注册</span>
                </div>
            </el-form-item>
        </el-form>
      </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import qs from 'qs'
    export default {
        data () {
            return {
                respcd: '0000',
                url: '',
                form: {
                    username: '',
                    password: ''
                },
                loading: false,
                loginRules: {
                    username: [
                        { required: true, message: '请输入用户名' }
                    ],
                    password: [
                        { required: true, message: '请设置密码' }
                    ]
                }
            }
        },
        created (){

        },
        methods: {
            axiosLR(){
                let params = {
                    username: this.form.username,
                    password: this.form.password
                }
                axios.post(this.url, qs.stringify(params), {
                    headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then((res) => {
                    let data = res.data
                    if(data.data.respcd = this.respcd){
                        this.$store.dispatch("setValidate", 1)
                        this.$router.push('/main/product')
                    }
                })
            },
            login() {
                this.url = 'api/user/login'
                this.axiosLR()
            },
            register() {
                this.url = 'api/user/register'
                this.axiosLR()
            }
        }
    }
</script>
<style lang='scss'>
#login {
    width: 100%;
    height: 100vh;
    position: relative;
    background: url('../../assets/img/login/background.jpeg') 0 0 no-repeat #f7f7f7;
    background-size: cover;
    background-position: 100% top;
    overflow: auto;
    .login_input {
        width: 300px;
        color: #000;
        position: absolute;
        top: 20%;
        left: 23.43%;
        .el-form-item__label {
            color: #000;
        }
        .el-form-item__label:before,.el-form-item__label:after {
          content: '';
        }
        .login_input_title {
            width: 500px;
            font-size: 40px;
            margin-bottom: 50px;
        }
        .submit-btn {
          width:100px;height:40px;background-color: blueviolet;color:rgb(239, 241, 247);font-size:20px;border-radius:4px;display:flex;
          float: left;
          margin-left:25px;
          justify-content: center;align-items: center;cursor:pointer;
        }
    }
}
</style>