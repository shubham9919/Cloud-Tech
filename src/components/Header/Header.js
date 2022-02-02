import React, { useState } from 'react'
import HeaderLogo from '../Header-Logo/HeaderLogo.js'
import Loading from '../Loading/Loading.js'
import '../../components-style/Header.css'




/**
 *
 * @description Component for Header of website
 * @return {*} 
 */

 function myPOC(){
    return <Loading></Loading>
 }
function Header() {
    const [isHover, setHover] = useState(-1)
    const paths = ["/", "/shubham-chavan", "/login"]
    let routes = ["Blogs", "AboutMe", "Sign Up"]
    const pathList = paths.map((path, index) => <li> <a
        className={`${path == isHover || index === 2 ? "active" : ""}`}
        onMouseEnter={() => setHover(path)}
        onMouseLeave={() => setHover(-1)}
        key={path} href={path}>
        {routes[index]}
    </a> </li>)
    return (
        <React.Fragment>
            <div className='header-body'>
                <div className="component-header-main-header">

                    <div className="component-header-header-start">
                        <HeaderLogo></HeaderLogo>

                        <div className="component-header-header-options">
                            <ul>
                                {pathList}
                                <a 
                                onClick={myPOC()}
                                href="/" id="component-header-search-icon"><i className="fas fa-binoculars fa-lg"></i></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header