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
import ReactGA from "react-ga"
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";


/**
 *
 * @description Wrapper component for land page.
 * @param {*} props
 * @return {*} 
 */


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

    if (fromPage == lastPageRedirect && redirectToLastPage !== "true") {
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

    useEffect(() => {
        ReactGA.initialize(process.env.REACT_APP_GOOOGLE_ANALYTICS_MEASUREMENT_ID)
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    if (redirectToLastPageFlag) {
        sessionStorage.removeItem('lastPage')
        sessionStorage.removeItem('redirectToLastPage')
        return <Redirect to={lastPageRedirect}></Redirect>
    } else {
        return (

            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home - blindoncloud.com</title>
                    <link rel="canonical" href="https://www.blindoncloud.com/" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Home - blindoncloud.com" />
                    <meta property="og:description" content="The BlindOnCloud talks about practical implementation and integration of various cloud services with real world problems." />
                    <meta property="og:url" content="https://blindoncloud.com/" />
                    <meta property="og:site_name" content="blindoncloud.com" />
                    <meta
                        name="description"
                        content="The BlindOnCloud talks about practical implementation and integration of various cloud services of AWS with real world problems."
                    />
                </Helmet>
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

export default withRouter(Home)