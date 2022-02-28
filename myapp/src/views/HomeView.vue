<template>
 <main class="content">

           <div class="brand">
               <div class="brand__flex">
               <div class="brand__text">
                   <h1>THE BRAND</h1>
                OF LUXERIOUS <span>FASHION</span> 
            </div>

        </div>
           </div> 

<div class="category">
    <div class="category__flex">
        <div class="category__item">
            <div class="category__itemBg">
                30% OFF
                <h2>FOR WOMEN</h2>
            </div>
         <!-- <img src="image/for_women.png" alt="women" > -->
         <picture>
             <source media="(min-width:427px) and (max-width:1024px)"
             srcset="../assets/image/for-women-768.jpg">
             <img src="../assets/image/for_women.png" alt="women" >
         </picture>
        </div>

        <div class="category__item">
            <div class="category__itemBg">
                HOT DEAL
                <h2>FOR MEN</h2>
            </div>
            <picture>
                <source media="(min-width:427px) and (max-width:1024px)"
                srcset="../assets/image/for-men-768.png">
            <img src="../assets/image/for_men.png" alt="man">
        </picture>
        </div>
        <div class="category__item">
            <div class="category__itemBg">
                NEW ARRIVALS
                <h2>FOR KIDS</h2>
            </div>
            <picture>
                <source media="(min-width:427px) and (max-width:1024px)"
                srcset="../assets/image/for-kids-768.png">
            <img src="../assets/image/for_kids.png" alt="kids">
        </picture>
            
        </div>
        <div class="category__item">
            <div class="category__itemBg">
                LUXIROUS & TRENDY
                <h2>ACCESORIES</h2>
            </div>
        </div>
    </div>
</div>

