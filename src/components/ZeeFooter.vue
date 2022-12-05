<script setup>
import GitHubIcon from './GitHubIcon.vue'
import LinkedInIcon from './LinkedInIcon.vue'
</script>

<template>
  <section>
    <footer class="mt-24 max-w-5xl mx-auto mb-12 bg-slate-800 rounded-lg lg:p-8 grid lg:grid-cols-2 gap-8">
      <div>
        <h2 class="font-bold text-lg md:text-2xl">About me</h2>
        <p class="mt-2 text-slate-400 text-sm lg:text-base">
          When I'm not writing code, I play and record music in my small, but growing, home recording studio. I also build and hand wire tube amps, and sometimes build a guitar from parts.
        </p>
        <div class="flex gap-4 mt-8">
          <GitHubIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div>
        -- add contact form here --
      </div>
    </footer>
  </section>
</template>