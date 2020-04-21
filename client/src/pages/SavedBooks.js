import React, { Component } from "react";
import List from "../components/List";
import Book from "../components/Book";
import API from "../utils/API";

class SavedBooks extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
        .then(res => 
            this.setState({savedBooks: res.data})
            )
            .catch(err => console.log(err));
    }

    render() {
        return(
            <div className="bookDisplay">
                <List>
                    {this.state.savedBooks.map(savedBooks => (
                        <Book
                            key={savedBooks.id}
                            title={savedBooks.volumeInfo.title}
                            image={savedBooks.volumeInfo.imageLinks.thumbnail}
                            author={savedBooks.volumeInfo.authors}
                            synopsis={savedBooks.volumeInfo.description}
                            purchaseLink={savedBooks.volumeInfo.canonicalVolumeLink} />
                    ))}
                </List>
            </div>
        )
    }
}

export default SavedBooks;