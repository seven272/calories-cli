import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      notes: [
        {
          date: '15.09.2023',
          gender: 'женщина',
          activity: 'умеренная',
          age: 36,
          height: 188,
          weight: 89,
          norma: 2300,
          decrease: 2100,
          increase: 2700
        }
      ]
    }
  },
  getters: {
    returnNotes (state) {
      return state.notes
    }
  },
  mutations: {
    setData (state, payload) {
      const obj1 = payload.info
      const obj2 = payload.calories
      const totalData = {}

      totalData.date = new Date().toLocaleDateString()

      if (obj1.gender === 'female') {
        totalData.gender = 'женщина'
      } else if (obj1.gender === 'male') {
        totalData.gender = 'мужчина'
      }

      switch (obj1.activity) {
        case 'min':
          totalData.activity = 'очень низкая'
          break
        case 'low':
          totalData.activity = 'низкая'
          break
        case 'medium':
          totalData.activity = 'умеренная'
          break
        case 'high':
          totalData.activity = 'высокая'
          break
        case 'max':
          totalData.activity = 'очень высокая'
          break
        default:
          totalData.activity = 'еще не определил'
      }
      totalData.age = obj1.parametrs.age
      totalData.height = obj1.parametrs.height
      totalData.weight = obj1.parametrs.weight

      totalData.norma = obj2.normaWeight
      totalData.decrease = obj2.minusWeight
      totalData.increase = obj2.plusWeight

      state.notes.push(totalData)
    },
    clearState (state) {
      state.notes = []
    }
  },
  actions: {
    sentData (context, payload) {
      // const obj1 = payload.parametrs
      // const obj2 = payload.calories
      context.commit('setData', payload)
    },
    clearNotes (context) {
      context.commit('clearState')
    }
  }
})
