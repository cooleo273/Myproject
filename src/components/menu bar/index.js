import react from "react";
import "./styles.css"

const Menu = () => {
    return (
        <div className="bar">
            <li className="Home"> 
                <a href="/" >HOME</a>
            </li>
            <li className="About"> 
                <a href="/about">ABOUT</a>
            </li>
            <li className="Partnership">
             <a href="/Partnership">PARTNERSHIP</a>   
            </li>
            <li className="Product">
                <a href="/product">PRODUCT</a> 
            </li>
            <li className="contactus">
                <a href="/contact">CONTACT US</a>
             </li>
        </div>

    )
}
export default Menu;
