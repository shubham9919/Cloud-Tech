import React from "react";
import '../../components-style/CodeBlock.css'

function CodeBlock(properties) {
    const base64Decoder = () => {
        return Buffer.from(properties.codeBlock, "base64").toString("utf8")
    }

    return (
        <React.Fragment>
            <body className="codeblock_component_body">
                <div className="Component-CodeBlock-main">
                    <pre>
                        {base64Decoder()}
                    </pre>
                </div>
            </body>

        </React.Fragment>
    )
}

export default CodeBlock