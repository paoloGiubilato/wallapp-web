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


