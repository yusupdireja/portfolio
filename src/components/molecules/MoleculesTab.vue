<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref(1)
</script>

<template>
  <div class="w-full max-w-md mx-auto">
    <!-- Tab Buttons -->
    <div class="flex border-b border-gray-300">
      <button
        v-for="(tab, index) in ['Tab 1', 'Tab 2', 'Tab 3']"
        :key="index"
        @click="activeTab = index + 1"
        class="px-4 py-2 border-b-2"
        :class="activeTab === index + 1 ? 'text-blue-600 border-blue-600' : 'text-gray-600'"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="p-4">
      <div v-if="activeTab === 1">Konten untuk Tab 1</div>
      <div v-if="activeTab === 2">Konten untuk Tab 2</div>
      <div v-if="activeTab === 3">Konten untuk Tab 3</div>
    </div>
  </div>
</template>
