<template>
  <div class="index">
    <Map></Map>
    <Cars></Cars>
    <router-view>
      <User ></User>
    </router-view>
  </div>
</template>

<script>
import Map from '@/views/aMap/index.vue'
import Cars from '@/views/cars/index.vue'
import User from '@/views/user/index.vue'
export default {
  name:'index',
  components: { Map, Cars, User },


}
</script>

<style lang="scss">

</style>