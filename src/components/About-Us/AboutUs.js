import React from 'react'
import { useCallback, useState } from 'react';
import '../../components-style/AboutUs.css';
import '../../components-style/Grid.css'
import '../../components-style/normalize.css'
import ContactHandles from '../About-Us/ContactHandles'


function AboutUs() {

    const [isTextChanged, setIsTextChanged] = useState(null);

    let LoadDiv = ()=> {
        setIsTextChanged("bye")
    }


    return (
        <React.Fragment>
            <div className="Component-AboutUs-main">    
            <div className="Component-AboutUs-header">
                <h2><span class="tapered2">About Me</span></h2>
            </div>
            <div className="Component-AboutUs-flex-container">
                <div className="Component-AboutUs-pic">
                <div className ="Component-AboutUs-pseudo"></div>
                <img src="/logo/Shubham-Pic.JPG" alt="Lou" />
                </div>
                <div className="Component-AboutUs-ContactInfo">
                    <h4>Hi There!</h4>
                    <p>I am Shubham, A software developer and cloud enthusiast. I started working on this website to get my hands dirty with React JS and Router. I write about my experience and my own implementation experiments on various cloud services. Feel free to advice and connect with me on below details.</p>
                </div>


            </div>
            <div className="Component-AboutUs-ContactInfo-contacts">
                <button className="Component-AboutUs-ContactInfo-button" onClick={LoadDiv}>Contact Infomation</button>
                {isTextChanged ==="bye"? <ContactHandles></ContactHandles>: null}
                </div>

            </div>


        </React.Fragment>
    );
}

export default AboutUs






















{/*             <header className="component-AboutUs">
<div class='intro'>
                    <h1>Thanks for visiting&excl;</h1>
                    <div class="row">
                    </div>
                </div>
                <section class='section-grid clearfix'>
                    <div class="row">
                        <div class='col span-1-of-2 grid'>
                            <h2>About us</h2>
                            <p>Thanks for showing interest in this content. <br /> I am a software engineer and working on this
                                project out of my personal hobby. <br />Particularly I read about the history and social and
                                political structure and evolution of India in future scope I will be adding some more
                                categories. <br /> Feel free to connect with us. Also I can add some more categories if someone
                                has content and want to share that with others.</p>
                            <h6>&nbsp;</h6>
                        </div>
                        <div class='col span-1-of-2 grid'>
                            <h2>Contact Details and format</h2>
                            <ul>
                                <li>Email &dash; shubhamchavan4554@gmail.com</li>
                                <h3> Format to share content with us &dash;</h3>
                                <li>Name</li>
                                <li>Current position (working/student)</li>
                                <li>Heading for content</li>
                                <li>Content</li>
                                <li>&nbsp;</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </header> */}