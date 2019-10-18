import React, { Component } from "react";
import SearchBar from "../SearchBar";
import List from "../List";
import Book from "../Book";
import API from "../../utils/API";

class SearchPage extends Component {

  state = {
    search: "",
    bookResults: []
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState(
      {[name]: value}
    )
  }

  getSearch = (event) => {
    event.preventDefault();

    // Using utils, makes the axios call
    API.getSearch(this.state.search).then(results => {

      // Sets the state of bookResults to the API results
      this.setState(
        {bookResults: results.data.items});
    });
    this.setState(
      {search: ""});
  }

  saveBook = (book) => {
    let requestBody = {
      "bookId": book.id, 
      "title": book.volumeInfo.title, 
      "authors": book.volumeInfo.authors,
      "description": book.volumeInfo.description,
      "image": book.volumeInfo.imageLinks.thumbnail,
      "link": book.volumeInfo.canonicalVolumeLink
    }
    console.log(requestBody);

    API.saveBook(requestBody)
    .then(() => {
      console.log("Done")
    });
  }

  render() {
    return (
        <div>
            <SearchBar 
                search={this.state.search}
                onChange={this.handleChange}
                onClick={this.getSearch}/>
            <List>
                {this.state.bookResults.map(book => {
                return(
                    <Book 
                        key={book.id}
                        title={book.volumeInfo.title}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        author={book.volumeInfo.authors}
                        synopsis={book.volumeInfo.description}
                        purchaseLink={book.volumeInfo.canonicalVolumeLink}
                        onClick={() => this.saveBook(book)}/>
                    )
                })}
            </List>
        </div>
    );
  }
}

export default SearchPage;
