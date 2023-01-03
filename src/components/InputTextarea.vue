<script setup>
const props = defineProps({
  label: String,
  required: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  placeholder: String,
  id: String,
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])
function updateInput(event) {
  emit("update:modelValue", event.target.value)
}
</script>

<template>
  <div>
    <label
      :for="id"
      class="uppercase text-sm text-slate-600 dark:text-slate-500"
    >
      {{ label }}
      <span v-if="required" class="text-violet-400">*</span>
    </label>

    <textarea
      :id="id"
      :placeholder="placeholder"
      :aria-placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue" 
      class="dark:bg-black/50 w-full rounded-sm p-3"
      @input="updateInput"
    />
  </div>
</template>