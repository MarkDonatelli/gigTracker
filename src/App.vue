<script setup>
/*
imports
*/
import { reactive } from 'vue';
import GigList from '@/components/GigList.vue';
import GigTotal from '@/components/GigTotal.vue';
import AddGigModal from '@/components/AddGigModal.vue';

/*
modals
*/
const modals = reactive({
  addGig: false,
});

const openGigModal = () => {
  modals.addGig = true;
};
</script>

<template>
  <header
    class="flex items-center justify-center border-b-4 border-black mb-14"
  >
    <h1
      class="text-[4rem] xs:text-[5rem] sm:text-[7rem] md:text-[9rem] font-black"
    >
      Gig Tracker
    </h1>
    <div class="button-container absolute right-8">
      <div class="button-container__content relative">
        <img
          class="absolute max-w-[50%] w-full -top-2/4 -right-[12%] animate-bounce-custom"
          src="@/assets/images/new.svg"
        />
        <button @click="openGigModal" class="btn text-4xl px-5 py-2 m-4">
          Add Gig!
        </button>
      </div>
    </div>
  </header>

  <GigList />
  <GigTotal />

  <AddGigModal v-if="modals.addGig" v-model="modals.addGig" />
</template>

<style>
@keyframes bounce-custom {
  0%,
  100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 1, 1);
  }
}
.animate-bounce-custom {
  animation: bounce-custom 1s infinite;
}
</style>
