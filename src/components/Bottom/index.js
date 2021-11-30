import react from "react";
import "./styles.css"

const Bottom=()=>{
    return(
        <div className="bottomcontainer">
            <div className="about-beeanter">
                <h3>Beeanter</h3>
                <p>We serve your shipment quickly and safely. Prudence and Security of carried on our courires</p>
            </div>
            <div className="Bottom-table-one">
                <h3>What are we?</h3>
                <ul>
                    <li>
                        <a href="AboutUs">About Us</a>
                    </li>
                    <li>
                        <a href="Team">Meet Our Team</a>
                    </li>
                    <li>
                        <a href="News and Media">News & Media</a>
                    </li>
                    <li>
                        <a href="Case studies">Case studies</a>
                    </li>   
                </ul>
            </div>
            <div className="Bottom-table-two">
            <h3>What we do?</h3>
                <ul>
                    <li>
                        <a href="AboutUs">Warehousing</a>
                    </li>
                    <li>
                        <a href="Team">shipping</a>
                    </li>
                    <li>
                        <a href="News and Media">tracking</a>
                    </li>  
                </ul>
            </div>
            <div className="Bottom-table-three">
            <h3>Quick action</h3>
                <ul>
                    <li>
                        <a href="AboutUs"><span>Order now!</span></a>
                    </li>
                    <li>
                        <a href="Team">Track and trace</a>
                    </li>
                    <li>
                        <a href="News and Media">Help & FAQ</a>
                    </li>
                    <li>
                        <a href="Case studies">Global agents</a>
                    </li>   
                </ul>
            </div>
            
        </div>
    )
}


export default Bottom;