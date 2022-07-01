import { defineStore } from 'pinia';

export const useGigsStore = defineStore({
  id: 'gigs',
  state: () => ({
    gigs: [
      {
        venue: 'Landsdowne Pub',
        date: '6/15/2022',
        amount: 800,
        color: 'green',
      },
      {
        venue: 'Landsdowne Pub',
        date: '6/15/2022',
        amount: 200,
        color: 'blue',
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
  actions: {
    addGig(gig) {
      this.gigs.push(gig);
    },
  },
});
