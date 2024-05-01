// header section start 
class specialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="navContainer">
        <div class="navBar">
        <a href="./index.html" class="logo"><i class="fa-solid fa-location-dot fa-bounce"></i> Toura</a>
            <div class="navMenu">
                <a href="./index.html" class="navItem">Home</a>
                <a href="./about.html" class="navItem">About</a>
                <a href="./services.html" class="navItem">Services</a>
                <a href="./packages.html" class="navItem">Packages</a>
                <a href="./contact.html" class="navItem">Contact</a>

                <button class="bookNowBtn"
                onclick="goToPageAndScroll()">Book Now</button>
            </div>
        </div>
    </div> `
    }
}
// header section end 

// book now function start 
function goToPageAndScroll() {
    window.location.href = './packages.html#book';
}
// book now function end

// newsletter and footer section start 
class specialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="newsLetterBox">
            <h5 class="subscribeTitle dash">Subscribe</h5>
            <h1 class="newsLetterTitle">Our Newsletter</h1>
            <p class="newsLetterPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam,
                architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat
                corrupti eum cum repellat a laborum quasi.</p>
            <div class="mailBox">
                <input type="text" placeholder="Your email" class="emailIdBox">
                <button class="subscribeBtn">Subscribe</button>
            </div>
        </div>
        
        <footer class="footerContainer">
            <div class="footerContent">
                <div class="footerDetails">
                    <h4 class="footerDetailsHeadaing">Get In Touch</h4>
                    <div class="links">

                        <a href="#"><i class="fa-solid fa-house"></i> Address</a>

                        <a href="#"><i class="fa-solid fa-envelope"></i> example@email.com</a>

                        <a href="#"><i class="fa-solid fa-phone"></i> +91 1720976201</a>

                        <div class="socialIcons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>

                </div>
                <div class="footerDetails">
                    <h4 class="footerDetailsHeadaing">Company</h4>
                    <div class="links">

                        <a href="#"><i class="fa-solid fa-angle-right"></i> About</a>

                        <a href="#"><i class="fa-solid fa-angle-right"></i> Careers</a>

                        <a href="#"><i class="fa-solid fa-angle-right"></i> Blog</a>

                        <a href="#"><i class="fa-solid fa-angle-right"></i> Services</a>

                    </div>
                </div>
                <div class="footerDetails">
                    <h4 class="footerDetailsHeadaing">Support</h4>
                    <div class="links">

                        <a href="#"><i class="fa-solid fa-angle-right"></i> Contact</a>

                        <a href="#"><i class="fa-solid fa-angle-right"></i> Privacy Policy</a>

                        <a href="#"><i class="fa-solid fa-angle-right"></i> Terms and Conditions</a>

                        <a href="#"><i class="fa-solid fa-angle-right"></i> Cookie Policy</a>

                    </div>
                </div>
            </div>
            <div class="copyrightContent">
                &copy; Adventure, All right reserved.
            </div>
        </footer> `
    }
}
// newsletter and footer section end

