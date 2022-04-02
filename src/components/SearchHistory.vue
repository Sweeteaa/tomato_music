<template>
  <div>
      <van-cell title="历史记录" style="background-color:#262345;color:#a8a8a8;"><li class="el-icon-delete"></li></van-cell>
      <van-cell :title="item" v-for="(item,index) in history" :key="index" style="background-color:#262345;color:#a8a8a8;"><li class="el-icon-circle-close"></li></van-cell>
  </div>
</template>

<script>
export default {
    name:'SearchHistory',
    data(){
        return{

        }
    },
    props:{
        history:{
            type:Array,
            required:true
        }
    },
}
</script>

<style>

</style>