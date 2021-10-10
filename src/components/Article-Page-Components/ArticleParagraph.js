import React from "react";
import '../../components-style/ArticleParagraph.css'
import Paragraphtitle from "./ParagraphTitle";

function ArticleParagraph(params) {

    const iframe = () => {
        return {
            __html: Buffer.from(params.paraContent, "base64").toString("utf8")
        }
    }

    const directPage = () => {
        return {
            __html: params.paraContent

        }
    }

    if(params.isHtml){
        return (
            <div dangerouslySetInnerHTML={directPage()}>

            </div>
        )
    } else {
        return (
            <React.Fragment>
                <div className="Component-Article-workspace">
                    {/* <Paragraphtitle paraTitle={params.paraHeader}></Paragraphtitle> */}
                    <div className="Component-Article-Paragraphs"  dangerouslySetInnerHTML={iframe()}>
                    </div>
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