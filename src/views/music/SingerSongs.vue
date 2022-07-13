<template>
    <div class="ss-big">
      <!-- 歌手界面 -->
      <!-- 导航栏 -->
      <van-nav-bar :title="this.$route.params.name" left-arrow @click-left="$router.back()"/>
      <!-- 歌手照片 -->
      <div class="ss-simg">
          <img v-lazy="detail.cover">
      </div>
      <!-- 歌手简介 -->
      <div class="ss-msg">
          <h1 style="color:white;">{{this.$route.params.name}}</h1>
          <span style="color:#FF5753;font-size:0.5rem;">粉丝：{{this.$route.params.fansCount}}</span>
          <p style="color:#918787;">  {{cutMsg(detail.briefDesc)}}</p>
      </div>
      <!-- 歌手歌曲 -->
      <div class="ss-flex-direction">
            <router-link class="ss-column" v-for="(item,index) in songs" :key="index" :to="`/player/${item.id}`">
                <div class="ss-flex-body" >
                    <div class="ss-icon"><i class="el-icon-video-play"></i></div>
                    <div class="ss-flex-column">
                        <div>
                            <p style="color:aliceblue;font-size:1.1rem">{{cutString(item.name)}}</p>
                        </div>
                        <div class="ss-name">
                            <div v-for="(item,index) in item.ar" :key="index">
                                <p style="color:rgba(240, 248, 255, 0.774);font-size:0.2rem">{{item.name}}&nbsp;</p>
                            </div>
                            <div style="color: #686666;font-size: 0.8rem;">- {{cutString(item.al.name)}}</div>
                        </div>
                    </div>
                    <div class="ss-icont"><i class="el-icon-more"></i></div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from '@/utils/request.js'
export default {
    name:'SingerSongs',
    data(){
        return{
            songs:'',
            detail:''
        }
    },
    // 在created生命周期调用各方法
    created(){
        this.getMusic(),
        this.getDetail()
    },
    methods:{
        getMusic () {
            axios({
                url: '/artist/top/song?id='+this.$route.params.id+'', //获取歌手的50首歌
                method: 'post'
            })
            .then(res => {
                // console.log("歌手50首歌：", res.data.songs)
                this.songs=res.data.songs
            })
            .catch(err => {
                console.log(err)
            })
        },
        getDetail () {
            axios({
                url: '/artist/detail?id='+this.$route.params.id+'', //获取歌手详细信息
                method: 'post'
            })
            .then(res => {
                // console.log("歌手详细信息：", res.data.data.artist)
                this.detail=res.data.data.artist
            })
            .catch(err => {
                console.log(err)
            })
        },
        // 限制文字长度
        cutString(str){
            if(str.length>26){
                return str.substring(0,26)+"..."
            }
            return str;
        },
        cutMsg(str){
            if(str.length>70){
                return str.substring(0,70)+"..."
            }
            return str;
        }
    }
}
</script>
<style>
    /* 隐藏滚动条 */
    .ss-flex-direction::-webkit-scrollbar {
        display: none;
    }

    .ss-simg{
        position: relative;
        background-position: center;
        background-blend-mode: normal;
    }

    .ss-simg img{
        width: 25.9rem;
    }

    .ss-msg{
        background-color: #393568;
        width: 22rem;
        height: 9rem;
        position: absolute;
        top: 20.5rem;
        left: 1.5rem;
        border-radius: 1rem;
        padding: 0.6rem;
    }

    .ss-icon{
        font-size: 1.4rem;
        margin: 0.6rem;
        color: #FF5753;
    }

    .ss-icont{
        font-size: 1.3rem;
        color: #918787;
        margin-left: 2.9rem;
        margin-top: 0.7rem;
    }

    .ss-flex-direction {
        display: -webkit-flex;
        flex-direction: column;
        height: 26rem;
        margin-top: 6rem;
        position: fixed;
        top: 25rem;
        overflow-y: auto;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .ss-column {
        width: 25.9rem;
        height: 3.6rem;
        background-color: #262345;
    }
    /* 大盒子内三个小盒子 */

    .ss-flex-row {
        flex-direction: row;
        display: flex;
        width: 4rem;
        height: 4rem;
        padding-top: 0.5rem;
    }

    .ss-flex-column {
        flex-direction: column;
        display: flex;
        height: 4rem;
        width: 17rem;
    }

    .ss-flex-body {
        display: flex;
        margin-top: 0.4rem;
    }


    .ss-flex-row-img {
        height: 3rem;
        width: 3rem;
        border-radius: 0.5rem;
    }

    .ss-item{
        float: left;
        width: 7rem;
        height: 10rem;
    }

    .ss-main{
        font-size: 14px;
        font-weight: 500;
    }   

    .ss-name{
        width: 24rem;
        display: flex;
    }

    /* 导航栏 */
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
        width: 100%;
        height: 100% !important;
        line-height: 3.3rem !important;
        max-width: 60%;
        margin: 0 auto;
        color:#FF5753;;
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

    .van-icon-arrow-left:before {
        content: '\e668';
        color: #fff;
    }
</style>