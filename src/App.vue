<template>
  <yuanshen v-if="beginani"></yuanshen>
  <router-view v-else></router-view>
</template>

<script setup>
import yuanshen from "@/components/yuanshen.vue";
import { ref } from "vue";
let beginani = ref(true);
setTimeout(() => {
  beginani.value = false;
}, 3000);
</script>

<style scoped>
</style>