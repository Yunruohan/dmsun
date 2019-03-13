<template>
    <div id="main">
        <div class="header">
            <top></top>
        </div>
        <router-view/>
    </div>
</template>
<script>
  import top from '../top/top'
  import product from '../product/product'
  export default {
      components: {
          top: top,
          product: product
      },
      data () {
          return {
           
          }
      },
      created() {

      },
      methods: {

      }
  }
</script>
<style lang='scss'>
#main {
    width: 100%;
    height: 60px;
    top: 0;
    left: 0;
    position: relative;
    z-index: 300;
    background: #000;
}

</style>