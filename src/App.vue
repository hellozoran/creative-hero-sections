<script setup>
import ZeeHeader from './components/ZeeHeader.vue'
import ZeeFooter from './components/ZeeFooter.vue'
</script>
<template>
  <ZeeHeader />
  <section>
    <router-view />
  </section>
  <ZeeFooter />
</template>