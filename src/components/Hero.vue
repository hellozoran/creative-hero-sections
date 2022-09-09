<script setup>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild } from '@headlessui/vue'

const isShowing = ref(true)
</script>

<template>
  <section class="min-h-screen bg-slate-800 relative flex flex-col justify-between pb-16 md:pb-24">
    <div class="absolute inset-0 bg-gradient-to-r from-slate-800 to-transparent z-10" />
    <div class="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-75" style="background-image: url('/bg2.jpg');" />

    <header class="px-10 h-32 flex items-center justify-between relative z-10">
      <img src="/logo.svg" class="w-32" />
      <!-- <button class="border-teal-500 border px-6 py-2 text-teal-500 text-sm">Msg me</button> -->
    </header>

    <div class="relative z-20 container mx-auto text-white space-y-12 p-6">
      <TransitionRoot
        appear
        :show="isShowing"
      >
        <TransitionChild
          enter="transition-all duration-300 delay-100"
          enter-from="opacity-0 translate-y-2"
          enter-to="opacity-100"
          leave="transition-opacity duration-150"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <h1 class="font-bold text-2xl md:text-4xl xl:text-5xl max-w-xl xl:max-w-2xl">
            Frontend engineer, musician & electronics enthusiast.
          </h1>
        </TransitionChild>
        <TransitionChild
          enter="transition-all duration-300 delay-200"
          enter-from="opacity-0 translate-y-2"
          enter-to="opacity-100 scale-100"
          leave="transition-opacity duration-150"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <p class="text-lg md:text-2xl font-medium mt-4 text-teal-500">Javascript, Vue, Nuxt, React Native, Node.js</p>
          <p class="text-base md:text-xl max-w-2xl mt-8">
            I love building clean, performant software. In my spare time, I play and record music and handwire tube amps from scratch. A single ended version of a Bassman anyone? I also enjoy writing firmware for micro controller projects.
          </p>
        </TransitionChild>

        <div class="mt-12 hidden md:block">
          <TransitionChild
            enter="transition-all duration-300 delay-300"
            enter-from="opacity-0 translate-y-2"
            enter-to="opacity-100 scale-100"
            leave="transition-opacity duration-150"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <h3 class="font-bold text-xl text-slate-500">Recent works</h3>
            <div class="mt-2 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
              <img src="../assets/logo-vetster.svg" class="w-36" />
              <img src="../assets/logo-terminal.svg" class="w-40" />
              <img src="../assets/logo-hove.svg" class="w-40" />
            </div>
          </TransitionChild>

        </div>
      </TransitionRoot>
    </div>
  </section>
</template>