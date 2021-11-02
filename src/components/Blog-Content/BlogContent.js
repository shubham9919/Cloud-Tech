import React from "react";
import ContentHeader from "../Article-Page-Components/ContentHeader";
import Header from "../Header/Header";
import HeroImageForArticle from "../Article-Page-Components/HeroImageForArticle";
import ArticleParagraph from "../Article-Page-Components/ArticleParagraph";
import HighlightedBlock from "../Article-Page-Components/HighlightedBlock";
import ArticleCredits from "../Article-Page-Components/ArticleCredits";
import AricleImage from "../Article-Page-Components/ArticleImages";
import SearchBar from "../Search-Bar/SearchBar";
import CodeBlock from "../Article-Page-Components/CodeBlock";
import Paragraphtitle from "../Article-Page-Components/ParagraphTitle";

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
            <Header></Header>
            <ArticleParagraph paraContent={componentProps.properties.data} isHtml={true}></ArticleParagraph>
            </React.Fragment>
        )
    } else {
        console.log("componentInputs --->"+JSON.stringify(componentInputs))
        const componentKeys = Object.keys(componentInputs)
        console.log("componentKeys -->"+componentKeys)
        let ComponentArray = []
        let flag = true
        for (const key in componentKeys) {
            console.log("key --> "+componentKeys[key])
            let LowKey = componentKeys[key].toLowerCase()
            console.log("LowKey -->"+LowKey)
            if(LowKey.includes("highlighted_para_content") && flag){
                flag = false
                ComponentArray.push(<HighlightedBlock key={key} paraHeader={componentInputs[componentKeys[componentKeys.findIndex(element => element.toLowerCase().includes("highlighted_para_header"))]]} paraContent={componentInputs[componentKeys[key]]} ></HighlightedBlock>)
            }
            else if(LowKey.includes("para_header") && !LowKey.includes("highlighted")){
                ComponentArray.push(<Paragraphtitle key={key} paraTitle={componentInputs[componentKeys[key]]}></Paragraphtitle>)
            } 
            else if(LowKey.includes("para_content") && !LowKey.includes("highlighted")){
                ComponentArray.push(<ArticleParagraph key={key} paraContent={componentInputs[componentKeys[key]]}></ArticleParagraph>)
            } 
            else if(LowKey.includes("auther")){
                ComponentArray.push(<ArticleCredits key={key} Auther={componentInputs[componentKeys[key]]}></ArticleCredits>)
            }
            else if(LowKey.includes("title")){
                ComponentArray.push(<ContentHeader key={key} title={componentInputs[componentKeys[key]]}></ContentHeader>)
            }
            else if(LowKey.includes("content_hero")) {
                ComponentArray.push(<HeroImageForArticle key={key} image={componentInputs[componentKeys[key]]} courtesy={componentInputs.Hero_Pic_Courtesy} courtesyDomain={componentInputs.hero_pic_courtesy_domain} logo={componentInputs.logo}></HeroImageForArticle>)
            }
            else if(LowKey.includes("codeblock")){
                ComponentArray.push(<CodeBlock key={key} codeblock={componentInputs[componentKeys[key]]}></CodeBlock>)
             } 
            else if(LowKey.includes("aricle_image")) {
                ComponentArray.push(<AricleImage key={key} articleImage={componentInputs[componentKeys[key]]}></AricleImage>)
            }
        }

        return (
            <React.Fragment>
                <Header></Header>
                {ComponentArray}
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