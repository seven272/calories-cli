<template>
  <fieldset class="form__item">
    <legend class="heading">Физическая активность</legend>
    <ul class="radios-group">
      <li class="radio" v-for="(lifestyle, ind) in arrActivityButtons" :key="ind">
        <div class="radio__wrapper">
          <input
            :id="lifestyle.id"
            :name="lifestyle.name"
            :value="lifestyle.value"
            type="radio"
            required
            v-model="activity"
            @change="updateActivity"
          />
          <label :for="lifestyle.id"> {{ lifestyle.type }} </label>
        </div>
        <p class="radio__description">
          {{ lifestyle.description }}
        </p>
      </li>
    </ul>
  </fieldset>
</template>

<script>
export default {
  name: 'TheActivity',
  data () {
    return {
      arrActivityButtons: [
        {
          id: 'activity-minimal',
          name: 'activity',
          value: 'min',
          type: 'Минимальная',
          description: 'Сидячая работа и нет физических нагрузок'
        },
        {
          id: 'activity-low',
          name: 'activity',
          value: 'low',
          type: 'Низкая',
          description: 'Редкие, нерегулярные тренировки, активность в быту'
        },
        {
          id: 'activity-medium',
          name: 'activity',
          value: 'medium',
          type: 'Средняя',
          description: 'Сидячая работа и нет физических нагрузок'
        },
        {
          id: 'activity-high',
          name: 'activity',
          value: 'high',
          type: 'Высокая',
          description: 'Тренировки 6-7 раз в неделю'
        },
        {
          id: 'activity-maximal',
          name: 'activity',
          value: 'max',
          type: 'Очень высокая',
          description: 'Больше 6 тренировок в неделю и физическая работа'
        }
      ],
      activity: 'min'
    }
  },
  methods: {
    updateActivity () {
      this.$emit('sentActivity', this.activity)
    }
  }

}
</script>

<style>

</style>
