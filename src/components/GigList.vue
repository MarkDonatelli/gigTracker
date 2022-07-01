<script setup>
/*
imports
*/
import { useGigsStore } from '@/stores/gigs';

/*
gigs store
*/

const gigsStore = useGigsStore();
</script>

<template>
  <div
    class="flex flex-wrap justify-center gap-10 px-6 max-w-[1700px] w-full mx-auto relative"
    id="gigList"
  >
    <!-- gig info-->
    <div
      v-for="gig in gigsStore.gigs"
      :key="gig.date"
      :class="[
        gig.color === 'yellow'
          ? 'bg-yellow'
          : gig.color === 'pink'
          ? 'bg-pink'
          : gig.color === 'blue'
          ? 'bg-lightBlue'
          : 'bg-green',
      ]"
      class="flex flex-item rotate-[10deg] p-5 hover:rotate-0 cursor-pointer border-4 border-black mb-8"
    >
      <div class="flex-item__contents font-bold text-4xl">
        <div class="flex-item__content--info">
          <p>Venue: {{ gig.venue }}</p>
          <p>Date: {{ gig.date }}</p>
          <p>Amount Paid: ${{ gig.amount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
