import React from "react";
import "./style.css";

export function Book ({
    title,
    icon,
    image,
    author,
    synopsis,
    purchaseLink,
    onClick
  }) {
    return(
        <div className="book">
            {/* Title */}
            <div className="title">{title}</div>        
            <i className="material-icons" id={title} onClick={onClick}>{icon}</i>
            {/* Thumbnail image */}
            <img className="image" src={image} alt={title + " image"}/>
            {/* Author */}
            <div className="author">{author}</div>
            {/* Synopsis */}
            <div className="synopsis">{synopsis}</div>
            {/* Purchase Link */}
            <a className="link" href={purchaseLink}>Purchase the book here</a>
        </div>

    )
}

export default Book;