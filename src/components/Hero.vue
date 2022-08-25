<script setup>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild } from '@headlessui/vue'

const isShowing = ref(true)
</script>

<template>
  <section class="min-h-screen bg-slate-800 relative flex flex-col justify-between">
    <div class="absolute inset-0 bg-gradient-to-r from-slate-800 to-transparent z-10" />
    <div class="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-25" style="background-image: url('hero-bg.jpg');" />

    <header class="px-10 h-32 flex items-center justify-between relative z-10">
      <img src="logo.svg" class="w-36" />
      <button class="border-teal-500 border px-6 py-2 text-teal-500 text-sm">Msg me</button>
    </header>

    <div class="relative z-20 container mx-auto text-white space-y-12">
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
          <h1 class="font-bold text-6xl">
            Software engineering
            <span class="md:block">+ product design.</span>
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
          <p class="text-xl max-w-2xl mt-12">
            Hi I'm Zoran. I build software for web and mobile. I also come from substantial design and marketing backgrounds. In my spare time, I play and record music and build tube amps from scratch, some furniture and occasionally write firmware for micro controller projects.
          </p>
        </TransitionChild>

        <TransitionChild
          enter="transition-all duration-300 delay-300"
          enter-from="opacity-0 translate-y-2"
          enter-to="opacity-100 scale-100"
          leave="transition-opacity duration-150"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="mt-12 space-x-3">
            <button class="w-56 py-4 bg-teal-500 border-teal-500 border-2">
              See my recent work
            </button>
            <button class="w-56 py-4 border-teal-500 border-2">
              About me
            </button>
          </div>
        </TransitionChild>
      </TransitionRoot>
    </div>

    <div class="h-32" />
  </section>
</template>