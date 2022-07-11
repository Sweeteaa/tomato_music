<template>
    <!-- 每日推荐歌单组件 -->
    <div class="rld-recently">
        <!-- 标题 -->
        <p style="color:aliceblue;font-size:1.3rem">推荐歌单</p>
        <!-- 推荐歌单 -->
        <div class="rld-flex-direction">
            <!-- 点击歌单跳转到歌单详细列表 -->
            <router-link class="rld-column" v-for="(item,index) in resource" :key="index" :to="`/complaylist/${item.id}`">
                <div class="rld-item" >
                    <img :src="item.picUrl">
                    <div class="rld-main">{{cutString(item.name)}}</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"RecomandListDaily",
    data(){
        return{

        }
    },
    // 接收从父组件传递的数据
    props:{
        resource:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    methods: {
        // 限制文字长度
        cutString(str){
            if(str.length>18){
                return str.substring(0,18)+"..."
            }
            return str;
        }
    },
}
</script>

<style scoped>
    .rld-recently{
        width: 23.7rem;
        padding: 0.5rem;
        margin-top: 1.5rem;
        margin-left: 0.6rem;
        border-radius: 1rem;
        background-color: #2c294a;
    }
    /* 大盒子 */
        
    .rld-flex-direction {
        display: flex;
        display: -webkit-flex;
        height: 11rem;
        margin-left: 0.5rem;
        margin-top: 0.6rem;
        width: 23.6rem;
        overflow: scroll;
    }

    .rld-flex-direction::-webkit-scrollbar {
        display: none;
    }

    .rld-column {
        width: 22rem;
        height: 3rem;
        background-color: #2c294a;
        margin-top: 0.5rem;
        margin-left: 0.5rem;
    }
    /* 大盒子内三个小盒子 */

    .rld-flex-row {
        flex-direction: row;
        display: flex;
        width: 4rem;
        height: 4rem;
        padding-top: 0.5rem;
    }

    .rld-flex-column {
        flex-direction: column;
        display: flex;
        height: 8rem;
        width: 17rem;
        margin-top: 1rem;
    }

    .rld-flex-body {
        display: flex;
    }


    .rld-flex-row-img {
        height: 3rem;
        width: 3rem;
        border-radius: 0.5rem;
    }

    .rld-item{
        float: left;
        width: 7rem;
        height: 7rem;
    }

    .rld-main{
        font-size: 0.8rem;
        font-weight: 500;
        color: #f8f8f8;
    }   

    .rld-item img{
        width: 6.5rem;
        height: 6.5rem;
        border-radius: 0.5rem;
    }
</style>