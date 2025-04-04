<template>
  <div class="p-4 bg-[#121212]">
    <h2 class="text-white text-2xl font-semibold mb-4">Staggered Layout (Columns)</h2>
    <div class="columns-1 sm:columns-2 lg:columns-3 gap-4">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="mb-4! bg-[#1e1e20] break-inside-avoid p-4 rounded-2xl shadow-md"
      >
        <h3 class="text-white font-medium">{{ post.title }}</h3>
        <p class="text-gray-400">{{ post.content }}</p>
        <img
          v-if="post.image"
          :src="post.image"
          alt="post"
          class="mt-2 rounded-lg object-cover w-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = [
  { title: 'Post 1', content: 'Short content', image: '/assets/img1.png' },
  {
    title: 'Post 2',
    content:
      'Longer content that spans multiple linesLonger content that spans multiple linesLonger content that spans multiple linesLonger content that spans multiple linesLonger content that spans multiple linesLonger content that spans multiple linesLonger content that spans multiple lines',
    image: '/assets/img2.png',
  },
  { title: 'Post 3', content: 'Another short content' },
  {
    title: 'Post 4',
    content: 'Super long content that spans many lines to test staggered layout',
    image: '/assets/img3.png',
  },
  { title: 'Post 5', content: 'Medium content' },
  { title: 'Post 6', content: 'Short again', image: '/assets/img4.png' },
  { title: 'Post 6', content: 'Short again', image: '/assets/img4.png' },
  { title: 'Post 6', content: 'Short again', image: '/assets/img4.png' },
  { title: 'Post 6', content: 'Short again', image: '/assets/img4.png' },
  { title: 'Post 6', content: 'Short again', image: '/assets/img4.png' },
  { title: 'Post 6', content: 'Short again', image: '/assets/img4.png' },
]
</script>
