import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ContentHeader from "../Article-Page-Components/ContentHeader";
import Header from "../Header/Header";
import ArticleParagraph from "../Article-Page-Components/ArticleParagraph";
import ArticleCredits from "../Article-Page-Components/ArticleCredits";
import AricleImage from "../Article-Page-Components/ArticleImages";
import CodeBlock from "../Article-Page-Components/CodeBlock";
import ArticleHeader from "../Article-Page-Components/ArticleHeader";
import Footer from "../Footer/Footer";
import HamburgerHeader from "../Hamburger-Header/HamburgerHeader";
import { Redirect } from "react-router";
import axios from "axios";
import "../../components-style/BlogContent.css"
import { Helmet } from "react-helmet";
require('dotenv').config();


/**
 * @todo PASS HIGHLIGHTED TEXT IN THE HIGHLIGHTED COMPONENT
 *
 * @param {*} componentProps
 * @return {*} 
 */
function BlogContent(componentProps) {

    const [isDataFetched, dataFetchedupdate] = useState(null)

    useEffect(async () => {
        if (sessionStorage.getItem('OAuthToken') && Object.keys(sessionStorage.getItem('OAuthToken').length > 0)) {
            let apiRes = await callApi()
            if (apiRes.data == "user found") {
                dataFetchedupdate(true)
            } else {
                dataFetchedupdate(false)
            }
        } else {
            dataFetchedupdate(false)
        }
    }, [])

    const componentInputs = componentProps.properties.data && componentProps.properties.data[0]
    let checker = componentProps.properties.data[0].title

    const history = useHistory();


    if (checker == "undefined" || checker == undefined) {
        return (
            <React.Fragment>
                <ArticleHeader></ArticleHeader>
                <ArticleParagraph paraContent={componentProps.properties.data} isHtml={true}></ArticleParagraph>
                <Footer></Footer>
            </React.Fragment>
        )
    } else {
        const componentKeys = Object.keys(componentInputs)
        let ComponentArray = []
        if (!componentInputs.isPremium || isDataFetched) {
            for (const key in componentKeys) {
                let lowKey = componentKeys[key].toLowerCase()
                if (lowKey.includes("title")) {
                    ComponentArray.push(<ArticleHeader key={key} articleName={componentInputs[componentKeys[key]]}></ArticleHeader>)
                } else if (lowKey.includes("auther")) {
                    ComponentArray.push(<ArticleCredits key={key} articleCredits={componentInputs[componentKeys[key]]}></ArticleCredits>)
                } else if (lowKey.includes("image")) {
                    ComponentArray.push(<AricleImage key={key} articleImage={componentInputs[componentKeys[key]]}></AricleImage>)
                } else if (lowKey.includes("para_header")) {
                    ComponentArray.push(<ContentHeader key={key} contentHeader={componentInputs[componentKeys[key]]}></ContentHeader>)
                } else if (lowKey.includes("para_content")) {
                    ComponentArray.push(<ArticleParagraph key={key} articlePara={componentInputs[componentKeys[key]]}></ArticleParagraph>)
                } else if (lowKey.includes("codeblock")) {
                    ComponentArray.push(<CodeBlock key={key} codeBlock={componentInputs[componentKeys[key]]}></CodeBlock>)
                }
            }
        } else {
            if (isDataFetched == null || isDataFetched == true) {
                setInterval(() => {
                    sessionStorage.setItem('redirectToLastPage', "true")
                    return <Redirect to="/login"></Redirect>
                }, 20000);
            } else {
                sessionStorage.setItem('redirectToLastPage', "true")
                return <Redirect to="/login"></Redirect>
            }
        }
        return (
            <React.Fragment>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{componentInputs.title}</title>
                    <link rel="canonical" href={`http://blindoncloud.com${history.location.pathname}`} />
                    <meta name="description" content={componentInputs.description} />
                    <meta name="keywords" content={componentInputs.keyWords} />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:title" content={componentInputs.title} />
                    <meta property="og:description" content={componentInputs.description} />
                    <meta property="og:url" content={`http://blindoncloud.com${history.location.pathname}`} />
                    <meta property="og:site_name" content="blindoncloud.com" />
                    {/* <meta property="og:image:secure_url" content="https://codelikedude.com/wp-content/uploads/2021/07/ternary-operator-min-1_11zon.jpg" />
                    <meta property="og:image:width" content="640" />
                    <meta property="og:image:height" content="360" />
                    <meta property="og:image:alt" content="Ternary Operator in Java – An If Else Alternative" />
                    <meta property="og:image:type" content="image/jpeg"></meta> */}
                </Helmet>

                {/* <ArticleHeader></ArticleHeader> */}
                <Header></Header>
                <HamburgerHeader></HamburgerHeader>
                <div className="article_wrapper">
                    <div className="article">
                        {ComponentArray}
                    </div>
                    <div className="new_feeds">
                    </div>
                </div>
                <Footer></Footer>
                {sessionStorage.setItem("fromPage", history.location.pathname)}
            </React.Fragment>
        )
    }
}

/**
 * 
 * @description This function will call the auth server to validate JWT token
 * @return {*} 
 * 
 */
async function callApi() {
    try {
        const AuthStr = 'Bearer '.concat(sessionStorage.getItem('OAuthToken'));
        let res = await axios.get(process.env.REACT_APP_IS_LOGGEDIN, {
            headers: {
                Authorization: AuthStr
            },
            withCredentials: true,
        })
        return res
    } catch (error) {
        return error
    }
}

export default BlogContent

