<script setup>
import { ref, inject, onMounted } from 'vue'
import GitHubIcon from './GitHubIcon.vue'
import LinkedInIcon from './LinkedInIcon.vue'
import InputText from './InputText.vue'
import InputTextarea from './InputTextarea.vue'
import { ArrowLongRightIcon, RocketLaunchIcon } from '@heroicons/vue/24/outline'
import DopeButton from './DopeButton.vue'
const $api = inject('$api')
const name = ref('')
const email = ref('')
const message = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const submitForm = () => {
  if (!name.value || !email.value || !message.value) return
  isSubmitting.value = true

  $api.post('/send', {
    name: name.value,
    email: email.value,
    message: message.value
  })
    .then((res) => {
      console.log(res.data)
      isSubmitting.value = false
      isSubmitted.value = true
      clearForm()
     })
    .catch((err) => { console.log(err) })
}

function clearForm() {
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <div class="space-y-6 lg:space-y-7">
    <div>
      <h3 class="font-bold text-xl lg:text-2xl">Say hello!</h3>
      <p class="mt-2 text-slate-400 text-sm lg:text-base">
        I'm open to new projects and I love to build. Feel free to get in touch about something you're working on, or just to say hello and connect!
      </p>
    </div>
    <div 
      v-if="isSubmitted" 
      class="border-teal-400 border-2 rounded-lg p-10 grid place-content-center">
      <RocketLaunchIcon class="w-10 mx-auto text-teal-400" />
      <p class="mt-3">
        Thank you for your message. I will be in touch shortly.
      </p>
    </div>
    <form
      v-else
      :class="{ 'opacity-50 pointer-events-none' : isSubmitting }"
      class="space-y-4 relative"
      name="contact"
      ref="contactForm"
      @submit.prevent="submitForm"
    >
      <InputText
        v-model="name"
        label="Your name"
        placeholder="Enter your name"
        required
        type="text"
        :disabled="isSubmitting"
      />
      <InputText 
        v-model="email"
        label="Your email"
        placeholder="Enter your email"
        type="email"
        required
        :disabled="isSubmitting"
      />
      <InputTextarea
        v-model="message"
        label="Message"
        required
        placeholder="Add a message"
        :disabled="isSubmitted"
      />

      <DopeButton :disabled="isSubmitting" type="submit">
        Send inquiry
      </DopeButton>
    </form>
  </div>
</template>