<template>
  <div>
    <div class="text-center">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
    <b-container>
        <b-row>
            <b-col cols="12" md="6" :key="index" :value="item.value" :text="item.text" v-for="(item,index) in newsList">
                <router-link :to="`/news/${item.id}`">
                    <b-img fluid :src="item.imgSrc" :alt="item.title" />
                    <h3>{{ item.title }}</h3>
                </router-link>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      title: 'news',
      subtitle : '새소식',
      newsList:[
          {id:'1',title:'무궁화꽃이피었습니다.',imgSrc:'https://picsum.photos/600/300/?image=25'},
          {id:'2',title:'무궁화꽃이피었습니다.',imgSrc:'https://picsum.photos/600/300/?image=25'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
