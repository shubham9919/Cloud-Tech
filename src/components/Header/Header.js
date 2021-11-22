import React from 'react'
import '../../components-style/Header.css'
import SearchBar from '../Search-Bar/SearchBar';
import HeaderLogo from '../Header-Logo/HeaderLogo';
import SiteName from '../Site-Name/SiteName.js';


function Header() {
    return (
        <React.Fragment>
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap" rel="stylesheet"/>
            </head>
            <div className="background">
                <div className="Header">
                    <ul>
                        <a href="/"><li className="btn clrbtn" >Home</li></a>
                        <a href="/aboutus"><li className="btn" >About Me</li></a>
                    </ul>
                </div>

                <div className="intro-text">
                    <p style={{fontFamily:"Playfair Display, serif"}}>
                        If someone asks me what cloud computing is, I try not to get bogged down with definitions. I tell them that, simply put, cloud computing is a better way to run your business.
                    </p>
                    <cite>Marc Benioff, Founder, CEO and Chairman, Salesforce</cite>
                </div>
                <SearchBar></SearchBar>

            </div>
        </React.Fragment>
    );
}

export default Header