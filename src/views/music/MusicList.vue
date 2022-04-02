<template>
  <div>
    <!-- <MusicListView :highmusic="HighMusic"/>
    <MusicListView  :newmusic="NewMusic"/>
    <MusicListView  :orimusic="OriMusic"/>
    <MusicListView  :hotmusic="HotMusic"/> -->

    <MusicListView :title="high" :highmusic="HighMusic"/>
    <MusicListView :title="news" :newmusic="NewMusic"/>
    <MusicListView :title="ori" :orimusic="OriMusic"/>
    <MusicListView :title="hot" :hotmusic="HotMusic"/>
  </div>
</template>

<script>
import axios from '@/utils/request.js'
import MusicListView from "./MusicListView"
export default {
  name:'MusicList',
  components:{
    MusicListView
  },
  data(){
    return{
        HighMusic:[],
        NewMusic:[],
        HotMusic:[],
        OriMusic:[],
        high:'',
        news:'',
        ori:'',
        hot:''
    }
  },
  created(){
      this.getHighMusic()
      this.getNewMusic()
      this.getOriMusic()
      this.getHotMusic()
      this.getTitle()
  },
  methods: {
    getHighMusic () {
      axios({
        url: '/playlist/track/all?id=19723756&limit=3&offset=0',  /*飙升榜接口地址*/
        method: 'post'
      })
        .then(res => {
            console.log("飙升榜数据：", res.data.songs)
            this.HighMusic=res.data.songs
        })
        .catch(err => {
          console.log(err)
        })
    },
    getNewMusic () {
      axios({
        url: '/playlist/track/all?id=3779629&limit=3&offset=0',  /*新歌榜接口地址*/
        method: 'post'
      })
        .then(res => {
            console.log("新歌榜数据：", res.data.songs)
            this.NewMusic=res.data.songs
        })
        .catch(err => {
          console.log(err)
        })
    },
    getHotMusic () {
      axios({
        url: '/playlist/track/all?id=3778678&limit=3&offset=0',  /*热歌榜接口地址*/
        method: 'post'
      })
        .then(res => {
            console.log("热歌榜数据：", res.data.songs)
            this.HotMusic=res.data.songs
        })
        .catch(err => {
          console.log(err)
        })
    },
    getOriMusic () {
      axios({
        url: '/playlist/track/all?id=2884035&limit=3&offset=0',  /*原创榜接口地址*/
        method: 'post'
      })
        .then(res => {
            console.log("原创榜数据：", res.data.songs)
            this.OriMusic=res.data.songs
        })
        .catch(err => {
          console.log(err)
        })
    },
    getTitle () {
      axios({
        url: '/toplist',  /*歌单名称接口地址*/
        method: 'post'
      })
        .then(res => {
            console.log("榜单标题：", res.data.list)
            // console.log(res.data.list[0].name)
            this.high=res.data.list[0].name,
            this.news=res.data.list[1].name,
            this.ori=res.data.list[2].name,
            this.hot=res.data.list[3].name
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>