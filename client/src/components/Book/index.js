import React from "react";

const Book = (props) => {
    return(
        <div>
            <i className="material-icons">favorite</i>
            {/* Title */}
            <li>{props.title}</li>
            {/* Thumbnail image */}
            <li><img src={props.img} alt={props.alt} /></li>
            {/* Author */}
            <li>{props.author}</li>
            {/* Synopsis */}
            <li>{props.synopsis}</li>
        </div>

    )
}

export default Book;