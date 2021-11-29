import React from "react";
import img from"./first person.jpg"
import img1 from"./second person.jpg"
import img2 from "./third person.jpg"
import img3 from"./fourth person.jpg"
import img4 from"./fifth person.jpg"
import img5 from"./sixth person.jpg"
import "./styles.css";
const BodyFour = () => {
    return (
        <div className="bodyfourcontainer">
            <div className="bodyfourcontainertext">
                <h1>People say about Beeanter</h1>
                <p>all from clients, we display here so you can see</p>
            </div>
            <div className="feedbackcontainer">
                <div className="feedbackcontainerone">
                    <div className="firstperson">
                        <p>The application is very charming, the minimalist design makes users not confused when using it</p>
                        <div className="firstpersoninfo">
                            <img src={img} alt="alexandro" ></img>
                            <div className="firstpersonName">
                                 <h3>Alexandro</h3>
                                  <p>Programmer <span>@metaku</span></p>  
                            </div>
                        </div>
                    </div>
                    <div className="secondperson">
                        <p>The application is very charming, the minimalist design makes users not confused when using it</p>
                        <div className="secondpersoninfo">
                            <img src={img1} alt="alexandro" ></img>
                            <div className="secondpersonName">
                                 <h3>Alexandro</h3>
                                  <p>Programmer <span>@metaku</span></p>  
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="feedbackcontainertwo">
                <div className="thirdperson">

                        <p>The application is very charming, the minimalist design makes users not confused when using it</p>
                        <div className="thirdpersoninfo">
                            <img src={img2} alt="alexandro"></img>
                            <div className="thirdpersonName">
                                 <h3>Alexandro</h3>
                                  <p>Programmer <span>@metaku</span></p>  
                            </div>
                        </div>
                    </div>
                    <div className="fourthperson">
                        <p>The application is very charming, the minimalist design makes users not confused when using it</p>
                        <div className="fourthpersoninfo">
                            <img src={img3} alt="alexandro"></img>
                            <div className="fourthpersonName">
                                 <h3>Alexandro</h3>
                                  <p>Programmer <span>@metaku</span></p>  
                            </div>
                    </div>
                   
                        </div>
                   

                </div>
                <div className="feedbackcontainerthree">
                <div className="fifthperson">
                        <p>The application is very charming, the minimalist design makes users not confused when using it</p>
                        <div className="fifthpersoninfo">
                            <img src={img4} alt="alexandro"></img>
                            <div className="fifthpersonName">
                                 <h3>Alexandro</h3>
                                  <p>Programmer <span>@metaku</span></p>  
                            </div>
                        </div>
                    </div>

                    <div className="sixthperson">
                        <p>The application is very charming, the minimalist design makes users not confused when using it</p>
                        <div className="sixthpersoninfo">
                            <img src={img5}  alt="alexandro"></img>
                            <div className="sixthpersonName">
                                 <h3>Alexandro</h3>
                                  <p>Programmer <span>@metaku</span></p>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyFour;