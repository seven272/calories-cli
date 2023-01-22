<template>
  <main class="main">
    <div class="container">
      <article class="counter">
        <!-- <h1 class="counter__heading heading-main">Счётчик калорий</h1> -->
        <form class="counter__form form" name="counter" action="#" method="post" @submit.prevent="countCalories">

        <TheGender @sentGender="setGender"></TheGender>

        <TheParameters @sentParameters="setParameters"></TheParameters>

        <TheActivity @sentActivity="setActivity"></TheActivity>

        <TheSubmit
          :disabledCount="disabledCountBtn"
          :disabledClear="disabledClearBtn"
          @clear="clearForm"
        >
        </TheSubmit>

        </form>
        <TheResult
          v-if="isShow"
          :classHiddenSection="'counter__result--hidden'"
          :result="calories"
        ></TheResult>
      </article>
    </div>
  </main>
</template>

<script>
import TheGender from '@/components/TheGender.vue'
import TheParameters from '@/components/TheParameters.vue'
import TheActivity from '@/components/TheActivity.vue'
import TheSubmit from '@/components/TheSubmit.vue'
import TheResult from '@/components/TheResult.vue'
export default {
  name: 'AppMain',
  components: {
    TheGender,
    TheParameters,
    TheActivity,
    TheSubmit,
    TheResult
  },
  data () {
    return {
      allData: {
        gender: '',
        activity: '',
        parametrs: {
          age: 0,
          height: 0,
          weight: 0
        }
      },
      dictionaryActivities: {
        min: 1.2,
        low: 1.375,
        medium: 1.55,
        high: 1.725,
        max: 1.9
      },
      isShow: false,
      calories: {
        normaWeight: 0,
        minusWeight: 0,
        plusWeight: 0
      },
      disabledCountBtn: true,
      disabledClearBtn: true
    }
  },
  methods: {
    setGender (payload) {
      this.allData.gender = payload
      this.disableButtons()
    },
    setActivity (payload) {
      this.allData.activity = payload
      this.disableButtons()
    },
    setParameters (sentObj) {
      for (const key in sentObj) {
        this.allData.parametrs[key] = Number(sentObj[key])
      }
      this.disableButtons()
    },
    countCalories () {
      this.isShow = true
      let activity = 0
      switch (this.allData.activity) {
        case 'min':
          activity = this.dictionaryActivities.min
          break
        case 'low':
          activity = this.dictionaryActivities.low
          break
        case 'medium':
          activity = this.dictionaryActivities.medium
          break
        case 'high':
          activity = this.dictionaryActivities.high
          break
        case 'max':
          activity = this.dictionaryActivities.max
          break
        default:
          activity = 0
      }
      let formula = 0
      if (this.allData.gender === 'female') {
        // (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) − 161
        formula = (10 * this.allData.parametrs.weight) + (6.25 * this.allData.parametrs.height) - (5 * this.allData.parametrs.age) - 161
      } else if (this.allData.gender === 'male') {
        // (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) + 5
        formula = (10 * this.allData.parametrs.weight) + (6.25 * this.allData.parametrs.height) - (5 * this.allData.parametrs.age) + 5
      }
      const normCalories = Math.round(formula * activity)
      const procent = 15
      const caloriesInProcent = normCalories / 100 * procent
      const minusCalories = Math.round(normCalories - caloriesInProcent)
      const plusCalories = Math.round(normCalories + caloriesInProcent)

      this.calories.normaWeight = normCalories
      this.calories.minusWeight = minusCalories
      this.calories.plusWeight = plusCalories
      this.$store.dispatch('sentData', { info: this.allData, calories: this.calories })
    },
    disableButtons () {
      const values = Object.values(this.allData).splice(0, 2)
      const parametrsValues = Object.values(this.allData.parametrs)
      // для кнопки расчитать
      if (values.includes('') || parametrsValues.includes(0)) {
        this.disabledCountBtn = true
      } else {
        this.disabledCountBtn = false
      }
      // для кнопки очистить
      const sumArr = parametrsValues.reduce((sum, b) => {
        return sum + b
      }, 0)

      if (values[0] !== '' || values[1] !== '' || sumArr > 0) {
        this.disabledClearBtn = false
      } else if (values[0] === '' && values[1] === '' && sumArr === 0) {
        this.disabledClearBtn = true
      }
    },
    clearForm () {
      this.isShow = false
      this.allData.gender = ''
      this.allData.activity = ''
      for (const key in this.allData.parametrs) {
        this.allData.parametrs[key] = 0
      }
      for (const key in this.calories) {
        this.calories[key] = 0
      }
    }

  },
  computed: {
  }
}
</script>

<style>
</style>
