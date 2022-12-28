<script setup>
import { TransitionRoot, TransitionChild } from '@headlessui/vue'
</script>

<template>
  <section class="grid place-content-center text-center px-12 pt-40 lg:pt-64 pb-32 lg:pb-44 min-h-screen">
    <TransitionRoot
      appear
      :show="true"
    >
      <TransitionChild
        enter="transition-all duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity duration-150"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="font-black text-7xl lg:text-[12rem] text-transparent bg-clip-text bg-gradient-to-b from-slate-600/50 to-[#181C27] text-center">
          Hello
        </div>
      </TransitionChild>
      <TransitionChild
        enter="transition-all duration-500 delay-200"
        enter-from="opacity-0 translate-y-6"
        enter-to="opacity-100 translate-y-0"
        leave="transition-opacity duration-150"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 text-3xl lg:text-7xl transform -translate-y-6 lg:-translate-y-16 text-center max-w-sm lg:max-w-4xl mx-auto">
          I'm Zoran. Frontend Engineer, part designer.
        </div>
      </TransitionChild>
      <TransitionChild
        enter="transition-all duration-500 delay-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity duration-150"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="mt-4 flex items-center justify-center gap-6">
          <img src="/icons/vue.svg" class="w-8" />
          <img src="/icons/nuxt.svg" class="w-8" />
          <img src="/icons/tailwind.svg" class="w-8" />
          <img src="/icons/prisma.svg" class="w-6 text-slate-300" />
          <img src="/icons/graphql.svg" class="w-8" />
        </div>
      </TransitionChild>
      <TransitionChild
        enter="transition-all duration-500 delay-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity duration-150"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <p class="text-lg lg:text-2xl text-slate-400 mt-8 mx-auto max-w-md lg:max-w-xl">
          <span class="font-bold text-slate-200">Javascript Engineer.</span> Vue, Nuxt, Node, Express, Tailwind, Prisma, GraphQL, Anime, Greensock, Vite.
        </p>
      </TransitionChild>
    </TransitionRoot>
  </section>
</template>