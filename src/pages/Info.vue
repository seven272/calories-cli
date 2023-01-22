<template>
  <div class="content">
    <h1 class="result__title">Тут будет полезная информация и контакты</h1>
    <ul class="result__notes" v-for="(item, ind) in showNotes" :key="ind">
      <li class="result__note">
        <h3 class="result__subtitle">Расчет калорий от {{ item.date }}</h3>
        <span class="result__text">{{ item.gender }}, {{ item.age }} лет, рост: {{ item.height }} см, вес: {{ item.weight }} кг</span>
        <span class="result__text">{{ item.activity }} физическая активность</span>
        <!-- <h3 class="result__subtitle">Потребление калорий:</h3> -->
        <div class="result__calories">
          <div class="result__calories-section">
            <span class="result__calories-section_title">Норма: </span>
            <span class="result__calories-section_value">{{ item.norma }} кл</span>
          </div>
          <div class="result__calories-section">
            <span class="result__calories-section_title">Снижение веса: </span>
            <span class="result__calories-section_value">{{ item.decrease }} кл</span>
          </div>
          <div class="result__calories-section">
            <span class="result__calories-section_title">Набор веса: </span>
            <span class="result__calories-section_value">{{ item.increase }} кл</span>
          </div>
        </div>
      </li>
    </ul>
    <button class="result__btn" @click="clear">Очистить результаты</button>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      notes: []
    }
  },
  computed: {
    showNotes () {
      return this.$store.getters.returnNotes
    }
  },
  methods: {
    clear () {
      this.$store.dispatch('clearNotes')
    }
  }

}
</script>

<style>

</style>
