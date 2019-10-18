import React, { Component } from "react";
import List from "../List";
import Book from "../Book";
import API from "../../utils/API";

class SavedBooks extends Component {

    state = {
        books: []
    }

    componentDidMount() {
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
                    {this.state.books.map(book => (
                        <Book
                            key={book.id}
                            title={book.volumeInfo.title}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            author={book.volumeInfo.authors}
                            synopsis={book.volumeInfo.description}
                            purchaseLink={book.volumeInfo.canonicalVolumeLink} />
                    ))}
                </List>
            </div>
        )
    }
}

export default SavedBooks;