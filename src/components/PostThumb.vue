<script setup>
import DopeButton from './DopeButton.vue'
const props = defineProps({
  title: String,
  date: String,
  url: String,
  imageUrl: String
})
</script>

<template>
  <div>
    <div class="bg-green-400 h-64">image</div>
    <span v-if="props.date" class="mt-6 block uppercase text-slate-500 tracking-widest text-sm">
      {{ props.date }}
    </span>
    <h3 v-if="props.title" class="mt-3 text-2xl">
      {{ props.title }}
    </h3>
    <DopeButton class="mt-6">Read more</DopeButton>
  </div>
</template>