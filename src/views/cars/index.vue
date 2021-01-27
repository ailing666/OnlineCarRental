<template>
  <div class="cars">
    <cars-list></cars-list>
  </div>
</template>

<script>
import carsList from '@/components/carsList/index.vue'
export default {
  name: 'cars',
  components: { carsList },
  methods: {

  }
}
</script>

<style lang="scss">
@import './cars.scss'

</style>