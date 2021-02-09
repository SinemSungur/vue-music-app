<template>
    <div class="navbar">
       <div class="container">
               <router-link to="/" tag="a">VueSpotify</router-link>
               <router-link to="/" tag="a">Home</router-link>
               <router-link to="/about" tag="a">About</router-link>
               <router-link to="/artist/:id">ArtistProfile </router-link>
       </div>
    </div>
</template>
<style scoped>
.navbar{
    background-color: rgb(78, 74, 74);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 100px;
}
.navbar a{
    text-decoration: none;
    color: greenyellow;
    margin-left: 1rem;
}
</style>