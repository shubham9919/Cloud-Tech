import React from "react";
import '../../components-style/ArticleParagraph.css'

function ArticleParagraph(properties) {

    const iframe = () => {
        return {
            __html: Buffer.from(properties.articlePara, "base64").toString("utf8")
        }
    }

    const directPage = () => {
        return {
            __html: properties.articlePara
        }
    }

    if (properties.isHtml) {
        return (
            <div dangerouslySetInnerHTML={directPage()}>

            </div>
        )
    } else {
        return (
            <React.Fragment>
                <head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Domine&family=Lobster&family=Pacifico&family=Playfair+Display:wght@400;500&family=Rubik:wght@400;500;700&display=swap" rel="stylesheet"></link>
                </head>
                <div className="para_content" dangerouslySetInnerHTML={iframe()}>
                </div>
            </React.Fragment>
        )
    }
}


export default ArticleParagraph



















// import React from "react";
// import '../../components-style/ArticleParagraph.css'
// import Paragraphtitle from "./ParagraphTitle";

// function ArticleParagraph(params) {

//     const iframe = () => {
//         return {
//             __html: Buffer.from(params.paraContent, "base64").toString("utf8")
//         }
//     }

//     const directPage = () => {
//         return {
//             __html: params.paraContent

//         }
//     }

//     if(!params.paraHeader){
//         return (
//             <div dangerouslySetInnerHTML={directPage()}>

//             </div>
//         )
//     } else {
//         return (
//             <React.Fragment>
//                 <div className="Component-Article-workspace">
//                     {/* <Paragraphtitle paraTitle={params.paraHeader}></Paragraphtitle> */}
//                     <div className="Component-Article-Paragraphs"  dangerouslySetInnerHTML={iframe()}>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

// export default ArticleParagraph