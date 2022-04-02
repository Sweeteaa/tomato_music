<template>
  <div>
    <van-nav-bar title="歌曲" left-arrow @click-left="$router.back()"/>
    <div class="pic">
        <img :src="MusicMes.al.picUrl"/>
    </div>
    <div class="mes">
        <h1>{{MusicMes.name}}</h1>
        <p>{{MusicMes.ar[0].name}}</p>
    </div>
    <div class="song">
        <Words :id="$route.params.id" :currentTime="currentTime" />
        <audio  controls :src="MusicURL.url" ref="audio"   @canplay="getDuration" @timeupdate="updateTime"></audio>
    </div>
  </div>
</template>

<script>
import axios from '@/utils/request.js'
import Words from '../components/Words.vue'
export default {
    name:"Player",
    data(){
        return{
            MusicURL:{},
            MusicMes:{},
            currentTime:0
        }
    },
    watch:{
        currentSong() {  //监听正在播放的歌曲改变
            this.$nextTick(() => {
                this.$refs.audio.play();
                console.log(this.$refs.audio.duration); //此时duration为NaN
            })
        },
    },
    components:{
        Words
    },
    created(){
      this.getMusicURL()
      this.getMusicMes()
    },
    methods: {
        getMusicURL () {
            axios({
                url: '/song/url?id='+this.$route.params.id+'',  /*飙升榜接口地址*/
                method: 'post'
            })
            .then(res => {
                console.log("音乐播放url：", res.data.data[0])
                this.MusicURL=res.data.data[0]
            })
            .catch(err => {
                console.log(err)
            })
        },
        getMusicMes () {
            axios({
                url: '/song/detail?ids='+this.$route.params.id+'',  /*飙升榜接口地址*/
                method: 'post'
            })
            .then(res => {
                console.log("音乐详情：", res.data.songs[0])
                this.MusicMes=res.data.songs[0]
            })
            .catch(err => {
                console.log(err)
            })
        },
        getDuration() {
            // console.log("歌曲总时长",this.$refs.audio.duration); //此时可以获取到duration
            this.duration = this.$refs.audio.duration;
        },
        updateTime(e) {
            this.currentTime = e.target.currentTime;  //获取audio当前播放时间
            // console.log("歌曲各时间段",this.$refs.audio.currentTime);
        },
    },
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
    line-height: 1.7rem;
}

.pic img {
    width: 24rem;
    height: 24rem;
    margin-left: 1rem;
    margin-top: 1.5rem;
    border-radius: 2rem;
}

.mes h1{
    color: white;
    font-size: 2rem;
}

.mes{
    margin-top: 2rem;
    margin-left: 2rem;
}

.mes p{
    color: #a8a8a8;
    font-size: 1rem;
    margin-top: 0.5rem;
}

.song audio {
    width: 24rem;
    margin-left: 1rem;
    margin-top: 3rem;
}

</style>