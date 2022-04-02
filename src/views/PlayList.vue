<template>
  <div>
      <van-nav-bar :title="message.name" left-arrow @click-left="$router.back()"/>
      <div class="pl-flex-direction">
            <router-link class="pl-column" v-for="(item,index) in songs" :key="index" :to="`/player/${item.id}`">
                    <div class="pl-flex-body" >
                        <div class="pl-flex-column">
                            <div>
                                <p style="color:aliceblue;font-size:1.1rem">{{cutString(item.name)}}</p>
                            </div>
                            <div class="pl-name">
                                <div v-for="(item,index) in item.ar" :key="index">
                                    <p style="color:rgba(240, 248, 255, 0.774);font-size:0.2rem">{{item.name}}&nbsp;</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </router-link>
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
    created(){
        this.getMusicMes()
        this.getMusicList()
    },
    methods:{
        getMusicMes () {
            axios({
                url: '/user/playlist?uid='+this.$route.params.userId+'',  /*飙升榜接口地址*/
                method: 'post'
            })
            .then(res => {
                console.log("歌单信息：", res.data.playlist[0])
                this.message=res.data.playlist[0]
            })
            .catch(err => {
                console.log(err)
            })
        },getMusicList () {
            axios({
                url: '/playlist/track/all?id=116408330',  /*飙升榜接口地址*/
                method: 'post'
            })
            .then(res => {
                console.log("歌单列表：", res.data.songs)
                this.songs=res.data.songs
            })
            .catch(err => {
                console.log(err)
            })
        },
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
.van-nav-bar {
    position: relative;
    z-index: 1;
    line-height: 22px;
    text-align: center;
    background-color: #262345;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 25.9rem;
}


.van-hairline--bottom:after {
  border-bottom-width: 0px;
}

.van-nav-bar .van-icon{
    color: #a8a8a8;
    font-size: 1.1rem;
}

.van-nav-bar__title {
    margin-left: 5rem;
    font-size: 1.1rem;
    width: 23rem;
    height: 2rem;
    color: #a8a8a8;
    line-height: 2.2rem;
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
    width: 18rem;
    display: flex;
}
</style>