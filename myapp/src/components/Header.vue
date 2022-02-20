<template>
  <header class="header">
            <div class="headerContent">
                            <div class="header__left">
                              <router-link to="/" data-tooltip="Нажмите для возврата на главную"><img src="../assets/image/logo.png" alt="logo" class="logo" style="max-width:38px;"></router-link> |
                               <!-- <a href="index.html"></a> -->
                            <img  src="../assets/image/search.svg" alt="search" class="search">  
                            </div>
                           
                            <div class="header__right">

                               
<div class="header__item">
 <!-- menu -->
 <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
    <div class="menu">
         <button class="header__item-menu" id="btn-menu"> <img src="../assets/image/burger.svg" alt="burger" class=""></button>

    <ul  class="menu-list">
        <li class="close"><img src="../assets/image/close-menu.svg" alt="close"></li>
        <li class="menu-list_item item-menu">MENU</li>
        <details class="menu-list_item">
            <summary>MAN</summary>
            <ul>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Bags</a></li>
                <li><a href="#">Denim</a></li>
                <li><a href="#">T-Shirts</a></li>
               
            </ul>
            </details>
            <details class="menu-list_item">
                <summary>WOMAN</summary>
                <ul>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Jackets & Coats</a></li>
                    <li><a href="#">Polos</a></li>
                    <li><a href="#">T-Shirts</a></li>
                    <li><a href="#">Shirts</a></li>
                   
                </ul>
                </details>   
                <details class="menu-list_item">
                    <summary>KIDS</summary>
                    <ul>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Jackets & Coats</a></li>
                        <li><a href="#">Polos</a></li>
                        <li><a href="#">T-Shirts</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">Bags</a></li>
                    </ul>
                    </details>  

                    <details class="menu-list_item">
                        <summary>NAVIGATION</summary>
                        <ul>
       <li><a href="catalog.html">CATALOG</a></li>
       <li><a href="product.html">PRODUCT</a></li>
       <li><a href="cart.html">CART</a></li>
       <li><a href="registration.html">REGISTRATION</a></li>
    </ul>
</details> 
    </ul>
    </div>
<!-- end menu -->
</div>
                               

<div class="header__item">
    <a href="registration.html"><img src="../assets/image/account.svg" alt="account" class="account_icon"></a>
</div>
<div class="header__item-social">
  <router-link to="/about"><i class="fas fa-cart-arrow-down"></i><span>{{cartItemCount}}</span></router-link>
    <!-- <a href="product.html"></a> -->
    
</div>
                               
                               
                            </div>
            </div>
        </header>
</template>

<script>
export default {
  name: 'Header',
  // props: ['cartItemCount'],
   
  
  data(){
    return{
      cartItemCount: 0,
      showProduct: true,
      product: {
        id: 1,
        title: "product_1"
      },
      cart: [],
    }
  },
  methods:{
    addToCart: function() {
  this.cart.push(this.product.id);
}
  },
  computed: {
   CartItemCount: function() {
      return this.cartItemCount.length || '';
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[data-tooltip]::after {
  content: attr(data-tooltip);
  color: white;
  position: absolute;
}
</style>
