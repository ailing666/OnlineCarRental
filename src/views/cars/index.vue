<template>
  <div class="cars"><span @click="toUser">cars</span></div>
</template>

<script>
export default {
  name: 'cars',
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
.cars {
  position: fixed;
  top: 0;
  left: 0;
}
</style>