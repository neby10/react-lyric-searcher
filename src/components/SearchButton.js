import React from "react";

function SearchButton(props) {
    const { onClick } = props;

    return (
        <button 
            className="SearchButton"
            onClick={onClick}>
            Get Tracks!
        </button>
    )
}

export default SearchButton;