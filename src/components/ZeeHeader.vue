<script setup>
import { ref } from 'vue'
import Logo from './Logo.vue'
import GitHubIcon from './GitHubIcon.vue'
import LinkedInIcon from './LinkedInIcon.vue'

const isOpen = ref(false)

function toggleMedia() {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <header class="flex items-center justify-between h-20 lg:h-24 fixed top-0 w-full backdrop-blur-lg z-50 px-6">
    <Logo class="w-16 lg:w-24 text-emerald-500" />
    <div class="flex gap-4 ">
      <GitHubIcon />
      <LinkedInIcon />
    </div>
  </header>
</template>