<script setup>
import {
  HomeIcon,
  UserIcon,
  RectangleStackIcon,
  InboxIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <nav class="bg-theme-blue fixed bottom-0 min-w-full h-12 text-theme-light">
    <ul class="min-h-full flex flex-row justify-evenly items-center">
      <li>
        <router-link :to="{ name: 'Home' }">
          <HomeIcon class="h-6 w-6" />
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">
          <UserIcon class="h-6 w-6" />
        </router-link>
      </li>
      <li>
        <RectangleStackIcon class="h-6 w-6" />
      </li>
      <li>
        <InboxIcon class="h-6 w-6" />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul > li {
  padding: 3px 20px;
}
</style>
