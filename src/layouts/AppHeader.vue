<template>
  <h1 class="header__title">Счетчик калорий</h1>
  <ul class="header">
    <li class="header__item"><router-link class="href" to="/about">О приложении</router-link></li>
    <li class="header__item"><router-link class="href" to="/">Счетчик</router-link></li>
    <li class="header__item"><router-link class="href" to="/info">Информация</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>

</style>