<div class="cards-conteiner">
    <h2>Fetured Items</h2>
   <p>Shop for items based on what we featured in this week</p> 

    <div class="category__flex">

        <div class="category__card">

          <div class="category__card_container"> 
            <div class="category__card_itemBg">

                <!-- buttonAdd -->
        

                <button  class="addCard" id="btnAddCard1">
                    <svg width="27" height="25" xmlns="http://www.w3.org/2000/svg">
                        <path class="card" d="M5.49847 22.185C5.50635 21.752 5.64091 21.3309 5.88519 20.9748C6.12947 20.6186 6.47261 20.3431 6.87158 20.1828C7.27055 20.0226 7.7076 19.9848 8.12781 20.0741C8.54802 20.1635 8.93269 20.376 9.23358 20.685C9.53447 20.994 9.73817 21.3857 9.81909 21.811C9.90002 22.2363 9.85453 22.6763 9.68842 23.0756C9.52231 23.475 9.24296 23.8161 8.88538 24.0559C8.52779 24.2957 8.10791 24.4237 7.67847 24.4237C7.38955 24.4211 7.10399 24.3611 6.83807 24.2472C6.57216 24.1333 6.3311 23.9676 6.12866 23.7597C5.92623 23.5518 5.76639 23.3057 5.65826 23.0355C5.55013 22.7653 5.49584 22.4763 5.49847 22.185ZM21.3045 24.4237C20.8711 24.4303 20.4453 24.3087 20.0797 24.074C19.7141 23.8393 19.4247 23.5017 19.2471 23.103C19.0696 22.7042 19.0117 22.2618 19.0806 21.8303C19.1496 21.3988 19.3423 20.9971 19.6351 20.6748C19.9278 20.3524 20.3077 20.1236 20.728 20.0165C21.1482 19.9095 21.5903 19.929 21.9997 20.0724C22.4091 20.2159 22.7679 20.4771 23.0317 20.8238C23.2956 21.1706 23.453 21.5877 23.4845 22.0236C23.5269 22.6155 23.3369 23.2004 22.9555 23.6523C22.7706 23.8745 22.5436 24.0574 22.2877 24.1901C22.0319 24.3227 21.7524 24.4025 21.4655 24.4247L21.3045 24.4237ZM8.59351 17.4855C8.38116 17.4851 8.17488 17.414 8.00671 17.2833C7.83855 17.1525 7.71792 16.9694 7.66351 16.7624L3.73651 2.19527H0.978516C0.719001 2.19527 0.470064 2.09128 0.28656 1.90622C0.103056 1.72116 0 1.47018 0 1.20847C0 0.946764 0.103056 0.695782 0.28656 0.510726C0.470064 0.325669 0.719001 0.22168 0.978516 0.22168H4.45752C4.66982 0.222254 4.876 0.293463 5.04413 0.424184C5.21226 0.554905 5.33295 0.737883 5.38751 0.944787L9.31451 15.5119H20.0185L23.5765 7.12665H11.7185C11.459 7.12665 11.2101 7.02266 11.0266 6.83761C10.8431 6.65255 10.74 6.40157 10.74 6.13986C10.74 5.87815 10.8431 5.62717 11.0266 5.44211C11.2101 5.25705 11.459 5.15306 11.7185 5.15306H25.0535C25.2131 5.15352 25.3701 5.19451 25.5099 5.27223C25.6497 5.34995 25.7679 5.46195 25.8535 5.59784C25.9413 5.73569 25.9945 5.89303 26.0084 6.05627C26.0224 6.21951 25.9966 6.38368 25.9335 6.53465L21.5425 16.8935C21.469 17.0684 21.3462 17.2177 21.1895 17.3229C21.0327 17.4281 20.8488 17.4846 20.6605 17.4855H8.59351Z" fill="#EF5B70"/>
                        </svg>
                    <span>Add to Cart</span> </button>

                <!-- end buttonAdd -->
            </div>
            <img src="../assets/image/card_men1.png" alt="card_men1">
            </div>
           <a href="catalog.html"><h4>ELLERY X M'O CAPSULE</h4></a>
           <p> Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
            <h6>$52.00</h6>
        
        </div>

        <div class="category__card">
            <div class="category__card_container"> 
                <div class="category__card_itemBg">
                    
                    <!-- buttonAdd -->
                    <button class="addCard" id="btnAddCard2">
                        <svg width="27" height="25" xmlns="http://www.w3.org/2000/svg">
                            <path class="card" d="M5.49847 22.185C5.50635 21.752 5.64091 21.3309 5.88519 20.9748C6.12947 20.6186 6.47261 20.3431 6.87158 20.1828C7.27055 20.0226 7.7076 19.9848 8.12781 20.0741C8.54802 20.1635 8.93269 20.376 9.23358 20.685C9.53447 20.994 9.73817 21.3857 9.81909 21.811C9.90002 22.2363 9.85453 22.6763 9.68842 23.0756C9.52231 23.475 9.24296 23.8161 8.88538 24.0559C8.52779 24.2957 8.10791 24.4237 7.67847 24.4237C7.38955 24.4211 7.10399 24.3611 6.83807 24.2472C6.57216 24.1333 6.3311 23.9676 6.12866 23.7597C5.92623 23.5518 5.76639 23.3057 5.65826 23.0355C5.55013 22.7653 5.49584 22.4763 5.49847 22.185ZM21.3045 24.4237C20.8711 24.4303 20.4453 24.3087 20.0797 24.074C19.7141 23.8393 19.4247 23.5017 19.2471 23.103C19.0696 22.7042 19.0117 22.2618 19.0806 21.8303C19.1496 21.3988 19.3423 20.9971 19.6351 20.6748C19.9278 20.3524 20.3077 20.1236 20.728 20.0165C21.1482 19.9095 21.5903 19.929 21.9997 20.0724C22.4091 20.2159 22.7679 20.4771 23.0317 20.8238C23.2956 21.1706 23.453 21.5877 23.4845 22.0236C23.5269 22.6155 23.3369 23.2004 22.9555 23.6523C22.7706 23.8745 22.5436 24.0574 22.2877 24.1901C22.0319 24.3227 21.7524 24.4025 21.4655 24.4247L21.3045 24.4237ZM8.59351 17.4855C8.38116 17.4851 8.17488 17.414 8.00671 17.2833C7.83855 17.1525 7.71792 16.9694 7.66351 16.7624L3.73651 2.19527H0.978516C0.719001 2.19527 0.470064 2.09128 0.28656 1.90622C0.103056 1.72116 0 1.47018 0 1.20847C0 0.946764 0.103056 0.695782 0.28656 0.510726C0.470064 0.325669 0.719001 0.22168 0.978516 0.22168H4.45752C4.66982 0.222254 4.876 0.293463 5.04413 0.424184C5.21226 0.554905 5.33295 0.737883 5.38751 0.944787L9.31451 15.5119H20.0185L23.5765 7.12665H11.7185C11.459 7.12665 11.2101 7.02266 11.0266 6.83761C10.8431 6.65255 10.74 6.40157 10.74 6.13986C10.74 5.87815 10.8431 5.62717 11.0266 5.44211C11.2101 5.25705 11.459 5.15306 11.7185 5.15306H25.0535C25.2131 5.15352 25.3701 5.19451 25.5099 5.27223C25.6497 5.34995 25.7679 5.46195 25.8535 5.59784C25.9413 5.73569 25.9945 5.89303 26.0084 6.05627C26.0224 6.21951 25.9966 6.38368 25.9335 6.53465L21.5425 16.8935C21.469 17.0684 21.3462 17.2177 21.1895 17.3229C21.0327 17.4281 20.8488 17.4846 20.6605 17.4855H8.59351Z" fill="#EF5B70"/>
                            </svg>
                        <span>Add to Cart</span> </button>
    
                    <!-- end buttonAdd -->
                </div>
            <img src="../assets/image/card_women11.png" alt="card_men1">
