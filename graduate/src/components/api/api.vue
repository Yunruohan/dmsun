<template>
    <div id="api">
        <div class="api-content">
            <div class="api-content-title">API工具-使用说明</div>
            <div class="api-content-main">
                <h3>简介</h3>
                <p>
                    此次API包含HOG特征提取和指数预测俩个部分,预测中使用的模型是通过大量的图片输入
                </p>
                <h2>HOG提取接口请求方式</h2>
                <p>
                    接口的请求方式为POST,接收任意形式的图片
                </p>
                <p>
                    地址：http://120.79.17.239:6100/hogGet
                </p>
                <h3>请求数据FormData如下</h3>
                <p>
                    content: picture<br/>
                    file: (binary)
                </p>
                <h3>接口的数据返回如下</h3>
                <p>
                    data:{
                        "respcd":"0000",
                        "respmsg":"成功提交",
                        "data":{"url":"http://120.79.17.239/1009/1d406800-79d5-11e9-8a77-00163e021e9c.png"}
                    }
                </p>
                <h2>模型预测predict接口请求方式</h2>
                <p>
                    接口的请求方式为POST,接收任意形式的图片
                </p>
                <p>
                    地址：http://120.79.17.239:6100/predict
                </p>
                <h3>请求数据FormData如下</h3>
                <p>
                    url：http://120.79.17.239/1009/1d406800-79d5-11e9-8a77-00163e021e9c.png
                </p>
                <h3>接口的数据返回如下</h3>
                <p>
                    data:{
                        "respcd":"0000",
                        "respmsg":"成功提交",
                        "data":{
                            ["0.111", "0.222", "0.333", "0.444", "0.555", "0.666", "0.777", "0.888", "0.999", "0.101", "0.201"]
                        }
                    }
                </p>
                <P>
                    说明：data中的数组依次为心肌面积、心腔面积、腔体三尺寸、六个区域壁厚
                </P>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
#api {
    width: 80vw;
    background: #f6f6f6;
    border: 1px solid #d9d9d9;
    margin: 5vh 10vw;
    .api-content {
        width: 90%;
        margin: 5%;
        .api-content-title {
            font-size: 20px;
            border-bottom: 1px solid #b0b0b0;
            margin-bottom: 25px;
            padding: 0 0 15px;
        }
    }
    
}
</style>


