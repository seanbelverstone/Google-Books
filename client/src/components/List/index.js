import React from "react";
import Book from "../Book";

const List = () => {
    return(
        <div>
            <ul>
                <Book 
                /* Write in the map for the books here, within the Book component. Like, <Book {code} /> */>
                    <p>Books go here mate</p>
                </Book>
            </ul>
        </div>
    )
}

export default List;