</div>
<a href="catalog.html"><h4>ELLERY X M'O CAPSULE</h4></a>
           <p> Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
            <h6>$52.00</h6>
        </div>
        <div class="category__card">
            <div class="category__card_container"> 
                <div class="category__card_itemBg">
                    
                    <!-- buttonAdd -->
                    <button class="addCard" id="btnAddCard3">
                        <svg width="27" height="25" xmlns="http://www.w3.org/2000/svg">
                            <path class="card" d="M5.49847 22.185C5.50635 21.752 5.64091 21.3309 5.88519 20.9748C6.12947 20.6186 6.47261 20.3431 6.87158 20.1828C7.27055 20.0226 7.7076 19.9848 8.12781 20.0741C8.54802 20.1635 8.93269 20.376 9.23358 20.685C9.53447 20.994 9.73817 21.3857 9.81909 21.811C9.90002 22.2363 9.85453 22.6763 9.68842 23.0756C9.52231 23.475 9.24296 23.8161 8.88538 24.0559C8.52779 24.2957 8.10791 24.4237 7.67847 24.4237C7.38955 24.4211 7.10399 24.3611 6.83807 24.2472C6.57216 24.1333 6.3311 23.9676 6.12866 23.7597C5.92623 23.5518 5.76639 23.3057 5.65826 23.0355C5.55013 22.7653 5.49584 22.4763 5.49847 22.185ZM21.3045 24.4237C20.8711 24.4303 20.4453 24.3087 20.0797 24.074C19.7141 23.8393 19.4247 23.5017 19.2471 23.103C19.0696 22.7042 19.0117 22.2618 19.0806 21.8303C19.1496 21.3988 19.3423 20.9971 19.6351 20.6748C19.9278 20.3524 20.3077 20.1236 20.728 20.0165C21.1482 19.9095 21.5903 19.929 21.9997 20.0724C22.4091 20.2159 22.7679 20.4771 23.0317 20.8238C23.2956 21.1706 23.453 21.5877 23.4845 22.0236C23.5269 22.6155 23.3369 23.2004 22.9555 23.6523C22.7706 23.8745 22.5436 24.0574 22.2877 24.1901C22.0319 24.3227 21.7524 24.4025 21.4655 24.4247L21.3045 24.4237ZM8.59351 17.4855C8.38116 17.4851 8.17488 17.414 8.00671 17.2833C7.83855 17.1525 7.71792 16.9694 7.66351 16.7624L3.73651 2.19527H0.978516C0.719001 2.19527 0.470064 2.09128 0.28656 1.90622C0.103056 1.72116 0 1.47018 0 1.20847C0 0.946764 0.103056 0.695782 0.28656 0.510726C0.470064 0.325669 0.719001 0.22168 0.978516 0.22168H4.45752C4.66982 0.222254 4.876 0.293463 5.04413 0.424184C5.21226 0.554905 5.33295 0.737883 5.38751 0.944787L9.31451 15.5119H20.0185L23.5765 7.12665H11.7185C11.459 7.12665 11.2101 7.02266 11.0266 6.83761C10.8431 6.65255 10.74 6.40157 10.74 6.13986C10.74 5.87815 10.8431 5.62717 11.0266 5.44211C11.2101 5.25705 11.459 5.15306 11.7185 5.15306H25.0535C25.2131 5.15352 25.3701 5.19451 25.5099 5.27223C25.6497 5.34995 25.7679 5.46195 25.8535 5.59784C25.9413 5.73569 25.9945 5.89303 26.0084 6.05627C26.0224 6.21951 25.9966 6.38368 25.9335 6.53465L21.5425 16.8935C21.469 17.0684 21.3462 17.2177 21.1895 17.3229C21.0327 17.4281 20.8488 17.4846 20.6605 17.4855H8.59351Z" fill="#EF5B70"/>
                            </svg>
                        <span>Add to Cart</span> </button>
    
                    <!-- end buttonAdd -->
                </div>
            <img src="../assets/image/card_men2.png" alt="card_men2">
