<template>
  <div>
      <form action="/">
        <van-search v-model="searchValue" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="$router.back()" @focus="isShow=false"/>
      </form>
      <SearchResult v-if="isShow" :result="searchValue"/>
      <!-- <SearchSuggest v-else-if="searchValue" :result="searchValue"/> -->
      <SearchHistory v-else :history="history"/>
  </div>
</template>

<script>
// import SearchSuggest from '../components/SearchSuggest.vue'
import SearchHistory from '../components/SearchHistory.vue'
import SearchResult from '../components/SearchResult.vue'
export default {
    name:"Search",
    components:{
        // SearchSuggest,
        SearchHistory,
        SearchResult
    },
    data(){
        return{
            searchValue:'',
            isShow:false, //控制搜索结果显示状态,
            history:[]
        }
    },
    methods: {
        onSearch() {
            this.isShow = true
            const index=this.history.indexOf(this.searchValue)
            if(index!==-1){
                this.history.splice(index,1)
            }
            this.history.unshift(this.searchValue)
        },
        onCancel() {
            this.$router.back()
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