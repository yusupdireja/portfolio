<script setup lang="ts">
import { onMounted } from 'vue'

// Import your icon components
import IconReact16 from '../icons/IconReact16.vue'
import IconSql from '../icons/IconSql.vue'
import IconTailwind from '../icons/IconTailwind.vue'
import IconTypescript from '../icons/IconTypescript.vue'
import IconCodeigniter from '../icons/IconCodeigniter.vue'
import IconCSharp from '../icons/IconCSharp.vue'
import IconCss3 from '../icons/IconCss3.vue'
import IconFirebase from '../icons/IconFirebase.vue'
import IconFlutter from '../icons/IconFlutter.vue'
import IconHtml5 from '../icons/IconHtml5.vue'
import IconJava16 from '../icons/IconJava16.vue'
import IconJavascript from '../icons/IconJavascript.vue'
import IconKotlin from '../icons/IconKotlin.vue'
import IconLaravel from '../icons/IconLaravel.vue'
import IconNextJs from '../icons/IconNextJs.vue'
import IconPhp from '../icons/IconPhp.vue'

// Define your icons array
const icons = [
  IconCodeigniter,
  IconCSharp,
  IconCss3,
  IconFirebase,
  IconFlutter,
  IconHtml5,
  IconJava16,
  IconJavascript,
  IconKotlin,
  IconLaravel,
  IconNextJs,
  IconPhp,
  IconReact16,
  IconSql,
  IconTailwind,
  IconTypescript,
]

// Lifecycle hook to trigger on component mount
onMounted(() => {
  const scrollers = document.querySelectorAll<HTMLDivElement>('.scroller')

  // Check if user prefers reduced motion
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addAnimation(scrollers)
  }
})

// Function to animate scrollers
function addAnimation(scrollers: NodeListOf<HTMLDivElement>) {
  scrollers.forEach((scroller) => {
    // Add data-animated attribute
    scroller.setAttribute('data-animated', 'true')

    // Get inner container
    const scrollerInner = scroller.querySelector<HTMLDivElement>('.scroller__inner')
    if (!scrollerInner) return

    // Get all child elements inside the inner container
    const scrollerContent = Array.from(scrollerInner.children)

    // Clone each item and append it
    scrollerContent.forEach((item) => {
      if (!(item instanceof HTMLElement)) return

      // Clone item and set aria-hidden attribute
      const duplicatedItem = item.cloneNode(true) as HTMLElement
      duplicatedItem.setAttribute('aria-hidden', 'true')

      // Append the duplicated item
      scrollerInner.appendChild(duplicatedItem)
    })
  })
}
</script>

<template>
  <div class="scroller" data-direction="right" data-speed="slow">
    <div class="scroller__inner">
      <component v-for="(Icon, index) in icons" :is="Icon" :key="index" class="icon" />
    </div>
  </div>
</template>

<style scoped>
.scroller {
  max-width: 56rem;
}

.scroller__inner {
  padding-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.scroller[data-animated='true'] {
  overflow: hidden;
  -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated='true'] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear
    infinite;
}

.scroller[data-direction='right'] {
  --_animation-direction: reverse;
}

.scroller[data-direction='left'] {
  --_animation-direction: forwards;
}

.scroller[data-speed='fast'] {
  --_animation-duration: 20s;
}

.scroller[data-speed='slow'] {
  --_animation-duration: 60s;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}

/* Outer container */
.slider-container {
  overflow: hidden;
  white-space: nowrap;
  padding: 10px;
  border-radius: 12px;
  background-color: #181818;
  width: 100%;
  height: 100px;
}

/* Inner content for infinite scroll */
.slider-content {
  display: flex;
  gap: 20px;
  width: max-content;
}

/* Icon styling */
.icon {
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
}
</style>