// about section start 
class specialAbout extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="aboutContainer">
            <img src="./images/about-img.jpg" class="aboutImage">
            <div class="aobutContent">
                <div class="servicesBox aboutBox">
                    <h5 class="servicesTitle dash aboutTitle">ABOUT US</h5>
                    <h1 class="servicesHradingTitle">Welcome to Toura</h1>
                    <p class="aboutPara">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum, doloribus sunt
                        dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam assumenda? Id atque
                        iste consectetur. Commodi odit ab saepe!
                        <br><br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem suscipit
                        neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam
                        perferendis provident placeat molestiae quia?
                    </p>
                    <div class="aboutDetails">
                        <div class="left">
                            <p class="aboutDetailsItem">
                                <i class="fa-solid fa-arrow-right"></i>
                                First Class Flights
                            </p>
                            <p class="aboutDetailsItem">
                                <i class="fa-solid fa-arrow-right"></i>
                                5 Star Accommodations
                            </p>
                            <p class="aboutDetailsItem">
                                <i class="fa-solid fa-arrow-right"></i>
                                150 Premium City Tours
                            </p>
                        </div>
                        <div class="right">
                            <p class="aboutDetailsItem">
                                <i class="fa-solid fa-arrow-right"></i>
                                Handpicked Hotels
                            </p>
                            <p class="aboutDetailsItem">
                                <i class="fa-solid fa-arrow-right"></i>
                                Latest Model Vehicles
                            </p>
                            <p class="aboutDetailsItem">
                                <i class="fa-solid fa-arrow-right"></i>
                                24/7 Service
                            </p>
                        </div>
                    </div>
                    <button class="bookNowBtn readMoreBtn">Read More</button>
                </div>
            </div>
        </div>
        `
    }
}
// about section end 

// services section start 
class specialServices extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="servicesBox">
            <h5 class="servicesTitle dash">Services</h5>
            <h1 class="servicesHradingTitle">Our Services</h1>
            <div class="contentBox">
                <div class="content">
                    <div class="text leftBox">
                        <h3 class="textheading">WorldWide Tours</h3>
                        <p class="textPara">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit
                            expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur
                            voluptate rem reiciendis, omnis sequi harum earum.
                        </p>
                    </div>
                    <i class="fa-solid fa-globe servicesIcon"></i>
                </div>
                <div class="content">
                    <i class="fa-solid fa-hotel servicesIcon"></i>
                    <div class="text rightBox">
                        <h3 class="textheading">Hotel Reservation</h3>
                        <p class="textPara">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit
                            expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur
                            voluptate rem reiciendis, omnis sequi harum earum.
                        </p>
                    </div>
                </div>
                <div class="content">
                    <div class="text leftBox">
                        <h3 class="textheading">Travel Guides</h3>
                        <p class="textPara">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit
                            expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur
                            voluptate rem reiciendis, omnis sequi harum earum.
                        </p>
                    </div>
                    <i class="fa-solid fa-user servicesIcon"></i>
                </div>
                <div class="content">
                    <i class="fa-solid fa-gear servicesIcon"></i>
                    <div class="text rightBox">
                        <h3 class="textheading">Event Management</h3>
                        <p class="textPara">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit
                            expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur
                            voluptate rem reiciendis, omnis sequi harum earum.
                        </p>
                    </div>
                </div>
                <div class="content">
                    <div class="text leftBox">
                        <h3 class="textheading">Great Support</h3>
                        <p class="textPara">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit
                            expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur
                            voluptate rem reiciendis, omnis sequi harum earum.
                        </p>
                    </div>
                    <i class="fa-solid fa-phone-volume servicesIcon"></i>
                </div>
                <div class="content">
                    <i class="fa-solid fa-comments servicesIcon"></i>
                    <div class="text rightBox">
                        <h3 class="textheading">Positive Reviews</h3>
                        <p class="textPara">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit
                            expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur
                            voluptate rem reiciendis, omnis sequi harum earum.
                        </p>
                    </div>
                </div>
            </div>

        </div>
        `
    };
};
// services section end

