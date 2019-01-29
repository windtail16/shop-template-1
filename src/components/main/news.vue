<template>
  <div>
    <div class="text-center">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
    <b-container>
        <b-row>
            <b-col cols="12" md="6" :key="index" :value="item.value" :text="item.text" v-for="(item,index) in even(newsList).slice(0, 2)">
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
import News from "../../common/news.json"

export default {
  name: 'News',
  data () {
    return {
      title: 'news',
      subtitle : '새소식',
      newsList: News
    }
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
