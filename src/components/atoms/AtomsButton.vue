<script setup lang="ts">
import { AtomsButtonType } from '@/constants/enum'
import { computed, type PropType } from 'vue'

const props = defineProps({
  type: {
    required: true,
    type: String,
    default: AtomsButtonType.ELEVATED,
    validator: (value: string) => AtomsButtonType.getEnumValues().includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  textColor: {
    type: String,
    // default: 'text-black',
  },
  bgColor: {
    type: String,
    default: 'bg-white',
  },
  borderColor: {
    type: String,
    default: 'border-white',
  },
  onclick: {
    type: Function as PropType<(event: MouseEvent) => void>,
    default: () => {},
  },
})

const buttonClasses = computed(() => [
  'px-4 py-2 rounded-lg font-medium flex items-center justify-center transition cursor-pointer',
  {
    [`${props.bgColor} ${props.textColor ?? 'text-black'} shadow-md hover:${props.bgColor}`]:
      props.type === AtomsButtonType.ELEVATED && !props.disabled,
    [`border ${props.borderColor} ${props.textColor ?? 'text-white'} hover:${props.bgColor}`]:
      props.type === AtomsButtonType.OUTLINE && !props.disabled,
    'opacity-50 cursor-not-allowed': props.disabled,
  },
])
</script>

<template>
  <button :class="buttonClasses" :disabled="disabled" @click="props.onclick">
    <slot name="prefix"></slot>
    <span class="mx-1">
      <slot></slot>
    </span>
    <slot name="suffix"></slot>
  </button>
</template>
