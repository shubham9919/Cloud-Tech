import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import LandPage from "../Land-Page/LandPage";
import '../../components-style/normalize.css'
import Footer from "../Footer/Footer";
import axios from "axios";
import HamburgerHeader from "../Hamburger-Header/HamburgerHeader";
import HomePageCover from "../HomePageCover/HomePageCover.js";


function Home(props) {
    // console.log(props)
    if(props && props.location && props.location.search){
        let tokens = props.location.search.split('&')
        // console.log(tokens[0].split('=')[1], tokens[1].split('=')[1])
        sessionStorage.setItem('OAuthToken', tokens[0].split('=')[1])
        sessionStorage.setItem('OAuthRefreshToken', tokens[1].split('=')[1])
    }

    return (
        <React.Fragment>
          <HamburgerHeader></HamburgerHeader>
          <Header></Header>
          <HomePageCover></HomePageCover>
          <LandPage></LandPage>
          <Footer></Footer>
            {/*
            <LandPage></LandPage>
            <Footer></Footer> */}
        </React.Fragment>
    );
}

export default Home