<template>
  <div class="nav-bar">
    <ul>
      <li><i class="icon-help"></i></li>
      <li><i class="icon-search"></i></li>
      <li><a href="javascript: void(0);" class="cars-select-btn">选择车辆</a></li>
      <li><i class="icon-location"></i></li>
      <li><i class="icon-user" @click="toUser"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'naveBar',
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

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  z-index: 11;
  text-align: center;
  
  li {
    display: inline-block;

    .cars-select-btn {
      display: block;
      width: 240px;
      height: 84px;
      margin: 0 17px;
      font-size: $f26;
      line-height: 84px;
      text-align: center;
      color: $color-white;
      border-radius: 100px;
      background-color: $color-main;
    }
  }
}
</style>