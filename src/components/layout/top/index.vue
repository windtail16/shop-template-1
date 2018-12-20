<template>
  <div>
    <!-- Nav Bar//S -->
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="/">Brand Logo</b-navbar-brand>
        <!-- Collapse//S -->
        <b-collapse is-nav id="nav_collapse">
          <!-- Nav//S -->
          <b-navbar-nav>
            <b-nav-item href="/shop/">Shop</b-nav-item>
            <b-nav-item href="/news/">News</b-nav-item>
            <b-nav-item href="/about/">Brand Story</b-nav-item>
          </b-navbar-nav>
          <!-- Nav//E -->
          <!-- Nav Right//S -->
          <b-navbar-nav class="ml-auto">
            <!-- Search Form//S -->
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <!-- Search Form//E -->
            <!-- Nav//S -->
            <b-navbar-nav right>
              <b-nav-item href="/signin/">Login</b-nav-item>
              <b-nav-item href="/cart/">Cart</b-nav-item>
            </b-navbar-nav>
            <!-- Nav//E -->
          </b-navbar-nav> 
          <!-- Nav Right//E -->
        </b-collapse>
        <!-- Collapse//E -->
      </b-container>
    </b-navbar>
    <!-- Nav Bar//E -->
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: 'top'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
