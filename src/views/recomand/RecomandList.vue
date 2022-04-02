<template>
  <div>
    <RecomandListDaily :resource="Resource"/>
    <RecomandListView :title="rec" :news="New"/>
    <RecomandListView :title="song" :songs="Songs"/>
  </div>
</template>

<script>
import axios from '@/utils/request.js'
import RecomandListView from "./RecomandListView"
import RecomandListDaily from "./RecomandListDaily"
export default {
  name:'RecomandList',
  components:{
    RecomandListView,
    RecomandListDaily
  },
  data(){
    return{
        Songs:[],
        Resource:[],
        New:[],
        song:'',
        rec:''
    }
  },
  created(){
      this.getSongs()
      this.getResource()
      this.getNew()
  },
  methods: {
    getSongs () {
      axios({
        url: '/simi/song?id=347230',  /*每日推荐歌曲接口地址*/
        method: 'post'
      })
        .then(res => {
            console.log("与海阔天空相关歌曲：", res.data.songs)
            this.Songs=res.data.songs
            this.song='根据 『海阔天空』 推荐'
        })
        .catch(err => {
          console.log(err)
        })
    },
    getNew () {
      axios({
        url: '/personalized/newsong?limit=5',  /*每日推荐歌单接口地址*/
        method: 'post'
      })
        .then(res => {
            console.log("推荐新音乐：", res.data.result)
            this.New=res.data.result
            this.rec='猜你喜欢'
        })
        .catch(err => {
          console.log(err)
        })
    },
    getResource () {
      axios({
        url: '/recommend/resource',  /*每日推荐歌单接口地址*/
        method: 'post'
      })
        .then(res => {
            console.log("日推歌单数据：", res.data.recommend)
            this.Resource=res.data.recommend
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
</script>

<style>

</style>