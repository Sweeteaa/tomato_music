<template>
  <div>
      <!-- 排行榜 -->
      <!-- 导航栏 -->
      <van-nav-bar :title="detail.name" left-arrow @click-left="$router.back()"/>
      <div class="mr-big">
            <!-- 图片 -->
            <div class="mr-simg">
                <img :src="detail.coverImgUrl">
                <p style="position: absolute;top: 2.2rem;left: 5.5rem;font-size:5.2rem;font-family:LiSu;color:white;text-shadow: 1.3px 0px #eb7a7a;">{{detail.name}}</p>
            </div>
            <!-- 榜单歌曲 -->
            <div class="mr-flex-direction">
                <router-link class="mr-column" v-for="(item,index) in songs" :key="index" :to="`/player/${item.id}`">
                        <div class="mr-flex-body" >
                            <div class="mr-icon">{{index+1}}</div>
                            <div class="mr-flex-column">
                                <div>
                                    <p style="color:aliceblue;font-size:1.1rem">{{cutString(item.name)}}</p>
                                </div>
                                <div class="mr-name">
                                    <div v-for="(item,index) in item.ar" :key="index">
                                        <p style="color:rgba(240, 248, 255, 0.774);font-size:0.2rem">{{item.name}}&nbsp;</p>
                                    </div>
                                    <div style="color: #686666;font-size: 0.8rem;">- {{cutString(item.al.name)}}</div>
                                </div>
                            </div>
                            <div class="mr-icont"><i class="el-icon-more"></i></div>
                        </div>
                </router-link>
            </div>
      </div>
  </div>
</template>

<script>
import axios from '@/utils/request.js'
export default {
    name:'MusicListRank',
    data(){
        return{
            songs:'',//存储数据
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
                url: '/playlist/track/all?id='+this.$route.params.id+'', //获取榜单音乐
                method: 'post'
            })
            .then(res => {
                // console.log("排行榜歌曲：", res.data.songs)
                this.songs=res.data.songs
            })
            .catch(err => {
                console.log(err)
            })
        },
        getDetail () {
            axios({
                url: '/playlist/detail?id='+this.$route.params.id+'', //获取榜单详细信息
                method: 'post'
            })
            .then(res => {
                // console.log("榜单详细信息：", res.data.playlist)
                this.detail=res.data.playlist
            })
            .catch(err => {
                console.log(err)
            })
        },
        // 限定文字长度
        cutString(str){
            if(str.length>10){
                return str.substring(0,10)+"..."
            }
            return str;
        },
        cutMsg(str){
            if(str.length>15){
                return str.substring(0,15)+"..."
            }
            return str;
        }
    }
}
</script>
<style>
    .mr-simg{
        position: relative;
        background-position: center;
        background-blend-mode: normal;
        height: 12rem;
    }

    .mr-simg img{
        width: 25.9rem;
        height: 12rem;
        filter: blur(0.4rem);
    }

    .mr-msg{
        background-color: #393568;
        width: 22rem;
        height: 9rem;
        position: absolute;
        top: 20.5rem;
        left: 1.5rem;
        border-radius: 1rem;
        padding: 0.6rem;
    }

    .mr-icon{
        font-size: 1.1rem;
        margin: 0.6rem;
        color: #FF5753;
        line-height: 1.6rem;
        width: 2rem;
        text-align: center;
    }

    .mr-icont{
        font-size: 1.3rem;
        color: #918787;
        margin-left: 2.9rem;
        margin-top: 0.7rem;
    }

    .mr-big::-webkit-scrollbar {
        display: none;
    }

    .mr-big{
        display: -webkit-flex;
        flex-direction: column;
        height: 53rem;
        margin-top: 6rem;
        position: fixed;
        top: -3rem;
        overflow-y: auto;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .mr-flex-direction {
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        height: 18rem;
    }

    .mr-column {
        width: 25.9rem;
        height: 3.6rem;
        background-color: #262345;
    }
    /* 大盒子内三个小盒子 */

    .mr-flex-row {
        flex-direction: row;
        display: flex;
        width: 4rem;
        height: 4rem;
        padding-top: 0.5rem;
    }

    .mr-flex-column {
        flex-direction: column;
        display: flex;
        height: 4rem;
        width: 17rem;
    }

    .mr-flex-body {
        display: flex;
        margin-top: 0.4rem;
    }


    .mr-flex-row-img {
        height: 3rem;
        width: 3rem;
        border-radius: 0.5rem;
    }

    .mr-item{
        float: left;
        width: 7rem;
        height: 10rem;
    }

    .mr-main{
        font-size: 14px;
        font-weight: 500;
    }   

    .mr-name{
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
    .van-icon-arrow-left:before {
        content: '\e668';
        color: #fff;
    }
</style>