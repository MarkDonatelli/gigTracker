<script setup>
/*
emits
*/

const emit = defineEmits(['openModal']);
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
        <button
          @click="emit('openModal')"
          class="btn text-4xl px-5 py-2 m-4 bg-yellow"
        >
          Add Gig!
        </button>
      </div>
    </div>
  </header>
</template>
