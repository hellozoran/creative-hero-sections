<script setup>
import ContactForm from './ContactForm.vue'
</script>

<template>
  <section class="relative pt-24 lg:pt-0 mt-12">
    <div class="absolute bg-cover bg-center bg-[url(/contact-bg.jpg)] w-full top-0 h-2/3" />
    <div class="mx-auto max-w-6xl px-6 py-12 lg:py-24 grid gap-6 lg:gap-12 lg:grid-cols-2">
      <div class="flex items-end justify-start relative z-10 order-2 mt-12 lg:mt-0 lg:order-1">
        <div>
          <h5>LinkedIn</h5>
          <a href="https://www.linkedin.com/in/zoranem" class="font-bold text-3xl" target="_blank">@zoranem</a>
        </div>
      </div>
      <div class="relative z-10 order-1 lg:order-2">
        <div class="bg-gradient-to-r from-cyan-500 to-pink-500 p-3">
          <div class="bg-[#181C27] p-12 relative">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>