<<template>
    <div id="right-nav1">
        <el-row>
            <el-col :span="4">
                <left></left>
            </el-col>
            <el-col :span="20">
                <router-view></router-view>
            </el-col>
        </el-row> 
    </div>
</template>
<script>
    import left from '../../resource'
    export default {
        components: {
            left: left
        },
        data() {
            return {

            }
        },
        created() {

        },
        methods: {

        }
    }
</script>
<style lang="scss">
</style>