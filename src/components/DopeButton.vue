<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
const props = defineProps({
  isLoading: Boolean
})
</script>

<template>
  <button class="flex items-center group transition-colors duration-150">
    <div class="pr-8 group-hover:text-cyan-500">
      <slot />
    </div>
    <div class="bg-cyan-500 w-12 h-12 flex items-center justify-center">
      <ArrowRightIcon class="w-4 " />
    </div>
  </button>
</template>