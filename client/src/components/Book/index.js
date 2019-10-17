import React from "react";

export function Book ({
    title,
    image,
    author,
    synopsis,
    purchaseLink
  }) {
    return(
        <div>
            <i className="material-icons">favorite</i>
            {/* Title */}
            <li>{title}</li>
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