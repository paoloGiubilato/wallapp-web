<template>
  <div id="app">
    <Appbar />
    <WallpaperImage class="center" :imageUrl="imageUrl" />
    <div class="download-section">
      <p class="center">
        Do you like this wallpaper?<br>
        Install the app to download it on your smartphone!
      </p>
      <Badges />
    </div>
  </div>
</template>

<style scoped>
.download-section {
  margin-top: 3em;
}
</style>

<script>
import Appbar from "~/components/Appbar";
import WallpaperImage from "~/components/WallpaperImage";
import Badges from "~/components/Badges";
import firebase from "~/plugins/firebase";

export default {
  components: {
    Appbar,
    WallpaperImage,
    Badges
  },
  async asyncData(context) {
    const category = context.params.categoryId;
    const wallpaper = context.params.wallpaperId;
    const ref = firebase
      .app()
      .storage()
      .ref(`categories/${category}/wallpapers/${wallpaper}/preview.jpg`);

    try {
      const url = await ref.getDownloadURL();
      return { imageUrl: url };
    } catch (err) {
      // Wrong category or wallpaper ID
      console.log("404 Wallpaper not found");
      this.$router.push({ path: "/" });
    }
  },
  head() {
    return {
      title: "Shared wallpaper"
    };
  }
};
</script>


