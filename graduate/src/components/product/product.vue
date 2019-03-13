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
                    心脏指数预测估计平台
                </div>
                <div class="el-carousel__item_info location">
                    基于深度学习及大规模图像训练，准确预测图片中的心脏指数
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
                <el-col :span="5" v-for="(item, index) in Funs" 
                        :key="item.id" :offset="index > 0 ? 1 : 0"
                >
                    <el-card :body-style="{ padding: '0px' }">
                    <div  @mouseover="item.show = false" @mouseleave="item.show = true">
                        <img v-if="item.show" :src="item.url" class="image">
                        <transition v-else name="el-zoom-in-bottom">
                            <div class="funsNav">
                                <div class="funsNav-title">{{item.title}}</div>
                                <div class="funsNav-content">{{item.content}}</div>
                                <el-button type="text" class="funsNav-button">立即体验</el-button>
                            </div>
                        </transition>
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
                    {id:2, url:require('../../assets/img/nav/nav4.jpg')},
                    {id:3, url:require('../../assets/img/nav/nav5.jpeg')},
                    {id:4, url:require('../../assets/img/nav/nav4.jpeg')},
                ],
                currentDate: '',
                Funs: [
                    {id: 0, url:require('../../assets/img/nav/nav3.jpeg'), show: true,
                     title: "心脏指数估计1", content: "我们采用大量的图片进行训练，目前的准确率可以达到百分之九十九"},
                    {id: 1, url:require('../../assets/img/nav/nav3.jpeg'), show: true,
                     title: "心脏指数估计2", content: "我们采用大量的图片进行训练，目前的准确率可以达到百分之九十九"},
                    {id: 2, url:require('../../assets/img/nav/nav3.jpeg'), show: true,
                     title: "心脏指数估计3", content: "我们采用大量的图片进行训练，目前的准确率可以达到百分之九十九"},
                    {id: 3, url:require('../../assets/img/nav/nav3.jpeg'), show: true,
                     title: "心脏指数估计2", content: "我们采用大量的图片进行训练，目前的准确率可以达到百分之九十九"}
                ]
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
    .el-carousel__item_content, .el-carousel__item_info,  .el-carousel__item_btn{
        z-index: 2;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 40px;
        color: #fff;
    }
    .el-carousel__item_info {
        top: 45%;
        font-size: 16px;
    }
    .el-carousel__item_btn {
        top: 80%;
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
        margin-left: 20px;
        .el-row {
            width: 1250px;
            margin: 0 auto;
        }
        .button {
            padding: 0;
            float: right;
        }

        .image {
            width: 100%;
            display: block;
            height: 300px;
            transition: all .7s;
        }

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }
        
        .clearfix:after {
            clear: both
        }
        .funsNav {
            width: 100%;
            height: 300px;
            background-color:rgba(0, 0, 0, 0.8);
            color: #fff;
            .funsNav-title {
                padding: 40px 0;
                text-align: center;
                line-height: 2.0;
                font-size: 24px;
            }
            .funsNav-content {
                padding:0px  20px;
                font-size: 14px;
            }
            .funsNav-button {
                font-size: 14px;
                color: #fff;
                border-bottom: 1px solid #fff;
                margin-left: 25%; 
            }
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
