import react from "react";
import OrderNow from "../buttons/ordernow";
import  "./styles.css";
const TextContainer=()=>{
    return(
        <div className="textcontainer">
                    <h1>The powerfull shipping App in the world</h1>
                    <p>We serve your shipments quickly and safely,
                        Prudence and Security carried on our couriers
                        will truly be maintained until the destinations.
                    </p>
                   <div className="buttons">
                       <OrderNow/>
                        <a href="/">Enterprise</a>
                    </div> 
                </div>
    )
}
export default TextContainer;