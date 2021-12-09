import React from "react";
import Banner from "../../components/banner";
import Menu from "../../components/menu bar";
import  "./styles.css";

import TextContainertwo from "../../components/textcontainertwo";
const About =()=>{
    return (
        <div className="Aboutcontainer">
            <Menu/>
            <div className="About-text-container">
                <TextContainertwo/>
                <Banner/>
            </div>
        </div>
        
        

)
}


export default About;   