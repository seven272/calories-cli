<template>
  <div class="input">
    <div class="input__heading">
      <label class="heading" :for="parametr.id"> {{ parametr.label }} </label>
      <span class="input__heading-unit"> {{ parametr.unit }} </span>
    </div>
    <div class="input__wrapper">
      <input
        type="text"
        :value="modelValue"
        @input="updateInput"
        :id="parametr.id"
        :name="parametr.name"
        placeholder="0"
        inputmode="decimal"
        maxlength="3"
        required
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  emits: ['update:modelValue'],
  props: {
    parametr: {
      type: Object,
      required: false
    },
    modelValue: [String]
  },
  methods: {
    updateInput (evt) {
      this.$emit('update:modelValue', evt.target.value)
    }
  }

}
</script>

<style>

</style>
