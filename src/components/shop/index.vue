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
      <b-row>
        <b-col cols="6" md="3" :key="index" :value="item.value" :text="item.text" v-for="(item,index) in goodsList" >
          <router-link :to="`/shop/${item.id}`" class="card mb-2">
            <img class="card-img-top" :src="item.imgSrc" :alt="item.title">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.price }} 원</p>
            </div>
          </router-link>
        </b-col>
      </b-row>
      <!-- GOODS LIST//E -->
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      goodsList:[
        {id:'1', category:'category1', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'2', category:'category2', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'3', category:'category4', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'4', category:'category1', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'5', category:'category2', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'6', category:'category1', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'7', category:'category3', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'8', category:'category3', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
