<template>
  <div class="index">
    <Map></Map>
    <Cars></Cars>
    <router-view>
      <User :class="{'showUser' : showUser}"></User>
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
  data() {
    return {
      showUser: false,
    }
  },
  watch: {
    '$route'(newV) {
      const routerName = newV.name
      this.showUser = routerName === 'Index'
    }
  }
}
</script>

<style lang="scss">
 .showUser {
   transition: all .3s;
   transform: translate(410px,0);
 }
</style>