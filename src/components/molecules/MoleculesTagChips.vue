<script setup lang="ts">
const props = defineProps({
  tags: {
    type: Array as () => string[],
    default: '',
  },
  isWhite: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="chip-container">
    <button
      v-for="(tag, index) in props.tags"
      :key="index"
      :class="props.isWhite ? 'chip-white' : 'chip-black'"
    >
      {{ tag }}
    </button>
  </div>
</template>

<style scoped>
/* Container Grid */
.chip-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px;
  justify-content: center;
}

/* Individual Chip */
.chip-black {
  padding: 10px 20px;
  border: 2px solid #ffffff;
  border-radius: 8px;
  background-color: #0f0f0f;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
}

.chip-white {
  padding: 10px 20px;
  border: 2px solid #cfcfcf;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: #5a5a5a;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
}

/* Hover Effect */
.chip-black:hover {
  background-color: #0f0f0f;
  border-color: #bfbfbf;
  transform: scale(1.05);
}

.chip-white:hover {
  background-color: #eaeaea;
  border-color: #bfbfbf;
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .chip {
    padding: 8px 16px;
    font-size: 12px;
  }
}
</style>
