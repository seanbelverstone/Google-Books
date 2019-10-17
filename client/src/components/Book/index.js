import React from "react";

export function Book ({
    title,
    image,
    author,
    synopsis,
    purchaseLink,
    onClick
  }) {
    return(
        <div>
            {/* Title */}
            <li>{title}</li>        
            <i className="material-icons" onClick={onClick}>favorite</i>
            {/* Thumbnail image */}
            <img src={image} alt={title + " image"}/>
            {/* Author */}
            <li>{author}</li>
            {/* Synopsis */}
            <li>{synopsis}</li>
            {/* Purchase Link */}
            <a href={purchaseLink}>Purchase the book here</a>
        </div>

    )
}

export default Book;