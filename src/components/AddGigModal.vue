<script setup>
/*
imports
*/

import { ref } from 'vue';

/*
modal
*/

const isActive = ref(false);
</script>

<template>
  <div
    v-if="isActive"
    class="modal bg-black/50 h-screen absolute top-0 right-0 left-0"
  >
    modal
  </div>
</template>
