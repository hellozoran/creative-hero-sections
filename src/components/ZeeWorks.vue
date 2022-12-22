<script setup>
import { ref } from 'vue'
import ImageThumb from './ImageThumb.vue'
import Lightbox from './Lightbox.vue'

const isOpen = ref(false)
const images = ['/3.webp', '/2.png', '/2.jpg', '/1.webp', '/4.webp', '/2.png']

const handleClose = () => {
  isOpen.value = false
}

const selectedImage = ref('')

function handleOpen(val) {
  selectedImage.value = val
  isOpen.value = true
}
</script>

<template>
  <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-8 lg:mx-auto mt-16">
    <ImageThumb v-for="image in images" :key="image" :image="image" @click="handleOpen(image)" />
  </section>
  <Lightbox :is-open="isOpen"  @close="handleClose">
    <img :src="selectedImage" />
  </Lightbox>
</template>