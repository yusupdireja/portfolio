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
    <div>
      <div class="text-white font-medium!">{{ props.name }}</div>
      <div class="text-sm">{{ props.desc }}</div>
    </div>
  </div>
</template>
