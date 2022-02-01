import React from "react";
import "../../components-style/SearchBar.css"

//https://www.mikedane.com/web-development/css/styling-search-bar/


/**
 *
 *
 * @return {*} 
 */
function SearchBar() {
    return (
        <React.Fragment>
            <div className="search-topic">
                <form action="/search">
                    <label for="fname" class="search-field"></label>
                    <input type="text" id="fname" name="articleName" className="search-field" placeholder="Read About"></input>
                    <button className="btn clrbtn bor">Start reading!</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default SearchBar