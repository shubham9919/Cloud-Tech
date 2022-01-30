import React, { useEffect } from "react";
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
    let lastPage = `/article/${sessionStorage.getItem('lastPage')}`
    let token = sessionStorage.getItem('OAuthToken') || null
    let redirectToLastPageFlag
    console.log(token)
    console.log(lastPage)
    if (token && lastPage) {
        redirectToLastPageFlag = true
    } else {
        redirectToLastPageFlag = false
    }
    console.log(redirectToLastPageFlag)
    if (props && props.location && props.location.search) {
        let tokens = props.location.search.split('&')
        sessionStorage.setItem('OAuthToken', tokens[0].split('=')[1])
        sessionStorage.setItem('OAuthRefreshToken', tokens[1].split('=')[1])
    }

    if (redirectToLastPageFlag) {
        return <Redirect to={lastPage}></Redirect>
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