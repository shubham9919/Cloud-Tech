import React from "react";
import "../../components-style/SearchBar.css"

//https://www.mikedane.com/web-development/css/styling-search-bar/

function SearchBar() {
    return (
        <React.Fragment>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </head>
            <div className="navlist">
                <div className="search">
                    <form action="/search">
                        <input type="text"
                            placeholder=" Search Topic"
                            name="articleName" />
                        <button>
                            <i className="fa fa-search"
                                style={{ fontSize: "18px" }}>
                            </i>
                        </button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SearchBar