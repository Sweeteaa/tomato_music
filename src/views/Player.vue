<template>
  <div>
        <!-- 播放器 -->
        <van-nav-bar title="歌曲" left-arrow @click-left="$router.back()"/>
        <!-- 歌曲专辑图片 -->
        <div class="player-pic">
            <img v-lazy="MusicMes.al.picUrl"/>
        </div>
        <!-- 歌曲名字 -->
        <div class="player-mes">
            <h1>{{cutString(MusicMes.name)}}</h1>
            <p>{{MusicMes.ar[0].name}}</p>
        </div>
        <!-- 歌词与音乐播放 -->
        <div class="player-song">
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
                //console.log(this.$refs.audio.duration); //此时duration为NaN
            })
        },
    },
    components:{
        Words
    },
    // 在created生命周期调用各方法
    created(){
      this.getMusicURL()
      this.getMusicMes()
    },
    methods: {
        getMusicURL () {
            axios({
                url: '/song/url?id='+this.$route.params.id+'',  /*歌曲播放url*/
                method: 'post'
            })
            .then(res => {
                // console.log("音乐播放url：", res.data.data[0])
                this.MusicURL=res.data.data[0]
            })
            .catch(err => {
                console.log(err)
            })
        },
        getMusicMes () {
            axios({
                url: '/song/detail?ids='+this.$route.params.id+'',  /*歌曲详情*/
                method: 'post'
            })
            .then(res => {
                // console.log("音乐详情：", res.data.songs[0])
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
        // 限制文字长度
        cutString(str){
            if(str.length>15){
                return str.substring(0,15)+"..."
            }
            return str;
        },
    },
}
</script>

<style>
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

    .player-pic img {
        width: 24rem;
        height: 24rem;
        margin-left: 1rem;
        margin-top: 1.5rem;
        border-radius: 2rem;
    }

    .player-mes h1{
        color: white;
        font-size: 2rem;
    }

    .player-mes{
        margin-top: 2rem;
        margin-left: 2rem;
    }

    .player-mes p{
        color: #a8a8a8;
        font-size: 1rem;
        margin-top: 0.5rem;
    }

    .player-song audio {
        width: 24rem;
        margin-left: 1rem;
        margin-top: 3rem;
    }
</style>