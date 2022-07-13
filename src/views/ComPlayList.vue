<template>
    <div>
      <!-- 歌单 -->
      <!-- 导航栏 -->
        <van-nav-bar title="歌单" left-arrow @click-left="$router.back()"/>
        <div class="cp-big">
            <!-- 歌单图片 -->
            <div class="cp-simg">
                <img v-lazy="message.coverImgUrl">
            </div>
            <!-- 歌单信息 -->
            <div class="cp-ssimg">
                <img v-lazy="message.coverImgUrl">
                <div class="cp-scrip">
                    <p style="color:white;font-size:1.1rem;">{{message.name}}</p>
                    <p style="color:rgb(227 215 215);margin-top:2rem;font-size:0.9rem;">{{cutString(message.description)}}</p>
                </div>
            </div>
            <!-- 歌单歌曲 -->
            <div class="cp-flex-direction">
                <router-link class="cp-column" v-for="(item,index) in songs" :key="index" :to="`/player/${item.id}`">
                        <div class="cp-flex-body" >
                            <div class="cp-icon"><i class="el-icon-video-play"></i></div>
                            <div class="cp-flex-column">
                                <div>
                                    <p style="color:aliceblue;font-size:1.1rem">{{cutString(item.name)}}</p>
                                </div>
                                <div class="cp-name">
                                    <div v-for="(item,index) in item.ar" :key="index">
                                        <p style="color:rgba(240, 248, 255, 0.774);font-size:0.2rem">{{item.name}}&nbsp;</p>
                                    </div>
                                    <div style="color: #686666;font-size: 0.8rem;">- {{cutString(item.al.name)}}</div>
                                </div>
                            </div>
                            <div class="cp-icont"><i class="el-icon-more"></i></div>
                        </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '@/utils/request.js'
export default {
    name:"PlayList",
    data(){
        return{
            message:"",
            songs:[]
        }
    },
    // 在created生命周期调用各方法
    created(){
        this.getMusicMes()
        this.getMusicList()
    },
    methods:{
        getMusicMes () {
            axios({
                url: '/playlist/detail?id='+this.$route.params.id+'',  /*歌单详细信息*/
                method: 'post'
            })
            .then(res => {
                // console.log("歌单信息：", res.data.playlist)
                this.message=res.data.playlist
            })
            .catch(err => {
                console.log(err)
            })
        },getMusicList () {
            axios({
                url: '/playlist/track/all?id='+this.$route.params.id+'',  /*歌单所有歌曲*/
                method: 'post'
            })
            .then(res => {
                // console.log("歌单列表：", res.data.songs)
                this.songs=res.data.songs
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
    }
}
</script>

<style>
    /* 隐藏滚动条 */
    .cp-big::-webkit-scrollbar {
        display: none;
    }

    .cp-big{
        display: -webkit-flex;
        flex-direction: column;
        height: 56rem;
        margin-top: 6rem;
        position: fixed;
        top: -6rem;
        overflow-y: auto;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .cp-simg img{
        width: 25.8rem;
        height: 14.9rem;
        filter: blur(2.8rem);
    }

    .cp-ssimg{
        position: absolute;
        top: 5.7rem;
        left: 1rem;
        display: flex;
    }

    .cp-ssimg img{
        width: 10rem;
        height: 10rem;
        border-radius: 1rem;
    }

    .cp-scrip{
        margin-left: 0.5rem;
        margin-top: 1rem;
        width: 14.2rem;
    }

    .cp-icon{
        font-size: 1.4rem;
        margin: 0.6rem;
        color: #FF5753;
    }

    .cp-icont{
        font-size: 1.3rem;
        color: #918787;
        margin-left: 2.9rem;
        margin-top: 0.7rem;
    }

    .cp-flex-direction {
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        height: 18rem;
        margin-top: 2rem;
    }

    .cp-column {
        width: 25.9rem;
        height: 3.6rem;
        background-color:#262345;
    }
    /* 大盒子内三个小盒子 */

    .cp-flex-row {
        flex-direction: row;
        display: flex;
        width: 4rem;
        height: 4rem;
        padding-top: 0.5rem;
    }

    .cp-flex-column {
        flex-direction: column;
        display: flex;
        height: 4rem;
        width: 17rem;
    }

    .cp-flex-body {
        display: flex;
        margin-top: 0.4rem;
    }


    .cp-flex-row-img {
        height: 3rem;
        width: 3rem;
        border-radius: 0.5rem;
    }

    .cp-item{
        float: left;
        width: 7rem;
        height: 10rem;
    }

    .cp-main{
        font-size: 14px;
        font-weight: 500;
    }   

    .cp-name{
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