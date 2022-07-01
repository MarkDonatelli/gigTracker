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
  <div class="flex justify-center" id="gigTotal">
    <h1 class="text-[9rem] font-black">${{ gigsStore.getTotal }}</h1>
  </div>
</template>
