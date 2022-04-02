<template>
  <div class="result">
      <ul>
          <router-link 
            tag="li" 
            v-for="(item,index) in list" 
            :key="index" 
            style="color:#a8a8a8;margin:0.8rem;font-size:1.1rem;" 
            :to="`/player/${item.id}`">
                <i class="el-icon-search"></i>{{cutString(item.name)}}
          </router-link>
      </ul>
  </div>
</template>

<script>
import axios from '@/utils/request.js'
export default {
    name:'SearchResult',
    data(){
        return{
            list:[],
        }
    },
    props:{
        result:{
            type:String,
            required:true
        }
    },
    created(){
        this.getResult()
    },
    methods:{
        getResult () {
            axios({
                url: '/cloudsearch?limit=15&&keywords='+this.result+'',  /*每日推荐歌曲接口地址*/
                method: 'post'
            })
            .then(res => {
                console.log("搜索结果：", res.data.result.songs)
                this.list=res.data.result.songs
            })
            .catch(err => {
                console.log(err)
            })
        },
        cutString(str){
            if(str.length>20){
                return str.substring(0,20)+"..."
            }
            return str;
        }
    }
}
</script>

<style>

.result{
    position: fixed;
    top: 3.5rem;
    overflow-y: auto;
    left: 0;
    right: 0;
    bottom: 0;
}

</style>