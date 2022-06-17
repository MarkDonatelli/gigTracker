<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <header class="flex items-center justify-center border-b-4 border-black">
    <h1 class="text-[9rem] font-black">Gig Tracker</h1>

    <div class="button-container absolute right-0">
      <div class="button-container__content relative">
        <img class="absolute animate-bounce" src="@/assets/images/new.svg" />
        <button
          class="btn btn-standard border-black border-2 px-5 py-2 m-4 bg-green"
        >
          Add Gig!
        </button>
      </div>
    </div>
  </header>

  <!-- gigs container --->
  <div class="flex flex-wrap">
    <!-- gig info-->
    <div class="flex flex-item flex-auto w-full md:w-2/4 bg-yellow p-5">
      <div class="flex-item__contents font-bold text-5xl">
        <div class="flex-item__content--info">
          <p>Venue: Landsdowne Pub</p>
          <p>Date: 6/15/2022</p>
          <p>Amount Paid: $200</p>
        </div>
        <div class="flex-item__content--img">
          <!-- <img src="@/assets/images/landsdowne.png" /> -->
        </div>
      </div>
    </div>
    <div class="flex-item flex-auto w-full md:w-2/4 bg-pink">
      <div class="flex-item__content text-pink">
        <p>Venue</p>
        <p>Date</p>
        <p>Paid / Amount</p>
      </div>
    </div>
  </div>

  <!-- gig totals --->
  <div class="flex justify-center border-t-4 border-black">
    <h1 class="text-[9rem] font-black">${{ counterStore.getTotal }}</h1>
  </div>
</template>

<style></style>