</div>
<a href="catalog.html"><h4>ELLERY X M'O CAPSULE</h4></a>
           <p> Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
            <h6>$52.00</h6>
        </div>
        <div class="category__card">
            <div class="category__card_container"> 
                <div class="category__card_itemBg">
                    
                    <!-- buttonAdd -->
                    <button class="addCard" id="btnAddCard4">
                        <svg width="27" height="25" xmlns="http://www.w3.org/2000/svg">
                            <path class="card" d="M5.49847 22.185C5.50635 21.752 5.64091 21.3309 5.88519 20.9748C6.12947 20.6186 6.47261 20.3431 6.87158 20.1828C7.27055 20.0226 7.7076 19.9848 8.12781 20.0741C8.54802 20.1635 8.93269 20.376 9.23358 20.685C9.53447 20.994 9.73817 21.3857 9.81909 21.811C9.90002 22.2363 9.85453 22.6763 9.68842 23.0756C9.52231 23.475 9.24296 23.8161 8.88538 24.0559C8.52779 24.2957 8.10791 24.4237 7.67847 24.4237C7.38955 24.4211 7.10399 24.3611 6.83807 24.2472C6.57216 24.1333 6.3311 23.9676 6.12866 23.7597C5.92623 23.5518 5.76639 23.3057 5.65826 23.0355C5.55013 22.7653 5.49584 22.4763 5.49847 22.185ZM21.3045 24.4237C20.8711 24.4303 20.4453 24.3087 20.0797 24.074C19.7141 23.8393 19.4247 23.5017 19.2471 23.103C19.0696 22.7042 19.0117 22.2618 19.0806 21.8303C19.1496 21.3988 19.3423 20.9971 19.6351 20.6748C19.9278 20.3524 20.3077 20.1236 20.728 20.0165C21.1482 19.9095 21.5903 19.929 21.9997 20.0724C22.4091 20.2159 22.7679 20.4771 23.0317 20.8238C23.2956 21.1706 23.453 21.5877 23.4845 22.0236C23.5269 22.6155 23.3369 23.2004 22.9555 23.6523C22.7706 23.8745 22.5436 24.0574 22.2877 24.1901C22.0319 24.3227 21.7524 24.4025 21.4655 24.4247L21.3045 24.4237ZM8.59351 17.4855C8.38116 17.4851 8.17488 17.414 8.00671 17.2833C7.83855 17.1525 7.71792 16.9694 7.66351 16.7624L3.73651 2.19527H0.978516C0.719001 2.19527 0.470064 2.09128 0.28656 1.90622C0.103056 1.72116 0 1.47018 0 1.20847C0 0.946764 0.103056 0.695782 0.28656 0.510726C0.470064 0.325669 0.719001 0.22168 0.978516 0.22168H4.45752C4.66982 0.222254 4.876 0.293463 5.04413 0.424184C5.21226 0.554905 5.33295 0.737883 5.38751 0.944787L9.31451 15.5119H20.0185L23.5765 7.12665H11.7185C11.459 7.12665 11.2101 7.02266 11.0266 6.83761C10.8431 6.65255 10.74 6.40157 10.74 6.13986C10.74 5.87815 10.8431 5.62717 11.0266 5.44211C11.2101 5.25705 11.459 5.15306 11.7185 5.15306H25.0535C25.2131 5.15352 25.3701 5.19451 25.5099 5.27223C25.6497 5.34995 25.7679 5.46195 25.8535 5.59784C25.9413 5.73569 25.9945 5.89303 26.0084 6.05627C26.0224 6.21951 25.9966 6.38368 25.9335 6.53465L21.5425 16.8935C21.469 17.0684 21.3462 17.2177 21.1895 17.3229C21.0327 17.4281 20.8488 17.4846 20.6605 17.4855H8.59351Z" fill="#EF5B70"/>
                            </svg>
                        <span>Add to Cart</span> </button>
    
                    <!-- end buttonAdd -->
                </div>
            <img src="../assets/image/card_men3.png" alt="card_men3">
