<template>
  <div class="m-Container">
        <div class="m-image">
            <img :src="Message.avatarUrl">
            <button>设置</button>
            <div class="m-name">
                <p style="color: aliceblue;font-size: 3.5rem;">{{Message.nickname}}</p>
                <p style="color: #FF5753;font-size: 1rem;">{{Message.follows}}关注    {{Message.followeds}} 粉丝    Lv.{{Message.gender}}</p>
            </div>
        </div>
        <div class="m-message">
            <p style="font-size: 1.5rem;color: black;margin: 1rem;">我的</p>
            <div class="m-flex-direction">
                <div class="m-column" style="border-bottom:0.01rem solid #a8a8a8">
                    <div class="m-flex-row-direction">
                        <div class="m-flex-row-side">
                            <i class="el-icon-star-on"></i>
                        </div>
                        <div class="m-flex-row-middle">收藏</div>
                        <div class="m-flex-row-side">
                            <i class="el-icon-more"></i>
                        </div>
                    </div>
                </div>
                <router-link tag="div" class="m-column" style="border-bottom:0.01rem solid #a8a8a8" :to="`/playlist/${Message.userId}`">
                    <div class="m-flex-row-direction">
                        <div class="m-flex-row-side">
                            <i class="el-icon-files"></i>
                        </div>
                        <div class="m-flex-row-middle">歌单</div>
                        <div class="m-flex-row-side">
                            <i class="el-icon-more"></i>
                        </div>
                    </div>
                </router-link>
                <div class="m-column">
                    <div class="m-flex-row-direction">
                        <div class="m-flex-row-side">
                            <i class="el-icon-download"></i>
                        </div>
                        <div class="m-flex-row-middle">本地歌曲</div>
                        <div class="m-flex-row-side">
                            <i class="el-icon-more"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from '@/utils/request.js'
export default {
  name:'Message',
  components:{
  },
  data(){
    return{
        Message:[],
    }
  },
  created(){
      this.getMessage()
  },
  methods: {
    getLogin () {
      axios({
        url: '/login/cellphone?phone=13650952278&password=952278pj',  /*飙升榜接口地址*/
        method: 'post'
      })
        .then(res => {
            console.log("登录用户：", res.data)
            // this.HighMusic=res.data.songs
        })
        .catch(err => {
          console.log(err)
        })
    },
    getMessage () {
      axios({
        url: '/user/detail?uid=98229601',  /*飙升榜接口地址*/
        method: 'post'
      })
        .then(res => {
            console.log("登录用户：", res.data.profile)
            this.Message=res.data.profile
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
</script>

<style scoped>
.m-image{
      position: relative;
      background-position: center;
      background-blend-mode: normal;
  }

.m-image img{
      width: 25.9rem;
      filter: brightness(50%);
}
  
.m-image .m-name {
    position: absolute;
    top: 17rem;
    left: 2rem;
    width: 15rem;
    flex-direction: column;
}

.m-image button {
    position: absolute;
    top: 20rem;
    left: 19rem;
    width: 5.5rem;
    height: 2.5rem;
    color: white;
    font-size: 0.9rem;
    background-color: rgba(38, 35, 69, 0.5);
    border-style: none;
    border-radius: 0.5rem;
}

.m-message{
    position:absolute;
    top: 24.5rem;
    width: 22.4rem;
    background-color: #ffffff;
    margin-left: 1.2rem;
    padding: 0.5rem;
    border-radius: 1rem;
}

.m-flex-direction {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    height: 12rem;
    margin: auto;
}

.m-column {
    width: 20.7rem;
    height: 3rem;
    background-color: #ffffff;
    margin-left: 1rem;
}

.m-flex-row-direction {
    display: flex;
}

.m-flex-row-middle {
    flex-direction: row;
    display: flex;
    width: 14.1rem;
    height: 3rem;
    margin-top: 1rem;
    
}

.m-flex-row-side {
    flex-direction: row;
    display: flex;
    width: 3rem;
    height: 3rem;
    margin-top: 1rem;
    margin-left: 1rem;
}

.el-icon-download:before {
    content: "\e77c";
    font-size: 1.2rem;
    color: #FF5753;
}

.el-icon-star-on:before {
    content: "\e797";
    font-size: 1.2rem;
    color: #FF5753;
}

.el-icon-files:before {
    content: "\e75b";
    font-size: 1.2rem;
    color: #FF5753;
}
</style>