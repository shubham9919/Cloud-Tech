import React from "react";
import '../../components-style/Paragraphtitle.css'

function Paragraphtitle(params) {
    const highlighted = () => {
        if (!params.isHighlighted) {
            return <h3 className="Component-Paragraphtitle-heading">{params.paraTitle}</h3>
        } else {
            return <h3 className="Component-Paragraphtitle-heading" style={{ margin: 0 }}>{params.paraTitle}</h3>
        }
    }

    return (
        <React.Fragment>
            {highlighted()}
        </React.Fragment>
    )
}

export default Paragraphtitle