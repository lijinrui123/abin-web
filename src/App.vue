<script setup>
   

</script>

<template>
  <router-view v-slot="{ Component,route }">
    <keep-alive :include="Relax">
      <component :is="Component" :key="route.name"/>
    </keep-alive>
    <!-- <keep-alive>
      <component :is="Component"  v-if="$route.meta.keepAlive"/>
    </keep-alive> -->
    <!-- <component :is="Component"  v-if="!$route.meta.keepAlive"/> -->
  </router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
