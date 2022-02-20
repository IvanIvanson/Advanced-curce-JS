<template>
  <div class="home">
    
   <Cart></Cart>
    <!-- <Body msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import Cart from '../components/Cart.vue'

export default {
  name: 'Home',
  components: {
    Cart,
  },
    props: [
    'cart'
  ]

}
</script>
<style>
#nav{
  margin-top:250px;
}
</style>