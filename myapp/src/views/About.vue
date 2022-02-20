<template>
  <div class="home">
    <Body v-for="item of catalog" v-bind:key="item.id" v-bind:data="item"></Body>
    
     <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  </div>
</template>

<script>
import Body from '../components/Body.vue'

export default {
  name: 'About',
  props: [
    'catalog'
  ],
  components: {
    Body,
  }
  
}
</script>