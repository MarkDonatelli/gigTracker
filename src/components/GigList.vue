<script setup></script>

<template>
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
</template>
