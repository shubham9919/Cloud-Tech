import React from "react"
import "../../components-style/Footer.css"

function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="onpage-link-outs">
                    <a className="a-tags" href="/aboutus"><li>About Us</li></a>
                    <a className="a-tags" href="/"><li>Home</li></a>
                </div>
                <div className="copyright-text">
                    <p>copyright &copy; 2021 by Cloud-Tech. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer