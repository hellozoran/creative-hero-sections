<script setup>
import { PlusSmallIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
  image: String
})
</script>

<template>
  <button
    class="
      h-32
      border-4 
      border-transparent 
      rounded-lg 
      overflow-hidden 
      group 
      relative 
      flex 
      items-center 
      justify-center
      duration-150 
      transition-all
      hover:border-emerald-400 
    " 
  >
    <img :src="image" class="object-cover w-full h-full scale-110 group-hover:scale-100 transition-all duration-150 will-change-transform" />
    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-150" />
    <div class="absolute z-10 text-white opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
      <PlusSmallIcon class="w-8 text-white" />
    </div>
  </button>
</template>