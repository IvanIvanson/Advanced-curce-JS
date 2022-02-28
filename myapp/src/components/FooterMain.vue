<template>

  <footer class="footer">
<div class="footerTop">
    <div class="category__flex">

        <div class="category__item-footer">
                <img src="../assets/image/icon-footer1.png" alt="icon1">
                <h4>Free Delivery</h4>
                <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
            <div class="category__item-footer">
                <img src="../assets/image/icon-footer2.png" alt="icon2">
                <h4>Sales & discounts</h4>
                <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
            <div class="category__item-footer">
                <img src="../assets/image/icon-footer3.png" alt="icon3">
                <h4>Quality assurance</h4>
                <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>

            

    </div>
</div>

<div class="footerCenter">
    
        <div class="category__flex-center">
        <div class="category__item-left">
                <img src="../assets/image/Intersect.png" alt="interest">
               
                <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a <i>pulvinar purus condimentum</i>“</p>
            </div>
            <div class="category__item-right">
               
                <h4>SUBSCRIBE</h4>
                <p>FOR OUR NEWLETTER AND PROMOTION</p>
                <form class="subscribe">
                  <input class="email" type="email" name="mail" id="mail" placeholder="Enter Your Email">  
                  <input type="submit" class="btn-subscribe" value="Subscribe">
                </form>
                
            </div>
           </div>
            

    
</div>

<div class="footerBottom">
    <div class="footerBottom__left">
      <p>© 2021  Brand  All Rights Reserved.</p>
    </div>
   
    <div class="footerBottom__right">
<div class="header__item-social">
    <a href=""> <i class="fab fa-facebook-f"></i></a>
   
</div>
<div class="header__item-social">
    <a href=""> <i class="fab fa-brands fa-instagram"></i></a>
   
</div>
<div class="header__item-social">
    <a href=""> <i class="fab fa-pinterest-p"></i></a>
   
</div>
<div class="header__item-social">
    <a href=""> <i class="fab fa-twitter"></i></a>
   
</div>

       
    </div>
</div>
       
    </footer>

</template>
    
   <script>


   export default {
        name: 'FooterMain',
   }
   </script>

    <style lang="scss" scoped>
     $max-width:1140px;  
     $gap: 30px;
     $main-font: 14px;
    @mixin flex() {
        display: flex;
        flex-wrap: wrap;
        max-width: $max-width;
        gap: $gap;
        margin: 0 auto;

}
    .footer {
    width: 100%;
    padding-top: 103px;
    background: #222224;
    .footerTop {
         .category__flex {
            @include flex;
.category__item-footer {
    max-width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
        padding-top: 28px;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        color: #fbfbfb;
        text-align: center;
    }
     p {
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: $main-font;
        line-height: 17px;
        text-align: center;
        padding-top: 16px;
        color: #fbfbfb;
        letter-spacing: 1px;
        opacity: 0.5;
    }

}
    }
    }
   .footerCenter {
    margin-top: 104px;
    padding-top: 97px;
    padding-bottom: 126px;
    background-image: url("../assets/image/photo_subscribe.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .category__flex-center {
        @include flex;
        justify-content: space-between;
       

        .category__item-left {
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
             p {
                margin-top: 30px;
            }
        }

        .category__item-right {
            flex-grow: 1;
            max-width: 557px;
            justify-content: center;

            h4 {
                font-family: Lato;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 167.2%;
            
                text-align: center;
            
                color: #222224;
            }
            p {
                font-family: Lato;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 167.2%;
            
                text-align: center;
            
                color: #222224;
            }

            .subscribe {
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
                .email {
                    flex-grow: 2;
                    border: none;
                    background: transparent;
                    outline: transparent;
                    font-family: Lato;
                    font-style: normal;
                    font-weight: normal;
                    font-size: $main-font;
                    line-height: 17px;
                    display: flex;
                    align-items: center;
                
                    color: #222224;
                
                    opacity: 0.67;
                }
                .btn-subscribe {
                    flex-grow: 1;
                    border: none;
                    border-top-right-radius: 18px;
                    border-bottom-right-radius: 18px;
                    cursor: pointer;
                    background: #f16d7f;
                    font-family: Lato;
                    font-style: normal;
                    font-weight: normal;
                    font-size: $main-font;
                    line-height: 17px;
                    text-align: center;
                    color: #ffffff;
                    &:hover{
                        opacity: 0.7;
                    }
                }
                
            }
        }
    }

}

.footerBottom {
    max-width: $max-width;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;

    .footerBottom__left {
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #fbfbfb;
    }
.footerBottom__right{
    display: flex;
    .header__item-social {
        width: 32px;
        height: 32px;
        a{
            margin-right: 3px;
           
            background-color: white;
            color:black;
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: black;
            width: 100%;
            height: 100%;
            
        }
      a:hover{
            background: #F16D7F;
            color: white;
        }
    }

    .header__item-social:not(:last-child) {
        margin-right: 7px;
    }

}

}
}
    </style>