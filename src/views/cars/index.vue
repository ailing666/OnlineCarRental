<template>
  <div class="cars">
    <div class="cars-swiper-wrap">
  <swiper  :options="swiperOption">
    <swiper-slide> <cars-list  height="820px"></cars-list> </swiper-slide>
    <swiper-slide> <cars-list></cars-list> </swiper-slide>
    <swiper-slide> <cars-list></cars-list> </swiper-slide>
    <swiper-slide> <cars-list></cars-list> </swiper-slide>
    <swiper-slide> <cars-list></cars-list> </swiper-slide>
    <swiper-slide> <cars-list></cars-list> </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
  </div>
  </div>
</template>

<script>
import carsList from '@/components/carsList/index.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

export default {
  name: 'cars',
  components: { carsList, Swiper, SwiperSlide },
   title: 'Progress pagination',
       data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
}
</script>

<style lang="scss">
@import './cars.scss'

</style>