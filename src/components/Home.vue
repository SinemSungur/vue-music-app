<template>
  <div>
    <h1>Find V-Music</h1>
    <p class="home-content">
      This is VueSpotify app. Just type artist and get more!
    </p>
    <input
      type="text"
      v-model="searchArtist"
      @keyup="findArtist"
      placeholder="Type artist..."
      class="search-input"
    />
    <ul>
      <li v-for="artist in artists" :key="artist">
        {{ artist }}
      </li>
    </ul>
    <user-item></user-item>
  </div>
</template>
<script>
import axios from "axios";
import UserItem from "./UserItem";
export default {
  name: "Home",
  components: {
    UserItem,
  },
  data() {
    return {
      searchArtist: "Thrice",
      artists: {},
    };
  },
  methods: {
    findArtist() {
      axios
        .get(
          `https://api.spotify.com/v1/search?q=${this.searchArtist}&type=artist`
        )
        .then((response) => {
          console.log("response", response);
        });
    },
  },
};
</script>