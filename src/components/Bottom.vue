<template>
  <div>
      <ul class="top-bottom"> 
          <li><router-link to="/" exact><i class="el-icon-house" ></i><p style="font-size:0.5rem">首页</p></router-link></li>
          <li><router-link to="/music"><i class="el-icon-headset" ></i><p style="font-size:0.5rem">音乐馆</p></router-link></li>
          <li><router-link to="/mine"><i class="el-icon-user" ></i><p style="font-size:0.5rem">我的</p></router-link></li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .top-bottom{
        background-color: #383676;
        display: flex;
        position: fixed;
        left: 0;
        bottom:0;
        width:100%;
        height: 4rem;
        
    }
    li{
        flex: 1;
        text-align:center;
        list-style:outside none;
    }


    li i{
        font-size: 1.9rem;
    }

    a{
        display: block;
        padding-top: 12px;
        color:rgb(226, 226, 226);
        text-decoration:none;
    }

    .active{
        color: #FF5753;
    }

</style>