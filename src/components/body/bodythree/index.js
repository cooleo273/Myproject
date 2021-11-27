import React from "react";
import "./styles.css"
import img from "./aaron-doucett-E1_tHPWpsqI-unsplash.jpg"
import img1 from "./handy-wicaksono-brizG9kR6qI-unsplash.jpg"
import img2 from "./jordan-brierley-N1NvJoqMg9g-unsplash.jpg"
import img3 from "./mak-1uDgb-65_28-unsplash.jpg"

const BodyThree =()=>{
    return(
        <div className="bodythreecontainer">
            <div className="bodythreeimagecontainerone">
            <img className="image" src={img} />
            <img className="imageone" src={img1}/>
            </div>
            <div className="bodythreetext">
                <h1>See a gallery of what we do at Beeanter and share it to all</h1>
                <p>Our experience of working in 20 years and of course that makes us work more professiionally and be careful about the shipments made</p>
                <button>View more</button>
            </div>
            <div className="bodythreeimagecontainertwo">
            <img className="imagetwo" src={img2} />
            <img className="imagethree" src={img3}/>
            </div>
        </div>
    )
}

export default BodyThree;