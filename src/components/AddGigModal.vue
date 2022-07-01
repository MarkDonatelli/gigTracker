<script setup>
/*
imports
*/
import { ref, reactive } from 'vue';
import moment from 'moment';
import { useGigsStore } from '@/stores/gigs';

/* 
gigs store
*/

const gigsStore = useGigsStore();

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

const formData = reactive({
  venue: '',
  date: '',
  amount: '',
  color: '',
});

// only number allowed in amount field
const onlyNumber = ($event) => {
  let keyCode = $event.keyCode ? $event.keyCode : $event.which;
  if (keyCode < 48 || keyCode > 57) {
    $event.preventDefault();
  }
};

// error
const error = ref(false);

/*
form submit
*/

const submitGig = () => {
  if (
    !formData.venue ||
    !formData.date ||
    !formData.amount ||
    !formData.color
  ) {
    error.value = true;
    return false;
  }
  gigsStore.addGig({
    venue: formData.venue,
    date: moment(formData.date).format('MM/DD/YYYY'),
    amount: parseInt(formData.amount),
    color: formData.color,
  });
  closeModal();
};

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
      class="form-container bg-white max-w-xl w-full border-black border-4 p-3 relative"
    >
      <div class="form-title flex justify-center items-center flex-col">
        <h3 class="font-black text-3xl mb-2">Add A New Gig!</h3>
        <img
          class="max-w-[25%] absolute -left-12 -top-12 w-full animate-bounce-custom"
          src="@/assets/images/exciting.svg"
        />
      </div>

      <form>
        <div class="field mb-2 font-bold">
          <label for="venue" class="label">Venue:</label>
          <div class="control">
            <input
              class="input w-full border-black border-2"
              type="text"
              name="venue"
              v-model="formData.venue"
            />
          </div>
        </div>
        <div class="field mb-2 font-bold">
          <label for="date" class="label">Date:</label>
          <div class="control">
            <input
              v-model="formData.date"
              class="input w-full border-black border-2"
              type="date"
              name="date"
            />
          </div>
        </div>
        <div class="field font-bold">
          <label for="amount" class="label">Amount Paid:</label>
          <div class="control">
            <input
              class="input w-full border-black border-2"
              type="text"
              name="amount"
              @keypress="onlyNumber"
              maxlength="4"
              v-model="formData.amount"
            />
          </div>
        </div>
        <div class="field mt-3 font-bold">
          <label for="colorRadios" class="label">Choose a Color:</label>
          <div class="control flex">
            <div class="control__item pr-2">
              <input
                type="radio"
                id="pink"
                value="pink"
                class="text-pink focus:ring-transparent border-2 border-pink checked:bg-none cursor-pointer"
                v-model="formData.color"
              />
              <label class="pl-1 cursor-pointer" for="pink">Pink</label>
            </div>

            <div class="control__item pr-2">
              <input
                type="radio"
                id="yellow"
                value="yellow"
                class="text-yellow border-2 border-yellow focus:ring-transparent checked:bg-none cursor-pointer"
                v-model="formData.color"
              />
              <label class="pl-1 cursor-pointer" for="yellow">Yellow</label>
            </div>

            <div class="control__item pr-2">
              <input
                type="radio"
                id="green"
                class="text-green border-2 border-green focus:ring-transparent checked:bg-none cursor-pointer"
                value="green"
                v-model="formData.color"
              />
              <label class="pl-1 cursor-pointer" for="green">Green</label>
            </div>

            <div class="control__item pr-2">
              <input
                type="radio"
                id="blue"
                value="blue"
                class="text-lightBlue border-2 border-lightBlue focus:ring-transparent checked:bg-none cursor-pointer"
                v-model="formData.color"
              />
              <label class="pl-1 cursor-pointer" for="blue">Blue</label>
            </div>
          </div>
        </div>
      </form>
      <div class="flex items-center justify-end mt-6">
        <p class="text-red-500 mr-5 p-0" v-if="error">
          All Fields Must Have a Value
        </p>
        <button
          class="btn text-2xl px-4 mr-2 bg-yellow py-1"
          @click="submitGig"
        >
          Submit
        </button>
        <button class="btn text-2xl px-4 py-1 bg-pink" @click="closeModal">
          Close
        </button>
      </div>
    </div>
  </div>
</template>
