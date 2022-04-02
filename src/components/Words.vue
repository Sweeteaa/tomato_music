<template>
  <div class="Container">
    <div class="Lrc" ref="Lrc">
      <p v-for="(lrc,key,index) in Word" :key="index" class="Lrc-p" :class="{'active':currentTime > allKeys[index] && currentTime <allKeys[index+1]}">
        <!-- <span v-if="currentTime > allKeys[index] && currentTime <allKeys[index+1]">{{lrc}}</span> -->
        <span>{{cutString(lrc)}}{{scrollLrc(index)}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import axios from '@/utils/request.js'
export default {
  name:"Words",
    data(){
        return{
            Word:"",
            allKeys:[]
        }
    },
    props:{
      id:{
        type:[String,Number],
        required:true
      },
      currentTime:{
        type:Number,
        default:0
      }
    },
    created(){
      this.getWords()
    },
    methods: {
        getWords () {
            axios({
                url: '/lyric?id='+this.id+'',  /*飙升榜接口地址*/
                method: 'post'
            })
            .then(res => {
              console.log(this.id)
                // console.log("音乐歌词：", res.data.lrc.lyric)
                // this.Word=res.data.lrc.lyric
                // this.filterWord(res.data.lrc.lyric)
                this.Word=this.filterWord(res.data.lrc.lyric)
            })
            .catch(err => {
                console.log(err)
            })
        },
        filterWord(word){
          if(!word) return;
          var lrc={}
          var lyrics=word.split("\n");
          // console.log(lyrics);
          var reg=/\[\d*:\d*(\.|:)\d*]/g;
          for(var i=0;i<lyrics.length;i++){
            var timeRegArr=lyrics[i].match(reg);
            if(!timeRegArr) continue;
            var content=lyrics[i].replace(timeRegArr,"");
            var t=timeRegArr[0];
            var min=parseInt(t.match(/\[\d*/i).toString().slice(1));
            var sec=parseInt(t.match(/:\d*/i).toString().slice(1));
            var time=min*60+sec;
            lrc[time]=content;
          }
          this.lrcData=lrc;
          this.getAllKey(lrc)
          console.log(this.getAllKey(lrc))
          return this.lrcData
        },
        getAllKey(lrcArr){
          for(var key in lrcArr){
            this.allKeys.push(key)
          }
          return this.allKeys
        },
        scrollLrc(index){
            // console.log(this.currentTime)
            if(this.currentTime > this.allKeys[index] && this.currentTime < this.allKeys[index+1]){
                setTimeout(()=>{
                  this.$refs.Lrc.style.top=-(2.7*(index-1))+'rem'
                },0)
            }
        },
        cutString(str){
            if(str.length>50){
                return str.substring(0,50)+"..."
            }
            return str;
        }
        
    }
}
</script>

<style>
.active{
  color: #FF5753 !important;
  font-size: 1.2rem !important;
}

.Container::-webkit-scrollbar {
    display: none;
}
.Container{
  position: relative;
  overflow-y:scroll;
  width: 90%;
  height: 150px;
  margin-left: 2rem;
  margin-top: 1rem;
}

.Lrc{
  position: absolute;
  width: 100%;
  top:1px;
  /* margin-left: 2rem;
  margin-top: 1rem; */
}

.Lrc-p{
  color: aliceblue;
  height: 2.7rem;
  font-size: 1.1rem;
  width: 85%;
}

</style>