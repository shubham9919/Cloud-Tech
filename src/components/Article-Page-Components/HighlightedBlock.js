import React from "react";
import '../../components-style/HighlightedBlock.css'
import Paragraphtitle from "./ParagraphTitle";


/**
 *
 * @description Component to highlight a paragraph.
 * @deprecated
 * @param {*} params
 * @return {*} 
 */
function HighlightedBlock(params) {

    const iframe = () => {
        return {
            __html: Buffer.from(params.paraContent, "base64").toString("utf8")
        }
    }
    return (
        <React.Fragment>
            <div className="Component-HighlightedBlock-boxshadow">
                <Paragraphtitle paraTitle={params.paraHeader} isHighlighted={true}></Paragraphtitle>
                <div className="Component-Article-Paragraphs" dangerouslySetInnerHTML={iframe()}>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HighlightedBlock