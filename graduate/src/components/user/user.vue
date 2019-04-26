<template>
    <div id="user">
        <div class="user-content">
            <div class="user-content-title">个人中心</div>
            <el-table
                :data="tableData"
            >
                <el-table-column prop="create_time" label="上传时间"></el-table-column>
                <el-table-column prop="url" label="图片地址"></el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            url: '',
            respcd: '0000',
            tableData: []
        }
    },
    created() {
        if(this.$store.state.validate === 0) {
            this.$router.push('/login')
        }else {
            axios.get(`api/pictures/show`).then((res) => {
                let data = res.data
                if(data.respcd === this.respcd) {
                    this.tableData = data.data
                }
            })
        }
    },
    methods: {

    }

}
</script>
<style lang="scss">
#user {
    width: 80vw;
    background: #f6f6f6;
    border: 1px solid #d9d9d9;
    margin: 5vh 10vw;
    .user-content {
        width: 90%;
        margin: 5%;
        .user-content-title {
            font-size: 20px;
            border-bottom: 1px solid #b0b0b0;
            margin-bottom: 25px;
            padding: 0 0 15px;
        }
    }
}
</style>


