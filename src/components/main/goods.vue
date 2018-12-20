<template>
  <div>
    <div class="text-center">
      <h1>{{ title }}</h1>
      <p>메인 신상품 리스트</p>
    </div>
    <b-container>
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
    </b-container>
    <h1></h1>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      title: 'main goods',
      goodsList:[
        {id:'1', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'2', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'3', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'4', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'5', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'6', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'7', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'},
        {id:'8', title:'상품명', imgSrc:'https://picsum.photos/600/300/?image=25',price:'40000'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