// packages section start 
class specialPackages extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="servicesBox">
            <h5 class="servicesTitle dash">PACKAGES</h5>
            <h1 class="servicesHradingTitle">Awesome Packages</h1>
            <div class="packageContainer">
                <div class="packageBox">
                    <div class="packageImageBox">
                        <p class="packagePrice">$ 349.00</p>
                        <img src="./images/packages-1.jpg" class="packageImage">
                        <div class="imageBtnSection">
                            <p class="location hr-rule"><i class="fa-solid fa-location-dot"></i>Location</p>
                            <p class="days hr-rule"><i class="fa-solid fa-calendar-days"></i>3 Days</p>
                            <p class="person"><i class="fa-solid fa-user"></i>2 Person</p>
                        </div>
                    </div>
                    <div class="packageContentBox">
                        <h4 class="placeNames">The New california</h4>
                        <p class="hotelDeals">Hotel Deals</p>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="packageDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo
                            quia quae illum aperiam fugiat voluptatem repellat</p>
                    </div>
                    <div class="moreBtn">
                        <p href="#" class="btn">Read More</p>
                        <p href="#" class="btn">Book Now</p>
                    </div>
                </div>
                <div class="packageBox">
                    <div class="packageImageBox">
                        <p class="packagePrice">$ 349.00</p>
                        <img src="./images/packages-2.jpg" class="packageImage">
                        <div class="imageBtnSection">
                            <p class="location hr-rule"><i class="fa-solid fa-location-dot"></i>Location</p>
                            <p class="days hr-rule"><i class="fa-solid fa-calendar-days"></i>3 Days</p>
                            <p class="person"><i class="fa-solid fa-user"></i>2 Person</p>
                        </div>
                    </div>
                    <div class="packageContentBox">
                        <h4 class="placeNames">The New california</h4>
                        <p class="hotelDeals">Hotel Deals</p>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="packageDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo
                            quia quae illum aperiam fugiat voluptatem repellat</p>
                    </div>
                    <div class="moreBtn">
                        <p href="#" class="btn">Read More</p>
                        <p href="#" class="btn">Book Now</p>
                    </div>
                </div>
                <div class="packageBox">
                    <div class="packageImageBox">
                        <p class="packagePrice">$ 349.00</p>
                        <img src="./images/packages-3.jpg" class="packageImage">
                        <div class="imageBtnSection">
                            <p class="location hr-rule"><i class="fa-solid fa-location-dot"></i>Location</p>
                            <p class="days hr-rule"><i class="fa-solid fa-calendar-days"></i>3 Days</p>
                            <p class="person"><i class="fa-solid fa-user"></i>2 Person</p>
                        </div>
                    </div>
                    <div class="packageContentBox">
                        <h4 class="placeNames">The New california</h4>
                        <p class="hotelDeals">Hotel Deals</p>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="packageDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo
                            quia quae illum aperiam fugiat voluptatem repellat</p>
                    </div>
                    <div class="moreBtn">
                        <p href="#" class="btn">Read More</p>
                        <p href="#" class="btn">Book Now</p>
                    </div>
                </div>
                <div class="packageBox">
                    <div class="packageImageBox">
                        <p class="packagePrice">$ 349.00</p>
                        <img src="./images/packages-4.jpg" class="packageImage">
                        <div class="imageBtnSection">
                            <p class="location hr-rule"><i class="fa-solid fa-location-dot"></i>Location</p>
                            <p class="days hr-rule"><i class="fa-solid fa-calendar-days"></i>3 Days</p>
                            <p class="person"><i class="fa-solid fa-user"></i>2 Person</p>
                        </div>
                    </div>
                    <div class="packageContentBox">
                        <h4 class="placeNames">The New california</h4>
                        <p class="hotelDeals">Hotel Deals</p>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="packageDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo
                            quia quae illum aperiam fugiat voluptatem repellat</p>
                    </div>
                    <div class="moreBtn">
                        <p href="#" class="btn">Read More</p>
                        <p href="#" class="btn">Book Now</p>
                    </div>
                </div>
                <div class="packageBox">
                    <div class="packageImageBox">
                        <p class="packagePrice">$ 349.00</p>
                        <img src="./images/packages-3.jpg" class="packageImage">
                        <div class="imageBtnSection">
                            <p class="location hr-rule"><i class="fa-solid fa-location-dot"></i>Location</p>
                            <p class="days hr-rule"><i class="fa-solid fa-calendar-days"></i>3 Days</p>
                            <p class="person"><i class="fa-solid fa-user"></i>2 Person</p>
                        </div>
                    </div>
                    <div class="packageContentBox">
                        <h4 class="placeNames">The New california</h4>
                        <p class="hotelDeals">Hotel Deals</p>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="packageDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo
                            quia quae illum aperiam fugiat voluptatem repellat</p>
                    </div>
                    <div class="moreBtn">
                        <p href="#" class="btn">Read More</p>
                        <p href="#" class="btn">Book Now</p>
                    </div>
                </div>
                <div class="packageBox">
                    <div class="packageImageBox">
                        <p class="packagePrice">$ 349.00</p>
                        <img src="./images/packages-2.jpg" class="packageImage">
                        <div class="imageBtnSection">
                            <p class="location hr-rule"><i class="fa-solid fa-location-dot"></i>Location</p>
                            <p class="days hr-rule"><i class="fa-solid fa-calendar-days"></i>3 Days</p>
                            <p class="person"><i class="fa-solid fa-user"></i>2 Person</p>
                        </div>
                    </div>
                    <div class="packageContentBox">
                        <h4 class="placeNames">The New california</h4>
                        <p class="hotelDeals">Hotel Deals</p>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="packageDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo
                            quia quae illum aperiam fugiat voluptatem repellat</p>
                    </div>
                    <div class="moreBtn">
                        <p href="#" class="btn">Read More</p>
                        <p href="#" class="btn">Book Now</p>
                    </div>
                </div>
            </div>
        </div>
        `
    };
};
// packages section end 

// Booking section start 
class specialBooking extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="bookingBox" id="book">
            <div class="bookingContent">
                <h5 class="bookingTitle dash aboutTitle">Booking</h5>
                <h1 class="servicesHradingTitle">Online Booking</h1>
                <p class="bookingDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga
                    blanditiis
                    accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat
                    doloribus quasi quo iure officia.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga
                    blanditiis
                    accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat
                    doloribus quasi quo iure officia.
                </p>
                <button class="bookNowBtn readMoreBtn">Read More</button>
            </div>
            <div class="bookingForm">
                <h2 class="formHeading">Book A Tour Deals</h2>
                <p class="formDesc">Get <span>50% Off</span> On Your First Adventure Trip With Adventure. Get More Deal
                    Offers Here.</p>

                <form class="form-wrapper">
                    <div class="formItem">
                        <label for="name" class="no-dropdown">Your Name</label>
                        <input type="text" name="name" id="name" class="inputBox" autocomplete="off" spellcheck="false">
                    </div>
                    <div class="formItem">
                        <label for="email" class="no-dropdown">Your Email</label>
                        <input type="email" name="email" id="email" class="inputBox" autocomplete="off" spellcheck="false
                        ">
                    </div>
                    <div class="formItem">
                        <label for="dateAndtime" class="no-dropdown">Date & Time</label>
                        <input type="dateAndtime" name="dateAndtime" id="dateAndtime" class="inputBox" autocomplete="off" spellcheck="false">
                    </div>
                    <div class="formItem">
                        <label for="destination" class="dropdown">Destination</label>
                        <select name="destination" id="destination" class="inputBox dropDownBox">
                            <option class="default" selected disabled hidden>Destination</option>
                            <option value="destination-1">Destination 1</option>
                        </select>
                    </div>
                    <div class="formItem">
                        <label for="adults" class="dropdown">Adults</label>
                        <select name="adults" id="adults" class="inputBox dropDownBox">
                            <option class="default" selected disabled hidden >Adults</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div class="formItem">
                        <label for="kids" class="dropdown">Kids</label>
                        <select name="kids" id="kids" class="inputBox dropDownBox">
                            <option class="default" selected disabled hidden>Kids</option>
                            <option value="1"> 1</option>
                        </select>
                    </div>
                    <div class="formItem msgBox">
                        <label for="specialRequest" class="no-dropdown splreq">Special Request</label>
                        <textarea name="specialRequest" id="specialRequest" class="inputBox specialRequestBox" spellcheck="false"></textarea>
                    </div>
                    <button class="bookNowBtn readMoreBtn bookNow">Book Now</button>
                </form>
            </div>
        </div>
        `
    };
};
// booking section end 

