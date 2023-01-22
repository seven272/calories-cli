<template>
  <footer class="footer">
    <span class="footer__text">&#169; Разработка приложение WebSeven, <AppDate></AppDate></span>
  </footer>
</template>

<script>
import AppDate from '@/components/AppDate.vue'
export default {
  name: 'AppFooter',
  components: {
    AppDate
  }
}
</script>

<style>

</style>
