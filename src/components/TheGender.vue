<template>
  <div class="form__item">
    <h2 class="heading">Пол</h2>
    <ul class="switcher">
      <li class="switcher__item" v-for="(gender, ind) in arrGenderButtons" :key="ind">
        <input type="radio" :id="gender.id" name="gender" :value="gender.value" :required="gender.required" v-model="genderValue" @change="updateGender"/>
        <label :for="gender.id"> {{ gender.label }} </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheGender',
  data () {
    return {
      arrGenderButtons: [
        {
          id: 'gender-male',
          name: 'gender',
          value: 'male',
          required: true,
          label: 'Мужчина'
        },
        {
          id: 'gender-female',
          name: 'gender',
          value: 'female',
          required: true,
          label: 'Женщина'
        }
      ],
      genderValue: ''
    }
  },
  methods: {
    updateGender () {
      this.$emit('sentGender', this.genderValue)
    }
  }

}
</script>

<style>

</style>
