<template>
  <div>
      <!-- 历史记录 -->
      <van-cell title="历史记录" style="background-color:#262345;color:#a8a8a8;"><li class="el-icon-delete" @click="$emit('update',[])"></li></van-cell>
      <van-cell :title="item" v-for="(item,index) in history" :key="index" style="background-color:#262345;color:#a8a8a8;" ><li class="el-icon-circle-close"></li></van-cell>
  </div>
</template>

<script>
export default {
    name:'SearchHistory',
    data(){
        return{
            
        }
    },
    // 接收获取到的历史记录
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