<template>
  <div class="album">
    <div class="album-content">
      <a :href="item.external_urls.spotify" target="_blank">
        <img :src="item.images[0].url" class="album-image" alt="" />
        <h4>{{ item.name }}</h4>
      </a>
    </div>
    <ul class="artists">
      <li v-for="name in item.artists" :key="name">
        <span class="lead small"> {{ name.name }} </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Album",
  props: ["item"],
};
</script>
<style scoped>
.album-image {
  width: 100%;
  margin-top: 30px;
}
.album {
  height: 400px;
  overflow: hidden;
}
</style>