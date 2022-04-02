<template>
  <div>
      <van-cell :title="str" v-for="(str,index) in suggestions" :key="index"></van-cell>
  </div>
</template>

<script>
import axios from '@/utils/request.js'
export default {
    name:'searchSuggest',
    data(){
        return{ 
            suggestions:[]
        }
    },
    props:{
        result:{
            type:String,
            required:true
        }
    },
    watch:{
        result:{
            async handler(){
                this.getResult()
                console.log('suggset',this.suggestions)
            },
            immediate:true
        }
    },
    methods:{
        getResult () {
            axios({
                url: '/search/hot',  /*每日推荐歌曲接口地址*/
                method: 'post'
            })
            .then(res => {
                console.log("搜索结果：", res.data)
                this.suggestions=res.data
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