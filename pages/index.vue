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
    <Logo />
    <!--<Appbar class="landing-title" />-->
    <h1 class="center landing-subtitle">WallApp</h1>
    <p class="center landing-title">No ads. No tricks. Just wallpapers.</p>
    <p class="center landing-title"><b>Download now.</b></p>
    <Badges class="badge-section" />
  </div>
</template>

<script>
import Appbar from "~/components/Appbar";
import Logo from "~/components/Logo";
import Badges from "~/components/Badges";

export default {
  components: {
    Appbar,
    Logo,
    Badges
  },
  head() {
    return {
      title: "Home"
    };
  }
};
</script>

<style scoped>
.landing-subtitle {
  margin-top: 0.5em;
  margin-bottom: 3em;
  color: #2988D1;
}

.landing-title {
  margin-top: 1em;
  color: #6e6e6e
}

.badge-section {
  margin: 1em 0;
}
</style>


