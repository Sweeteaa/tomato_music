<template>
<!-- 按钮 -->
<!-- 榜单 -->
  <div class="mlv-collection-block">
      <div class="mlv-block-padding">
          <div class="mlv-title">
              <h3>{{title}}</h3>
              <a href="#">更多</a>
          </div>
          <div class="mlv-list">
            <router-link class="mlv-item" v-for="(item,index) in highmusic" :key="index" :to="`/player/${item.id}`">
                <img :src="item.al.picUrl">
                <div class="mlv-main">{{cutString(item.name)}}</div>
                <div class="mlv-name-cut">
                    <p class="mlv-gray" v-for="(items,index) in item.ar" :key="index">
                        {{cutString(items.name)}}
                    </p>
                 </div>
            </router-link>
            <router-link class="mlv-item" v-for="(item,index) in newmusic" :key="index" :to="`/player/${item.id}`">
                 <img :src="item.al.picUrl">
                 <div class="mlv-main">{{cutString(item.name)}}</div>
                <div class="mlv-name-cut">
                    <p class="mlv-gray" v-for="(items,index) in item.ar" :key="index">
                        {{cutString(items.name)}}
                    </p>
                 </div>
             </router-link>
             <router-link class="mlv-item" v-for="(item,index) in orimusic" :key="index" :to="`/player/${item.id}`">
                 <img :src="item.al.picUrl">
                 <div class="mlv-main">{{cutString(item.name)}}</div>
                <div class="mlv-name-cut">
                    <p class="mlv-gray" v-for="(items,index) in item.ar" :key="index">
                        {{cutString(items.name)}}
                    </p>
                 </div>
             </router-link>
             <router-link class="mlv-item" v-for="(item,index) in hotmusic" :key="index" :to="`/player/${item.id}`">
                <img :src="item.al.picUrl">
                 <div class="mlv-main">{{cutString(item.name)}}</div>
                 <div class="mlv-name-cut">
                    <p class="mlv-gray" v-for="(items,index) in item.ar" :key="index">
                        {{cutString(items.name)}}
                    </p>
                 </div>
             </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"MusicListView",
    data(){
        return{

        }
    },
    props:{
        highmusic:{
            type:Array,
            default:function(){
                return []
            }
        },
        newmusic:{
            type:Array,
            default:function(){
                return []
            }
        },
        orimusic:{
            type:Array,
            default:function(){
                return []
            }
        },
        hotmusic:{
            type:Array,
            default:function(){
                return []
            }
        },
        title:{
            type:String,
            default:function(){
                return ''
            }
        }
    },
    methods: {
        cutString(str){
            if(str.length>7){
                return str.substring(0,7)+"..."
            }
            return str;
        }
    },
}
</script>

<style scoped>
.mlv-collection-block{
    background-color: #f8f8f8;
    padding: 2.7px 4px;
    height: 13rem;
    width: 23.2rem;
    border-radius: 2rem;
    margin-top: 1rem;
    margin-left: 1rem;
}

.mlv-block-padding{
    padding:0 17.5px;
    background-color: #f8f8f8;
}

.mlv-title{
    display: flex;
    margin:14px 0 18px;
}

.mlv-title h3{
    flex:1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 1.5rem;
}

a{
    color: #333;
    text-decoration:none;
}

.mlv-clear-padding{
    padding:0 !important;
}

.mlv-main{
    font-size: 14px;
    font-weight: 500;
}

.mlv-gray{
    font-size: 12px;
    color: #999;
}

.mlv-btn-more{
    font-size: 12px;
    text-align: right;
    color: #333;
}

.mlv-list .mlv-item{
    float: left;
    width: 7rem;
    height: 10rem;
}

.mlv-item img{
    width: 6.5rem;
    height: 6.5rem;
}

.mlv-name-cut{
    display: flex;
}
</style>