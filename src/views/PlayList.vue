<template>
  <div>
      <!-- 我收藏的歌单 -->
      <!-- 导航栏 -->
      <van-nav-bar :title="message.name" left-arrow @click-left="$router.back()"/>
      <div class="pl-big">
            <!-- 歌单歌曲列表 -->
            <div class="pl-flex-direction">
                <router-link class="pl-column" v-for="(item,index) in songs" :key="index" :to="`/player/${item.id}`">
                    <div class="pl-flex-body" >
                        <div style="margin-right: 0.5rem;margin-top: 0.8rem;color: #FF5753;font-size: 1.2rem;width:1.3rem;text-align: center;">{{index+1}}</div>
                        <div class="pl-flex-column">
                            <div>
                                <p style="color:aliceblue;font-size:1.1rem">&nbsp;&nbsp;{{cutString(item.name)}}</p>
                            </div>
                            <div class="pl-name">
                                <div v-for="(item,index) in item.ar" :key="index">
                                    <p style="color:rgba(240, 248, 255, 0.774);font-size:0.2rem">&nbsp;&nbsp;&nbsp;{{item.name}}&nbsp;</p>
                                </div>
                                <div style="color: #686666;font-size: 0.8rem;">- {{cutString(item.al.name)}}</div>
                            </div>
                        </div>
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
                url: '/user/playlist?uid='+this.$route.params.userId+'',  /*获取歌单信息*/
                method: 'post'
            })
            .then(res => {
                // console.log("歌单信息：", res.data.playlist[0])
                this.message=res.data.playlist[0]
            })
            .catch(err => {
                console.log(err)
            })
        },getMusicList () {
            axios({
                url: '/playlist/track/all?id=116408330',  /*获取指定歌单内歌曲*/
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
    .pl-big::-webkit-scrollbar {
        display: none;
    }

    .pl-big{
        display: -webkit-flex;
        flex-direction: column;
        height: 53.1rem;
        margin-top: 6rem;
        position: fixed;
        top: -2.3rem;
        overflow-y: auto;
        left: 0;
        right: 0;
        bottom: 0;
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

    .pl-flex-direction {
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        height: 18rem;
    }

    .pl-column {
        width: 25.9rem;
        height: 3.6rem;
        background-color: rgb(50 47 84);
    }
    /* 大盒子内三个小盒子 */

    .pl-flex-row {
        flex-direction: row;
        display: flex;
        width: 4rem;
        height: 4rem;
        padding-top: 0.5rem;
    }

    .pl-flex-column {
        flex-direction: column;
        display: flex;
        height: 4rem;
        width: 17rem;
        line-height: 1.6rem;
    }

    .pl-flex-body {
        display: flex;
        margin-left: 1rem;
        margin-top: 0.4rem;
    }

    .pl-flex-row-img {
        height: 3rem;
        width: 3rem;
        border-radius: 0.5rem;
    }

    .pl-item{
        float: left;
        width: 7rem;
        height: 10rem;
    }

    .pl-main{
        font-size: 14px;
        font-weight: 500;
    }   

    .pl-name{
        width: 24rem;
        display: flex;
    }
</style>