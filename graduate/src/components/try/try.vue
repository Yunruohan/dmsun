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
                <img style="width:100%" :src="item.url" alt="">
                <div class="carousel-box-upload">
                    <el-upload
                        class="upload-demo upload1"
                        :action="uploadInterface"
                        :data="{
                            content: 'picture'
                        }"
                        :on-success="imgSuccess"
                        drag
                        multiple>
                        <el-button>点击上传</el-button>
                    </el-upload> 
                    <el-input 
                        class="upload_input"
                        placeholder="在此处粘贴图片网址"
                    ></el-input> 
                </div>
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
        <div class="pic_tip">
            上传图片后这里将展示图片即结果
        </div>
        <el-row v-show="Isshow">
            <el-col :span="6">
                <el-card class="pic_show" :body-style="{ padding: '0px' }">
                <img :src="imgShow" class="image">
                <div style="padding: 5px;">
                    <el-button type="text" class="button" @click="predict()">查看预测指数</el-button>
                </div>
                </el-card>
            </el-col>
            <el-col :span="18">
                <el-card class="pic_result" :body-style="{ padding: '0px' }">
                    <h3 style="text-align:center">预测结果展示</h3>
                    <el-table
                        :data="tableData"
                    >
                        <el-table-column prop="P1" label="A-cav"></el-table-column>
                        <el-table-column prop="P2" label="A-myo"></el-table-column>
                        <el-table-column prop="P3" label="dim1"></el-table-column>
                        <el-table-column prop="P4" label="dim2"></el-table-column>
                        <el-table-column prop="P5" label="dim3"></el-table-column>
                        <el-table-column prop="P6" label="A"></el-table-column>
                        <el-table-column prop="P7" label="AS"></el-table-column>
                        <el-table-column prop="P8" label=IS></el-table-column>
                        <el-table-column prop="P9" label="I"></el-table-column>
                        <el-table-column prop="P10" label="IL"></el-table-column>
                        <el-table-column prop="P11" label="AL"></el-table-column>
                    </el-table>
                    <div style="padding: 14px;">
                        <p>
                            说明：列表中的数据依次为心肌面积、心腔面积、腔体三尺寸、六个区域壁厚
                        </p>
                        <span>若体验上有不足可以点击评论写出自己的需求 以便我们做出改进</span>
                        <div class="bottom clearfix">
                            <el-button @click="comment()" type="text" class="button">评论</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data () {
        return {
            imgUrls: [
                {id:1, url:require('../../assets/img/nav/nav3.jpeg')},
                {id:2, url:require('../../assets/img/nav/nav4.jpg')},
                {id:3, url:require('../../assets/img/nav/nav5.jpeg')},
                {id:4, url:require('../../assets/img/nav/nav4.jpeg')},
            ],
            currentDate: '',
            uploadInterface: `api/pictures/upload`,
            imgShow: 'http://120.79.17.239/1009/1d406800-79d5-11e9-8a77-00163e021e9c.png',
            Isshow: true,
            tableData: [
              { P1: '',
                P2: '',
                P3: '',
                P4: '',
                P5: '',
                P6: '',
                P7: '',
                P8: '',
                P9: '',
                P10: '',
                P11: ''}
            ]
        }
    },
    created() {
        this.tryRouter()
    },
    methods: {
        tryRouter() {
            if(this.$store.state.validate === 0) {
                this.$router.push('/login')
            }
        },
        imgSuccess(response, file, fileList) {
            console.log(response)
            this.Isshow = true
            this.imgShow = response.data.url
        },
        hogGet() {
            let params = {
                url: this.imgShow
            }
            axios.get('/host/hogGet', {
                params
            }).then((res) => {
                console.log(res.data)
                this.base64_data = "data:image/jpg;base64," + res.data
            })
        },
        predict() {
            let params = {
                url: this.imgShow
            }
            axios.get('/host/predict', {
                params
            }).then((res) => {
                console.log(typeof(res.data))
                console.log(res.data[0])
            })
        },
        comment() {
            this.$router.push('/main/parter')
        }
    }
}
</script>
<style lang="scss">
#try{
    width: 100%;
    .carousel-box {
        position: relative;
        .carousel-box-upload {
            z-index: 2;
            width: 600px;
            top: 30%;
            left: 50%;
            transform: translateX(-50%);
            .upload1 {
                font-size: 16px;
            }
            .upload_input {
            margin-left: 130px;
            }
            .upload1 .el-button,.upload1 .el-upload-dragger {
                width: 100px;
                height: 50px;
            }
        }
    }
    .image{
        width: 100%;
        height: 245px;
    }
    .location, .upload-demo, .upload_input, .carousel-box-upload{
        position: absolute;
    }
    .upload2 {
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
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
    .pic_tip {
        font-size: 30px;
        text-align: center;
        padding-top: 30px;
    }
    .el-card, .pic_show{
        margin: 20px;
    }
    .pic_result {
        width: 100%;
    }
}
</style>
