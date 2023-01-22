<template>
 <input type="radio" :id="item.id" :name="item.name" :value="modelValue" @change="updateChecked" :required="item.required" />
 <label :for="item.id"> {{ item.label }} </label>

  <!-- <input type="radio" :id="item.id" :name="item.name" :value="item.value" @change="updateChecked" :required="item.required" v-model="picked"/>
  <label :for="gender-male"> {{ item.label }} </label> -->

  <!-- <input id="gender-male" name="gender" value="male" type="radio" checked required/>
  <label for="gender-male"> Мужчина </label> -->
</template>

<script>
export default {
  name: 'AppBtnRadio',
  emits: ['update:modelValue', 'look9'],
  props: {
    item: {
      type: Object,
      required: true
    },
    modelValue: {
      type: String
    }
  },
  data () {
    return {
      picked: ''
    }
  },
  methods: {
    updateChecked (evt) {
      this.$emit('update:modelValue', evt.target.value)
      this.$emit('look')
    }
  }

}
</script>

<style>

</style>
