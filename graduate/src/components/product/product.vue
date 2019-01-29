<template>
    <div id="product-content">
        <el-carousel
            :interval="4000"
            height="500px"
        >
            <el-carousel-item
                v-for="item in imgUrls" :key="item.id" arrow="always"
            >
             <div class="carousel-box">
                <img :src="item.url" alt="">
                <div class="el-carousel__item_content location">
                    心脏指数预测估计
                </div>
                <div class="el-carousel__item_info location">
                    基于深度学习及大规模图像训练，准确识别图片中的心脏指数
                </div>
                <div class="el-carousel__item_btn location">
                    <el-button @click="tryRouter">立即体验</el-button>
                    <el-button class="btn-right">技术文档</el-button>
                </div>
             </div>
            </el-carousel-item>
        </el-carousel>
        <div class="product-try-title">产品功能</div>
        <div class="product-details">
            <el-row style="margin:0 auto">
                <el-col :span="5" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 0">
                    <el-card :body-style="{ padding: '10px' }">
                    <img src="../../assets/logo.jpg" class="image">
                    <div style="padding: 0px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div class="footer">
            <span>云若寒工作室 若有需要 请联系18756567590</span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                imgUrls: [
                    {id:1, url:require('../../assets/img/nav/nav3.jpeg')},
                    {id:2, url:require('../../assets/img/nav/nav4.jpeg')},
                    {id:3, url:require('../../assets/img/nav/nav5.jpeg')},
                ],
                currentDate: ''
            }
        },
        methods: {
            tryRouter() {
               if(this.$store.state.validate === 0) {
                   this.$router.push('/login')
               }else {
                   this.$router.push('/main/try')
               }
            }
        }
    }
</script>
<style lang="scss">
#product-content{
    .carousel-box {
        position: relative;
    }
    img{
        width: 100%;
        height: 500px;
    }
    .location{
        position: absolute;
    }
    .el-carousel__item_content {
        z-index: 2;
        top: 30%;
        left: 40%;
        transform: translateY(-50%);
        font-size: 40px;
        color: #fff;
    }
    .el-carousel__item_info {
        z-index: 2;
        top: 45%;
        left: 38%;
        transform: translateY(-50%);
        font-size: 16px;
        color: #fff;
    }
    .el-carousel__item_btn {
        z-index: 2;
        top: 80%;
        left: 41%;
        transform: translateY(-50%);
    }
    .el-button {
        width: 116px;
        height: 40px;
    }
    .btn-right {
        margin-left: 80px;
    }
    .product-try-title {
        text-align: center;
        margin-top: 70px;
        font-size: 30px;
    }
    .product-details {
        width: 100%;
        margin-top: 40px;
        .el-row {
            width: 1400px;
            margin: 0 auto;
        }
        .time {
            font-size: 13px;
            color: #999;
        }
        
        .bottom {
            margin-top: 13px;
            line-height: 12px;
        }

        .button {
            padding: 0;
            float: right;
        }

        .image {
            width: 100%;
            display: block;
            height: 250px;
        }

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }
        
        .clearfix:after {
            clear: both
        }
    }
    .footer {
        width: 100%;
        height: 50px;
        text-align: center;
        font-size: 10px;
        line-height:4.8;
    }
}
</style>
