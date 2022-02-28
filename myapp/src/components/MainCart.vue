<template>
<div class="wrapper">
 <main class="main">
<!-- Breadcrumb -->
<nav class="breadcrumb">
    <div class="breadcrumb__content">
                    <div class="breadcrumb__left">
                       <h4>SHOPPING CART</h4>
                    </div>
                   
                  
    </div>
</nav>
<!-- end Breadcrumb -->

<!-- main__cards-conteiner -->
<div class="cards-conteiner">
<div class="cards-conteiner__left">
    <div class="cards-conteiner__left_item1">

        <picture>
            <source media="(min-width:320px) and (max-width:425px)"
            srcset="../assets/image/mangoPeople-375.jpg">
            <img src="../assets/image/mangoPeople1.png" alt="mangoPeople1"> 
        </picture>

       
        <div class="textBlock">
            <h4>MANGO  PEOPLE  T-SHIRT</h4>
         
            <ul>
                <li>Price: <span>$300</span> </li>
                <li>Color: Red</li>
                <li>Size: Xl	</li>
                <li>Quantity:<input type="number" ></li>
            </ul>

        </div>
       
        <img class="close" id="close" src="../assets/image/mangoClose.svg" alt="close">
    </div>
    <div class="cards-conteiner__left_item1">

        <picture>
            <source media="(min-width:320px) and (max-width:425px)"
            srcset="../assets/image/mangoPeople2-375.jpg">
            <img src="../assets/image/mangoPeople2.png" alt="mangoPeople2"> 
        </picture>


       
        <div class="textBlock">
            <h4>MANGO  PEOPLE  T-SHIRT</h4>
         
            <ul>
                <li>Price: <span>$300</span> </li>
                <li>Color: Red</li>
                <li>Size: Xl	</li>
                <li>Quantity:<input type="number"></li>
            </ul>

        </div>
        <img class="close" id="close2" src="../assets/image/mangoClose.svg" alt="close">

    </div>
    <div class="cards-conteiner__left_btnBlock">
<button class="cards__btn" id="clear">CLEAR SHOPPING CART</button>
<button class="cards__btn" id="continue">CONTINUE SHOPPING</button>

    </div>
</div>
<div class="cards-conteiner__right">

   <div class="cards-conteiner__right_form">
    <form action="#" class="form">
        <fieldset>
          <legend>SHIPPING ADRESS</legend>
          <input type="text" placeholder="Bangladesh">
          <input type="text" placeholder="State">
          <input type="text" placeholder="Postcode / Zip">
          <button class="submit">GET A QUOTE</button>
        </fieldset>
        </form>

   </div>
   <div class="cards-conteiner__right_grandTotal">
<h4>SUB TOTAL  <span>$900</span></h4>
<h3>GRAND TOTAL <span>$900</span>   </h3>
<hr>
<button>PROCEED TO CHECKOUT</button>
   </div>
</div>
</div>

<!--  -->


    <!--  -->


 



</main>
</div>
</template>

