import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    gigs: [
      {
        venue: '',
        amount: 200,
      },
      {
        venue: '',
        amount: 200,
      },
      {
        venue: '',
        amount: 200,
      },
      {
        venue: '',
        amount: 200,
      },
    ],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    getTotal: (state) => {
      let total = 0;
      state.gigs.forEach((item) => {
        total += item.amount;
      });
      return total;
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
