<template>
  <div class="hello">
    <header class="header">
            <div class="headerContent">
                            <div class="header__left">
                                <router-link to="/"><img src="../assets/image/logo.svg" alt="logo" class="logo"></router-link>
                            <img src="../assets/image/search.svg" alt="search" class="search">  
                            </div>
                           
                            <div class="header__right">

                               
<div class="header__item">
 <!-- menu -->

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

<div class="header__item">
      <router-link to="/about" class="header-col-right__cart-link" 
              ><svg
                width="32"
                height="29"
                viewBox="0 0 32 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-width="30"
                  d="M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459 24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674 28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552 27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868 10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495 2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0 1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521 5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176 0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001 8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134 13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075 13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419 13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541 14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928 6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721 31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866 20.6186 25.641 20.6858 25.411 20.686H10.553Z"
                ></path></svg
              ><span class="header-col-right__count-product">{{ cartCount }}</span></router-link
            >
</div>
                               
                               
                            </div>
            </div>
        </header>
     
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 
    cart: [],
  
  computed: {
    // cartCount() {
    //   return this.$store.getters.getCartCount
    // }
//     cartCount: function(){
// return this.cart.length || ''
//     },
     cartCount: 0,
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&family=Lato:wght@100;300;400;700;900&family=Mulish:wght@200&family=Playfair+Display&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300&display=swap");

$max-width:1140px;  
$gap: 30px;
$main-font: 14px;

@mixin reset() {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 


.header {
    width: 100%;
    background-color: #222222;
    display: block;
    z-index: 5;
    
    .headerContent {
        max-width: 1144px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding-top: 28px;
        padding-bottom: 20px;
// padding-left: 36px;
// padding-right: 36px;
      .header__left{
          .search {
margin-left: 41px;
cursor: pointer;
}
      } 
      .header__right{
        display: flex;
        justify-content: center;
        align-items: center;
        .header__item:not(:last-child) {
            margin-right: 25px;
        }
        .header__item:last-child {
            margin-left: 17px;
        }
        .header__item{
              
          .header-col-right__cart-link svg {
              fill:#e8e8e8;
              stroke-width:2;
             
              }
              .header-col-right__cart-link .header-col-right__count-product{
                  position: absolute;
                //   top:0;
                  width: 20px;
                  height: 20px;
                //   background:red;
              }
            .header-col-right__cart-link:hover svg {
              fill:#f16d7f!important;
              }
              
            //  menu 
.menu{
display: inline-block;
position: relative;
z-index: 10;
.header__item-menu{
    border: none;
    background: transparent;
    cursor: pointer;
    
    }
.menu-list{
    display: block;
    position: absolute;
    height: 0;
    width: 232px;
    transition: all 1s ease;
    opacity: 0;
    // overflow: scroll;
    z-index: 10;
    margin-top: 32px;
    list-style: none;
    background: white;
    padding-top: 37px;
    padding-left: 34px;
    margin-left: 179px;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    .close{
        float: right;
        margin-right: 17px;
        margin-top: -16px;
        margin-bottom: -9px;
    
    }
    summary{
        display: block;
        cursor: pointer;
    }
    summary::webkit-details-marker{
        display: none;
    }
    .menu-list_item{
        padding-top: 24px;
        font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 17px;
    color: #F16D7F;
    
    }
    .item-menu{
        color:black
    }
    .menu-list_item {
        ul>li{
        list-style: none;
        padding-top: 11px;   
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 17px;
        color: #6F6E6E;
        a{
            text-decoration: none;
            color: #6F6E6E;
         cursor: pointer;
        }
    }
        }
       
}

}
.menu._active{ 
.menu-list{
display: block;
height:calc(100vh - 70px);
opacity: 1;
z-index: 10;
margin-top: 30px;
}
}
// end menu 
.account_icon{
    cursor: pointer;
}
.header-col-right__cart-link{
    cursor: pointer;
    color: white;
}

 .header-col-right__cart-link .header-col-right__count-product{
 
                //   position:absolute;
                  border-radius:50%;
                  padding:2px 5px;
                  top: 20px;
                //   right:100px;
                  background-color:#f16d7f;
                  z-index:10;
                  color:#fff;
                  font-size:12px;
                  line-height:14px;
 
               }
        }

      }
    }
}


</style>
