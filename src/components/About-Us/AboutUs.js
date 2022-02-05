import React, {useEffect} from 'react'
import { withRouter } from "react-router-dom";
import { Helmet } from 'react-helmet'
import HamburgerHeader from '../Hamburger-Header/HamburgerHeader.js'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import ReactGA from "react-ga"
import '../../components-style/AboutUs.css';
import '../../components-style/Grid.css'
import '../../components-style/normalize.css'



function AboutUs() {
    useEffect(() => {
        ReactGA.initialize(process.env.REACT_APP_GOOOGLE_ANALYTICS_MEASUREMENT_ID)
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    return (
        <React.Fragment>
            <Helmet>
                <meta charset='utf-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <title>Page Title</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='stylesheet' type='text/css' media='screen' href='index.css' />

                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lobster&family=Playfair+Display:wght@400;500&family=Rubik:wght@400;700&display=swap"
                    rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                    integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
            
            </Helmet>
            <div className='aboutus-body'>
                <Header></Header>
                <HamburgerHeader></HamburgerHeader>
                <div className="about_me_starter">
                    <div className="my_image">
                        <img src="/shubham_pic.JPG" alt='shubham_pic.JPG' />
                    </div>
                    <div className="my_name">
                        <h3>Hello, I am Shubham Chavan. I am a cloud enthusiast trying my hands on various technologies and cloud
                            infrastructure.I am specifically interested in IoT and connected vehicles domain.</h3>
                    </div>
                </div>
                <div className="about_me_wrapper">
                    <div className="about_me_biref">
                        <h3>Professional Experience :- </h3>
                        <ul>
                            <li>➤ System Engineer / Backend Developer at Tata Consultancy Services Working for connected
                                vehicles program for one of the leading automobile company of the world.
                            </li>
                            <li>
                                ➤ Developed and deployed multiple REST APIs with AWS server less.
                            </li>
                            <li>
                                ➤ Developed modules to integrate APIs with AWS services like SQS, SNS and IoT etc.
                            </li>
                            <li>
                                ➤ Integrated various service delivery platforms with connected vehicles for telematics solutions.
                            </li>
                            <li>
                                ➤ Worked on database connection management using RDS read replica and RDS proxy to handle
                                spikes in database connectivity.
                            </li>
                            <li>
                                ➤ Worked on different Java applications and batches to move the factory data from manufacturing
                                plants to backend systems and cloud(Amazon RDS) databases.
                            </li>
                            <li>
                                ➤ Participated with stakeholders to conduct application level design and debugging sessions.
                            </li>
                            <li>
                                ➤  Implemented AWS ElastiCache to enhance latency issues of the websites, portals and mobile
                                applications and managed to decrease response time by almost 2 seconds.
                            </li>
                            <li>
                                ➤ Worked on entity-sync using IoT services for real time data ingestion to multiple platforms used by
                                same vehicle.
                            </li>
                        </ul>
                        <h3>Certificates :- </h3>
                        <ul>
                            <li>➤ AWS Certified Cloud Practitioner Issued by Amazon Web Services. </li>
                            <li>➤ AWS Certified Solutions Architect – Associate Issued by Amazon Web Services. </li>
                        </ul>
                        <h3>Experienced Technologies:- </h3>
                        <ul>
                            <li>➤ Amazon Web Services, Typescript, Node.js, Express.js, SQL, Java, Jenkins, Sonarqube, JIRA,
                                NoSQL, Python, AWS DynamoDB.</li>
                        </ul>
                        <h3>Known Technologies:-</h3>
                        <ul>
                            <li>➤ HTML, CSS, React JS, Amazon Alexa Custom Skill and Developer Console.</li>
                        </ul>
                        <h3>Experienced Tools and Platforms:-</h3>
                        <ul>
                            <li>➤ Splunk, DbVisualizer, Putty, GIT, Postman, Amazon EC2.</li>
                        </ul>
                        <h3>Achievements:-</h3>
                        <ul>
                            <li>➤ Multiple acknowledgments from Team Leads and Manager.</li>
                            {/* <li>➤ Overall rating of 5 out of 5 for each year. </li> */}
                            <li>➤ Special Achievement Award for outstanding contribution to the organisation. </li>
                            <li>➤ First in the State level competition organised by K J Somaiya College of Engineering.</li>
                        </ul>
                        <h3>Patents :-</h3>
                        <ul>
                            <li>➤ Patent application published for Efficient Sensor Based Library Assistant Robot.<br></br>
                                Application Number :- 202121051885&nbsp;A.</li>
                        </ul>
                        <h3>Education :-</h3>
                        <ul>
                            <li>➤ Bachelor of Engineering. <br></br>7.87 / 10 CGPA</li>
                        </ul>
                        <h3>Contact Details :-</h3>
                        <ul>
                            <li>➤ Email :- shubhamchavan4554@gmail.com. </li>
                            <li>➤ LinkedIn :- <a href="https://www.linkedin.com/in/shubham-chavan-ab6a86167"> Shubham Chavan</a></li>
                        </ul>
                    </div>
                </div>
                <Footer></Footer>
            </div>

        </React.Fragment>
    );
}

////<h2>Not Auth</h2>

export default withRouter(AboutUs) 


