</div>
<a href="catalog.html"><h4>ELLERY X M'O CAPSULE</h4></a>
           <p> Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
            <h6>$52.00</h6>
        </div>
        <div class="category__card">
            <div class="category__card_container"> 
                <div class="category__card_itemBg">
                    
                    <!-- buttonAdd -->
                    <button class="addCard" id="btnAddCard5">
                        <svg width="27" height="25" xmlns="http://www.w3.org/2000/svg">
                            <path class="card" d="M5.49847 22.185C5.50635 21.752 5.64091 21.3309 5.88519 20.9748C6.12947 20.6186 6.47261 20.3431 6.87158 20.1828C7.27055 20.0226 7.7076 19.9848 8.12781 20.0741C8.54802 20.1635 8.93269 20.376 9.23358 20.685C9.53447 20.994 9.73817 21.3857 9.81909 21.811C9.90002 22.2363 9.85453 22.6763 9.68842 23.0756C9.52231 23.475 9.24296 23.8161 8.88538 24.0559C8.52779 24.2957 8.10791 24.4237 7.67847 24.4237C7.38955 24.4211 7.10399 24.3611 6.83807 24.2472C6.57216 24.1333 6.3311 23.9676 6.12866 23.7597C5.92623 23.5518 5.76639 23.3057 5.65826 23.0355C5.55013 22.7653 5.49584 22.4763 5.49847 22.185ZM21.3045 24.4237C20.8711 24.4303 20.4453 24.3087 20.0797 24.074C19.7141 23.8393 19.4247 23.5017 19.2471 23.103C19.0696 22.7042 19.0117 22.2618 19.0806 21.8303C19.1496 21.3988 19.3423 20.9971 19.6351 20.6748C19.9278 20.3524 20.3077 20.1236 20.728 20.0165C21.1482 19.9095 21.5903 19.929 21.9997 20.0724C22.4091 20.2159 22.7679 20.4771 23.0317 20.8238C23.2956 21.1706 23.453 21.5877 23.4845 22.0236C23.5269 22.6155 23.3369 23.2004 22.9555 23.6523C22.7706 23.8745 22.5436 24.0574 22.2877 24.1901C22.0319 24.3227 21.7524 24.4025 21.4655 24.4247L21.3045 24.4237ZM8.59351 17.4855C8.38116 17.4851 8.17488 17.414 8.00671 17.2833C7.83855 17.1525 7.71792 16.9694 7.66351 16.7624L3.73651 2.19527H0.978516C0.719001 2.19527 0.470064 2.09128 0.28656 1.90622C0.103056 1.72116 0 1.47018 0 1.20847C0 0.946764 0.103056 0.695782 0.28656 0.510726C0.470064 0.325669 0.719001 0.22168 0.978516 0.22168H4.45752C4.66982 0.222254 4.876 0.293463 5.04413 0.424184C5.21226 0.554905 5.33295 0.737883 5.38751 0.944787L9.31451 15.5119H20.0185L23.5765 7.12665H11.7185C11.459 7.12665 11.2101 7.02266 11.0266 6.83761C10.8431 6.65255 10.74 6.40157 10.74 6.13986C10.74 5.87815 10.8431 5.62717 11.0266 5.44211C11.2101 5.25705 11.459 5.15306 11.7185 5.15306H25.0535C25.2131 5.15352 25.3701 5.19451 25.5099 5.27223C25.6497 5.34995 25.7679 5.46195 25.8535 5.59784C25.9413 5.73569 25.9945 5.89303 26.0084 6.05627C26.0224 6.21951 25.9966 6.38368 25.9335 6.53465L21.5425 16.8935C21.469 17.0684 21.3462 17.2177 21.1895 17.3229C21.0327 17.4281 20.8488 17.4846 20.6605 17.4855H8.59351Z" fill="#EF5B70"/>
                            </svg>
                        <span>Add to Cart</span> </button>
    
                    <!-- end buttonAdd -->
                </div>
            <img src="../assets/image/card_women2.png" alt="card_women2">
