<template>
  <div id="app">
    
   
        <h1>{{sitename}}</h1>
<button class="btn btn-default btn-lg" v-on:click="showCheckout">      
     <span class="glyphicon glyphicon-shopping-cart"> {{cartItemCount}}</span></button>  
      <figure>
                        <img v-bind:src="product.image">
                    </figure>
                     <div class="col col-expand">
                    <h1>{{product.title}}</h1>
                    <p v-html="product.description"></p>
                    <p class="price">
                        {{product.price}}
                    </p>
                </div>
                 <button class="btn btn-primary btn-lg" v-on:click="addToCart" v-show="canAddToCart" v-if="canAddToCart">Add to cart</button>
            <button disabled="true" class="btn btn-primary btn-lg" v-else>Add to cart</button>
            <span class="inventory-message" v-if="product.availableIventory-cartItemCount<5">Осталось {{product.availableIventory - cartItemCount}} в наличии!</span>
        <!--  -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//  const Vue = new Vue({
//   el: '#app'
// });
//  Vue.component('component', {
//   template: '<h1>Hi <component></component></h1>'
// });

export default {
  name: 'App',
  components: {
    
  },
   data() {
     return{
         sitename: "Vue.js shop",
         showProduct: true,
         product: {
             id:1,
            //  title: "product_1",
             discription: "something product",
             price: `5000 руб.`,
             image: "https://placeimg.com/1000/1000/tech",
             availableIventory: 5
         },
         cart: []
     }
   },
   methods: {
         
addToCart: function() {
              this.cart.push( this.product.id );
          },
          showCheckout() {
              this.showProduct = this.showProduct ? false : true;
          }
          
      },
    computed: {
          
            cartItemCount: function() {
              return this.cart.length || '';
          },
          canAddToCart: function() {
              return this.product.availableIventory > this.cartItemCount;
          }
          
      }
  
   
}

     
  
      
     
 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.inventory-message{
  margin-left: 20px;
  position:absolute;
}
</style>
