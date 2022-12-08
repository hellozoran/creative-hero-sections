<script setup>
import { ref } from 'vue'
import ImageThumb from './ImageThumb.vue'
import Lightbox from './Lightbox.vue'

const isOpen = ref(false)
const images = ['/3.webp', '/2.png', '/2.jpg', '/1.webp', '/4.webp', '/2.png']

const handleClose = () => {
  isOpen.value = false
}

const handleOpen = () => {
  console.log('open sesame')
}
</script>
<template>
  <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-8 lg:mx-auto mt-16">
    <ImageThumb v-for="image in images" :key="image" :image="image" @click="isOpen = true" />
  </section>
  <Lightbox :is-open="isOpen" @open="handleOpen" @close="handleClose">
    <img src="1.webp" />
  </Lightbox>
</template>