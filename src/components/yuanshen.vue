<template>
  <div class="picbox">
    <img src="@/assets/ys.png" alt="yuan" />
  </div>
</template>

<script setup>
</script>

<style scoped>
.picbox {
  animation-name: move;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
img {
  width: 1500px;
  height: 1200px;
  margin-left: 70px;
  position: relative;
  top: -150px;
}
@keyframes move {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>