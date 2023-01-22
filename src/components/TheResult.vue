<template>
  <section class="counter__result"  :class="{ classTest: isActive }">
    <h2 class="heading">Ваша норма калорий</h2>
    <ul class="counter__result-list">
      <li class="counter__result-item">
        <h3><span id="calories-norm">{{ result.normaWeight }}</span> ккал</h3>
        <p>поддержание веса</p>
      </li>
      <li class="counter__result-item">
        <h3><span id="calories-minimal">{{ result.minusWeight }}</span> ккал</h3>
        <p>снижение веса</p>
      </li>
      <li class="counter__result-item">
        <h3><span id="calories-maximal">{{ result.plusWeight }}</span> ккал</h3>
        <p>набор веса</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TheResult',
  props: {
    classHiddenSection: {
      type: String,
      required: true
    },
    result: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      isActive: true,
      classTest: 'counter__result--hidden'
    }
  }

}
</script>

<style>

</style>
