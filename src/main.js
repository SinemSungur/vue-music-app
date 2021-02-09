import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/Home.vue';
import About from './components/About.vue';
import ArtistProfile from './components/ArtistProfile.vue';


const router = new VueRouter({
  routes: [
    { path: '', component: Home },
    { path: '/about', component: About },
    { path: '/artist/:id', component: ArtistProfile }
  ],
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router,
}).$mount('#app')