</div>
<a href="catalog.html"><h4>ELLERY X M'O CAPSULE</h4></a>
           <p> Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
            <h6>$52.00</h6>
        </div>
        <div class="category__card">
            <div class="category__card_container"> 
                <div class="category__card_itemBg">
                    
                    <!-- buttonAdd -->
                    <button class="addCard" id="btnAddCard6">
                        <svg width="27" height="25" xmlns="http://www.w3.org/2000/svg">
                            <path class="card" d="M5.49847 22.185C5.50635 21.752 5.64091 21.3309 5.88519 20.9748C6.12947 20.6186 6.47261 20.3431 6.87158 20.1828C7.27055 20.0226 7.7076 19.9848 8.12781 20.0741C8.54802 20.1635 8.93269 20.376 9.23358 20.685C9.53447 20.994 9.73817 21.3857 9.81909 21.811C9.90002 22.2363 9.85453 22.6763 9.68842 23.0756C9.52231 23.475 9.24296 23.8161 8.88538 24.0559C8.52779 24.2957 8.10791 24.4237 7.67847 24.4237C7.38955 24.4211 7.10399 24.3611 6.83807 24.2472C6.57216 24.1333 6.3311 23.9676 6.12866 23.7597C5.92623 23.5518 5.76639 23.3057 5.65826 23.0355C5.55013 22.7653 5.49584 22.4763 5.49847 22.185ZM21.3045 24.4237C20.8711 24.4303 20.4453 24.3087 20.0797 24.074C19.7141 23.8393 19.4247 23.5017 19.2471 23.103C19.0696 22.7042 19.0117 22.2618 19.0806 21.8303C19.1496 21.3988 19.3423 20.9971 19.6351 20.6748C19.9278 20.3524 20.3077 20.1236 20.728 20.0165C21.1482 19.9095 21.5903 19.929 21.9997 20.0724C22.4091 20.2159 22.7679 20.4771 23.0317 20.8238C23.2956 21.1706 23.453 21.5877 23.4845 22.0236C23.5269 22.6155 23.3369 23.2004 22.9555 23.6523C22.7706 23.8745 22.5436 24.0574 22.2877 24.1901C22.0319 24.3227 21.7524 24.4025 21.4655 24.4247L21.3045 24.4237ZM8.59351 17.4855C8.38116 17.4851 8.17488 17.414 8.00671 17.2833C7.83855 17.1525 7.71792 16.9694 7.66351 16.7624L3.73651 2.19527H0.978516C0.719001 2.19527 0.470064 2.09128 0.28656 1.90622C0.103056 1.72116 0 1.47018 0 1.20847C0 0.946764 0.103056 0.695782 0.28656 0.510726C0.470064 0.325669 0.719001 0.22168 0.978516 0.22168H4.45752C4.66982 0.222254 4.876 0.293463 5.04413 0.424184C5.21226 0.554905 5.33295 0.737883 5.38751 0.944787L9.31451 15.5119H20.0185L23.5765 7.12665H11.7185C11.459 7.12665 11.2101 7.02266 11.0266 6.83761C10.8431 6.65255 10.74 6.40157 10.74 6.13986C10.74 5.87815 10.8431 5.62717 11.0266 5.44211C11.2101 5.25705 11.459 5.15306 11.7185 5.15306H25.0535C25.2131 5.15352 25.3701 5.19451 25.5099 5.27223C25.6497 5.34995 25.7679 5.46195 25.8535 5.59784C25.9413 5.73569 25.9945 5.89303 26.0084 6.05627C26.0224 6.21951 25.9966 6.38368 25.9335 6.53465L21.5425 16.8935C21.469 17.0684 21.3462 17.2177 21.1895 17.3229C21.0327 17.4281 20.8488 17.4846 20.6605 17.4855H8.59351Z" fill="#EF5B70"/>
                            </svg>
                        <span>Add to Cart</span> </button>
    
                    <!-- end buttonAdd -->
                </div>
            <img src="../assets/image/card_women3.png" alt="card_women3">
