import React from "react";
import '../../components-style/LoginPage.css'
require('dotenv').config();

const setLogin = () => {
    window.open(process.env.REACT_APP_OAUTH_URL, "_self")
}

function LoginBox() {
    return (
        <React.Fragment>
            <body>
                <div className="login-main-body">
                    <div className="loginBox">
                        <div className="Login">
                            <p>Login</p>
                        </div>
                        <div className="face" id="circle">
                            <img src="https://assets.codepen.io/11907/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1638394425&width=256"></img>
                            <p>
                                Welcome! Login With
                            </p>
                        </div>
                        <div className="socialIdentity">

                            <div className="loginProviderLogo">
                                <img src='data:image/png;base64,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'></img>
                            </div>
                            <div className="LoginProvider">
                                <a onClick={setLogin}>Login with Google</a>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </React.Fragment>
    )
}

export default LoginBox