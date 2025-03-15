<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AtomsButton from './components/atoms/AtomsButton.vue'
import { AtomsButtonType } from './constants/enum'
import MoleculesProfile from './components/molecules/MoleculesProfile.vue'
import MoleculesSocialMedia from './components/molecules/MoleculesSocialMedia.vue'
import IconTooling from './components/icons/IconTooling.vue'
import IconInstagram from './components/icons/IconInstagram.vue'
import IconFacebook from './components/icons/IconFacebook.vue'
import IconWhatsapp from './components/icons/IconWhatsapp.vue'
import MoleculesTabs from './components/molecules/MoleculesTab.vue'

const openLink = (url: string) => {
  window.open(url)
}
</script>

<template>
  <div class="mx-auto max-w-4xl w-full">
    <header class="flex flex-col gap-y-4">
      <div class="flex w-full justify-between items-center">
        <MoleculesProfile
          :name="'Yusup Maulanadireja'"
          :image="'https://avatar.iran.liara.run/public/boy'"
          :desc="'Software Engineer'"
        />

        <MoleculesSocialMedia
          @click-facebook="openLink('https://www.facebook.com/')"
          @click-instagram="openLink('https://www.instagram.com/')"
          @click-whatsapp="openLink('https://www.whatsapp.com/')"
        />
      </div>
      <p class="text-justify">
        Hello, my name is Yusup Maulanadireja, and I am a dedicated Software Engineer with a passion
        for developing innovative solutions. I also have extensive experience in Mobile Engineering,
        both Android and iOS, using the Flutter programming language.
      </p>
    </header>

    <MoleculesTabs />
  </div>

  <div></div>

  <!-- <div class="w-1/2">
      a
      <IconInstagram class="text-red-500" />
      <IconFacebook class="text-blue-500" />
      <IconWhatsapp class="text-green-500" />
    </div> -->

  <IconTooling class="text-blue-500" />

  <div class="fill-amber-100"></div>
  <!-- <template>
    <div class="flex">
      <v-icon name="fa-gamepad" scale="5" fill="white" />
      <v-icon name="ri-folder-music-fill" scale="2" fill="white" />
      <v-icon name="ai-overleaf" scale="2.5" fill="white" />
      <v-icon name="si-gatsby" scale="3" fill="white" />
      <v-icon name="wi-day-sunny-overcast" scale="2" fill="yellow" />
    </div>
  </template> -->

  <!-- <AtomsButton :type="AtomsButtonType.ELEVATED" :onclick="() => console.log('Clicked!')">
    Click Me
  </AtomsButton> -->

  <!-- <h1 class="text-3xl font-bold underline">Hello world!</h1> -->

  <!-- <RouterView /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
