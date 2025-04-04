<script setup lang="ts">
import type { PropType } from 'vue/dist/vue.js'
import IconFacebook from '../icons/IconFacebook.vue'
import IconInstagram from '../icons/IconInstagram.vue'
import IconWhatsapp from '../icons/IconWhatsapp.vue'
import IconTiktok from '../icons/IconTiktok.vue'

const props = defineProps({
  color: {
    type: String,
    default: 'text-white',
  },
  size: {
    type: String,
    default: 'w-4 h-4',
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
  onClickTiktok: {
    type: Function as PropType<(event: MouseEvent) => void>,
    default: () => {},
  },
  visibleInstagram: {
    type: Boolean,
    default: false,
  },
  visibleFacebook: {
    type: Boolean,
    default: false,
  },
  visibleWhatsapp: {
    type: Boolean,
    default: false,
  },
  visibleTiktok: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="grid grid-flow-col gap-x-2 cursor-pointer">
    <IconInstagram
      v-if="props.visibleInstagram"
      :class="[props.color, props.size, 'lg:w-6 lg:h-6']"
      @click="props.onClickInstagram"
    />
    <IconFacebook
      v-if="props.visibleFacebook"
      :class="[props.color, props.size, 'lg:w-6 lg:h-6']"
      @click="props.onClickFacebook"
    />
    <IconWhatsapp
      v-if="props.visibleWhatsapp"
      :class="[props.color, props.size, 'lg:w-6 lg:h-6']"
      @click="props.onClickWhatsapp"
    />
    <IconTiktok
      v-if="props.visibleTiktok"
      :class="[props.color, props.size, 'lg:w-6 lg:h-6']"
      @click="props.onClickTiktok"
    />
  </div>
</template>
