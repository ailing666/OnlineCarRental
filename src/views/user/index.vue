<template>
  <div class="user" :class="{'showUser' : showUser}">user</div>
</template>

<script>
export default {
  name:'User',
  data() {
    return {
      showUser: true,
    }
  },
  watch: {
    '$route'(newV) {
      const routerName = newV.name
      this.showUser = routerName !== 'Index'
    }
  }
}
</script>

<style lang="scss">
.user {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 101;
  width: 410px;
  background-color: #32383c;
}
 .showUser {
    animation: userSlide .5s;
 }

 @keyframes userSlide
{
    from {right: -410px;}
    to {right:0;}
}

</style>