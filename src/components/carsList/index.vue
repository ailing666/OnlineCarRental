<template>
  <div class="cars-list">
     <section class="cars-item">
      <!-- 头部 -->
      <header>
        <h4 class="cars-logo">
          <img src="../../assets/images/cars-logo.png" alt="">
          <span>Mustang 2019款</span>
        </h4>
        <div class="cars-name">新能源汽车 5座</div>
      </header>
      <!-- 内容 -->
      <div class="cars-content">
        <div class="cars-info">
          <h4>粤 B745N8</h4>
          <section>
            <!-- active-li-8 根据后缀数字决定多少格电 -->
            <ul class="cars-electric active-li-8">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p class="cars-distance">
              <span>约</span>600<span>km</span>
            </p>
          </section>
        </div>
        <img src="../../assets/images/pic001.jpg" alt="">
      </div>
      <!-- 底部 -->
      <footer>
        <a href="javascript: void(0);" class="parking-link">某某停车场</a>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  name: 'carsList'
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>