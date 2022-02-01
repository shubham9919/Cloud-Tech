import React, { useState } from "react";
import '../../components-style/HamburgerHeader.css'
import HeaderLogo from '../Header-Logo/HeaderLogo'


/**
 *
 * @description Component for HamburgerHeader (Mobile view only).
 * @return {*} 
 */
function HamburgerHeader() {
    const [isClicked, setClicked] = useState(false);
    return (
        <React.Fragment>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                    integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
            </head>
            <body className="component-hamburger-hamburger-header-body">
                <div className="component-hamburger-hamburger-menu">
                    <div className="component-hamburger-hamburger-menu-website-logo">
                        <HeaderLogo></HeaderLogo>
                    </div>
                    <div className={`component-hamburger-hamburger-menu-content`}>
                        <span className={`component-hamburger-hamburger-menu-symbol hm ${isClicked === true ? "component-hamburger-side-nav-visible" : ""}`} onClick={() => setClicked(true)}><i className="fas fa-bars fa-10x"></i></span>
                    </div>
                    <span id="outside"></span>
                    <div className={`component-hamburger-hamburger-menu-show hm ${isClicked === true ? "component-hamburger-side-nav-visible" : ""}`}>
                        <div className={`component-hamburger-close-button hm ${isClicked === true ? "component-hamburger-side-nav-visible" : ""}`}>
                            <span onClick={() => setClicked(false)}><i className="fas fa-times fa-5x"></i></span>
                        </div>
                        <div className="component-hamburger-hamburger-menu-opt">
                            <ul className={`hm ${isClicked === true ? "component-hamburger-side-nav-visible" : "hidden"}`}>
                                <li><a href="/"> Home </a></li>
                                <li><a href="/shubham-chavan"> About Me </a></li>
                                <li><a href="/login"> Sign In </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </body>
        </React.Fragment>
    )
}

export default HamburgerHeader