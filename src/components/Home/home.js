import React from "react";
import Header from "../Header/Header";
import LandPage from "../Land-Page/LandPage";
import '../../components-style/normalize.css'

function Home() {
    return (
        <React.Fragment>
            <Header></Header>
            <LandPage></LandPage>
        </React.Fragment>
    );
}

export default Home