<script setup>
import { 
  TabGroup, 
  TabList, 
  Tab, 
  TabPanels, 
  TabPanel,
  TransitionRoot,
  TransitionChild
} from '@headlessui/vue'
import { ref } from 'vue'

let currentTab = ref(0)

</script>

<template>
  <section class="bg-slate-900 py-24 text-white">
    <div class="mx-auto max-w-5xl">
      <h2 class="text-2xl font-bold text-center">Recent work</h2>
      <div class="mt-12">
        <div class="grid grid-cols-4 gap-12">
          <button class="flex items-center justify-center" @click="currentTab = 0">
            <img src="logo-vetster.svg" class="w-40" />
          </button>
          <button class="flex items-center justify-center" @click="currentTab = 1">
            <img src="logo-terminal.svg" class="w-40" />
          </button>
          <button class="flex items-center justify-center" @click="currentTab = 2">
            <img src="logo-hove.svg" class="w-40" />
          </button>
          <button class="flex items-center justify-center" @click="currentTab = 3">
            <img src="logo-hove.svg" class="w-40" />
          </button>
        </div>

        <div class="bg-slate-700 grid grid-cols-2 mt-12">
          <div class="p-12">

            <div v-if="currentTab === 0">
              <h3 class="font-bold text-2xl">Vetster</h3>
              <h4 class="text-lg">Senior frontend engineer, product designer</h4>
              <p class="mt-6">
                Brought the Vetster mobile app to life with a design refresh and worked on a small team to build it out in React Native. Worked across mulitple apps in engineering (Vue.js, Laravel, Tailwind) before filling the product design void and leading the charge to simplify and improve the UI.
              </p>
            </div>

            <div v-if="currentTab === 1">
              <h3 class="font-bold text-2xl">Terminal.io</h3>
              <h4 class="text-lg">Frontend engineer</h4>
              <p class="mt-6">
                As the sole engineer in the company (while Terminal was an early stage startup) I worked as part of marketing and built the entire Terminal.io web property, including a client portal app where clients can create new roles to hire. We used WP as a headless CMS and Vue/Nuxt on the frontend, with Express.js as server middleware in Nuxt. This is also where I mastered Figma design to eng handoffs.
              </p>
            </div>

            <div v-if="currentTab === 2">
              <h3 class="font-bold text-2xl">Hamilton Oaks Events</h3>
              <h4 class="text-lg">Design, engineering</h4>
              <p class="mt-6">
                This was a quick design and build I put together for a rustic styled wedding and events company running out of a winery. The colors pallette is taken from red and green grapes. The stack here is pretty simple - Vue, Nuxt and Tailwind. Did I mention I love Tailwind both as a designer and an engineer?
              </p>
            </div>
          </div>

          <div class="bg-slate-800">
            image
          </div>
        </div>

      </div>
    </div>
  </section>
</template>