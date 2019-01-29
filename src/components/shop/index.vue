<template>
  <div>
    <b-container>
      <!-- LIST FILTER//S -->
      <b-nav>
        <b-nav-item active>Category1</b-nav-item>
        <b-nav-item>Category2</b-nav-item>
        <b-nav-item>Category3</b-nav-item>
        <b-nav-item>Category4</b-nav-item>
      </b-nav>
      <!-- LIST FILTER//E -->
      <!-- GOODS LIST//S -->
      <paginate tag="b-row" :per="16" name="items" :list="items">
        <b-col cols="6" md="3" :key="index" v-for="(item,index) in paginated('items')">
          <router-link :to="`/shop/${item.id}`" class="card mb-2">
              <img class="card-img-top" :src="item.imgSrc" :alt="item.title">
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.price }} 원</p>
              </div>
            </router-link>
        </b-col>
      </paginate>
      <!-- GOODS LIST//E -->
      <!-- PAGINATION//S -->
        <paginate-links
          for="items"
          :show-step-links="true"
          :classes="{
            'ul': ['pagination', 'b-pagination', 'pagination-md', 'justify-content-center'],
            'li': 'page-item',
            'a': ['page-link','btn-primary']
          }"
        >
        </paginate-links>
      
      <!-- PAGINATION//S -->
    </b-container>
  </div>
</template>

<script>
import Goods from "../../common/goods.json"
export default {
  name: 'Goods',
  data () {
    return {
      currentPage: 1,
      items: Goods,
      paginate: ['items']
    }
  },
  mounted () {
    setTimeout(() => {
      this.shown = true
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
