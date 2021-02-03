<template>
  <div class="cars-list">
    <!-- 单个车辆 -->
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
    <!-- 车辆详情 -->
    <section class="cars-item cars-detailed" :style="'height:' + height">
        <div class="scroll">
          <h4 class="column">
            某某停车场
            <i class="close"></i>
          </h4>
          <header>
            <h4 class="cars-logo">
                <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
                <span class="name">Mustang 2019款</span>
            </h4>
            <p class="cars-attr">新能源汽车  5座</p>
          </header>
          <img src="../../assets/images/pic001.jpg" alt="" width="100%">
          <div class="clearfix">
            <div class="fl fs-24">粤B745N8</div>
            <p class="distance fr">
                <sub>约</sub>
                <strong>600</strong>
                <sub>KM</sub>
            </p>
          </div>
          <div class="cars-electric-box">
            <div class="p-r">
                <span class="e-high" style="width: 80%;"></span>
                <span class="e-bg"></span>
            </div>
          </div>
          <p class="info color-main text-center">取车约支付12.0元停车费，实际补贴12.0元</p>
          <ul class="cars-type-list">
            <li class="current">
              <h4 class="fl">日租车</h4>
              <span class="fr">￥300/1天</span>
            </li>
            <li>
              <h4 class="fl">日租车</h4>
              <span class="fr">￥300/1天</span>
            </li>
            <li>
              <h4 class="fl">日租车</h4>
              <span class="fr">￥300/1天</span>
            </li>
            <li>
              <h4 class="fl">日租车</h4>
              <span class="fr">￥300/1天</span>
            </li>
          </ul>
          <div class="clause-dec">
            <span class="fl">参保《全面保障服务》用车更放心</span>
            <i></i>
          </div>
        </div>
        <a href="javascript: void(0);" class="select-car-btn">预约用车</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'carsList',
  props: {
    height: {
      type: String,
      default: "257px"
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>