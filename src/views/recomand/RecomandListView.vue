<template>
  <div class="rlv-recently">
            <p style="color:aliceblue;font-size:1.3rem">{{title}}</p>
            <div class="rlv-flex-direction">
                <router-link class="rlv-column" v-for="(item,index) in news" :key="index" :to="`/player/${item.id}`">
                    <div class="rlv-flex-body" >
                        <div class="rlv-flex-row">
                            <img class="rlv-flex-row-img"  :src="item.picUrl">
                        </div>
                        <div class="rlv-flex-column">
                            <div>
                                <p style="color:aliceblue;font-size:1rem">{{item.name}}</p>
                            </div>
                            <div class="rlv-cut-name">
                                <div v-for="(item,index) in item.song.artists" :key="index">
                                    <p style="color:rgba(240, 248, 255, 0.774);font-size:0.2rem">{{item.name}}&nbsp;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link class="rlv-column" v-for="(item,index) in songs" :key="index" :to="`/player/${item.id}`">
                    <div class="rlv-flex-body" >
                        <div class="rlv-flex-row">
                            <img class="rlv-flex-row-img"  :src="item.album.picUrl">
                        </div>
                        <div class="rlv-flex-column">
                            <div>
                                <p style="color:aliceblue;font-size:1rem">{{item.name}}</p>
                            </div>
                            <div v-for="(item,index) in item.artists" :key="index">
                                <p style="color:rgba(240, 248, 255, 0.774);font-size:0.2rem">{{item.name}}</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
</template>

<script>
export default {
    name:"RecomandListView",
    data(){
        return{

        }
    },
    props:{
        songs:{
            type:Array,
            default:function(){
                return []
            }
        },
        news:{
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
            if(str.length>8){
                return str.substring(0,6)+"..."
            }
            return str;
        }
    },
}
</script>

<style scoped>
    .rlv-recently{
        width: 23rem;
        margin-top: 1rem;
        margin-left: 1rem;
    }
    /* 大盒子 */
        
    .rlv-flex-direction {
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        height: 24rem;
        margin-left: 0.5rem;
    }
    
    .rlv-column {
        width: 22rem;
        height: 4rem;
        background-color: #262345;
        margin-top: 0.5rem;
        margin-left: 0.5rem;
    }
    /* 大盒子内三个小盒子 */
    
    .rlv-flex-row {
        flex-direction: row;
        display: flex;
        width: 4rem;
        height: 4rem;
        padding-top: 0.5rem;
    }
    
    .rlv-flex-column {
        flex-direction: column;
        display: flex;
        height: 4rem;
        width: 17rem;
        margin-top: 1.2rem;
        margin-left: 0.7rem;
    }
    
    .rlv-flex-body {
        display: flex;
    }

    
    .rlv-flex-row-img {
        height: 3.8rem;
        width: 3.8rem;
        border-radius: 0.5rem;
    }

    .rlv-item{
        float: left;
        width: 7rem;
        height: 10rem;
    }

    .rlv-main{
        font-size: 14px;
        font-weight: 500;
    }   

    .rlv-cut-name{
        display: flex;
    }
</style>