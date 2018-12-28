<template>
  <div>
    <b-container>
      <h1>{{ title }}</h1>
      <!-- 소개글//S -->
      <b-media vertical-align="center" class="mb-4">
        <b-img slot="aside" blank blank-color="#ccc" width="80" alt="placeholder" />
        <h5 class="mt-0 mb-1">Media object</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
        congue felis in faucibus.
      </b-media>
      <!-- 소개글//E -->
    </b-container>
    
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: 'About'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
