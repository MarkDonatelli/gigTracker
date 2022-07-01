<script setup>
/*
imports
*/

import { reactive } from 'vue';
import Header from '@/components/Header.vue';
import GigList from '@/components/GigList.vue';
import GigTotal from '@/components/GigTotal.vue';
import AddGigModal from '@/components/AddGigModal.vue';

/*
modals
*/
const modals = reactive({
  addGig: false,
});

const modalActive = () => {
  modals.addGig = true;
};
</script>

<template>
  <Header @openModal="modalActive" />
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
