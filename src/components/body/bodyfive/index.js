import React from "react";
import img from "./rishabh-malhotra-83ypHTv6J2M-unsplash.jpg"
import "./styles.css"

const BodyFive = () => {
    return (
        <div className="bodyfivecontainer">
            <div className="bodyfivetextcontainer">
            <h1>Dowload and use it on your phone</h1>
            <span className="text">Immediatly download Beeanter for free on your cellphone, don't let you miss the promo promos
                that are offered because we always share interesting promos
            </span>
             <div class="flex social-btns">
                <a class="app-btn blu flex vert" href="http:apple.com">
                    <i class="fab fa-apple"></i>
                    <p>Available on the <br /> <span class="big-txt">App Store</span></p>
                </a>
                <a class="btn btn-google" href="#" title="Google Play">Google Play</a>

            </div>
            </div>
            <div className="image">
                <img src={img} alt="Phone"/>
            </div>  
            </div>
            
        
            )
}
export default BodyFive;