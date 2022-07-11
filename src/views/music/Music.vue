<template>
  <div class="m-Container">
    <!-- 音乐馆界面 -->
    <div class="m-else">
      <h1>热门歌手</h1>
      <!-- 调用导入的组件 -->
      <keep-alive>
        <HotSinger/>
      </keep-alive>
      <h1>排行榜</h1>
      <!-- 调用导入的组件 -->
      <keep-alive>
        <MusicList/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MusicList from "./MusicList"
import HotSinger from "./HotSinger"
export default {
  name:'Music',
  components:{
    MusicList,//调用组件
    HotSinger
  }
}
</script>

<style>
  .m-else {
      position: fixed;
      top: 0;
      overflow-y: auto;
      left: 0;
      right: 0;
      bottom: 66px;
  }

  .m-else h1{
      color: aliceblue;
      margin-left: 1rem;
      margin-top: 1rem;
  }

  /* 隐藏滚动条 */
  .m-else::-webkit-scrollbar {
      display: none;
  }
</style>