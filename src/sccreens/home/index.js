import  react  from "react";
import BodyFive from "../../components/body/bodyfive";
import BodyFour from "../../components/body/bodyfour";
import BodyOne from "../../components/body/bodyone";
import BodyThree from "../../components/body/bodythree";
import BodyTwo from "../../components/body/bodytwo";
import Bottom from "../../components/Bottom";
import Header from "../../components/header";

const Home =()=> {
    return (
        <div>
            <Header/>
            <BodyOne/>
            <BodyTwo/>
            <BodyThree/>
            <BodyFour/>
            <BodyFive/>
            <Bottom/>
        </div>
    )
}

export default Home