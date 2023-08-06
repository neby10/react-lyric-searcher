import React from "react";

function SearchButton(props) {
    const { onClick } = props;

    return (
        <button 
            className="SearchButton"
            onClick={onClick}>
            Search Lyrics Button
        </button>
    )
}

export default SearchButton;