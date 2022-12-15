<script setup>
import { ref } from 'vue'
import GitHubIcon from './GitHubIcon.vue'
import LinkedInIcon from './LinkedInIcon.vue'
import InputText from './InputText.vue'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const name = ref('')
const email = ref('')
const message = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const submitForm = () => {
  isSubmitting.value = true
  console.log('Submit form')
  clearForm()
}

function clearForm() {
  name.value = ''
  email.value = ''
  message.value = ''
  isSubmitting.value = false
  isSubmitted.value = false
}
</script>

<template>
  <div class="mt-20 max-w-xl mx-8 sm:mx-auto bg-black/20 rounded-2xl px-8 py-12 space-y-6 lg:space-y-7">
    <div>
      <h3 class="font-bold text-xl lg:text-2xl">Contact me</h3>
      <p class="mt-2 text-slate-400 text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis velit ullam provident iste perferendis illo.</p>
    </div>
    <form
      :class="{ 'opacity-50 pointer-events-none' : isSubmitting }"
      class="space-y-4 relative"
      name="contact"
      data-netlify="true"
      @submit.prevent="submitForm" 
    >
      <input type="hidden" name="form-name" value="contact" />
      <InputText label="Your name" placeholder="Enter your name" type="text" :disabled="isSubmitting" />
      <InputText label="Your email" placeholder="Enter your email" type="text" :disabled="isSubmitting" />

      <button :disabled="isSubmitting" class="bg-violet-600 w-full rounded-xl p-3 lg:p-4 uppercase font-semibold flex gap-3 items-center justify-center text-xs lg:text-base tracking-wide" type="submit">
        Send inquiry
        <ArrowLongRightIcon class="w-6" />
      </button>
    </form>
  </div>
</template>