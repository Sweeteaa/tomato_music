<template>
    <div class="index">
        <!-- 轮播图 -->
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="(item, index) in banners" :key="index">
                <div class="banner-image" :style="{backgroundImage:'url('+item.pic+')'}"></div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
 
<script>
import axios from '@/utils/request.js'
export default {
    data(){
        return {
            // 轮播图数据
            banners: []
        }
    },
    created(){
        this.getPhoto()
    },
    methods:{
        getPhoto(){
            axios({
                url: '/banner?type=2&limit=4',  /*首页轮播图图片接口地址*/
                method: 'post'
            })
            .then(res => {
                // console.log("首页图片：", res.data.banners)
                this.banners=res.data.banners
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>
 
<style>
    .index{
        background: #c8cfd8;
        width: 24.9rem;
        text-align: center;
        margin-left: 0.5rem;
        margin-top: 1.5rem;
        border-radius: 1rem;
    }

    .el-carousel__button {
        display: block;
        opacity: .48;
        width: 5px;
        height: 2px;
        background-color: #FFF;
        border: none;
        outline: 0;
        padding: 0;
        margin: 0;
        cursor: pointer;
        transition: .3s;
    }

    .el-carousel__container {
        position: relative;
        height: 155px;
    }

    .banner-image {
        background-size: 398px 155px;
        background-repeat: no-repeat;
        width: 398px;
        height: 155px;
    }

    .el-carousel--horizontal {
        overflow-x: hidden;
        border-radius: 1rem;
    }
</style>





