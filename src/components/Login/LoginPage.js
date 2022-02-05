import React, {useEffect} from "react";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga"
import Header from '../Header/Header.js'
import LoginBox from "./LoginBox";
import HamburgerHeader from '../Hamburger-Header/HamburgerHeader.js';
import '../../components-style/LoginPage.css';

require('dotenv').config();

/**
 *
 * @description Login Component.
 * @return {*} 
 */
function LoginPage() {
    useEffect(() => {
        ReactGA.initialize(process.env.REACT_APP_GOOOGLE_ANALYTICS_MEASUREMENT_ID)
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
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