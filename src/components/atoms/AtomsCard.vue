<script setup lang="ts">
import { computed, type PropType } from 'vue'

const props = defineProps({
  customClass: {
    type: String,
    default: '',
  },
  onclick: {
    type: Function as PropType<(event: MouseEvent) => void>,
    default: () => {},
  },
})

const classes = computed(() =>
  !props.customClass ? 'rounded-2xl p-[24px] bg-[#353538]' : props.customClass,
)
</script>
<template>
  <div class="card" :class="classes" @click="props.onclick">
    <slot></slot>
  </div>
</template>

<style scoped>
.card:hover {
  border-width: 1px;
  border-color: #bfbfbf;
  transform: scale(1.05);
}
</style>
