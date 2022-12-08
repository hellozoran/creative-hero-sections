<script setup>
import DopeGrid from './DopeGrid.vue'
const props = defineProps({
  image: String
})
</script>

<template>
  <div class="aspect-square relative border-b border-slate-800 flex items-center justify-center mx-3 md:mx-6">
    <div class="absolute z-20 md:left-0 md:-translate-x-8 lg:-translate-x-16 xl:-translate-x-32 max-w-sm pointer-events-none">
      <h1
        class="text-center md:text-left font-bold text-2xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight"
        style="text-shadow: 1px 1px 2px black; line-height: 0.9;"
      >
        Frontend engineer
      </h1>
      <p class="mt-4 md:mt-8 text-sm md:text-lg text-center md:text-left" style="text-shadow: 1px 1px 2px black;">
        <span class="font-bold">JavaScript developer.</span> Vue.js, Nuxt.js, Node.js, Express.js, TailwindCSS, Prisma, GraphQL, Postgres, MongoDB, Anime.js, Vite.
      </p>
    </div>
    
    <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-[#181C27] via-[#181C27] to-rose-800/25" />
    <div class="bg-gradient-to-r from-[#181C27] to-[#181C27]/0 w-64 absolute left-0 top-0 h-full" />
    <div class="bg-gradient-to-r from-[#181C27]/0 to-[#181C27] w-64 absolute right-0 top-0 h-full" />
    <img :src="image" class="absolute left-1/2 z-10 bottom-0 -translate-x-1/2 pointer-events-none h-full" />
    <DopeGrid />
  </div>
</template>