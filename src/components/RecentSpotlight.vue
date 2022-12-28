<script setup>
import DopeButton from './DopeButton.vue'
</script>

<template>
  <section class="py-12 lg:py-24 grid lg:grid-cols-2 gap-24 max-w-md lg:max-w-6xl mx-auto px-6 items-center">
    <div class="lg:pb-32">
      <span class="uppercase text-slate-600 tracking-widest block text-xs lg:text-base">Recent work</span>
      <h2 class="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 inline-block text-2xl lg:text-4xl mt-2 lg:mt-4">Moonbeam</h2>
      <p class="mt-8 text-sm lg:text-base text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid sunt nesciunt ratione at, ipsum expedita id rem accusantium perferendis ad officiis provident. Distinctio commodi tenetur itaque corporis ad dignissimos.</p>
      <DopeButton class="mt-6 lg:mt-20">See more</DopeButton>
    </div>
    <div class="relative">
      <div class="relative">
        <img src="/project-zero.png" class="inline pl-12 pr-12 lg:pr-0 lg:pl-24" />
        <div class="absolute bottom-24 lg:bottom-36 grid grid-cols-2 gap-6 w-full lg:w-3/4 text-slate-600">
          <div class="bg-white p-6 flex flex-col">
            <span class="text-xs uppercase tracking-widest text-slate-400">Frontend</span>
            <span class="font-bold text-lg">Vue</span>
          </div>
          <div class="bg-white p-6 flex flex-col">
            <span class="text-xs uppercase tracking-widest text-slate-400">Back end</span>
            <span class="font-bold text-lg">Node Express</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>