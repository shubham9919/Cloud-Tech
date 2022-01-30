import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "../Header/Header";
import LandPage from "../Land-Page/LandPage";
import '../../components-style/normalize.css'
import Footer from "../Footer/Footer";
import HamburgerHeader from "../Hamburger-Header/HamburgerHeader";
import HomePageCover from "../HomePageCover/HomePageCover.js";
import PromotionsTiles from "../Promotions/PromotionTiles";
import LandPageLogin from "../LandPageLogin/LandPageLogin";
import { Redirect } from "react-router";

function Home(props) {
    if (props && props.location && props.location.search) {
        let tokens = props.location.search.split('&')
        sessionStorage.setItem('OAuthToken', tokens[0].split('=')[1])
        sessionStorage.setItem('OAuthRefreshToken', tokens[1].split('=')[1])
    }

    const history = useHistory();
    
    let fromPage = sessionStorage.getItem("fromPage")
    let redirectToLastPage = sessionStorage.getItem("redirectToLastPage")

    let lastPageValue = sessionStorage.getItem('lastPage') || null
    let lastPageRedirect = `/article/${lastPageValue}`

    if(fromPage == lastPageRedirect) {
        lastPageValue = null
        sessionStorage.removeItem("lastPage")
    }
    let token = sessionStorage.getItem('OAuthToken') || null
    let redirectToLastPageFlag

    if (token && lastPageValue && redirectToLastPage === "true") {
        redirectToLastPageFlag = true
    } else {
        redirectToLastPageFlag = false
    }

    if (redirectToLastPageFlag) {
        sessionStorage.removeItem('lastPage')
        sessionStorage.removeItem('redirectToLastPage')
        return <Redirect to={lastPageRedirect}></Redirect>
    } else {
        return (
            <React.Fragment>
                <HamburgerHeader></HamburgerHeader>
                <Header></Header>
                <HomePageCover></HomePageCover>
                <LandPage></LandPage>
                <LandPageLogin></LandPageLogin>
                <PromotionsTiles></PromotionsTiles>
                <Footer></Footer>
            </React.Fragment>
        );

    }

}

export default Home