<script setup>
import GigList from '@/components/GigList.vue';
import GigTotal from '@/components/GigTotal.vue';
</script>

<template>
  <header class="flex items-center justify-center border-b-4 border-black">
    <h1 class="text-[9rem] font-black">Gig Tracker</h1>
    <div class="button-container absolute right-8">
      <div class="button-container__content relative">
        <img
          class="absolute max-w-[50%] w-full -top-2/4 -right-[12%] animate-bounce-custom"
          src="@/assets/images/new.svg"
        />
        <button
          class="btn btn-standard text-4xl font-bold border-black border-2 px-5 py-2 m-4 bg-green"
        >
          Add Gig!
        </button>
      </div>
    </div>
  </header>

  <GigList />
  <GigTotal />
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
