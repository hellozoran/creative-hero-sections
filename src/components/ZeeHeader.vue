<script setup>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild } from '@headlessui/vue'
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import Logo from './Logo.vue'
import GitHubIcon from './GitHubIcon.vue'
import LinkedInIcon from './LinkedInIcon.vue'

const isOpen = ref(false)

function toggleMedia() {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <header class="flex items-center justify-between h-24 fixed top-0 w-full backdrop-blur-lg z-50">
    <Logo class="w-16 lg:w-24 text-emerald-500 ml-6" />
    <!-- <img src="/z.svg" class="w-24 ml-6" /> -->
    <!-- <div 
      :class="[ isOpen ? 'w-1/3' : 'w-24' ]"
      class="flex items-center justify-start border-l border-b border-slate-800 h-24 hover:bg-black/25 transition-all duration-200 fixed top-0 right-0 z-50"
      style="background-color: #181C27">

      <TransitionRoot :show="isOpen" as="ul" class="flex gap-6 items-center text-white pl-6">
        <TransitionChild
          v-if="isOpen"
          as="li"
          enter="transition-all ease-linear duration-75 delay-100"
          enter-from="opacity-0 translate-x-8"
          enter-to="opacity-100 translate-x-0"
          leave="transition-all ease-linear duration-0"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <button class="hover:text-teal-500 py-6 px-4 flex transition-colors duration-100" @click="toggleMedia">
            <GitHubIcon />
          </button>
        </TransitionChild>

        <TransitionChild
          v-if="isOpen"
          as="li"
          enter="transition-all ease-linear duration-75 delay-200"
          enter-from="opacity-0 translate-x-8"
          enter-to="opacity-100 translate-x-0"
          leave="transition-all ease-linear duration-0"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <button class="hover:text-teal-500 py-6 px-4 flex transition-colors duration-100" @click="toggleMedia">
            <LinkedInIcon />
          </button>
        </TransitionChild>

        <TransitionChild
          v-if="isOpen"
          as="li"
          enter="transition-all ease-linear duration-75 delay-300"
          enter-from="opacity-0 translate-x-8"
          enter-to="opacity-100 translate-x-0"
          leave="transition-all ease-linear duration-0"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <button class="hover:text-teal-500 py-6 px-4 flex transition-colors duration-100" @click="toggleMedia">
            <GitHubIcon />
          </button>
        </TransitionChild>
      </TransitionRoot>

      <button @click="toggleMedia" class="w-24 h-24 flex items-center justify-center absolute top-0 right-0">
        <ArrowUpRightIcon
          :class="{ 'rotate-360 text-teal-400': isOpen }"
          class="w-8 text-slate-100 transition-transform duration-200" />
      </button>
    </div> -->
  </header>
</template>