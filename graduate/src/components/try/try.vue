<template>
    <div id="try">
        <el-carousel
            :interval="4000"
            height="500px"
        >
            <el-carousel-item
                v-for="item in imgUrls" :key="item.id" arrow="always"
            >
             <div class="carousel-box">
                <img :src="item.url" alt="">
                <el-upload
                    class="upload-demo upload1"
                    action=""
                    drag
                    multiple>
                    <el-button>点击上传</el-button>
                </el-upload> 
                <el-input 
                    class="upload_input"
                     placeholder="在此处粘贴图片网址"
                ></el-input>  
                <el-upload
                    class="upload-demo upload2"
                    action=""
                    drag
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload_text">拖拽图片到此处试试</div>
                </el-upload>                  
             </div>
            </el-carousel-item>
        </el-carousel>
        <el-row>
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
            <img src="" class="image">
            <div style="padding: 14px;">
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
</template>
<script>
export default{
    data () {
        return {
            imgUrls: [
                {id:1, url:require('../../assets/img/nav/nav3.jpeg')},
                {id:2, url:require('../../assets/img/nav/nav4.jpeg')},
                {id:3, url:require('../../assets/img/nav/nav5.jpeg')},
            ],
            currentDate: ''
        }
    }
}
</script>
<style lang="scss">
#try{
    .carousel-box {
        position: relative;
    }
    img{
        width: 100%;
        height: 500px;
    }
    .location, .upload-demo, .upload_input{
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
        left: 40%;
        transform: translateY(-50%);
        font-size: 16px;
        color: #fff;
    }
    .upload1 {
        z-index: 2;
        top: 45%;
        left: 30%;
        transform: translateY(-50%);
        font-size: 16px;
    }
    .upload1 .el-upload-dragger {
        width: 100px;
        height: 50px;
    }
    .upload1 .el-button {
        width: 100px;
        height: 50px;
    }
    .upload2 {
        z-index: 2;
        top: 75%;
        left: 40%;
        transform: translateY(-50%);
        font-size: 16px;
    }
    .upload_input {
        width: 600px;
        z-index: 2;
        top: 44%;
        left: 36%;
        transform: translateY(-50%);
        font-size: 16px;
    }
    .upload2 .el-upload-dragger {
        color: #fff;
        background-color: inherit;
        border: inherit;
    }
    .el-input__inner {
        height: 50px;
    }
}
</style>
