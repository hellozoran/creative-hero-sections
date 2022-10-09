<script setup>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild } from '@headlessui/vue'
import Logo from './Logo.vue';

const isShowing = ref(true)
</script>

<template>
  <section class="min-h-screen bg-slate-800 relative flex flex-col justify-between pb-12">
    <header class="px-10 h-32 flex items-center justify-center relative z-20 text-teal-400">
      <Logo />
    </header>
    <div class="absolute inset-0 bg-gradient-to-r from-slate-800 to-transparent z-10" />
    <!-- <TransitionRoot
      appear
      :show="isShowing"
    >
      <TransitionChild
        enter="transition-all duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity duration-150"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-75" style="background-image: url('/bg2.jpg');" />
      </TransitionChild>
    </TransitionRoot> -->

    <div class="relative z-20 container mx-auto text-white space-y-12 p-6 text-center">
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
          <h1 class="text-center">
            <span class="text-white block text-2xl md:text-5xl uppercase tracking-widest font-thin">
              Javascript
            </span>
            <span class="mt-2 inline-block font-bold uppercase text-transparent text-5xl md:text-8xl bg-clip-text bg-gradient-to-br from-purple-500 to-pink-600">
              Software<br />
              Engineer
            </span>
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
          <p class="text-lg md:text-2xl font-medium mt-4 text-teal-400">
            Vue, Nuxt, React Native, Node.js
          </p>
          <p class="text-base max-w-xl mx-auto mt-8">
            I love building clean, performant software. In my spare time, I play and record music and handwire tube amps from scratch. I also enjoy writing firmware for micro controller projects.
          </p>
        </TransitionChild>

        <!-- <div class="mt-12 hidden md:block">
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

          <TransitionChild
            enter="transition-all duration-500 delay-300"
            enter-from="opacity-0 translate-y-2"
            enter-to="opacity-100 scale-100"
            leave="transition-opacity duration-150"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <p class="text-slate-500 text-sm mt-20">2022 &copy; No frameworks were harmed in the making of this site.</p>
          </TransitionChild>
        </div> -->
      </TransitionRoot>
      
    </div>
  </section>
</template>