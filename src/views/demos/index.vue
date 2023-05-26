<template>
  <img src="@/assets/images/bg3.png" alt="">
</template>

<script setup>

</script>

<style lang="scss" scoped>
img{
  display: block;
  width: auto;
  max-width: 90vw;
  height: 70vh;
  object-fit: cover;
  margin: 0 auto;
}
@media (max-width: 480px) {
  img{
    height: 90vh;
  }
}
</style>