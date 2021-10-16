import React from 'react'
import '../../components-style/Header.css'
import SearchBar from '../Search-Bar/SearchBar';
import HeaderLogo from '../Header-Logo/HeaderLogo';
import SiteName from '../Site-Name/SiteName.js';


function Header() {
    return (
        <React.Fragment>
            <header>
                <nav>
                    <div class="Component-Header-flex-row">
                    <div className="Component-Header-main-searchbar">
                            <SearchBar></SearchBar>
                        </div>
                        <div className = "Component-Header-main-siteName">
                            <SiteName></SiteName>
                        </div>
                        <ul class="Component-Header-main-nav">
                            <li>
                                <a href="/aboutUs">contact us</a>
                            </li>
                            <li>
                                <a href="/" className="Component-Header-main-nav-home">Home</a>
                            </li>
                        </ul>


                    </div>

                </nav>
            </header>
        </React.Fragment>
    );
}

export default Header