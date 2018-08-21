<!--
    WallApp Web
    Copyright (C) 2018  Simone Sestito

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 -->

<template>
  <div id="app">
    <Appbar />
    <WallpaperImage class="center" :imageUrl="imageUrl" />
    <div class="download-section">
      <p class="center">
        Do you like this wallpaper?<br>
        Install <b>WallApp</b> to download it!
      </p>
      <Badges />
    </div>
  </div>
</template>

<style scoped>
.download-section {
  margin-top: 1.5em;
  color: #6e6e6e;
  font-weight: 500;
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


