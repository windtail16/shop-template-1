<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="6" md="4" :key="index" :value="news.value" :text="news.text" v-for="(news,index) in newsList">
          <router-link :to="`/news/${news.id}`" class="card mb-2">
            <img class="card-img-top" :src="news.imgSrc" :alt="news.title">
            <div class="card-body">
              <h5 class="card-title">{{ news.title }}</h5>
              <p class="card-text">{{ news.date }}</p>
            </div>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'NEWS',
  data () {
    return {
      newsList: [
        {id:'1', title:'무궁화꽃이피었습니다. 무궁화꽃이피었습니다.', imgSrc:'https://picsum.photos/600/300/?image=25', date:'2018.12.20'},
        {id:'2', title:'무궁화꽃이피었습니다. 무궁화꽃이피었습니다.', imgSrc:'https://picsum.photos/600/300/?image=25', date:'2018.12.20'},
        {id:'3', title:'무궁화꽃이피었습니다. 무궁화꽃이피었습니다.', imgSrc:'https://picsum.photos/600/300/?image=25', date:'2018.12.20'},
        {id:'4', title:'무궁화꽃이피었습니다. 무궁화꽃이피었습니다.', imgSrc:'https://picsum.photos/600/300/?image=25', date:'2018.12.20'},
        {id:'5', title:'무궁화꽃이피었습니다. 무궁화꽃이피었습니다.', imgSrc:'https://picsum.photos/600/300/?image=25', date:'2018.12.20'},
        {id:'6', title:'무궁화꽃이피었습니다. 무궁화꽃이피었습니다.', imgSrc:'https://picsum.photos/600/300/?image=25', date:'2018.12.20'},
        {id:'7', title:'무궁화꽃이피었습니다. 무궁화꽃이피었습니다.', imgSrc:'https://picsum.photos/600/300/?image=25', date:'2018.12.20'},
        {id:'8', title:'무궁화꽃이피었습니다. 무궁화꽃이피었습니다.', imgSrc:'https://picsum.photos/600/300/?image=25', date:'2018.12.20'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
