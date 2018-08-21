<template>
  <div class="badge-section">
    <PlayBadge />
    <AppleBadge />
  </div>
</template>

<style scoped>
.badge-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

<script>
import PlayBadge from "~/components/PlayBadge"
import AppleBadge from "~/components/AppleBadge"

export default {
  components: {
    PlayBadge,
    AppleBadge
  }
}
</script>


