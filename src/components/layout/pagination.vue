<template>
  <paginate-links
    :show-step-links="true"
    :classes="{
      'ul': ['pagination', 'b-pagination', 'pagination-md', 'justify-content-center'],
      'li': 'page-item',
      'a': ['page-link','btn-primary']
    }"
  >
  </paginate-links>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      paginate: ['items']
    }
  },
}
</script>

<style>

</style>
