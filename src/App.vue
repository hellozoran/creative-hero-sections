<script setup>
import Hero from './components/Hero.vue'
import RecentWork from './components/RecentWork.vue'
</script>

<template>
  
  <Hero />
  <RecentWork />

  <section class="bg-slate-800 py-24 text-white">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold text-center">About me</h2>
      <div class="mt-16 grid gap-24 grid-cols-2">
        <div class="space-y-6">
          <p>
            I've been building apps and websites for well over 5 years now. As a kid i grew up playing around with my dad's Atari then a Pentium 386. My first piece of code was a short game in Basic. Later on I started crafting sites in HTML and then PHP - which yes, led straight to WordPress. At one point I ran my own WP theme shop, which was fun. That entailed design, coding and marketing themes. I was lucky enough to sell my business and shortly after, I moved into JavaScript and Vue.js. I did work for a Toronto based agency building custom WP themes for a while as well, McMaster University being one of the clients. 
          </p>
          <p>
            Now I work primarily with Vue.js. Working as a product designer really finetuned my workflow from design to engineering. I always use a design system like Tailwind which is essential for modern digital product. I have a big interest in emerging technologies like crypto payments and IPFS.
          </p>
          <p>
            When I'm not writing code I balance my time with playing and recording music. I also build single ended tube amps based on 50s Fender circuits primarily, and have made a couple of pedals as well. With all those ways I like to spend my time, I also enjoy writing firmware and designing physical products that I find useful. 
          </p>
        </div>
        <div>
          pics
        </div>
      </div>
    </div>
  </section>
</template>
