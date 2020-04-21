import React, { Component } from "react";
import List from "../components/List";
import Book from "../components/Book";
import RemoveModal from "../components/RemoveModal";
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

                    {this.state.savedBooks.map(book => (
                        <Book
                            key={book._id}
                            icon={<RemoveModal 
                                deleteTitle={book.title}
                                deleteAuthor={book.authors}
                                bookDeleteId={book._id}/>}
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