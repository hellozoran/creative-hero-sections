<script setup>
import { ref } from 'vue'
import LinkedInIcon from './LinkedInIcon.vue'

const isOpen = ref(false)

function toggleMedia() {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <header class="flex items-center justify-between h-20 lg:h-24 fixed top-0 w-full backdrop-blur-lg z-40 px-6 lg:px-10">
    <router-link to="/">
      <h1 class="text-slate-100 font-extrabold text-2xl tracking-wide">Zoran.</h1>
    </router-link>
    <div class="flex gap-4 ">
      <a href="https://www.linkedin.com/in/zoranem/" target="_blank" class="text-slate-200">
        <LinkedInIcon class="text-slate-200" />
      </a>
    </div>
  </header>
</template>