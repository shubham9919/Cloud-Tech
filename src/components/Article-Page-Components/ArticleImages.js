import React from "react";
import Axios from 'axios';
import { useState, useEffect } from "react";
import '../../components-style/AricleImage.css';


function AricleImage(params) {
    return (
        <React.Fragment>
            <div className="Component-AricleImage-container">
            <div className="Component-AricleImage-Image" id="articleImg">
                <img src={params.articleImage} alt={params.articleImage || ""}></img>
            </div>
            <div className="Component-AricleImage-picCourtesy">
               {params.courtesy? <a href={params.courtesy || "" } style={{ textDecoration: "none" }} target="_blank" >Pic Courtesy:{params.courtesyDomain || ""}</a>: null}
            </div>
            </div>
        </React.Fragment>
    )

}

export default AricleImage