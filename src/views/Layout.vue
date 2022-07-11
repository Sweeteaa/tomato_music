<template>
  <div class="bottom">
      <!-- 底部导航栏 -->
      <Bottom />
      <!-- keep-alive路由缓存 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import Bottom from "../components/Bottom.vue"
export default {
    components:{
        Bottom//导入底部导航栏
    }
}
</script>

<style>

</style>