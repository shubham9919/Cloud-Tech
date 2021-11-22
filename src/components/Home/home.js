import React from "react";
import Header from "../Header/Header";
import LandPage from "../Land-Page/LandPage";
import '../../components-style/normalize.css'
import Footer from "../Footer/Footer";

function Home() {
    return (
        <React.Fragment>
            <Header></Header>
            <LandPage></LandPage>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Home