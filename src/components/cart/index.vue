<template>
  <div>
    <b-container>
      <h1>{{ title }}</h1>
      <!-- LIST//S -->
      <ul class="list-unstyled">
  <b-media tag="li">
    <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder" />
    <h5 class="mt-0 mb-1">List-based media object</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
    ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
    viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
    lacinia congue felis in faucibus.
  </b-media>
  <b-media tag="li" class="my-4">
    <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder" />
    <h5 class="mt-0 mb-1">List-based media object</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
    ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
    viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
    lacinia congue felis in faucibus.
  </b-media>
  <b-media tag="li">
    <b-img slot="aside" blank blank-color="#bac" width="64" alt="placeholder" />
    <h5 class="mt-0 mb-1">List-based media object</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
    ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
    viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
    lacinia congue felis in faucibus.
  </b-media>
</ul>
      <!-- LIST//E -->
    </b-container>
    
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      title: 'Cart'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
