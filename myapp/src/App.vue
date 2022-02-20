<template>
 
<div class="wrapper">
 <Header></Header>
 <!-- <Body></Body> -->
 <!-- <HelloWorld></HelloWorld> -->
   <router-view v-bind:catalog="catalog" v-bind:cart="cart" v-on:buyed="addToCart" v-on:removed="removeFromCart" />
  
 <!-- <Body></Body>  -->
  <Footer></Footer>
  <!-- <router-view/> -->
  </div>
</template>
 
 <script>
import Header from './components/Header.vue'
// import Body from './components/Body.vue'
// import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return{
      catalog: [],
      cart: [],
      
    }
  },
  mounted() {
this.catalog = [
  {id: 1, title: 'product1', price: 80},
  {id: 2, title: 'product2', price: 180}
]
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&family=Lato:wght@100;300;400;700;900&family=Mulish:wght@200&family=Playfair+Display&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.wrapper .header {
  width: 100%;
  background-color: #222222;
  display: block;
  z-index: 5;
}
.wrapper .header .headerContent {
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 28px;
  padding-bottom: 20px;
}
.wrapper .header .headerContent .header__left .search {
  margin-left: 41px;
  cursor: pointer;
}
.wrapper .header .headerContent .header__left [data-tooltip]::after {
  content: attr(data-tooltip);
  color: white;
  position: absolute;
  width: 200px;
  border-radius: 5px;
  top:0;
  background: #42b983;
  pointer-events:none;
  padding: 0.5em;
  box-shadow: 2px 2px 5px rgba(0, 0 ,0 , 0.3);
  transition: 0.5s;
  opacity: 0;
}
.wrapper .header .headerContent .header__left [data-tooltip]:hover::after {
opacity: 0.7;
top: 50px;
}
.wrapper .header .headerContent .header__right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper .header .headerContent .header__right .header__item:not(:last-child) {
  margin-right: 25px;
}
.wrapper .header .headerContent .header__right .header__item:last-child {
  margin-left: 17px;
}
.wrapper .header .headerContent .header__right .header__item .menu {
  display: inline-block;
  position: relative;
  z-index: 10;
}
.wrapper .header .headerContent .header__right .header__item .menu .header__item-menu {
  border: none;
  background: transparent;
  cursor: pointer;
}
.wrapper .header .headerContent .header__right .header__item .menu .menu-list {
  display: block;
  position: absolute;
  height: 0;
  width: 232px;
  transition: all 1s ease;
  opacity: 0;
  z-index: 10;
  margin-top: 32px;
  list-style: none;
  background: white;
  padding-top: 37px;
  padding-left: 34px;
  margin-left: 179px;
  box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
}
.wrapper .header .headerContent .header__right .header__item .menu .menu-list .close {
  float: right;
  margin-right: 17px;
  margin-top: -16px;
  margin-bottom: -9px;
}
.wrapper .header .headerContent .header__right .header__item .menu .menu-list summary {
  display: block;
  cursor: pointer;
}
.wrapper .header .headerContent .header__right .header__item .menu .menu-list summary::webkit-details-marker {
  display: none;
}
.wrapper .header .headerContent .header__right .header__item .menu .menu-list .menu-list_item {
  padding-top: 24px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #F16D7F;
}
.wrapper .header .headerContent .header__right .header__item .menu .menu-list .item-menu {
  color: black;
}
.wrapper .header .headerContent .header__right .header__item .menu .menu-list .menu-list_item ul > li {
  list-style: none;
  padding-top: 11px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #6F6E6E;
}
.wrapper .header .headerContent .header__right .header__item .menu .menu-list .menu-list_item ul > li a {
  text-decoration: none;
  color: #6F6E6E;
  cursor: pointer;
}
.wrapper .header .headerContent .header__right .header__item .menu._active .menu-list {
  display: block;
  height: calc(100vh - 70px);
  opacity: 1;
  z-index: 10;
  margin-top: 30px;
}
.wrapper .header .headerContent .header__right .header__item .account_icon {
  cursor: pointer;
}
.wrapper .header .headerContent .header__right .header__item .bascket-icon {
  cursor: pointer;
}
.wrapper .header .headerContent .header__right .header__item-social a{
  
  text-decoration:none;
  font-size: 35px;
  color:white;
}
.wrapper .header .headerContent .header__right .header__item-social a span{
  position:absolute;
  text-align:center;
  padding-top: 2px;
  margin-left: -10px;
  top: 20px;
  width:25px;
  height:25px;
  font-size: 18px;
  border-radius: 50%;
  background: pink;
}
.wrapper .content {
  flex-grow: 1;
  width: 100%;
}
.wrapper .content .brand {
  height: 764px;
  background: #f1e4e6;
  overflow: hidden;
}
.wrapper .content .brand__flex {
  display: flex;
  justify-content: flex-end;
  max-width: 1140px;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  background: url("assets/image/brand_img.png") no-repeat -228px;
}
.wrapper .content .brand__flex .brand__text {
  max-width: 495px;
  padding-left: 20px;
  padding-top: 0px;
  padding-right: 90px;
  border-left: solid #f16d7f 12px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #222222;
}
.wrapper .content .brand__flex .brand__text h1 {
  font-family: Lato;
  font-weight: 900;
  font-size: 48px;
  line-height: 58px;
  color: #222222;
}
.wrapper .content .brand__flex .brand__text span {
  color: #f16d7f;
}
.wrapper .content .category {
  margin-top: 65px;
}
.wrapper .content .category__flex {
  display: flex;
  flex-wrap: wrap;
  max-width: 1140px;
  gap: 30px;
  margin: 0 auto;
}
.wrapper .content .category__flex .category__item:not(:last-child) {
  max-width: 360px;
  height: 260px;
}
.wrapper .content .category__flex .category__item {
  width: 100%;
  height: 180px;
  background: url("assets/image/accesBg.png") no-repeat center;
  background-size: cover;
  position: relative;
}
.wrapper .content .category__flex .category__item .category__itemBg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(33, 22, 22, 0.7);
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  z-index: 2;
}
.wrapper .content .category__flex .category__item .category__itemBg h2 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #f16d7f;
}
.wrapper .content .category__flex .category__item img {
  position: absolute;
  z-index: 1;
}
.wrapper .content .cards-conteiner {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 96px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #9f9f9f;
}
.wrapper .content .cards-conteiner h2 {
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #222222;
}
.wrapper .content .cards-conteiner p {
  text-align: center;
  padding-top: 6px;
  padding-bottom: 48px;
}
.wrapper .content .cards-conteiner .category__flex {
  display: flex;
  flex-wrap: wrap;
  max-width: 1140px;
  gap: 30px;
  margin: 0 auto;
}
.wrapper .content .cards-conteiner .category__flex .category__card {
  width: 360px;
  background: #f8f8f8;
  color: #5d5d5d;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.wrapper .content .cards-conteiner .category__flex .category__card h4 {
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  text-align: left;
  padding-left: 18px;
  padding-top: 25px;
  padding-bottom: 13px;
  color: #000000;
  cursor: pointer;
}
.wrapper .content .cards-conteiner .category__flex .category__card p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  max-width: 315px;
  padding-left: 18px;
}
.wrapper .content .cards-conteiner .category__flex .category__card h6 {
  font-family: Lato;
  padding-left: 18px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-top: 18px;
  margin-bottom: 20px;
  color: #f16d7f;
}
.wrapper .content .cards-conteiner .category__flex .category__card .category__card_container {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.wrapper .content .cards-conteiner .category__flex .category__card .category__card_container .category__card_itemBg {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
}
.wrapper .content .cards-conteiner .category__flex .category__card .category__card_container .category__card_itemBg .addCard {
  display: none;
  justify-content: space-between;
  align-items: center;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  padding: 14px 14px 9px 14px;
  color: #f26376;
  background: transparent;
  border: 1px solid #FF6A6A;
}
.wrapper .content .cards-conteiner .category__flex .category__card .category__card_container .category__card_itemBg .addCard:hover {
  color: #ffffff;
  border: 1px solid #FFFFFF;
}
.wrapper .content .cards-conteiner .category__flex .category__card .category__card_container .category__card_itemBg .addCard:hover .card {
  fill: #ffffff;
}
.wrapper .content .cards-conteiner .category__flex .category__card .category__card_container .category__card_itemBg .addCard:active {
  color: #ffffff;
  background: #cf4a5c;
}
.wrapper .content .cards-conteiner .category__flex .category__card .category__card_container .category__card_itemBg .addCard span {
  margin-left: 11px;
}
.wrapper .content .cards-conteiner .category__flex .category__card .category__card_container:hover .category__card_itemBg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(33, 22, 22, 0.7);
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  z-index: 200;
}
.wrapper .content .cards-conteiner .category__flex .category__card .category__card_container:hover .addCard {
  box-sizing: border-box;
  display: flex;
}
.wrapper .content .cards-conteiner .browser {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  padding: 15px 39px;
  color: #f26376;
  background: transparent;
  margin-top: 48px;
  margin-bottom: 93px;
  border: solid #f26376;
  cursor: pointer;
}
.wrapper .content .cards-conteiner .browser:hover {
  color: #ffffff;
  background: #f16d7f;
}
.wrapper .footer {
  width: 100%;
  padding-top: 103px;
  background: #222224;
}
.wrapper .footer .footerTop .category__flex {
  display: flex;
  flex-wrap: wrap;
  max-width: 1140px;
  gap: 30px;
  margin: 0 auto;
}
.wrapper .footer .footerTop .category__flex .category__item-footer {
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper .footer .footerTop .category__flex .category__item-footer h4 {
  padding-top: 28px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #fbfbfb;
  text-align: center;
}
.wrapper .footer .footerTop .category__flex .category__item-footer p {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  padding-top: 16px;
  color: #fbfbfb;
  letter-spacing: 1px;
  opacity: 0.5;
}
.wrapper .footer .footerCenter {
  margin-top: 104px;
  padding-top: 97px;
  padding-bottom: 126px;
  background-image: url("assets/image/photo_subscribe.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.wrapper .footer .footerCenter .category__flex-center {
  display: flex;
  flex-wrap: wrap;
  max-width: 1140px;
  gap: 30px;
  margin: 0 auto;
  justify-content: space-between;
}
.wrapper .footer .footerCenter .category__flex-center .category__item-left {
  flex-grow: 1;
  justify-content: center;
  max-width: 360px;
  font-family: "cursive";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #222224;
}
.wrapper .footer .footerCenter .category__flex-center .category__item-left p {
  margin-top: 30px;
}
.wrapper .footer .footerCenter .category__flex-center .category__item-right {
  flex-grow: 1;
  max-width: 557px;
  justify-content: center;
}
.wrapper .footer .footerCenter .category__flex-center .category__item-right h4 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 167.2%;
  text-align: center;
  color: #222224;
}
.wrapper .footer .footerCenter .category__flex-center .category__item-right p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 167.2%;
  text-align: center;
  color: #222224;
}
.wrapper .footer .footerCenter .category__flex-center .category__item-right .subscribe {
  max-width: 356px;
  height: 49px;
  margin: 32px auto;
  padding-left: 22px;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  display: flex;
  justify-content: center;
  background: #e1e1e1;
}
.wrapper .footer .footerCenter .category__flex-center .category__item-right .subscribe .email {
  flex-grow: 2;
  border: none;
  background: transparent;
  outline: transparent;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #222224;
  opacity: 0.67;
}
.wrapper .footer .footerCenter .category__flex-center .category__item-right .subscribe .btn-subscribe {
  flex-grow: 1;
  border: none;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  cursor: pointer;
  background: #f16d7f;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
}
.wrapper .footer .footerCenter .category__flex-center .category__item-right .subscribe .btn-subscribe:hover {
  opacity: 0.7;
}
.wrapper .footer .footerBottom {
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
}
.wrapper .footer .footerBottom .footerBottom__left {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #fbfbfb;
}
.wrapper .footer .footerBottom .footerBottom__right {
  display: flex;
}
.wrapper .footer .footerBottom .footerBottom__right .header__item-social {
  width: 32px;
  height: 32px;
}
.wrapper .footer .footerBottom .footerBottom__right .header__item-social a {
  margin-right: 3px;
  background-color: white;
  color: black;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  width: 100%;
  height: 100%;
}
.wrapper .footer .footerBottom .footerBottom__right .header__item-social a:hover {
  background: #F16D7F;
  color: white;
}
.wrapper .footer .footerBottom .footerBottom__right .header__item-social:not(:last-child) {
  margin-right: 7px;
}

