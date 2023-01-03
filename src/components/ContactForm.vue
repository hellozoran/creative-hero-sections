<script setup>
import { ref, reactive, inject } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { RocketLaunchIcon } from '@heroicons/vue/24/outline'
import InputText from './InputText.vue'
import InputTextarea from './InputTextarea.vue'
import DopeButton from './DopeButton.vue'

const $api = inject('$api')
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')

const state = reactive({
  name: '',
  email: '',
  message: ''
})

const rules = {
  name: { required },
  email: { required, email },
  message: { required }
}

const v$ = useVuelidate(rules, state)

async function submitForm() {
  const result = await v$.value.$validate()
  if (!result) {
    errorMessage.value = 'Please check all fields are correct.'
    return
  }
  errorMessage.value = ''
  isSubmitting.value = true

  $api.post('/send', state)
    .then((res) => {
      isSubmitting.value = false
      isSubmitted.value = true
      clearForm()
     })
    .catch((err) => { console.log(err) })
}

function clearForm() {
  state.name = ''
  state.email = ''
  state.message = ''
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
      <p class="mt-3 text-center">
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
      <p v-if="errorMessage" class="bg-violet-500 p-2 text-sm rounded-sm">{{ errorMessage }}</p>
      <InputText
        v-model="state.name"
        :disabled="isSubmitting"
        label="Your name"
        placeholder="Enter your name"
        required
        type="text"
      />
      <InputText 
        v-model="state.email"
        :disabled="isSubmitting"
        label="Your email"
        placeholder="Enter your email"
        type="email"
        required
      />
      <InputTextarea
        v-model="state.message"
        :disabled="isSubmitted"
        label="Message"
        required
        placeholder="Add a message"
      />

      <DopeButton :disabled="isSubmitting" type="submit">
        Send inquiry
      </DopeButton>
    </form>
  </div>
</template>