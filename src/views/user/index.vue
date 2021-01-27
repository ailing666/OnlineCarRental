<template>
  <div class="user" :class="{'showUser' : showUser}">user</div>
</template>

<script>
export default {
  name:'user',
  data() {
    return {
      showUser: true,
    }
  },
  watch: {
    '$route'(newV) {
      const routerName = newV.name
      this.showUser = routerName === 'User'
    }
  }
}
</script>

<style lang="scss">
.user {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 410px;
  z-index: 101;
  background-color: #32383c;
}

.showUser {
  animation: userSlide .5s;
}

// userSlide 滑动动画
@keyframes userSlide
{
  from { right: -410px }
  to { right: 0 }
}
</style>