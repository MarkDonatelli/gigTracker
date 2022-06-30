<script setup>
/*
imports
*/
import { ref } from 'vue';
import moment from 'moment';
/*
props
*/

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

/*
emits
*/

const emit = defineEmits(['update:modelValue']);

/*
form / data
*/

const date = ref('');

/*
close modal
*/
const closeModal = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <div
    v-if="props.modelValue"
    class="modal bg-black/75 h-screen fixed top-0 right-0 left-0 px-4 flex justify-center items-center"
  >
    <div
      class="form-container bg-white max-w-xl w-full border-black border-4 p-3"
    >
      <h3 class="font-black text-3xl mb-2">Add A New Gig!</h3>
      <form @submit.prevent="">
        <div class="field mb-2 font-bold">
          <label for="venue" class="label">Venue:</label>
          <div class="control">
            <input
              class="input w-full border-black border-2"
              type="text"
              name="venue"
            />
          </div>
        </div>
        <div class="field mb-2 font-bold">
          <label for="date" class="label">Date:</label>
          <div class="control">
            <input
              v-model="date"
              class="input w-full border-black border-2"
              type="date"
              name="date"
            />
          </div>
          <pre>{{ moment(date).format('MM/DD/YYYY') }}</pre>
        </div>
        <div class="field font-bold">
          <label for="amount" class="label">Amount Paid:</label>
          <div class="control">
            <input
              class="input w-full border-black border-2"
              type="text"
              name="amount"
            />
          </div>
        </div>
      </form>
      <div class="flex items-center justify-end">
        <button
          class="btn text-2xl px-4 mt-4 mr-2 bg-green py-1"
          @click="showDate"
        >
          Submit
        </button>
        <button class="btn text-2xl px-4 mt-4 py-1" @click="closeModal">
          Close
        </button>
      </div>
    </div>
  </div>
</template>
