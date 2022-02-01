import React from 'react'
import '../../components-style/HomePageCover.css'



/**
 *
 * @description Land page quote component.
 * @return {*} 
 */
function HomePageCover() {
    return (
        <React.Fragment>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap" rel="stylesheet" />
            </head>
            <body className='component-homepage-cover-body'>
                <div className='component-homepage-cover-backgoud'>
                    <div className="component-homepage-cover-intro-text">
                        <p style={{ fontFamily: "Playfair Display, serif" }}>
                            If someone asks me what cloud computing is, I try not to get bogged down with definitions. I tell them that, simply put, cloud computing is a better way to run your business.
                        </p>
                        <cite>Marc Benioff, Founder, CEO and Chairman, Salesforce</cite>
                    </div>
                </div>
                <div className='blogPosts'>
                    <h2>Blog Posts</h2>
                </div>
            </body>
        </React.Fragment>
    )
}

export default HomePageCover