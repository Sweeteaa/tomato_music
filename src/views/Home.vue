<template>
    <!-- 首页 -->
    <div class="h-car">
      <div class="h-search">
        <!-- 搜索 -->
        <van-nav-bar class="h-app-nav-bar">
          <van-button slot="title" to="/search"><i class="el-icon-search" ></i>搜索</van-button>
        </van-nav-bar>
      </div>
      <!-- 首页主要内容 -->
      <div class="h-else">
        <!-- 轮播图 -->
        <keep-alive>
          <Carousel/>
        </keep-alive>
        <!-- 首页推荐 -->
        <keep-alive>
          <RecomandList/>
        </keep-alive>
      </div>
    </div>
</template>

<script>
import Carousel from "../components/Carousel.vue"
import RecomandList from "./recomand/RecomandList"
export default {
    name:"Home",
    components:{
        Carousel,//导入组件
        RecomandList
    }
}
</script>

<style>
  .h-else::-webkit-scrollbar {
      display: none;
  }

  .h-else {
      position: fixed;
      top: 3.3rem;
      overflow-y: auto;
      left: 0;
      right: 0;
      bottom: 65px;
  }
  /* 搜索栏 */
  .van-nav-bar__content {
      position: relative !important;
      display: flex !important;
      -webkit-box-align: center !important;
      -webkit-align-items: center !important;
      align-items: center !important;
      height: 3.4rem !important;
      width: 24rem !important;
  }

  .van-nav-bar {
      background-color: #383676 !important;
      height: 3.7rem !important;
  }

  .van-hairline--bottom:after {
    border-bottom-width: 0px !important;
  }

  .van-nav-bar__title {
      margin-left: 6rem !important;
      width: 100%;
      height: 100% !important;
      line-height: 3.3rem !important;
      max-width: 60%;
      color: #FF5753;
      font-weight: 500;
      font-size: 1.3rem;
  }

  .van-button--normal {
      width: 14rem !important;
      height: 2.2rem !important;
      border-radius: 2.3rem !important;
      font-weight: 500 !important;
      color: #a8a8a8 !important;
      background-color: #46578a !important;
      border:none !important;
  }
</style>