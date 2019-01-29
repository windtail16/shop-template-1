<template>
  <div>
    <div class="text-center">
      <h1>{{ title }}</h1>
      <p>메인 신상품 리스트</p>
    </div>
    <b-container>
      <b-row>
        <b-col cols="6" md="3" :key="index" :value="item.value" :text="item.text" v-for="(item,index) in even(goodsList).slice(0, 8)" >
          <router-link :to="`/shop/${item.id}`" class="card mb-2">
            <img class="card-img-top" :src="item.imgSrc" :alt="item.title">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.price }} 원</p>
            </div>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Goods from "../../common/goods.json"
export default {
  name: 'Goods',
  data () {
    return {
      title: 'main goods',
      goodsList: Goods
    }
  },
  computed: {
    
  },
  methods: {
    even: function(arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function(a, b) {
        return b.id - a.id;
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
