import react from "react";
import "./styles.css"

const BodyOne = () => {
    return (
        <div className="bodyonecontainer">
            <div className="notice">
                <div className="tracking">
                    <div className="real">
                        <h4>Real-time tracking</h4>
                        <p>We will use all our strength to shorten the time it takes for the </p>
                    </div>
                    <div className="item">
                        <h4>Item Safety</h4>
                        <p>Shipments are treated with care and well guarded</p>
                    </div>
                </div>
                <div className="scales">
                    <div className="weight">
                        <h4>Weight Scales</h4>
                        <p>Already using digital scales which will be more significant</p>
                    </div>
                    <div className="service">
                        <h4>Compensation Service</h4>
                        <p>Guarantee that your item will be compensated if there is damage.</p>
                    </div>
                </div></div>

            <div className="trust">
                <h1>Trust is very important for <span>beeanter</span>. The core features we have  </h1>
                <p>Ensure facilities we provide to maintain the feasability of shipping to keep it safe and fast</p>
                <div className="numbers">
                    <div className="numberone">
                        <h1>15M<span>+</span></h1>
                        <p>Most Users</p>
                    </div>
                    <div className="numberone">
                        <h1>100<span>+</span></h1>
                        <p>Delivery Car</p>
                    </div>
                    <div className="numberone">
                        <h1>20<span>+</span></h1>
                        <p>Intercity Cars</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default BodyOne;