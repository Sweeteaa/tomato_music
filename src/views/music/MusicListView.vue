<template>
    <!-- 各榜单组件榜单 -->
    <div class="mlv-collection-block">
        <div class="mlv-block-padding">
            <div class="mlv-title">
                <!-- 标题 -->
                <h3>{{title}}</h3>
            </div>
            <!-- 榜单 -->
            <div class="mlv-list">
                <!-- 飙升榜 -->
                <router-link :to="`/rank/${id}`">
                    <div class="mlv-item" v-for="(item,index) in highmusic" :key="index">
                        <img v-lazy="item.al.picUrl">
                        <div class="mlv-main">{{(index+1)+'. '+cutString(item.name)}}</div>
                        <div class="mlv-name-cut">
                            <p class="mlv-gray" v-for="(items,index) in item.ar" :key="index">
                                -{{cutName(items.name)}}
                            </p>
                        </div> 
                    </div>
                </router-link>
                <!-- 新歌榜 -->
                <router-link :to="`/rank/${id2}`">
                    <div class="mlv-item" v-for="(item,index) in newmusic" :key="index">
                        <img v-lazy="item.al.picUrl">
                        <div class="mlv-main">{{(index+1)+'. '+cutString(item.name)}}</div>
                        <div class="mlv-name-cut">
                            <p class="mlv-gray" v-for="(items,index) in item.ar" :key="index">
                                -{{cutName(items.name)}}
                            </p>
                        </div>
                    </div>
                </router-link>
                <!-- 原创榜 -->
                <router-link :to="`/rank/${id3}`">
                    <div class="mlv-item" v-for="(item,index) in orimusic" :key="index">
                        <img v-lazy="item.al.picUrl">
                        <div class="mlv-main">{{(index+1)+'. '+cutString(item.name)}}</div>
                        <div class="mlv-name-cut">
                            <p class="mlv-gray" v-for="(items,index) in item.ar" :key="index">
                                -{{cutName(items.name)}}
                            </p>
                        </div>
                    </div>
                </router-link>
                <!-- 热歌榜 -->
                <router-link :to="`/rank/${id4}`">
                    <div class="mlv-item" v-for="(item,index) in hotmusic" :key="index">
                        <img v-lazy="item.al.picUrl">
                        <div class="mlv-main">{{(index+1)+'. '+cutString(item.name)}}</div>
                        <div class="mlv-name-cut">
                            <p class="mlv-gray" v-for="(items,index) in item.ar" :key="index">
                                -{{cutName(items.name)}}
                            </p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '@/utils/request.js'
export default {
    name:"MusicListView",
    data(){
        return{
            id:'',
            id2:'',
            id3:'',
            id4:''
        }
    },
    // 从MusicList父组件接收到数据
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
    // 在created生命周期调用getId方法
    created(){
        this.getId()
    },
    methods: {
        // 限制文字长度
        cutString(str){
            if(str.length>5){
                return str.substring(0,5)+"..."
            }
            return str;
        },
        cutName(str){
            if(str.length>7){
                return str.substring(0,7)+"..."
            }
            return str;
        },
        getId () {
            axios({
                url: '/toplist',  /*获取榜单*/
                method: 'post'
            })
            .then(res => {
                // console.log("榜单标题：", res.data.list)
                this.id=res.data.list[0].id,
                this.id2=res.data.list[1].id,
                this.id3=res.data.list[2].id,
                this.id4=res.data.list[3].id
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
}
</script>

<style scoped>
    .mlv-collection-block{
        background-color: #f8f8f8;
        padding: 2.7px 4px;
        height: 14rem;
        width: 23.2rem;
        border-radius: 2rem;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    .mlv-block-padding{
        padding:0 21px;
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
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 2.8rem;
        margin-left: 1rem;
        width: 7rem;
    }

    .mlv-gray{
        font-size: 0.9rem;
        color: #999;
    }

    .mlv-btn-more{
        font-size: 0.8rem;
        text-align: right;
        color: #333;
    }

    .mlv-item{
        width: 24rem;
        height: 3rem;
        display: flex;
        flex-direction: row;
        margin-left: 1.5rem;
    }

    .mlv-item img{
        width: 2.5rem;
        height: 2.5rem;
    }

    .mlv-name-cut{
        display: flex;
        line-height: 2.8rem;
        width: 15rem;
    }
</style>