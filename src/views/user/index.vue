<template>
  <div class="user-container" :class="{'showUser' : showUser}">
    <div class="user-info">
      <img src="../../assets/images/face.png" alt="">
      <div class="meta">
        <h4 class="name">1120877019@qq.com</h4>
        <p>
          文明驾驶分
          <span class="fw">0</span>
        </p>
      </div>
    </div>
    <ul class="group-links">
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-1"></i>
        我的帐户
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-2"></i>
        租车订单
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-3"></i>
        实名认证
      </router-link>
      <router-link to="/safe" tag="a" class="arrow">
        <i class="icon icon-user-link-4"></i>
        安全设置
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-5"></i>
        帮助中心
      </router-link>
    </ul>
    <button class="logout">登出</button>
  </div>
</template>

<script>
export default {
  name:'user',
  data() {
    return {
    }
  },
  computed: {
    showUser() {
      const routerName = this.$route.name
      return routerName === 'User'
    }
  },
}
</script>

<style lang="scss">
.user-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 410px;
  z-index: 101;
  background-color: $color-main;
}

.showUser {
  animation: userSlide .5s;
}

// userSlide 滑动动画
@keyframes userSlide {
  from { right: -410px }
  to { right: 0 }
}

.user-info {
  display: flex;
  padding: 84px 0 80px 30px; 

  img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: 6px solid $color-theme;
  }

  .meta { flex: 1; }

  .name {
    color: $color-shadow-4;
    line-height: 43px;
    font-size: 18px;
  }
  
  p {
    display: inline-block;
    height: 27px;
    padding: 0 17px;
    background-color: $color-main-blur;
    border-radius: 100px;
    line-height: 27px;
    color: $color-white;
    font-size: 14px;
  }
}

.logout {
  position: absolute;
  left: 50%;
  bottom: 60px;
  width: 165px;
  height: 58px;
  margin-left: -82px;
  background-color: $color-theme;
  border-radius: 100px;
  text-align: center;
  line-height: 58px;
  color: $color-white;
  font-size: 18px;
  border: none;
  outline: none;
}
</style>