import { defineStore } from 'pinia';

export const useGigsStore = defineStore({
  id: 'gigs',
  state: () => ({
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
        amount: 600,
      },
      {
        venue: '',
        amount: 200,
      },
    ],
  }),
  getters: {
    getTotal: (state) => {
      return state.gigs
        .map((item) => item.amount)
        .reduce((acc, amount) => {
          return (acc += amount);
        }, 0);
    },
  },
  actions: {},
});