</div>
<a href="catalog.html"><h4>ELLERY X M'O CAPSULE</h4></a>
           <p> Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
            <h6>$52.00</h6>
        </div>

</div>

<button class="browser" id="btnBrowser">Browse All Product</button>

</div>

</main>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import BodyMain from '@/component/BodyMain.vue'
// import MainCard from '../components/MainCard.vue'

export default {
  name: 'HomeView',
  components: {
  // MainCard,
  },
  // catalog() {
  //     return this.$store.getters.getCatalog
  //   }
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
  .content {
    flex-grow: 1;
    width: 100%;

    .brand {
    height: 764px;
    background: #f1e4e6;
    overflow: hidden;

    &__flex {
        display: flex;
        justify-content: flex-end;
        max-width: $max-width;
        margin: 0 auto;
        height: 100%;
        align-items: center;
        background: url("../assets/image/brand_img.png") no-repeat -228px;

        .brand__text {
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
             h1 {
                font-family: Lato;
                font-weight: 900;
                font-size: 48px;
                line-height: 58px;
                color: #222222;
            }
             span {
                color: #f16d7f;
            }
        }

    }

}

.category {
    margin-top: 65px;

    &__flex {
        @include flex;

        .category__item:not(:last-child) {
            max-width: 360px;
            height: 260px;
        }
        .category__item {
            width: 100%;
            height: 180px;
            background: url("../assets/image/accesBg.png") no-repeat center;
            background-size: cover;
            position: relative;

            .category__itemBg {
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
                 h2 {
                    font-family: Lato;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 29px;
                    text-align: center;
                    color: #f16d7f;
                }
            }
             img {
                position: absolute;
                z-index: 1;
            }
        }
    }
}

.cards-conteiner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 96px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: $main-font;
    line-height: 17px;
    color: #9f9f9f;
     h2 {
        font-family: "Lato";
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 36px;
        text-align: center;
        color: #222222;
       
    }
     p {
        text-align: center;
        padding-top: 6px;
        padding-bottom: 48px;
    }
    .category__flex{
        @include flex;
        .category__card {
    width: 360px;
    background: #f8f8f8;
    color: #5d5d5d;
    position: relative;
   z-index: 1;
   overflow: hidden;

    h4 {
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
 p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: $main-font;
    line-height: 17px;
    text-align: left;
    max-width: 315px;
    padding-left: 18px;
}
 h6 {
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

   .category__card_container{
    position: relative;
    overflow: hidden;
    z-index: 1;
    .category__card_itemBg{
        display: flex;
        justify-content: center;
        align-items: center;
    transition: 0.7s;
    .addCard {
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
    .addCard:hover{
        color: #ffffff;
        border: 1px solid #FFFFFF;
            }
            .addCard:hover .card{
                fill:#ffffff;
            }
            .addCard:active{
                color: #ffffff;
                background: #cf4a5c;
                  
            }
            .addCard span{
                    margin-left: 11px;
            }
            
    }
}


.category__card_container:hover .category__card_itemBg{
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

//  battonAdd 

.category__card_container:hover .addCard {
    box-sizing: border-box;
    display: flex;
   

}

}
    }
    .browser {
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
    .browser:hover {
        color: #ffffff;
        background: #f16d7f;
       
    }

}
}
</style>