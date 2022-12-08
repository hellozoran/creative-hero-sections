<script setup>
import { onMounted } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { TransitionRoot, TransitionChild } from '@headlessui/vue'

const emit = defineEmits([
  'open',
  'close'
])
const props = defineProps({
  isOpen: Boolean
})

function openLightbox() {
  console.log('open Lightbox')
}

onMounted(() => {
  emit('open')
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && props.isOpen) {
      dismiss()
    }
  })
})


function dismiss() {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <TransitionRoot
      :show="props.isOpen"
      as="div"
      class="lightbox grid place-content-center fixed inset-0 z-40 bg-black/50 backdrop-blur-xl transition-opacity duration-100"
      enter-from="opacity-0"
      enter="ease-linear"
      enter-to="opacity-100"
      leave-from=""
      leave="ease-linear"
      leave-to="opacity-0"
    >
      <TransitionChild
        as="div"
        class="px-6 py-16 lg:p-24 max-h-screen flex flex-col"
        enter="transition ease-in-out duration-100 transform"
        enter-from="scale-110 opacity-0"
        enter-to="scale-100"
        leave="transition ease-in-out duration-100 transform"
        leave-from="scale-100"
        leave-to="scale-110"
      >
        <slot />
      </TransitionChild>

      <button
        class="absolute top-4 right-4 w-10 lg:top-6 lg:right-6 lg:w-12 z-50"
        @click="dismiss">
        <XMarkIcon />
      </button>
    </TransitionRoot>
  </Teleport>
</template>

<style>
.lightbox > * > img {
  @apply object-contain max-h-full;
}
</style>