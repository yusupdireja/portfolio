<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="flex items-center gap-4">
    <img class="w-10 h-10 rounded-full" :src="props.image" alt="" />
    <div class="font-medium dark:text-white">
      <div>{{ props.name }}</div>
      <div class="text-sm text-gray-500 dark:text-gray-400">{{ props.desc }}</div>
    </div>
  </div>
</template>
