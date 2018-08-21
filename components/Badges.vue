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
  <div class="badge-section">
    <PlayBadge />
    <AppleBadge />
  </div>
</template>

<style scoped>
.badge-section {
  display: flex;
  justify-content: center;
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


