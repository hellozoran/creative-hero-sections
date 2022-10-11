<script setup>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild } from '@headlessui/vue'
import Logo from './Logo.vue';
import GitHubIcon from './GitHubIcon.vue';
import LinkedInIcon from './LinkedInIcon.vue';

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
              Frontend<br />
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
            Vue, Nuxt, React Native, Node.js, TailwindCSS, SCSS
          </p>
          <p class="text-base max-w-xl mx-auto mt-8">
            Self starter. Motivated AF. Wearer of any hat necessary. I prefer to work with early stage startups, because building something from the ground up is rewarding work for me and I thoroughly enjoy my contributions.
          </p>
          <p class="text-base max-w-xl mx-auto mt-8">
            In my free time, I hand wire tube guitar amps and play and record music. Once in a while I'll build an arduino hardware controller and write some firmware to make my life easier.
          </p>
          <ul class="flex items-center justify-center space-x-6 md:space-x-3 mt-12 text-white">
            <li>
              <a href="https://github.com/hellozoran" class="text-teal-400 hover:text-teal-600 transition-colors duration-150">
                <GitHubIcon class="w-12 h-12" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/zoranem/" class="text-teal-400 hover:text-teal-600 transition-colors duration-150">
                <LinkedInIcon class="w-12 h-12" />
              </a>
            </li>
          </ul>
        </TransitionChild>
      </TransitionRoot>
      
    </div>
  </section>
</template>