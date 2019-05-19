<template>
    <div id="resource">
     <el-row>
      <el-col :span="4">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#f5f6f9"
            text-color="#000"
            width="20%"
            router
            active-text-color="#000"
        >
            <!-- <el-submenu index='/main/resource/hog'>
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>Hog特征</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu> -->
            <el-menu-item index='/main/resource/hog'>
                <i class="el-icon-location"></i>
                <span>Hog</span>
            </el-menu-item>
            <el-menu-item index='/main/resource/DBN'>
                <i class="el-icon-menu"></i>
                <span slot="title">DBN</span>
            </el-menu-item>
            <el-menu-item index='/main/resource/Keras'>
                <i class="el-icon-document"></i>
                <span slot="title">Keras</span>
            </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
          <router-view/>
      </el-col>
     </el-row>
    </div>
</template>
<script>
    export default {
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
#resource {
    .el-menu {
        height: auto;
        overflow: hidden;
		margin-bottom: -10000px;
		padding-bottom: 10000px; 
    }
}
</style>