<script>
export default {
  name: 'MainCart',
  props: {
    // msg: String
  }
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&family=Lato:wght@100;300;400;700;900&family=Mulish:wght@200&family=Playfair+Display&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300&display=swap");

$max-width:1140px;  
$gap: 30px;
$main-font: 14px;
$widthContent: 1144px;
$pink: pink;

@mixin reset() {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 

@mixin flex() {
        display: flex;
        flex-wrap: wrap;
        max-width: $max-width;
        gap: $gap;
        margin: 0 auto;

}
     
* {
    @include reset;
    }


   

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
.main {
    flex-grow: 1;
    width: 100%;
    .breadcrumb {
        width: 100%;
        background: #f8f3f4;
        .breadcrumb__content {
            max-width: $widthContent;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            padding-top: 59px;
            padding-bottom: 60px;
            .breadcrumb__left h4 {
                font-family: "Lato";
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 29px;
                color: $pink;
            }
        }
    }
    // cards-conteiner
.cards-conteiner {
    max-width: $widthContent;
    margin: 96px auto 128px auto;
    // border: solid red 2px;
    display: flex;
//    flex-wrap: wrap;
    .cards-conteiner__left {
display: flex;
max-width: 652px;
// flex-grow: 1;
flex-direction: column;

gap:40px;
.cards-conteiner__left_item1 {
display: flex;
align-items: flex-start;
gap: 31px;
// border: solid rgb(4, 0, 255) 2px;
box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13);
transition: 2s;

img{
 align-items: flex-start;
//  padding-top: 28px;
 padding-right: 22px;
 transition: 4s;
}
img:hover{
    transform: scale(1.1);
}
.textBlock {
    padding-top: 22px;
    // border: solid rgb(22, 211, 47) 2px;
    h4 {
        width: 200px;
        font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 29px;

color: #222222;
    }
    
    ul{
        padding-top: 42px;
       list-style: none;
      


li{
    padding-top: 6px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    color: #575757;
}
li>span{
    color: #EF5B70;
}
li>input{
    width: 44px;
    margin-left: 24px;
    text-align: right;
}
    }

}
.close{
    padding-top: 28px;
    cursor: pointer;
}
}
.cards-conteiner__left_item1:hover {
    box-shadow: 0 0 10px #f1f1f1;
transform: scale(1.1);
}
.cards-conteiner__left_btnBlock{
    display: flex;
    justify-content: space-between;
    .cards__btn{
        padding: 17px 41px 16px 39px;
        font-family: Lato;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 17px;
border: 1px solid #A4A4A4;
color: #000000;
cursor: pointer;
background-color: transparent;
margin-top: 73px;
    }
}
    }
    .cards-conteiner__right{
        // border: 1px solid #db10a9;
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 30px;
       box-sizing: border-box;
.cards-conteiner__right_form{
    // flex-grow: 1;
    height: 282px;
// border: 1px solid #2e10db;
    .form{
display: flex;
flex-direction: column;
width: 360px;

fieldset{
    border: none;
       legend{
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        
        color: #222222;
       } 
}
input{
    display: block;
    width: 100%;
    margin-top: 20px;
    border: 1px solid #A4A4A4;
    padding-left: 17px;
    padding-top: 13px;
    padding-bottom: 16px;
    color: #222222;
}

::-webkit-input-placeholder{
    font-family: Lato;
font-style: normal;
font-weight: 300;
font-size: 13px;
line-height: 16px;
color: #B1B1B1;

}

.submit{
    font-family: Lato;
font-style: normal;
font-weight: 300;
font-size: 11px;
line-height: 13px;
padding: 10px 15px 12px 15px;
color: #4A4A4A;
background-color: transparent;
border: 1px solid #A4A4A4;
margin-top: 23px;
cursor: pointer;
}
    }
}
    }
    .cards-conteiner__right_grandTotal{
        width: 360px;
        background: #F5F3F3;
        margin-bottom: 220px;
        display: flex;
        flex-direction: column;
       justify-content: space-between;
        h4{
           align-self: flex-end;
            margin-top: 39px;
            margin-right: 34px;
            font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 11px;
line-height: 13px;

color: #4A4A4A;
span{
    padding-left: 40px;
}
        }
        h3{
            align-self: flex-end;
            font-family: Lato;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
margin-top: 12px;
margin-right: 29px;
color: #222222;
span{
    font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
padding-left: 40px;
color: #F16D7F;
}
        }
        hr{
            width: 80%;
            margin: 0 auto;
            margin-top: 21px;
            border: solid #E2E2E2 0.5px;

          
        }
        button{
            padding: 15px 41px;
            background: #F16D7F;
            font-family: Lato;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
border: none;
color: #FFFFFF;
cursor: pointer;
max-width: 273px;
align-self: center;
margin-top: 17px;
margin-bottom: 42px;
        }
    }
}
 // end cards-conteiner

}

}




</style>