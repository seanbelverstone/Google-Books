import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import MainNav from "./components/Navbar";
import MainJumbotron from "./components/MainJumbotron";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import Book from "./components/Book";
import API from "./utils/API";
import "./App.css";

class App extends Component {

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

  saveBook = (key) => {
    console.log(key)
  }

  render() {
    return (
      <Router>
        <div>
          <MainNav>
            <Route exact path="/" />
            {/* <Route path="/saved" component={SavedBooks} /> */}
          </MainNav>
          <MainJumbotron />
          <SearchBar 
          search={this.state.search}
          onChange={this.handleChange}
          onClick={this.getSearch}/>
        </div>
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
                onClick={() => this.saveBook(book.id)}/>
            )
          })}
        </List>
          

      </Router>
    );
  }
}

export default App;
