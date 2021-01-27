<template>
  <div class="cars">
    <cars-list></cars-list>
    <span @click="toUser">cars</span>
  </div>
</template>

<script>
import carsList from '@/components/carsList/index.vue'
export default {
  name: 'cars',
  components: { carsList },
  methods: {
    // 路由跳转至 “我的”
    toUser(){
      this.$router.push({
        name:'User'
      })
    }
  }
}
</script>

<style lang="scss">
@import './cars.scss'

</style>