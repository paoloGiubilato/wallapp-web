<template>
  <div class="wallpaper-card" :style="{ backgroundImage: `url(${imageUrl})` }">
  </div>
</template>

<style scoped>
.wallpaper-card {
  background-repeat: no-repeat;
  background-size: cover;
  width: 18rem;
  height: 32rem;

  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>

<script>
export default {
  props: ["imageUrl"],
  mounted() {
    console.log(this.imageUrl);
  }
}
</script>


