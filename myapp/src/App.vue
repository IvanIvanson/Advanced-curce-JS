<template>

  <div id="app">
     <HelloWorld></HelloWorld>
     <!-- <BodyMain></BodyMain> -->
  <router-view></router-view>

     <FooterMain></FooterMain>
   
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
// import BodyMain from './components/BodyMain.vue';
import FooterMain from './components/FooterMain.vue';

export default {
  components: { 
    HelloWorld,
    // BodyMain,
    FooterMain
  },
  
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&family=Lato:wght@100;300;400;700;900&family=Mulish:wght@200&family=Playfair+Display&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300&display=swap");


  @mixin reset() {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 


     
* {
    @include reset;
    } 
 

#id {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
   
}
</style>
