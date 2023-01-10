<script setup>
import DopeGrid from './DopeGrid.vue'
const props = defineProps({
  image: String
})
</script>

<template>
  <div class="min-h-screen border-b border-slate-800 flex items-center justify-center mx-3 md:mx-6">
    <div class="absolute z-20 md:left-0 md:-translate-x-8 lg:-translate-x-16 xl:-translate-x-32 max-w-sm pointer-events-none">
      
    </div>
    
    <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-[#181C27] via-[#181C27] to-rose-800/25" />
    <div class="bg-gradient-to-r from-[#181C27] to-[#181C27]/0 w-64 absolute left-0 top-0 h-full" />
    <div class="bg-gradient-to-r from-[#181C27]/0 to-[#181C27] w-64 absolute right-0 top-0 h-full" />
    <div class="absolute inset-0 flex items-center justify-center">
      <img :src="image" class="h-1/2 md:h-2/3 lg:h-full z-20" />
    </div>
    <DopeGrid />
  </div>
</template>