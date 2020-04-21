import React, { Component } from "react";
import List from "../components/List";
import Book from "../components/Book";
import API from "../utils/API";

class SavedBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
        this.removeBook = this.removeBook.bind(this);
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

    removeBook(event) {
        console.log(`So, you'd like to remove the book ${event.target.id}?`);
    }

    render() {
        return(
            <div className="bookDisplay">
                <List>
                    {this.state.savedBooks.map(book => (
                        <Book
                            key={book._id}
                            title={book.title}
                            image={book.image}
                            author={book.authors}
                            synopsis={book.description}
                            purchaseLink={book.link}
                            onClick={this.removeBook} />
                    ))}
                </List>
            </div>
        )
    }
}

export default SavedBooks;