import react from "react";
import ViewMore from "../../buttons/view more";
import "./styles.css";
const BodyTwo = () => {
    return (
        <div className="bodytwocontainer">
            <div className="bodytwotext">
                <h1>Our core feature on beeanter</h1>
                <p>'
                    We offer everything you need for the delivery of your goods, the product sent can be viewed live streaming, because we use cameras on our helmets
                </p>
                <ViewMore/>

            </div>
            <div className="bodytwosliders">
                <h1>The powerfull shipping App in the world</h1>
                <p>
                    We offer everything you need for the delivery of your goods, the product sent can be viewed live streaming, because we use cameras on our helmets
                </p>
                <ViewMore/>
            </div>
        </div>
    )
}

export default BodyTwo; 