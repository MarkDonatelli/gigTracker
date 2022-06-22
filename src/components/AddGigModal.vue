<script setup>
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
close modal
*/
const closeModal = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <div
    v-if="props.modelValue"
    class="modal bg-black/50 h-screen absolute top-0 right-0 left-0"
  >
    modals
    <button @click="closeModal">Close</button>
  </div>
</template>
