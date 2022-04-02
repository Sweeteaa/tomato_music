<template>
  <div class="Container">
    <div class="search">
      <van-nav-bar class="app-nav-bar">
        <van-button slot="title" to="/search"><i class="el-icon-search" ></i>搜索</van-button>
      </van-nav-bar>
    </div>
    <div class="else">
      <h1>热门歌手</h1>
      <HotSinger/>
      <h1>排行榜</h1>
      <MusicList/>
    </div>
  </div>
</template>

<script>
import MusicList from "./MusicList"
import HotSinger from "./HotSinger"
export default {
  name:'Music',
  components:{
    MusicList,
    HotSinger
  }
}
</script>

<style>
.else {
    position: fixed;
    top: 3.3rem;
    overflow-y: auto;
    left: 0;
    right: 0;
    bottom: 65px;
}

.else h1{
  color: aliceblue;
  margin-left: 1rem;
}

.else::-webkit-scrollbar {
    display: none;
}

.van-nav-bar__content {
    position: relative !important;
    display: flex !important;
    -webkit-box-align: center !important;
    -webkit-align-items: center !important;
    align-items: center !important;
    height: 3.2rem !important;
    width: 23.9rem !important;
}

.van-nav-bar {
    background-color: #383676 !important;
}

.van-hairline--bottom:after {
  border-bottom-width: 0px !important;
}

.van-nav-bar__title {
    margin-left: 8rem !important;
    height: 2.3rem !important;
}

.van-button--normal {
    width: 14rem !important;
    height: 2rem !important;
    border-radius: 2.3rem !important;
    font-weight: 500 !important;
    color: #a8a8a8 !important;
    background-color: #46578a !important;
    border:none !important;
}

.el-icon-search:before {
    content: "\e778";
    margin: 0.5rem;
    font-size: 0.9rem;
}

</style>