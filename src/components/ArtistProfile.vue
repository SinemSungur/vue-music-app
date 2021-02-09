<template>
  <div class="artist-profile">
    <img :src="info.images[0].url" alt="" />
    <h2>{{ info.name }}</h2>
    <ul class="genres" v-if="info.genres.length > 0">
      <span> <b>GENRES:</b> </span>
      <li class="genres" v-for="genre in info.genres" :key="genre">
        {{ genre }}
      </li>
    </ul>
    <div>
      <a :href="info.external_urls.spotify" target="_blank" class="link"
        >Go to Artist's Spotify Profile</a
      >
      <a href="" @click="showAlbums" class="link"
        >Show {{ info.name }}'s albums</a
      >
    </div>
    <div>
      <div v-for="album in albums" :key="album">
        <app-album :item="album"></app-album>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Album from "./Album";
export default {
  name: "ArtistProfile",
  components: {
    appAlbum: Album,
  },
  data() {
    return {
      info: {},
      albums: {},
    };
  },
  created() {
    axios
      .get(`https://api.spotify.com/v1/artists/${this.$route.params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return (this.info = res);
      });
  },
};
</script>