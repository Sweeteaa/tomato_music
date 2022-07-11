<template>
  <div>
      <!-- 搜索组件 -->
      <form action="/">
        <van-search v-model="searchValue" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="$router.back()" @focus="isShow=false"/>
      </form>
      <!-- 搜索结果 -->
      <SearchResult v-if="isShow" :result="searchValue"/>
      <!-- 搜索历史 -->
      <SearchHistory v-else :history="history" @search="onSearch" @update="history=$event"/>
  </div>
</template>

<script>
import SearchHistory from '../components/SearchHistory.vue'//搜索历史
import SearchResult from '../components/SearchResult.vue'//搜索结果
export default {
    name:"Search",
    components:{
        SearchHistory,
        SearchResult
    },
    data(){
        return{
            searchValue:'',
            isShow:false, //控制搜索结果显示状态,
            history:JSON.parse(localStorage.getItem('history'))||[]//调用本地已存储数据
        }
    },
    methods: {
        onSearch() {
            this.isShow = true
            const index=this.history.indexOf(this.searchValue)//搜索历史记录
            if(index!==-1){
                this.history.splice(index,1)
            }
            this.history.unshift(this.searchValue)//将历史搜索记录顺序调转
        },
        onCancel() {
            this.$router.back()//点击取消返回上一页面
        }
    },
    //深度监视本地存储history变化，进行本地存储
    watch:{
        history:{
            handler(value){
                localStorage.setItem('history',JSON.stringify(value))
            }
        }
    }
}
</script>

<style>
    .van-search{
        background-color: #383676;
        color:white;
    }
    
    .van-search__content {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        padding-left: 12px;
        background-color: #f7f8fa;
        border-radius: 2rem;
    }

    .van-search__action {
        padding: 0 8px;
        color: #ffffff;
        font-size: 14px;
        line-height: 34px;
        cursor: pointer;
        -webkit-user-select: none;
        user-select: none;
    }
</style>