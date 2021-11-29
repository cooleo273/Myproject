import  react  from "react";
import BodyFour from "../../components/body/bodyfour";
import BodyOne from "../../components/body/bodyone";
import BodyThree from "../../components/body/bodythree";
import BodyTwo from "../../components/body/bodytwo";
import Header from "../../components/header";

const Home =()=> {
    return (
        <div>
            <Header/>
            <BodyOne/>
            <BodyTwo/>
            <BodyThree/>
            <BodyFour/>
        </div>
    )
}

export default Home