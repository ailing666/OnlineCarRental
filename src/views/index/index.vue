<template>
  <div class="index">
    <!-- 地图模块 -->
    <a-map></a-map>
    <!-- 汽车信心 -->
    <cars></cars>
    <router-view>
      <!-- 用户中心 -->
      <user></user>
    </router-view>
    <!-- 导航按钮 -->
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import aMap from '@/views/aMap/index.vue'
import cars from '@/views/cars/index.vue'
import user from '@/views/user/index.vue'
import navBar from '@/components/navBar/index.vue'

export default {
  name:'index',
  components: { aMap, cars, user, navBar },
}
</script>

<style lang="scss">

</style>