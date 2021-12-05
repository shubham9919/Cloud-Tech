import React from "react";
import '../../components-style/LoginPage.css'
import axios from "axios";  
import ArticleHeader from "../Article-Page-Components/ArticleHeader";
require('dotenv').config();

const setLogin = () => {
    window.open(process.env.REACT_APP_OAUTH_URL,"_self")
    // axios.get(`http://localhost:5000/auth/google`).then((response) => {
    //     console.log(response)
    // })
}

function LoginPage() {
    return (
        <React.Fragment>
                <body>
                <ArticleHeader></ArticleHeader>
        <div className="LoginPage">
        <div className = "LoginPage-model" id="LoginPage-model">
            <div className="LoginPage-model-header">
                <div className="LoginPage-title">Login</div>
                <a href="/" className="LoginPage-close-button">&times;</a>
            </div>
            <div className="model-body">
                <a><img className="LoginPage-img"  onClick={setLogin} src="https://www.avrutti.com/images/google.png" alt=""></img></a>  
            </div>
        </div>
        <div id="overlay"></div>
        </div>

    </body>

        </React.Fragment>
    )
}

export default LoginPage