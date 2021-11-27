import react from "react";
import Banner from "../banner";
import Menu from "../menu bar";
import  "./styles.css";
import TextContainer from "../textcontainer";
const Header =()=>{
    return (
        <div className="headercontainer">
            <Menu/>
            <div className="container"  >
                <TextContainer/>
                <Banner/>
            </div>
        </div>
        
        

)
}


export default Header;