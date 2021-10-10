import React from 'react'
import '../../components-style/ContentHeader.css'


function ContentHeader(properties) {
    console.log("arrdsdcr" + JSON.stringify(properties))

    return (

        <React.Fragment>            
                <div className="Component-ContentHeader-logo">
                    {/* <Logo logo={properties.logo}></Logo> */}
                    <h3>{properties.title}</h3>
                </div>  
        </React.Fragment>
    );
}

export default ContentHeader




// <main>
// <div className="Component-ContentHeader-logo">
//     <Logo logo={"lambda-logo.jpg"}></Logo>
// </div>
// <div className="Component-ContentHeader-Header">
//     <h3>{properties.props}</h3>
// </div>
// </main>