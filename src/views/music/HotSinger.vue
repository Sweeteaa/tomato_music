<template>
  <div>
      <!-- 热门歌手列表 -->
      <div class="hs-flex-direction">
        <!-- 跳转到歌手页面 -->
        <router-link class="hs-column" v-for="(item,index) in singers" :key="index" :to="`/singer/${item.id}/${item.name}/${item.fansCount}`">
            <div class="hs-sing" >
                <img :src="item.picUrl">
                <div class="hs-sing-name">{{item.name}}</div>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
import axios from '@/utils/request.js'
export default {
    name:"HotSinger",
    data(){
        return{
            singers:[]//存储获取到的歌手信息
        }
    },
    // 在created生命周期调用getHotSinger方法
    created(){
        this.getHotSinger()
    },
    methods:{
        getHotSinger () {
            axios({
                url: '/top/artists?limit=25',  /*获取前25位热门歌手*/
                method: 'post'
            })
            .then(res => {
                // console.log("热门歌手：", res.data.artists)
                this.singers=res.data.artists
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style>
    .hs-flex-direction {
        display: flex;
        display: -webkit-flex;
        height: 8rem;
        margin-left: 0.7rem;
        margin-top: 1rem;
        width: 24.4rem;
        overflow: scroll;
    }

    .hs-flex-direction::-webkit-scrollbar {
        display: none;
    }

    .flex-direction::-webkit-scrollbar {
        display: none;
    }

    .hs-column {
        width: 22rem;
        height: 3rem;
        background-color: #262345;
        margin-top: 0.5rem;
        margin-left: 0.5rem;
    }
    /* 大盒子内三个小盒子 */

    .hs-flex-row {
        flex-direction: row;
        display: flex;
        width: 4rem;
        height: 4rem;
        padding-top: 0.5rem;
    }

    .hs-flex-column {
        flex-direction: column;
        display: flex;
        height: 8rem;
        width: 17rem;
        margin-top: 1rem;
    }

    .hs-flex-body {
        display: flex;
    }


    .hs-flex-row-img {
        height: 3rem;
        width: 3rem;
        border-radius: 0.5rem;
    }

    .hs-sing{
        float: left;
        width: 5.5rem;
        height: 6rem;
        background-color: #17152a;
        border-radius: 0.5rem;
    }

    .hs-sing-name{
        font-size: 14px;
        font-weight: 500;
        color: #f8f8f8;
        text-align: center;
    }   

    .hs-sing img{
        width: 4rem;
        height: 4rem;
        border-radius: 2rem;
        text-align: center;
        margin-left: 0.8rem;
        margin-top: 0.2rem;
    }
</style>