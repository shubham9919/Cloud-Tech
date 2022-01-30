import React from "react";
import '../../components-style/LoginPage.css'
import Header from '../Header/Header.js'
import LoginBox from "./LoginBox";
import HamburgerHeader from '../Hamburger-Header/HamburgerHeader.js'
import Footer from "../Footer/Footer";

require('dotenv').config();

const setLogin = () => {
    window.open(process.env.REACT_APP_OAUTH_URL, "_self")
}

function LoginPage() {
    return (
        <React.Fragment>
            <HamburgerHeader></HamburgerHeader>
            <Header></Header>
            <div className="loginBoxComponent">
                <LoginBox></LoginBox>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default LoginPage