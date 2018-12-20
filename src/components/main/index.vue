<template>
  <div>
    <MainVisual></MainVisual>
    <MainGoods></MainGoods>
    <MainNews></MainNews>
  </div>
</template>

<script>
import MainVisual from './visual.vue';
import MainGoods from './goods.vue';
import MainNews from './news.vue';

export default {
  name: 'Main',
  components: {
    MainVisual,
    MainGoods,
    MainNews
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
