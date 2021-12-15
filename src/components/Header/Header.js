import React, { useState } from 'react'
import '../../components-style/Header.css'

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
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
            </head>
            <body className='header-body'>
                <div className="component-header-main-header">
                    <div className="component-header-header-start">
                        <a href="/" id="component-header-search-icon"><i className="fas fa-binoculars fa-lg"></i></a>
                        <div className="component-header-header-options">
                            <ul>
                                {pathList}
                            </ul>
                        </div>
                    </div>
                </div>
            </body>
        </React.Fragment>
    );
}

export default Header