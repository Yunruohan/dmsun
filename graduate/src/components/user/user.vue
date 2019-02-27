<template>
    <div id="user">
        <img src="http://120.79.17.239/1006/446fb3b8-2471-11e9-8a77-00163e021e9c.png">
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            url: '',
            respcd: '0000'
        }
    },
    created() {
        if(this.$store.state.validate === 0) {
            this.$router.push('/login')
        }else {
            axios.get(`api/pictures/show`).then((res) => {
                let data = res.data
                if(data.data.respcd === this.respcd) {
                    this.url = data.data.data[0].url
                }
            })
        }
    },

}
</script>
<style lang="scss">
#user {

}
</style>


