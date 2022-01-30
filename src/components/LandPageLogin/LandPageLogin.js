import React from 'react'
import LoginBox from '../Login/LoginBox'
import '../../components-style/LandPageLogin.css'

function LandPageLogin() {
    return (
        <React.Fragment>
            <div className='LandPageLoginBox'>
                <div className='LandPageLoginDesc'>
                    <p
                        style={{
                            fontSize: "3rem",
                            color: "red"
                        }}
                    >Log in!</p><br></br>
                    <p
                        style={{
                            fontSize: "3rem",
                            color: "black"
                        }}
                    >Get The Access to some<br></br>of the premium articles on</p>
                    <p
                        style={{
                            fontSize: "3rem",
                            color: "orange"
                        }}
                    >CloudSage.</p>
                </div>
                <div className='LandPageLoginLogin'>
                    <LoginBox></LoginBox>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LandPageLogin