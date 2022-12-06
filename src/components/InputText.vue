<script setup>
const props = defineProps({
  label: String,
  id: String,
  placeholder: String,
  type: String,
})
</script>

<template>
  <div class="input-group w-full flex flex-col z-10 relative mix-blend-lighten">
    <label
      :for="id"
      class="uppercase text-xs absolute -top-1.5 left-6 bg-black px-2 text-slate-400"
    >
      {{ label }}
    </label>

    <input
      :id="id"
      :placeholder="placeholder"
      :aria-placeholder="placeholder"
      :type="type"
      class="input-group__input text-base lg:text-lg text-slate-100 w-full rounded-xl px-3 lg:px-4 py-2 lg:py-3 placeholder:text-slate-600 border-2 border-transparent outline-none"
      value=""
    />
  </div>
</template>

<style>
.input-group__input {
  border-style: none;
  border: 0.1em solid transparent;
  background-image: linear-gradient(#000, #000), linear-gradient(120deg, #f43f5e 0%, #7e22ce 50%, #9f0 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-size: 200% 100%;
  transition: background-position 0.8s ease-out;
}
.input-group__input:hover {
	background-position: 100% 0;
}
.input-group__input:focus {
  outline: 2px solid #ad2b89;
  outline-offset: 0.1em;
}
</style>