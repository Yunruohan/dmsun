<template>
    <div id="api">
        <div class="api-content">
            <div class="api-content-title">API工具-使用说明</div>
            <div class="api-content-main">
                <h3>简介</h3>
                <p>
                    此次API包含HOG特征提取和指数预测俩个部分,预测中使用的模型是通过大量的图片输入
                </p>
                <h3>请求方式</h3>
                <p>
                    接口的请求方式为POST,接收任意形式的图片
                </p>
                <h3>请求数据FormData如下</h3>
                <p>
                    content: picture<br/>
                    file: (binary)
                </p>
                <h3>接口的数据返回如下</h3>
                <p>
                    
                </p>
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


