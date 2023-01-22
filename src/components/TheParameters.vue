<template>
  <fieldset class="form__item form__parameters" name="parameters">
    <legend class="visually-hidden">Физические параметры</legend>
    <div class="inputs-group">
      <AppInput :parametr="arrParamInputs[0]" v-model="parametrs.age"></AppInput>
      <AppInput :parametr="arrParamInputs[1]" v-model="parametrs.height"></AppInput>
      <AppInput :parametr="arrParamInputs[2]" v-model="parametrs.weight"></AppInput>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'TheParameters',
  data () {
    return {
      arrParamInputs: [
        {
          id: 'age',
          name: 'age',
          label: 'Возраст',
          unit: 'лет',
          value: ''
        },
        {
          id: 'height',
          name: 'height',
          label: 'Рост',
          unit: 'см',
          value: ''
        },
        {
          id: 'weight',
          name: 'weight',
          label: 'Вес',
          unit: 'кг',
          value: ''
        }
      ],
      parametrs: {
        age: '',
        height: '',
        weight: ''
      }
    }
  },
  watch: {
    'parametrs.age' (newVal) {
      // регулярное выражение "только цифры"
      const pattern = /^\d+$/
      const valid = pattern.test(newVal)
      if (valid) {
        this.formNewObject()
      } else {
        this.parametrs.age = ''
      }
    },
    'parametrs.height' (newVal) {
      // регулярное выражение "только цифры"
      const pattern = /^\d+$/
      const valid = pattern.test(newVal)
      if (valid) {
        this.formNewObject()
      } else {
        this.parametrs.height = ''
      }
    },
    'parametrs.weight' (newVal) {
      // регулярное выражение "только цифры"
      const pattern = /^\d+$/
      const valid = pattern.test(newVal)
      if (valid) {
        this.formNewObject()
      } else {
        this.parametrs.weight = ''
      }
    }

  },
  methods: {
    formNewObject () {
      const newObj = {}
      const keys = Object.keys(this.parametrs)
      keys.forEach(elem => {
        if (this.parametrs[elem] !== '') {
          newObj[elem] = this.parametrs[elem]
        }
      })
      this.$emit('sentParameters', newObj)
    }
  }
}
</script>

<style>

</style>