// travel guide section start 
class specialTravelGuide extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="servicesBox">
            <h5 class="servicesTitle dash">Travel Guide</h5>
            <h1 class="servicesHradingTitle">Meet Our Guide</h1>
            <div class="guideContainer">
                <div class="guideBox">
                    <img src="./images/guide-1.jpg" class="guideImage">
                    <div class="guideSocialHandler">
                        <i class="fa-brands fa-facebook guideSocialIcon"></i>
                        <i class="fa-brands fa-twitter guideSocialIcon"></i>
                        <i class="fa-brands fa-instagram guideSocialIcon"></i>
                        <i class="fa-brands fa-linkedin guideSocialIcon"></i>
                    </div>
                    <div class="guideDetails">
                        <p class="guideName">Full Name</p>
                        <p class="guideDesignation">Designation</p>
                    </div>
                </div>
                <div class="guideBox">
                    <img src="./images/guide-2.jpg" class="guideImage">
                    <div class="guideSocialHandler">
                        <i class="fa-brands fa-facebook guideSocialIcon"></i>
                        <i class="fa-brands fa-twitter guideSocialIcon"></i>
                        <i class="fa-brands fa-instagram guideSocialIcon"></i>
                        <i class="fa-brands fa-linkedin guideSocialIcon"></i>
                    </div>
                    <div class="guideDetails">
                        <p class="guideName">Full Name</p>
                        <p class="guideDesignation">Designation</p>
                    </div>
                </div>
                <div class="guideBox">
                    <img src="./images/guide-3.jpg" class="guideImage">
                    <div class="guideSocialHandler">
                        <i class="fa-brands fa-facebook guideSocialIcon"></i>
                        <i class="fa-brands fa-twitter guideSocialIcon"></i>
                        <i class="fa-brands fa-instagram guideSocialIcon"></i>
                        <i class="fa-brands fa-linkedin guideSocialIcon"></i>
                    </div>
                    <div class="guideDetails">
                        <p class="guideName">Full Name</p>
                        <p class="guideDesignation">Designation</p>
                    </div>
                </div>
                <div class="guideBox">
                    <img src="./images/guide-4.jpg" class="guideImage">
                    <div class="guideSocialHandler">
                        <i class="fa-brands fa-facebook guideSocialIcon"></i>
                        <i class="fa-brands fa-twitter guideSocialIcon"></i>
                        <i class="fa-brands fa-instagram guideSocialIcon"></i>
                        <i class="fa-brands fa-linkedin guideSocialIcon"></i>
                    </div>
                    <div class="guideDetails">
                        <p class="guideName">Full Name</p>
                        <p class="guideDesignation">Designation</p>
                    </div>
                </div>
            </div>
        </div>
        `
    };
};
// travel gjuide section end 

// testimonial section start 
class specialTestimonial extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="servicesBox testimonialBox">
            <h5 class="servicesTitle dash">TESTIMONIAL</h5>
            <h1 class="servicesHradingTitle">Our Clients Say!!!</h1>
            <div class="clientBox">
                <div class="clientContent">
                    <p class="clientDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                    </p>
                    <img src="./images/testimonial-1.jpg" class="testimonialImage">
                    <div class="clientInfo">
                        <p class="clientName">John Abraham</p>
                        <p class="clientAddress">New York, USA</p>
                        <div class="fivestar">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="clientContent ">
                    <p class="clientDesc middleClientDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                    </p>
                    <img src="./images/testimonial-2.jpg" class="testimonialImage testimonial-2">
                    <div class="clientInfo">
                        <p class="clientName">John Abraham</p>
                        <p class="clientAddress">New York, USA</p>
                        <div class="fivestar">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="clientContent">
                    <p class="clientDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                    </p>
                    <img src="./images/testimonial-3.jpg" class="testimonialImage">
                    <div class="clientInfo">
                        <p class="clientName">John Abraham</p>
                        <p class="clientAddress">New York, USA</p>
                        <div class="fivestar">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    };
};
// testimonial section end 



// custom elemnet declaration
customElements.define('special-header', specialHeader);
customElements.define('special-footer', specialFooter);
customElements.define('special-about', specialAbout);
customElements.define('special-services', specialServices);
customElements.define('special-packages', specialPackages);
customElements.define('special-booking', specialBooking);
customElements.define('special-travelguide', specialTravelGuide);
customElements.define('special-testimonial', specialTestimonial);