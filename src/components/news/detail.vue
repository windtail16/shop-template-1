<template>
  <div>
      <b-container>
        <div class="text-center">
            <h1>{{ title }}</h1>
            <p>{{ date }}</p>
        </div>
        <div class="contents-wrap">
            {{ content }}
        </div>
        <div class="clearfix">
            <router-link to="" class="float-left">이전글</router-link>
            <router-link to="" class="float-right">다음글</router-link>
        </div>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'NEWS',
  data () {
    return {
      title: '무궁화꽃이피었습니다',
      date: '2018.12.20',
      content: '테스트'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
