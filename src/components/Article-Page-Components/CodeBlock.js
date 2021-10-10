import React from "react";
import '../../components-style/CodeBlock.css'

function CodeBlock(params) {
    const base64Decoder = () => {
        return Buffer.from(params.codeblock, "base64").toString("utf8")
    }
    // console.log(base64Decoder())
    // let text = base64Decoder()
    // console.log("params--->" + JSON.stringify(params))
    return (
        <React.Fragment>
            <div className="Component-CodeBlock-main">
                <pre>
                    {base64Decoder()}
                </pre>
            </div>
        </React.Fragment>
    )
}

export default CodeBlock