.wrapper {
  outline: none;
}
@media (max-width: 1024px) {
  .wrapper .header .headerContent {
    padding-left: 32px;
    padding-right: 32px;
  }
  .wrapper .header .headerContent .header__left .search {
    margin-left: 41px;
    cursor: pointer;
  }
  .wrapper .header .headerContent .header__right .header__item:first-child {
    margin-right: 25px;
  }
  .wrapper .header .headerContent .header__right .header__item .menu .menu-list {
    margin-left: 0px;
    width: 200px;
    right: -170px;
  }
}
@media (max-width: 768px) {
  .wrapper .header .headerContent {
    padding-left: 32px;
    padding-right: 32px;
  }
  .wrapper .header .headerContent .header__left .search {
    margin-left: 41px;
    cursor: pointer;
  }
  .wrapper .header .headerContent .header__right .header__item:first-child {
    margin-right: 25px;
  }
  .wrapper .header .headerContent .header__right .header__item .menu .menu-list {
    margin-left: 0px;
    right: -180px;
  }
  .wrapper .header .headerContent .header__right .header__item .menu._active .menu-list {
    overflow-y: scroll;
  }
}
@media (max-width: 425px) {
  .wrapper .header .headerContent {
    padding-left: 16px;
    padding-right: 16px;
  }
  .wrapper .header .headerContent .header__left .search {
    margin-left: 41px;
    cursor: pointer;
  }
  .wrapper .header .headerContent .header__right {
    display: block;
  }
  .wrapper .header .headerContent .header__right .header__item:first-child {
    margin-right: 16px;
  }
  .wrapper .header .headerContent .header__right .header__item:not(:first-child) img {
    display: none;
  }
  .wrapper .header .headerContent .header__right .header__item .menu .menu-list {
    margin-left: -122px;
    right: -30px;
  }
  .wrapper .header .headerContent .header__right .header__item .menu._active .menu-list {
    margin-top: 35px;
  }
}
@media (max-width: 1024px) {
  .wrapper .content .category {
    margin-top: 65px;
  }
  .wrapper .content .category__flex {
    display: flex;
    flex-wrap: wrap;
    max-width: 1140px;
    gap: 30px;
    margin: 0 auto;
    justify-content: center;
  }
  .wrapper .content .category__flex .category__item:not(:last-child) {
    max-width: 233px;
    height: 167px;
  }
}
@media (max-width: 768px) {
  .wrapper .content .brand {
    height: 390px;
    background: #f1e4e6;
    overflow: hidden;
  }
  .wrapper .content .brand__flex {
    display: flex;
    justify-content: flex-end;
    max-width: 1140px;
    margin: 0 auto;
    height: 100%;
    align-items: center;
    background: url("assets/image/manBg-768.png") no-repeat 8px;
  }
  .wrapper .content .brand__flex .brand__text {
    max-width: 495px;
    padding-left: 20px;
    padding-top: 0px;
    padding-right: 14px;
    border-left: solid #f16d7f 12px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #222222;
  }
  .wrapper .content .brand__flex .brand__text h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: 900;
    font-size: 44px;
    line-height: 53px;
    color: #222222;
  }
  .wrapper .content .brand__flex .brand__text span {
    color: #f16d7f;
  }
  .wrapper .content .category {
    margin-top: 0px;
  }
  .wrapper .content .category__flex {
    display: flex;
    flex-wrap: wrap;
    max-width: 1140px;
    gap: 30px;
    margin: 0 auto;
  }
  .wrapper .content .category__flex .category__item:not(:last-child) {
    max-width: 233px;
  }
  .wrapper .content .cards-conteiner {
    margin-top: 155px;
  }
  .wrapper .content .cards-conteiner .browser {
    margin-top: 32px;
    margin-bottom: 64px;
  }
}
@media (max-width: 620px) {
  .wrapper .content .brand {
    height: 390px;
    background: #f1e4e6;
    overflow: hidden;
  }
  .wrapper .content .brand__flex {
    display: flex;
    justify-content: flex-end;
    max-width: 1140px;
    margin: 0 auto;
    height: 100%;
    align-items: center;
    background: url("assets/image/manBg-768.png") no-repeat -100px;
  }
}
@media (max-width: 425px) {
  .wrapper .content {
    flex-grow: 1;
    width: 100%;
  }
  .wrapper .content .brand {
    height: 390px;
    background: #f1e4e6;
    overflow: hidden;
  }
  .wrapper .content .brand__flex {
    display: flex;
    justify-content: flex-end;
    max-width: 1140px;
    margin: 0 auto;
    height: 100%;
    align-items: center;
    background: none;
  }
  .wrapper .content .brand__flex .brand__text {
    max-width: 495px;
    padding-left: 20px;
    padding-top: 0px;
    padding-right: 14px;
    border-left: solid #f16d7f 12px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #222222;
  }
  .wrapper .content .brand__flex .brand__text h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: 900;
    font-size: 44px;
    line-height: 53px;
    color: #222222;
  }
  .wrapper .content .brand__flex .brand__text span {
    color: #f16d7f;
  }
  .wrapper .content .category {
    margin-top: 65px;
  }
  .wrapper .content .category__flex {
    display: flex;
    flex-wrap: wrap;
    max-width: 1140px;
    gap: 30px;
    margin: 0 auto;
  }
  .wrapper .content .category__flex .category__item:not(:last-child) {
    max-width: 360px;
    height: 260px;
  }
  .wrapper .content .category__flex .category__item {
    width: 100%;
    height: 180px;
    background: url("assets/image/accesBg.png") no-repeat center;
    background-size: cover;
    position: relative;
  }
  .wrapper .content .category__flex .category__item .category__itemBg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(33, 22, 22, 0.7);
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
    z-index: 2;
  }
  .wrapper .content .category__flex .category__item .category__itemBg h2 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #f16d7f;
  }
  .wrapper .content .category__flex .category__item img {
    position: absolute;
    z-index: 1;
  }
  .wrapper .content .cards-conteiner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #9f9f9f;
  }
  .wrapper .content .cards-conteiner h2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #222222;
  }
  .wrapper .content .cards-conteiner p {
    text-align: center;
    padding-top: 6px;
    padding-bottom: 48px;
  }
  .wrapper .content .cards-conteiner .category__flex {
    display: flex;
    flex-wrap: wrap;
    max-width: 1140px;
    gap: 30px;
    margin: 0 auto;
  }
  .wrapper .content .cards-conteiner .category__flex .category__card {
    width: 360px;
    background: #f8f8f8;
    color: #5d5d5d;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  .wrapper .content .cards-conteiner .category__flex .category__card h4 {
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 13px;
    color: #000000;
  }
  .wrapper .content .cards-conteiner .category__flex .category__card p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    max-width: 315px;
    padding-left: 18px;
  }
  .wrapper .content .cards-conteiner .category__flex .category__card h6 {
    font-family: Lato;
    padding-left: 18px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin-top: 18px;
    margin-bottom: 20px;
    color: #f16d7f;
  }
  .wrapper .content .cards-conteiner .category__flex .category__card .category__card_container {
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .wrapper .content .cards-conteiner .category__flex .category__card .category__card_container .category__card_itemBg {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.7s;
  }
  .wrapper .content .cards-conteiner .category__flex .category__card .category__card_container .category__card_itemBg .addCard {
    display: none;
    justify-content: space-between;
    align-items: center;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding: 14px 14px 9px 14px;
    color: #f26376;
    background: transparent;
    border: 1px solid #FF6A6A;
  }
  .wrapper .content .cards-conteiner .category__flex .category__card .category__card_container .category__card_itemBg .addCard:hover {
    color: #ffffff;
    border: 1px solid #FFFFFF;
  }
  .wrapper .content .cards-conteiner .category__flex .category__card .category__card_container .category__card_itemBg .addCard:hover .card {
    fill: #ffffff;
  }
  .wrapper .content .cards-conteiner .category__flex .category__card .category__card_container .category__card_itemBg .addCard:active {
    color: #ffffff;
    background: #cf4a5c;
  }
  .wrapper .content .cards-conteiner .category__flex .category__card .category__card_container .category__card_itemBg .addCard span {
    margin-left: 11px;
  }
  .wrapper .content .cards-conteiner .category__flex .category__card .category__card_container:hover .category__card_itemBg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(33, 22, 22, 0.7);
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
    z-index: 200;
  }
  .wrapper .content .cards-conteiner .category__flex .category__card .category__card_container:hover .addCard {
    box-sizing: border-box;
    display: flex;
  }
  .wrapper .content .cards-conteiner .browser {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding: 15px 39px;
    color: #f26376;
    background: transparent;
    margin-top: 32px;
    margin-bottom: 64px;
    border: solid #f26376;
  }
  .wrapper .content .cards-conteiner .browser:hover {
    color: #ffffff;
    background: #f16d7f;
  }
}
@media (max-width: 1024px) {
  .wrapper .footer {
    width: 100%;
    padding-top: 103px;
    background: #222224;
  }
  .wrapper .footer .footerTop .category__flex {
    display: flex;
    flex-wrap: wrap;
    max-width: 1140px;
    gap: 30px;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
  }
  .wrapper .footer .footerTop .category__flex .category__item-footer {
    max-width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrapper .footer .footerTop .category__flex .category__item-footer h4 {
    padding-top: 28px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #fbfbfb;
    text-align: center;
  }
  .wrapper .footer .footerTop .category__flex .category__item-footer p {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    padding-top: 16px;
    color: #fbfbfb;
    letter-spacing: 1px;
    opacity: 0.5;
  }
  .wrapper .footer .footerCenter {
    margin-top: 104px;
    padding-top: 64px;
    padding-bottom: 126px;
    background-image: url("assets/image/photo_subscribe.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .wrapper .footer .footerCenter .category__flex-center {
    display: flex;
    flex-wrap: wrap;
    max-width: 1140px;
    gap: 30px;
    margin: 0 auto;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  .wrapper .footer .footerCenter .category__flex-center .category__item-left {
    flex-grow: 1;
    justify-content: center;
    max-width: 360px;
    font-family: "cursive";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #222224;
  }
  .wrapper .footer .footerCenter .category__flex-center .category__item-left p {
    margin-top: 30px;
  }
  .wrapper .footer .footerCenter .category__flex-center .category__item-right {
    flex-grow: 1;
    max-width: 557px;
    justify-content: center;
  }
  .wrapper .footer .footerCenter .category__flex-center .category__item-right h4 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 167.2%;
    text-align: center;
    color: #222224;
  }
  .wrapper .footer .footerCenter .category__flex-center .category__item-right p {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 167.2%;
    text-align: center;
    color: #222224;
  }
  .wrapper .footer .footerCenter .category__flex-center .category__item-right .subscribe {
    max-width: 356px;
    height: 49px;
    margin: 32px auto;
    padding-left: 22px;
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    display: flex;
    justify-content: center;
    background: #e1e1e1;
  }
  .wrapper .footer .footerCenter .category__flex-center .category__item-right .subscribe .email {
    flex-grow: 2;
    border: none;
    background: transparent;
    outline: transparent;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #222224;
    opacity: 0.67;
  }
  .wrapper .footer .footerCenter .category__flex-center .category__item-right .subscribe .btn-subscribe {
    flex-grow: 1;
    border: none;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    cursor: pointer;
    background: #f16d7f;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
  }
  .wrapper .footer .footerBottom {
    max-width: 1140px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 32px;
    padding-right: 32px;
  }
  .wrapper .footer .footerBottom .footerBottom__left {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #fbfbfb;
  }
  .wrapper .footer .footerBottom .footerBottom__right {
    display: flex;
  }
  .wrapper .footer .footerBottom .footerBottom__right .header__item-social {
    width: 32px;
    height: 32px;
  }
  .wrapper .footer .footerBottom .footerBottom__right .header__item-social a {
    margin-right: 3px;
    background-color: white;
    color: black;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    width: 100%;
    height: 100%;
  }
  .wrapper .footer .footerBottom .footerBottom__right .header__item-social a:hover {
    background: #F16D7F;
    color: white;
  }
  .wrapper .footer .footerBottom .footerBottom__right .header__item-social:not(:last-child) {
    margin-right: 7px;
  }
}
@media (max-width: 425px) {
  .wrapper .footer .footerCenter {
    padding-bottom: 80px;
  }
  .wrapper .footer .footerBottom {
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }
  .wrapper .footer .footerBottom .footerBottom__left {
    order: 2;
    padding-bottom: 9px;
  }
  .wrapper .footer .footerBottom .footerBottom__right {
    order: 1;
    padding-bottom: 40px;
  }
}/*# sourceMappingURL=style.css.map */

</style>

