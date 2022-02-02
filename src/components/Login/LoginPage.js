import React, {useEffect} from "react";
import '../../components-style/LoginPage.css'
import Header from '../Header/Header.js'
import LoginBox from "./LoginBox";
import HamburgerHeader from '../Hamburger-Header/HamburgerHeader.js'
import Footer from "../Footer/Footer";
import ReactGA from "react-ga"
import { withRouter } from "react-router-dom";

require('dotenv').config();

ReactGA.initialize(process.env.REACT_APP_GOOOGLE_ANALYTICS_MEASUREMENT_ID)

const setLogin = () => {
    window.open(process.env.REACT_APP_OAUTH_URL, "_self")
}


/**
 *
 * @description Login Component.
 * @return {*} 
 */
function LoginPage() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    })
    return (
        <React.Fragment>
            <HamburgerHeader></HamburgerHeader>
            <Header></Header>
            <div className="loginBoxComponent">
                <LoginBox></LoginBox>
            </div>
        </React.Fragment>
    )
}

export default withRouter(LoginPage) 