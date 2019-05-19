<template>
    <div id="parter">
        <div class="parter-content">
            <div class="parter-content-title">联系我们</div>
            <div class="parter-content-text">
                <div class="parter-content-text-radio">
                    <el-radio v-model="radio1" label=1 border>
                        <span>意见反馈</span>
                        <!-- <i class="el-icon-message"></i> -->
                    </el-radio>
                    <el-radio v-model="radio1" label=2 border>
                        <span>合作意向</span>
                        <!-- <i class="el-icon-connection"></i> -->
                    </el-radio>
                </div>
                <div v-if="radio1 == 1" class="parter-content-text-input">
                    <el-input
                        type="textarea"
                        autosize
                        placeholder="请输入您的宝贵意见"
                        v-model="textarea"
                    >
                    </el-input>
                    <el-input
                        v-model="contact_number"
                        placeholder="请输入您的联系方式：QQ／邮箱／手机号码"
                    >
                    </el-input>
                    <div class="parter-content-text-submit">
                        <el-button type="primary" @click="submit()">提交</el-button>
                    </div>
                </div>
                <div v-if="radio1 == 2" class="parter-content-text-input">
                    <el-input
                        v-model="contact_company"
                        placeholder="请输入您的公司名称"
                    >
                    </el-input>
                    <el-input
                        v-model="contact_name"
                        placeholder="请输入您的姓名"
                    >
                    </el-input>
                    <el-input
                        v-model="contact_number"
                        placeholder="请输入您的联系方式：QQ／邮箱／手机号码"
                    >
                    </el-input>
                    <el-input
                        type="textarea"
                        autosize
                        placeholder="请输入您的合作方式及内容"
                        v-model="textarea1"
                    >
                    </el-input>
                    <div class="parter-content-text-submit">
                        <el-button type="primary">提交</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            radio1: 1,
            textarea: '',
            contact_number: '',
            contact_company: '',
            contact_name: '',
            textarea1: ''
        }
    },
    created() {

    },
    methods: {
        submit() {
            this.$message({
                showClose: true,
                message: '已成功提交您的信息'
            });
        }
    }
}
</script>

<style lang="scss">
#parter {
    width: 80vw;
    // height: 80vh;
    border: 1px solid #d9d9d9;
    margin: 5vh 10vw;
    background: #f6f6f6;
    .parter-content {
        width: 90%;
        margin: 5%;
        .parter-content-title{
            font-size: 20px;
            border-bottom: 1px solid #b0b0b0;
            margin-bottom: 25px;
            padding: 0 0 15px;
        }
        .parter-content-text {
            height: 90%;
            .parter-content-text-radio{
                margin-left: 30%;
                .el-radio.is-bordered {
                    height: 120px; 
                }
                .el-icon-message, .el-icon-connection {

                }
            }
            .parter-content-text-input{
                display: block;
                width: 80%;
                margin: 0 auto;
                .el-input {
                    display: block;
                    margin-top:2vh;
                }
                .el-textarea {
                    margin-top:2vh;
                }
            }
            .parter-content-text-submit {
                width: 100%;
                .el-button {
                    display: block;
                    margin: 3vh auto;
                }
            }
        }
    }
}
</style>
