<template>
  <div class="bottom">
      <Bottom />
      <router-view></router-view>
  </div>
</template>

<script>
import Bottom from "../components/Bottom.vue"
export default {
    components:{
        Bottom
    }
}
</script>

<style>



</style>