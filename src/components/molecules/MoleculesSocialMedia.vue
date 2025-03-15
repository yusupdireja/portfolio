<script setup lang="ts">
import type { PropType } from 'vue/dist/vue.js'
import IconFacebook from '../icons/IconFacebook.vue'
import IconInstagram from '../icons/IconInstagram.vue'
import IconWhatsapp from '../icons/IconWhatsapp.vue'

const props = defineProps({
  color: {
    type: String,
    default: 'text-white',
  },
  size: {
    type: String,
    default: 'w-6 h-6',
  },
  onClickInstagram: {
    type: Function as PropType<(event: MouseEvent) => void>,
    default: () => {},
  },
  onClickFacebook: {
    type: Function as PropType<(event: MouseEvent) => void>,
    default: () => {},
  },
  onClickWhatsapp: {
    type: Function as PropType<(event: MouseEvent) => void>,
    default: () => {},
  },
})
</script>

<template>
  <div class="grid grid-flow-col gap-x-2">
    <IconInstagram :class="[props.color, props.size]" @click="props.onClickInstagram" />
    <IconFacebook :class="[props.color, props.size]" @click="props.onClickFacebook" />
    <IconWhatsapp :class="[props.color, props.size]" @click="props.onClickWhatsapp" />
  </div>
</template>
