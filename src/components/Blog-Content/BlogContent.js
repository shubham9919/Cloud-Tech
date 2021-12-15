import React from "react";
import ContentHeader from "../Article-Page-Components/ContentHeader";
import Header from "../Header/Header";
import ArticleParagraph from "../Article-Page-Components/ArticleParagraph";
import ArticleCredits from "../Article-Page-Components/ArticleCredits";
import AricleImage from "../Article-Page-Components/ArticleImages";
// import SearchBar from "../Search-Bar/SearchBar";
import CodeBlock from "../Article-Page-Components/CodeBlock";
import ArticleHeader from "../Article-Page-Components/ArticleHeader";
import Footer from "../Footer/Footer";
import HamburgerHeader from "../Hamburger-Header/HamburgerHeader";
import { Redirect } from "react-router";
import "../../components-style/BlogContent.css"

/**
 * @todo PASS HIGHLIGHTED TEXT IN THE HIGHLIGHTED COMPONENT
 *
 * @param {*} componentProps
 * @return {*} 
 */
function BlogContent(componentProps) {
    // console.log("arrrrr" + componentProps.properties.data[0].Title)
    const componentInputs = componentProps.properties.data && componentProps.properties.data[0]
    let checker = componentProps.properties.data[0].title
    // console.log(componentInputs)

    if (checker == "undefined" || checker == undefined) {
        return (
            <React.Fragment>
                <ArticleHeader></ArticleHeader>
                <ArticleParagraph paraContent={componentProps.properties.data} isHtml={true}></ArticleParagraph>
                <Footer></Footer>
            </React.Fragment>
        )
    } else {
        // console.log("componentInputs --->" + JSON.stringify(componentInputs))
        const componentKeys = Object.keys(componentInputs)
        // console.log("componentKeys -->" + componentKeys)
        let ComponentArray = []
        let flag = true
        // console.log(localStorage.getItem('userToken'))
        console.log(componentInputs.isPremium)
        if(!componentInputs.isPremium || (componentInputs.isPremium && sessionStorage.getItem('userToken') && Object.keys(sessionStorage.getItem('userToken').length > 0))){
            for (const key in componentKeys) {
                // console.log("key --> " + componentKeys[key])
                let LowKey = componentKeys[key].toLowerCase()
                // console.log("LowKey -->" + LowKey)
                if(LowKey.includes("title")){
                    ComponentArray.push(<ArticleHeader key={key} articleName={componentInputs[componentKeys[key]]}></ArticleHeader>)
                } else if(LowKey.includes("auther")){
                    ComponentArray.push(<ArticleCredits key={key} articleCredits={componentInputs[componentKeys[key]]}></ArticleCredits>)
                } else if(LowKey.includes("image")){
                    ComponentArray.push(<AricleImage key={key} articleImage={componentInputs[componentKeys[key]]}></AricleImage>)
                } else if(LowKey.includes("para_header")){
                    ComponentArray.push(<ContentHeader key={key} contentHeader={componentInputs[componentKeys[key]]}></ContentHeader>)
                } else if(LowKey.includes("para_content")){
                    ComponentArray.push(<ArticleParagraph key={key} articlePara={componentInputs[componentKeys[key]]}></ArticleParagraph>)
                } 
                else if(LowKey.includes("codeblock")){
                    ComponentArray.push(<CodeBlock key={key} codeBlock={componentInputs[componentKeys[key]]}></CodeBlock>)
                }
            }
        } else {
            return <Redirect to="/login"></Redirect>
        }

        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}

export default BlogContent





















// import React from "react";
// import ContentHeader from "../Article-Page-Components/ContentHeader";
// import Header from "../Header/Header";
// import HeroImageForArticle from "../Article-Page-Components/HeroImageForArticle";
// import ArticleParagraph from "../Article-Page-Components/ArticleParagraph";
// import HighlightedBlock from "../Article-Page-Components/HighlightedBlock";
// import ArticleCredits from "../Article-Page-Components/ArticleCredits";
// import AricleImage from "../Article-Page-Components/ArticleImages";
// import SearchBar from "../Search-Bar/SearchBar";
// import CodeBlock from "../Article-Page-Components/CodeBlock";

// /**
//  * @todo PASS HIGHLIGHTED TEXT IN THE HIGHLIGHTED COMPONENT
//  *
//  * @param {*} componentProps
//  * @return {*} 
//  */
// function BlogContent(componentProps) {
//     // console.log("arrrrr" + componentProps.properties.data[0].Title)
//     const componentInputs = componentProps.properties.data && componentProps.properties.data[0]
//     let checker = componentProps.properties.data[0].Title
//     // console.log(componentInputs)
//     if (checker == "undefined" || checker == undefined) {
//         return (
//             <React.Fragment>
//             <Header></Header>
//             <ArticleParagraph paraContent={componentProps.properties.data}></ArticleParagraph>
//             <CodeBlock></CodeBlock>
//             </React.Fragment>
//         )
//     } else {
//         return (
//             <React.Fragment>
//                 <Header></Header>
//                 <ContentHeader title={componentInputs.Title} logo={componentInputs.logo}></ContentHeader>
//                 <HeroImageForArticle image={componentInputs.content_hero_image} courtesy={componentInputs.Hero_Pic_Courtesy} courtesyDomain={componentInputs.Hero_Pic_Courtesy_domain} logo={componentInputs.logo}></HeroImageForArticle>
//                 {<ArticleParagraph paraHeader={componentInputs.Para_Header_1} paraContent={componentInputs.Para_Conetent_1}></ArticleParagraph>}
//                 {<HighlightedBlock paraHeader={componentInputs.Para_Header_2} paraContent={componentInputs.Para_Conetent_2} ></HighlightedBlock>}
//                 <AricleImage articleImage={componentInputs.aricle_image}></AricleImage>
//                 {componentInputs.Para_Header_3 ? <ArticleParagraph paraHeader={componentInputs.Para_Header_3} paraContent={componentInputs.Para_Conetent_3}></ArticleParagraph> : null}
//                 {componentInputs.Para_Header_4 ? <ArticleParagraph paraHeader={componentInputs.Para_Header_4} paraContent={componentInputs.Para_Conetent_4}></ArticleParagraph> : null}
//                 {componentInputs.Para_Header_5 ? <ArticleParagraph paraHeader={componentInputs.Para_Header_5} paraContent={componentInputs.Para_Conetent_5}></ArticleParagraph> : null}
//                 {componentInputs.Para_Header_6 ? <ArticleParagraph paraHeader={componentInputs.Para_Header_6} paraContent={componentInputs.Para_Conetent_6}></ArticleParagraph> : null}
//                 <ArticleCredits Auther={componentInputs.Auther}></ArticleCredits>
//                 <CodeBlock></CodeBlock>
//             </React.Fragment>
//         )
//     }
// }

// export default BlogContent