<script setup>
import DopeButton from './DopeButton.vue'
import PostThumb from './PostThumb.vue'
</script>

<template>
  <section class="bg-black/50 py-24">
    <div class="mx-auto lg:max-w-5xl px-6 grid lg:grid-cols-2 gap-12">
      <div class="lg:col-span-2 mb-12 text-center">
        <h5>Recent content</h5>
        <h2 class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 text-5xl mt-2 inline-block">Recent posts</h2>
      </div>
      <PostThumb date="December 22" title="How to use external dependencies in your Netlify functions" />
      <PostThumb date="December 28" title="A year in review, aka how to make friends for life" />
    </div>
  </section>
</template>